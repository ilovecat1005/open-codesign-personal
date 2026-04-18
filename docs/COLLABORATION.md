# Collaboration & Development Workflow

How we work on open-codesign, together with humans and AI agents.

## Branching model

`main` is always shippable. We never merge anything red. Branches off `main` follow this naming:

- `feat/<slug>` — net-new user-visible capability
- `fix/<slug>` — bugfix
- `refactor/<slug>` — internal restructure, no user change
- `chore/<slug>` — tooling, deps, release plumbing
- `docs/<slug>` — documentation only
- `wt/<slug>` — agent-driven worktree branch (auto-deleted after merge)

Linear history only: rebase, never merge commits.

## Worktree workflow (parallel feature dev)

We do parallel work via `git worktree`, not concurrent edits in one checkout. Worktrees live under `.claude/worktrees/` (gitignored apart from the directory itself).

```bash
git worktree add -b wt/<slug> .claude/worktrees/<slug> main
cd .claude/worktrees/<slug>
pnpm install
# ...do work...
git push -u origin wt/<slug>
gh pr create --base main --head wt/<slug> --title "..."
# After merge:
git worktree remove .claude/worktrees/<slug>
git branch -D wt/<slug>
```

When dispatching multiple worktree agents in parallel, each agent prompt MUST include a "Files NOT to touch" section listing the files owned by sibling worktrees. This is the single most reliable way to avoid merge conflicts.

## How a feature ships

1. **Idea** — open a Discussion if exploratory, or an Issue if scoped.
2. **Research (if needed)** — add a row to `docs/RESEARCH_QUEUE.md`, write the report to `docs/research/NN-topic.md`, lock the decision back in the queue table.
3. **Plan** — for anything > 5 tool calls or > 3 files, write a plan in `.claude/workspace/<slug>/task_plan.md`. Reference the relevant research and PRINCIPLES sections.
4. **Tier 1 only** — implement the dumbest version that works (PRINCIPLES §5). If tier 1 needs > 2 days, scope is too big.
5. **Worktree branch** — `wt/<slug>` off main, push, open PR.
6. **Bot review** — Codex PR review fires automatically (`*open-codesign Bot*` signature). Treat its findings the same as a human reviewer.
7. **Human review** — at least one human approval before merge. CODEOWNERS auto-requests.
8. **Merge** — squash if PR is messy, rebase otherwise. CI green is mandatory.
9. **Cleanup** — remove the worktree, delete the branch (`git push origin -d wt/<slug>`).

## PR description requirements

Use the template (`.github/PULL_REQUEST_TEMPLATE.md`). Every PR must mark these green or explain:

- [ ] §5b Compatible: every public API / IPC / config key carries a version
- [ ] §5b Upgradeable: persistent data schema migration documented
- [ ] §5b No bloat: `du -sh release/` delta reported, prod-deps count noted
- [ ] §5b Elegant: UI uses tokens only, transitions use project easing, empty/loading/error states polished

For new prod dependencies, the PR body must include:
- Install size delta
- License (must be Apache-2.0 compatible)
- Why this and not alternatives
- Whether it could be a peer dep

## Codex bot review

Configured in `.github/workflows/codex-pr-review.yml` with `.github/prompts/codex-pr-review.md`. The bot:
- Runs on every PR open / synchronize
- Skips PRs labeled `bot-skip`
- Posts ONE review per head SHA; never duplicates
- Cites `path:line`, gives concrete fix snippets
- Severity-orders findings: Blocker / Major / Minor / Nit

If the bot is wrong, push a fix or comment back; do not silence it without justification.

## Issue triage

Bot auto-responds via `.github/workflows/issue-auto-response.yml` to filter spam and answer easy questions. Humans triage within 48h:
- `bug` + `needs-triage` → reproducible? assign owner + milestone
- `enhancement` + `needs-triage` → fits Vision? add to Roadmap or close with explanation
- `question` → migrate to Discussions if open-ended

Use `bot-skip` label to suppress bot on a specific issue.

## Communication channels

| Need | Where |
|---|---|
| Open-ended idea / "should we…" | GitHub Discussions |
| Concrete bug / scoped feature request | GitHub Issues |
| Code change | Pull Request |
| Architecture decision | Research report in `docs/research/` + Discussion |
| Real-time chat | Discord (link TBD; populate before public launch) |
| Security disclosure | GitHub Security Advisory (private) |

## Coding agent ground rules

When dispatching a Claude Code (or any AI) agent for implementation work:
1. Give it concrete files to create / modify and a "do not touch" list
2. Cite the relevant PRINCIPLES section + research report by path
3. Require it to run `pnpm install && pnpm -r typecheck && pnpm lint && pnpm -r test` and confirm green BEFORE pushing
4. Require DCO sign-off (`git commit -s`)
5. Cap scope at one PR; refuse drive-by refactors
6. Have it open the PR with the standard template; do not merge without human review

## Merge order conventions

When several worktrees land at once:
1. Lowest-coupling first (pure modules / new packages)
2. Backend before frontend that depends on it
3. i18n / UX shell before features that consume their tokens
4. Demo wiring last (it's the integration layer)

Conflicts almost always land in `apps/desktop/src/main/index.ts` (everyone adds an `register*Ipc()` call). Mitigate by adding new registration lines near a marker comment so each PR rebases cleanly.

## Optimization workflow (post-MVP)

Once we have real users we will run a quarterly optimization sprint:
- Bundle-size audit: `pnpm build:dir`, compare against budget, file an issue per > 1 MB delta
- Dep audit: `pnpm outdated`, `pnpm audit`, prune unused
- Dead-code sweep: `knip` or similar; remove dead exports
- Token usage analysis: which Claude / OpenAI calls cost the most; tune prompts and caching
- UX session recordings (opt-in only): identify common drop-off points
- Schema migration check: any `schemaVersion` lower than current that would block an upgrade?

## Open-source norms

- Be kind. Code of Conduct (Contributor Covenant 2.1) is enforced.
- Credit contributors in `CHANGELOG.md` (Changesets does this automatically).
- New contributors get a `good-first-issue` label list and a friendly first reply.
- Do not pile on. One reviewer per PR is enough; comment-storms drive contributors away.

## Deferred (post-1.0)

- DCO bot integration (currently enforced by CI script)
- Sigstore / cosign for release signing
- OpenSSF Scorecard public publication (depends on going public)
- Issue auto-assignment by area (mirror open-cowork's pattern)
- Public Discord with category structure
