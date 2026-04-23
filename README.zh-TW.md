# Open CoDesign

**English**: [README.md](./README.md) · **簡體中文**: [README.zh-CN.md](./README.zh-CN.md)

> 你的提示詞，你的模型，你的電腦。
>
> Open CoDesign 是一個開源、Local-first 的 AI 設計工具，可以把一句提示詞直接變成精緻的 HTML 原型、投影片和行銷素材。

[官網](https://opencoworkai.github.io/open-codesign/) · [快速開始](#快速開始) · [更新日誌](./CHANGELOG.md) · [最新發版](https://github.com/OpenCoworkAI/open-codesign/releases) · [社群討論](https://github.com/OpenCoworkAI/open-codesign/discussions) · [比較 Claude Design](https://opencoworkai.github.io/open-codesign/claude-design-alternative) · [文件](https://opencoworkai.github.io/open-codesign/quickstart) · [參與貢獻](./CONTRIBUTING.md) · [安全說明](./SECURITY.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/product-hero.png" alt="Open CoDesign：左側是提示詞，右側是即時產生的設計結果" width="1000" />
</p>

<p align="center">
  <a href="https://github.com/OpenCoworkAI/open-codesign/releases"><img alt="GitHub release" src="https://img.shields.io/github/v/release/OpenCoworkAI/open-codesign?label=release&color=c96442" /></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://github.com/OpenCoworkAI/open-codesign/actions"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/OpenCoworkAI/open-codesign/ci.yml?label=CI" /></a>
  <a href="https://github.com/OpenCoworkAI/open-codesign/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/OpenCoworkAI/open-codesign?style=social" /></a>
  <a href="#%E7%A4%BE%E7%BE%A4"><img alt="微信使用者群" src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-%E7%94%A8%E6%88%B7%E7%BE%A4-07C160?logo=wechat&logoColor=white" /></a>
</p>

<p align="center">
  <a href="https://github.com/OpenCoworkAI/open-codesign/commits/main"><img alt="最近提交" src="https://img.shields.io/github/last-commit/OpenCoworkAI/open-codesign?label=%E6%9C%80%E8%BF%91%E6%8F%90%E4%BA%A4&color=40b4a1" /></a>
  <a href="https://github.com/OpenCoworkAI/open-codesign/pulse"><img alt="每月提交量" src="https://img.shields.io/github/commit-activity/m/OpenCoworkAI/open-codesign?label=%E6%9C%88%E6%8F%90%E4%BA%A4" /></a>
  <a href="https://github.com/OpenCoworkAI/open-codesign/graphs/contributors"><img alt="貢獻者" src="https://img.shields.io/github/contributors/OpenCoworkAI/open-codesign?label=%E8%B4%A1%E7%8C%AE%E8%80%85" /></a>
  <a href="https://github.com/OpenCoworkAI/open-codesign/releases"><img alt="下載量" src="https://img.shields.io/github/downloads/OpenCoworkAI/open-codesign/total?label=%E4%B8%8B%E8%BD%BD%E9%87%8F&color=6c5ce7" /></a>
</p>

<p align="center">
  <sub><code>ai-design</code> · <code>claude-design-alternative</code> · <code>v0-alternative</code> · <code>bolt-alternative</code> · <code>lovable-alternative</code> · <code>prompt-to-design</code> · <code>ai-prototyping</code> · <code>desktop-design-tool</code> · <code>byok</code> · <code>local-first</code> · <code>electron</code> · <code>multi-model</code> · <code>open-source</code></sub>
</p>

---

## 最近更新

- **v0.1.4** *（即將發布）* — 🎨 AI 圖片生成 · 支援 ChatGPT Plus / Codex 訂閱登入 · CLIProxyAPI 一鍵匯入 · API 設定穩定性最佳化
- **v0.1.3** *（2026-04-21）* — 修正 Gemini `models/` 前綴 key · 修正 OpenAI 相容中繼 "instructions required" 錯誤 · 新增第三方中繼 SSE 截斷提示
- **v0.1.2** *（2026-04-21）* — 發版流程 · Homebrew / winget / Scoop 打包清單

[查看全部發版紀錄 →](https://github.com/OpenCoworkAI/open-codesign/releases) · [更新日誌 →](./CHANGELOG.md)

---

## 它是什麼

Open CoDesign 可以把一句自然語言提示詞，直接變成一個完成度很高的 HTML 原型、投影片或者行銷素材，而且整個過程都可以在你的電腦上完成。

它適合這樣一類人：想要 AI 設計工具的速度，但不想被訂閱制綁住，不想把工作流程全丟到雲端，也不想只可以用某一家模型。你可以把它理解成一個更開放、更本機化的 Claude Design 替代方案：開源、桌面原生、支援自帶 API Key，也支援多模型切換。

---

## 看它怎麼生成

從一則空白提示詞開始，Agent 會自己規劃、生成、檢查，然後交給你一個已經帶有 hover 狀態、tabs、empty states 等細節的完整結果：

![從零開始生成設計](https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/demos/generate-from-scratch.gif)

---

## 為什麼大家會給它點 Star

- **直接跑在你的電腦上**，不必依賴雲端工作區
- **直接用你自己的模型**，支援 Claude、GPT、Gemini、Ollama、OpenRouter 等
- **匯出的是真實檔案**，不是只能截圖或者看預覽
- **產生過程看得見**，Agent 在做什麼、調了什麼、什麼時候可以中斷，你都知道

---

## 為什麼是 Open CoDesign？

如果你想要 AI 設計工具的速度，但又不想把模型選擇、資料和工作流程都交給單一平台，Open CoDesign 會是一個更自由的選擇。

| | **Open CoDesign** | Claude Design | v0 by Vercel | Lovable |
|---|:---:|:---:|:---:|:---:|
| 開源 | ✅ MIT | ❌ 閉源 | ❌ 閉源 | ❌ 閉源 |
| 桌面原生 | ✅ Electron | ❌ 僅 Web | ❌ 僅 Web | ❌ 僅 Web |
| 支援自帶 Key | ✅ 任意服務商 | ❌ 僅 Anthropic | ❌ 僅 Vercel | ⚠️ 有限制 |
| 本機 / 離線 | ✅ 本機應用 | ❌ 雲端 | ❌ 雲端 | ❌ 雲端 |
| 模型支援 | ✅ 20+（Claude、GPT、Gemini、Ollama…） | Claude only | GPT-4o | Multi-LLM |
| 版本歷史 | ✅ 本機 SQLite 快照 | ❌ | ❌ | ❌ |
| 資料隱私 | ✅ 應用狀態保留在本機 | ❌ 雲端處理 | ❌ 雲端 | ❌ 雲端 |
| 可編輯匯出 | ✅ HTML、PDF、PPTX、ZIP、Markdown | ⚠️ 有限制 | ⚠️ 有限制 | ⚠️ 有限制 |
| 價格 | ✅ 應用免費，僅承擔模型 token 成本 | 💳 訂閱制 | 💳 訂閱制 | 💳 訂閱制 |

---

## 亮點功能

<table>
  <tr>
    <td width="50%">
      <a href="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/comment-mode.png">
        <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/comment-mode.png" alt="點擊任意元素新增註解，讓模型只修改局部區域" />
      </a>
      <p><b>不用重寫整段提示詞。</b><br/>點一下元素、留下一則註解，模型就只改這一塊。</p>
    </td>
    <td width="50%">
      <a href="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/tweaks-sliders.png">
        <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/tweaks-sliders.png" alt="AI 自動生成可調參數面板" />
      </a>
      <p><b>AI 自動生成可調參數。</b><br/>模型會把真正值得調整的顏色、間距、字型等參數呈現出來，你可以直接拖曳微調，不用再跑一輪。</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/hub-your-designs.png">
        <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/hub-your-designs.png" alt="設計歷史與最近生成結果" />
      </a>
      <p><b>每次迭代都會保留下來。</b><br/>設計結果會儲存在本機，最近幾個版本之間可以即時切換。</p>
    </td>
    <td width="50%">
      <a href="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/agent-panel.png">
        <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/screenshots/agent-panel.png" alt="即時 Agent 面板" />
      </a>
      <p><b>看著 Agent 工作。</b><br/>Todo、工具呼叫和即時進度都能看到，而且隨時可以中斷。</p>
    </td>
  </tr>
</table>

---

## 快速開始

**第一次產生一個結果，大概只要：** 3 分鐘

**你需要準備：** 一個 API Key，或者本機 Ollama

**支援平台：** macOS、Windows、Linux

### 1. 安裝

**一行命令**（建議）：

```bash
# Windows
winget install OpenCoworkAI.OpenCoDesign

# macOS
brew install --cask opencoworkai/tap/open-codesign
```

**或從 [GitHub Releases](https://github.com/OpenCoworkAI/open-codesign/releases) 直接下載安裝包**（v0.1.x）：

| 平台 | 檔案 |
|---|---|
| macOS（Apple Silicon） | `open-codesign-*-arm64.dmg` |
| macOS（Intel） | `open-codesign-*-x64.dmg` |
| Windows（x64） | `open-codesign-*-x64-setup.exe` |
| Windows（ARM64） | `open-codesign-*-arm64-setup.exe` |
| Linux（x64，AppImage） | `open-codesign-*-x64.AppImage` |
| Linux（x64，Debian/Ubuntu） | `open-codesign-*-x64.deb` |
| Linux（x64，Fedora/RHEL） | `open-codesign-*-x64.rpm` |

每個 release 都會附上帶 `SHA256SUMS.txt` 和 CycloneDX SBOM（`*-sbom.cdx.json`），方便你驗證下載內容。

<details>
<summary><b>其他包管理器</b></summary>

| 管理器 | 命令 | 狀態 |
|---|---|---|
| Scoop（Windows） | `scoop bucket add opencoworkai https://github.com/OpenCoworkAI/scoop-bucket && scoop install open-codesign` | 🟢 可用 |
| Flathub（Linux） | `flatpak install flathub ai.opencowork.codesign` | ⏸ 延後到 v0.2（需要簽名建置 + AppStream 元資料） |
| Snap（Linux） | `snap install --dangerous open-codesign-*.snap` | 🟡 隨 release 盡量附上帶，尚未接入 Snap Store |

每次 tag push 後 CI 會把 SHA 自動寫回 `packaging/`，winget PR 合併後後续版本會自動提 bump PR。下游映像流程見各個 `packaging/*/README.md`。
</details>

> **v0.1 提示：** 目前安裝包未簽名。**macOS Sequoia 15+** 起，右鍵 → 開啟 已無法繞過 Gatekeeper，即使在「系統設定 → 隱私權與安全性」裡點「仍要開啟」也經常失敗。最可靠的一行命令：
>
> ```sh
> xattr -cr "/Applications/Open CoDesign.app"
> ```
>
> 跑完直接雙擊開啟即可。（0.1.x 舊版本裝完後路徑是 `/Applications/open-codesign.app`。）
> **Windows**：SmartScreen → More info → Run anyway。
>
> 想要可驗證建置可以自己從原始碼編譯，見 [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 2. 新增 API Key

首次啟動時，Open CoDesign 會直接開啟設定頁。你可以貼上任意支援的 provider key：

- Anthropic（`sk-ant-…`）
- OpenAI（`sk-…`）
- Google Gemini
- 任意 OpenAI 相容中繼，比如 OpenRouter、SiliconFlow、本機 Ollama

憑證會保存在 `~/.config/open-codesign/config.toml`（檔案權限 0600，與 Claude Code、Codex、`gh` CLI 的做法一致）。除非你選擇的模型服務商本身需要連網，請求內容不會額外離開你的機器。

### 3. 輸入第一則提示詞

你可以直接選 **十五個內建 demo** 之一，比如 landing page、dashboard、pitch slide、pricing、mobile app、chat UI、event calendar、blog article、receipt/invoice、portfolio、settings panel 等，也可以直接寫自己的需求。幾秒內，你就能看到一個沙盒中的可互動原型。

---

## 可以直接接你現有的開發環境

如果你已經在用 Claude Code 或 Codex，現有的 provider、model 和 API key 都可以一鍵匯入，不用複製貼上，也不用重新配一遍。

![一鍵匯入 Claude Code 或 Codex 設定](https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/demos/claude-code-import.gif)

---

## 內建設計能力

通用 AI 工具很容易產生“差不多就那樣”的設計。Open CoDesign 內建了 **十二個設計技能模組**，包含投影片、儀表板、登陸頁、SVG 圖表、玻璃擬態、編輯風排版、Hero 區塊、價格頁、頁腳、聊天介面、資料表格和行事曆，同時還有一層內建的設計約束，協助模型更穩定地做出更講究的排版、留白和配色。

每次產生時，這些能力都會自動參與。在模型真正開始寫 CSS 之前，它會先判斷目前需求適合哪些技能，並圍繞佈局意圖、設計系統一致性和對比度做推理，進而讓你用任意模型時，都更容易得到像樣的設計結果。

如果你想把自己的風格教給模型，只需要在專案裡加一個 `SKILL.md`。

---

## 你能得到什麼

### 模型與服務商
- **統一的 provider 抽象**：支援 Anthropic、OpenAI、Gemini、DeepSeek、OpenRouter、SiliconFlow、本機 Ollama，以及任意 OpenAI-compatible relay；同時支援無 key 的 IP 白名單代理
- **一鍵匯入 Claude Code 和 Codex 設定**：現有的 provider、model 和 key 可以直接帶進來
- **動態模型選擇器**：每個 provider 都會展示真實模型列表，而不是一小撮寫死的選項

### 產生與編輯
- **提示詞 → HTML 或 JSX/React 元件原型**，渲染在隔離的 sandbox iframe 中（本機 vendored React 18 + Babel）
- **十五個內建 demo + 十二個設計技能模組**：給常見設計需求準備好的起點
- **即時 Agent 面板**：模型編輯檔案時，工具呼叫會即時串流展示
- **AI 自動生成調節參數**：模型會主動暴露值得調整的參數，比如顏色、間距和字型
- **Comment mode**：點擊預覽中的任意元素，留下註解，模型只重寫對應局部
- **支援中途取消生成**：停止後也不會遺失之前的上下文和結果

### 預覽與工作流程
- **手機 / 平板 / 桌面預覽**：一鍵切換真實響應式檢視
- **Files 面板**：匯出前先檢查多檔案產物（HTML、CSS、JS）
- **即時設計切換**：最近五個設計會保持 iframe 存活，因此 Hub 和 Workspace 之間切換幾乎零延遲
- **連線診斷面板**：一鍵偵測任意 provider 的連線狀態，並給出可操作的錯誤資訊
- **每次產生的 token 計數**：側邊欄直接看到這一輪花了多少 token
- **四個設定分頁**：Models、Appearance、Storage、Advanced
- **淺色 / 深色主題**，以及 **英文 / 繁體中文 UI** 的即時切換

### 匯出與發布
- **五種匯出格式**：HTML（內嵌 CSS）、PDF（本機 Chrome）、PPTX、ZIP、Markdown
- **GitHub Release 發布鏈路**：目前提供未簽名的 DMG（macOS）、EXE（Windows）和 AppImage（Linux）；v0.5 會加入程式碼簽名和可選自動更新

---

## Roadmap

目前版本 v0.1.3，處於快速迭代階段，優先順序隨時會調整。下方是我們目前正在處理的事。

### Now — v0.1.x 打磨

- **Provider / API 設定打磨**：一鍵匯入體驗更順暢，model picker 補齊最後的缺口（自訂 provider、timeout），連線診斷給出更清晰的錯誤提示
- **結構化日誌 + 問題回報包**：完善主程序 / 渲染程序的日誌，一鍵匯出診斷包，讓 bug 回報真正能被重現

### Next — v0.2（主題：檔案系統與匯入）

- **檔案系統支援**：直接讀寫真實的項目目錄，而不只是 app 內的臨時空間
- **更豐富的匯入能力**：把既有的素材、prompt、項目上下文帶進設計會話

### Later — v0.3 及之後

- 成本透明化：產生前估算 + 每週預算控制（每輪 token 計數已上線）
- 版本快照 + 並排 diff
- 三種風格並行探索
- 從程式碼庫擷取設計系統 token
- 程式碼簽名（Apple ID + Authenticode）+ 可選自動更新 — v0.5
- Figma 圖層匯出 — 1.0 之後

有想優先做的事？歡迎[開 issue](https://github.com/OpenCoworkAI/open-codesign/issues/new/choose) 或替既有的 issue 點個 👍，我們真的會看。

---

## Star 歷史

[![Star History Chart](https://api.star-history.com/svg?repos=OpenCoworkAI/open-codesign&type=Date)](https://star-history.com/#OpenCoworkAI/open-codesign&Date)

---

## 基於這些技術構成

- Electron + React 19 + Vite 6 + Tailwind v4
- `@mariozechner/pi-ai`（多 provider 模型抽象）
- `better-sqlite3`、`electron-builder`

## 社群

Open CoDesign 在 [LINUX DO](https://linux.do/) 社群首發，感謝佬友們的回饋和建議。

- **[GitHub Discussions](https://github.com/OpenCoworkAI/open-codesign/discussions)** — 在 [Show & Tell](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/show-and-tell) 分享你生成的設計，[Q&A](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/q-a) 提使用問題，[Ideas](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/ideas) 提功能建議。
- **[LINUX DO](https://linux.do/)** — 中文討論、使用心得、回饋（首發社群）。
- **GitHub Issues** — [可重現的 bug 報告](https://github.com/OpenCoworkAI/open-codesign/issues)。

中文使用者交流群（微信）：

<p align="center">
  <img src="https://raw.githubusercontent.com/OpenCoworkAI/open-codesign/main/website/public/community/wechat-group.jpg" alt="Open CoDesign 使用者交流群微信QR code" width="260" />
</p>

> ⚠️ 微信群 QR code 每 7 天自動失效（目前到 **4 月 28 日** 有效）。掃碼失敗請到 [GitHub Issues](https://github.com/OpenCoworkAI/open-codesign/issues) 留言，我們會更新這裡的圖片。

英文或非同步討論：[GitHub Issues](https://github.com/OpenCoworkAI/open-codesign/issues) · 安全問題：[SECURITY.md](./SECURITY.md)。

## 參與貢獻

請先閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md)。開始寫程式碼前建議先開 issue，提交時需要簽 DCO，發 PR 前請先執行 `pnpm lint && pnpm typecheck && pnpm test`。

## 授權

MIT。你可以 fork、發布、商用。第三方依賴相關聲明保留在 [NOTICE](./NOTICE)。

## 如何引用這個專案

如果你在論文、文章或產品比較中引用 Open CoDesign，可以使用下方的格式：

```bibtex
@misc{open_codesign_github,
  author       = {OpenCoworkAI Contributors},
  title        = {Open CoDesign: An Open-Source Desktop AI Design Tool},
  year         = {2026},
  howpublished = {\url{https://github.com/OpenCoworkAI/open-codesign}},
  note         = {GitHub repository}
}
````

或者直接使用repo根目錄下機器可讀的 `CITATION.cff`。
