---
title: 常見問題
titleTemplate: 常見問題 — Open CoDesign
description: Open CoDesign 常見問題——開源桌面 AI 設計工具，Claude Design、v0、Bolt.new、Lovable、Figma AI 的開源替代方案。BYOK、本機優先、MIT 開源。
head:
  - - meta
    - property: og:type
      content: article
---

# 常見問題

Open CoDesign 使用者最常問到的問題。如果這裡沒有你的答案，可以查看 [快速開始](/zh-tw/quickstart) 或在 [GitHub Discussions](https://github.com/OpenCoworkAI/open-codesign/discussions) 提問。

## Open CoDesign 是什麼？

Open CoDesign 是一款開源的桌面 AI 設計工具。它把自然語言提示詞轉換為 HTML 原型、React 元件、投影片、PDF 和行銷素材。它是 Anthropic Claude Design、Vercel v0、StackBlitz Bolt.new、Lovable 的開源替代方案——但完全執行在你的本機，使用你自己的任意模型服務商的 API Key。

## Open CoDesign 是 Claude Design 的開源替代品嗎？

是的。Open CoDesign 是 MIT 授權下、開源的 Anthropic Claude Design 替代方案。它完全執行在桌面端，透過 BYOK（自帶 API Key）支援任意 AI 模型，無需雲端帳號或訂閱。repo 位址：[github.com/OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign)。

## Open CoDesign 和 Vercel v0 比如何？

Open CoDesign 能從提示詞生成 React / JSX 元件和 HTML 原型——核心能力和 v0 一樣。差異在於：

- **開源 vs 閉源。** Open CoDesign 是 MIT 授權，v0 閉源。
- **你的模型 vs 他們的模型。** Open CoDesign 支援 Claude、GPT、Gemini、DeepSeek、Kimi、GLM、Qwen、Ollama，以及任意 OpenAI 相容的介面。v0 只可以用 Vercel 托管的 OpenAI 模型。
- **本機 vs 雲端。** Open CoDesign 完全跑在桌面端，v0 跑在 Vercel 雲端。
- **你擁有的檔案 vs 他們平台上的預覽。** Open CoDesign 產出可匯出的 HTML / React / PDF / PPTX / ZIP 檔案，v0 產出綁定 Vercel 平台的預覽。

## Open CoDesign 和 Bolt.new 比如何？

Bolt.new 是基於瀏覽器的全端應用建置器，跑在 StackBlitz 的 WebContainer 裡。Open CoDesign 是聚焦設計產物（原型、投影片、行銷素材）的桌面應用程式。差異在於：

- **桌面應用程式 + 持久化本機儲存**（Open CoDesign）vs **瀏覽器沙盒**（Bolt.new）
- **任意 LLM via BYOK**（Open CoDesign）vs **僅 Anthropic Claude**（Bolt.new）
- **設計產物**（Open CoDesign）vs **完整可執行應用程式**（Bolt.new）
- **磁碟上的檔案**（Open CoDesign）vs **WebContainer 內的檔案**（Bolt.new）

## Open CoDesign 和 Lovable 比如何？

- **開源**（Open CoDesign，MIT）vs **閉源**（Lovable）
- **本機優先**（Open CoDesign）vs **雲端托管**（Lovable）
- **只付 token 成本**（Open CoDesign）vs **按用量計費的訂閱**（Lovable）
- **設計優先的原型**（Open CoDesign）vs **端到端產品打造，整合 Supabase**（Lovable）

## Open CoDesign 和 Figma AI / Figma Make 比如何？

它們解決的是不同層面的問題。Figma AI 在 Figma 畫布內工作，產出設計稿。Open CoDesign 產出程式碼原生的產物——HTML、React / JSX、PDF、PPTX——不依賴任何專有設計平台。兩者互補，不是直接替代關係。如果你需要能乾淨交付給工程團隊的設計，Open CoDesign 的產出本身就是程式碼。

## Open CoDesign 收費嗎？

不收費。Open CoDesign 是 MIT 授權的開源軟體，應用本身可免費下載、使用、修改、散布。你只需要為你自帶 API Key 的模型服務商付 token 費用——我們不收訂閱費，也不在 token 上加價。

## 我可以用我的 Claude Code 或 Codex API Key 嗎？

可以。Open CoDesign 會讀取你既有的 `~/.claude/settings.json` 和 `~/.codex/config.toml`，一鍵匯入服務商、模型和 API Key。應用直接用你的 API Key 呼叫服務商的介面——沒有代理層、沒有伺服器端儲存、不會劫持 OAuth token。

## 我可以用 ChatGPT Plus 或 Codex 訂閱登入取代 API Key 嗎？

可以。從 v0.1.4 開始，Open CoDesign 支援 ChatGPT Plus / Codex OAuth 訂閱登入。一鍵完成，無需 API Key。

## Open CoDesign 會把我的提示詞或設計傳給第三方嗎？

不會。所有設計、提示詞、快照、程式碼庫掃描結果都存在你本機——SQLite 存設計歷史，TOML 設定檔案存在 `~/.config/open-codesign/config.toml`，檔案權限 0600（和 Claude Code / Codex / gh CLI 同等級）。唯一的對外網路流量就是直接傳給你設定的模型服務商，用的是你自己的 API Key。預設零遙測。

## Open CoDesign 支援哪些 AI 模型？

- **Anthropic Claude**（Opus、Sonnet、Haiku，全版本）
- **OpenAI GPT**（GPT-5.4、GPT-4o、GPT-4 Turbo、O1、O3、O4）
- **Google Gemini**（包含帶 `models/` 前綴的第三方中繼）
- **DeepSeek**（V3、R1）
- **OpenRouter**（平台上所有模型）
- **SiliconFlow**（Qwen、Kimi、GLM 等中文模型）
- **Kimi**（Moonshot）
- **GLM**（智譜）
- **Qwen**（阿裡）
- **Ollama**（任意本機模型）
- **任意 OpenAI 相容介面**——覆蓋企業內部代理、網關服務、CLIProxyAPI、自架中繼。

也支援無 Key 的（IP 白名單）企業代理，以及 ChatGPT Plus / Codex 訂閱登入。

## 支援哪些作業系統？

- **macOS**——Apple Silicon（M1 / M2 / M3 / M4）和 Intel
- **Windows**——x64 和 ARM64
- **Linux**——AppImage、`.deb`（Debian / Ubuntu）、`.rpm`（Fedora / RHEL）

PDF 匯出（依賴本機 Chrome）、PPTX 生成等重量級功能首次使用時按需載入，基礎安裝包保持精簡。

## 怎麼安裝？

最快方式：使用套件管理器。

```bash
# Windows
winget install OpenCoworkAI.OpenCoDesign

# macOS
brew install --cask opencoworkai/tap/open-codesign

# Windows（備選）
scoop bucket add opencoworkai https://github.com/OpenCoworkAI/scoop-bucket
scoop install open-codesign
```

或者直接到 [GitHub Releases](https://github.com/OpenCoworkAI/open-codesign/releases) 下載安裝包。每個版本都附上帶 `SHA256SUMS.txt` 和 CycloneDX SBOM 供驗證。

## Open CoDesign 能離線使用嗎？

能，搭配 Ollama 等本機模型執行時。所有產生都走同一套 OpenAI 相容介面抽象，所以本機模型和雲端模型在應用看來表現一致。應用本身安裝後不需要連網；只有呼叫模型時需要對應服務商所需的網路。

## 能產出什麼樣的輸出？

- **HTML 原型**——沙盒 iframe，CSS 內嵌，無外部執行時依賴。可作為單檔案部署。
- **React / JSX 元件**——內建 React 18 + Babel，本機渲染。可複製貼上到你的專案裡。
- **投影片**——透過 `pptxgenjs` 生成 PPTX，PowerPoint / Keynote 可編輯。
- **PDF 單頁**——透過 Puppeteer-core 呼叫本機 Chrome 渲染。
- **ZIP 資源包**——HTML + CSS + JS + 資源檔案，目錄結構固定。可交付給工程團隊。
- **Markdown 匯出**——帶 frontmatter，可被靜態網站直接收錄。
- **AI 生成的點陣圖素材**——封面圖、背景圖、插圖、Logo，透過 gpt-image-2 或 OpenRouter 圖片模型生成。可選啟用，預設關閉。

## v0.2 會帶來什麼？

v0.2 是架構升級——"Agentic Design Loop"。從一次性提示詞轉產物生成器，升級為：

- **每個專案一個工作區**——綁定磁碟上任意目錄，所有產生的檔案都在那裡，可直接搭配 git 使用
- **Agent 讀取你的工作區**——`read_file`、`list_files`、`grep`、`find` 等工具，讓 agent 在產生前理解上下文
- **Agent 編輯真實檔案**——str-replace 風格的精準編輯加全檔案寫入，帶可選權限確認 UX
- **指點修改**——點擊預覽中的任意區域，描述變更，agent 只改那塊
- **視覺驗證**——agent 可以截圖自己的預覽，驗證它寫出來的內容
- **漸進式技能載入**——設計技能從一直注入提示詞改為按需被 agent 工具呼叫
- **每輪快照復原**——不再遺失某次滿意的迭代結果

完整設計文件已公開，社群審查中。里程碑計畫見 [roadmap](/roadmap)。

## Open CoDesign 安全嗎？

安全模型：

- **本機優先。** 設計、提示詞、掃描結果不出本機。
- **設定存在磁碟上，權限 0600。** API Key 存在 `~/.config/open-codesign/config.toml`，權限和 Claude Code / Codex / gh CLI 一致。
- **沒有代理層。** 你的 API Key 直接送到服務商介面。
- **預設零遙測。** 沒有分析統計，沒有自動更新追蹤。
- **每個版本帶簽名 SBOM。** CycloneDX 供應鏈清單附上在每個 GitHub Release 上。
- **MIT 授權。** 原始碼自己可審查。

v0.1.x 階段安裝包未簽名。Apple Developer ID 公證和 Windows Authenticode 簽名將在 v0.5 完成。在那之前，repo 裡有每個平台可靠的手動安裝說明。

## 如何貢獻？

- **回報 bug**——開 issue 並附上重現步驟。
- **提建議**——用 [GitHub Discussions → Ideas](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/ideas)。
- **提 PR**——讀 [CONTRIBUTING.md](https://github.com/OpenCoworkAI/open-codesign/blob/main/CONTRIBUTING.md)。提交帶 DCO 簽名，跑 `pnpm lint && pnpm typecheck && pnpm test`，加 changeset。
- **分享成果**——發到 [Show & Tell](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/show-and-tell)。優秀作品會被收錄到 release notes。

## 在哪裡求助？

- [GitHub Discussions → Q&A](https://github.com/OpenCoworkAI/open-codesign/discussions/categories/q-a) ——使用問題
- [GitHub Issues](https://github.com/OpenCoworkAI/open-codesign/issues) ——可重現的 bug
- [LINUX DO](https://linux.do/) ——主要的中文社群
- 微信群 ——QR code見 [README](https://github.com/OpenCoworkAI/open-codesign/blob/main/README.zh-TW.md#community)
