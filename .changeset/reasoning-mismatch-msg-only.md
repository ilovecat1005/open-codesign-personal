---
'@open-codesign/core': patch
---

fix(core): detect reasoning-mismatch errors when status only lives in the message

The previous self-healing retry gated on `extractStatus(err) === 400`, but
pi-ai (and several upstream SDKs) surface the HTTP code as a leading
`"400 ..."` substring in the error message rather than as `err.status`. Result:
the retry never fires and the user sees a hard `PROVIDER_ERROR` for
reasoning-mandatory models like `openrouter/openai/gpt-oss-120b:free`.

Drop the status gate. The reasoning patterns are specific enough that a false
positive is highly unlikely; the cost of one is a single extra request,
versus an opaque error the user has no path to recover from.
