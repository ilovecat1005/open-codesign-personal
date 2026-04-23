---
title: 快速開始
description: 90 秒在 macOS / Windows / Linux 上跑通 Open CoDesign，渲染第一個 AI 生成原型。
---

# 快速開始

三步讓 Open CoDesign 在你的電腦上跑起來。

## 1. 安裝

### 使用套件管理器（建議）

```sh
# macOS
brew install --cask opencoworkai/tap/open-codesign

# Windows — Scoop
scoop bucket add opencoworkai https://github.com/OpenCoworkAI/scoop-bucket
scoop install open-codesign

# Windows — winget（等 microsoft/winget-pkgs#363055 合併）
winget install OpenCoworkAI.OpenCoDesign
```

### 或直接下載

從 [GitHub Releases](https://github.com/OpenCoworkAI/open-codesign/releases) 選擇對應平台：

| 平台 | 檔案 |
|---|---|
| macOS（Apple Silicon）| `open-codesign-*-arm64.dmg` |
| macOS（Intel）| `open-codesign-*-x64.dmg` |
| Windows（x64）| `open-codesign-*-x64-setup.exe` |
| Windows（ARM64）| `open-codesign-*-arm64-setup.exe` |
| Linux（AppImage） | `open-codesign-*-x64.AppImage` |
| Linux（Debian/Ubuntu） | `open-codesign-*-x64.deb` |
| Linux（Fedora/RHEL） | `open-codesign-*-x64.rpm` |

::: tip v0.1 說明
v0.1 安裝包未簽名。**macOS Sequoia 15+**：右鍵 → 開啟 已無法繞過 Gatekeeper，安裝後執行一次 `xattr -cr "/Applications/Open CoDesign.app"`（0.1.2 及之前路徑是 `/Applications/open-codesign.app`）。**Windows**：SmartScreen → 更多資訊 → 仍要執行。希望已驗證的建置？從原始碼自行編譯，參見 [架構](../architecture)。
:::

## 2. 新增 provider

首次啟動會開啟設定頁面，三種入口二選一：

- **從 Claude Code 或 Codex 匯入** — 一鍵匯入，我們直接讀取 `~/.codex/config.toml` 和 `~/.claude/settings.json`，把 provider、model、API Key 一次帶進來。
- **手動新增** — 貼上任意 API Key，provider 依前綴自動辨識（`sk-ant-…` → Anthropic，`sk-…` → OpenAI，等）。
- **Keyless** — IP 白名單代理（企業閘道、本機 Ollama），Key 留空即可。

開箱支援：Anthropic Claude、OpenAI GPT、Google Gemini、DeepSeek、OpenRouter、SiliconFlow、本機 Ollama，以及任何 OpenAI 相容端點。憑證透過 Electron `safeStorage` 加密儲存於 `~/.config/open-codesign/config.toml`，不會上傳。

## 3. 輸入第一則提示

從 Hub 選一個內建 demo，或者自由描述。第一版幾秒內就會出現在沙盒 iframe 裡——HTML 或即時 React 元件，取決於提示內容。

## 接下來試試

- **行內留言** — 在預覽中點擊任意元素，留下留言。模型只重寫該區域。
- **可調滑桿** — 模型主動提出值得調整的參數（顏色、間距、字型），拖曳即可微調，不用重新傳送提示。
- **切換設計** — 最近 5 個設計的預覽 iframe 常駐記憶體，切換零延遲。
- **匯出** — HTML、PDF（本機 Chrome）、PPTX、ZIP、Markdown，全部在本機產生。

## 從原始碼建置

```bash
git clone https://github.com/OpenCoworkAI/open-codesign.git
cd open-codesign
pnpm install
pnpm dev
```

需要 Node 22 LTS 與 pnpm 9.15+。repo 結構參見 [架構](../architecture)。

## 繼續閱讀

- [架構](../architecture) — 套件如何組成。
- [路線圖](../roadmap) — 按版本規劃。
- [GitHub Issues](https://github.com/OpenCoworkAI/open-codesign/issues) — 回報 bug 或提需求。
