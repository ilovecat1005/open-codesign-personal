---
layout: home
title: Open CoDesign
titleTemplate: 開源 AI 設計工具 — 自帶金鑰，本機優先，MIT
description: Open CoDesign 是一款開源桌面 AI 設計工具，Claude Design 的自架替代方案。自帶 API Key（Anthropic、OpenAI、Gemini、DeepSeek、Ollama），一切本機執行。MIT 授權。

hero:
  name: Open CoDesign
  text: 用心設計。
  tagline: 開源桌面 AI 設計工具。自帶模型、本機執行——Claude Design 的自架替代方案，給無法接受訂閱綁定的團隊。
  image:
    src: /logo-hero.png
    alt: Open CoDesign — 開源 AI 設計工具
  actions:
    - theme: brand
      text: 下載 macOS 版
      link: https://github.com/OpenCoworkAI/open-codesign/releases
    - theme: alt
      text: 在 GitHub 上 Star
      link: https://github.com/OpenCoworkAI/open-codesign
    - theme: alt
      text: 快速開始（90 秒）
      link: /zh-tw/quickstart

features:
  - icon: 🪶
    title: 自帶模型
    details: Anthropic、OpenAI、Gemini、DeepSeek、OpenRouter、SiliconFlow、本機 Ollama，或任意 OpenAI 相容中繼——包含 keyless（IP 白名單）代理。設定裡切 provider，我們不做代理，也不按 token 計費。
  - icon: ⚡
    title: 一鍵匯入設定
    details: 已經在用 Claude Code 或 Codex？Open CoDesign 直接讀取你的設定檔案——provider、model、API Key，一次帶進來。
  - icon: 🏡
    title: 你的電腦就是雲
    details: 設計稿、提示詞、程式碼庫掃描——SQLite 加密 TOML，全在本機磁碟。無需註冊帳號，預設無遙測。100% 本機。
  - icon: 🪄
    title: 12 個設計 Skill 開箱即用
    details: 內建 12 個設計 skill 模組——儀表板、登陸頁、投影片、定價頁、聊天 UI、資料表格、行事曆、玻璃質感、編輯排版等。在任何專案新增你自己的 SKILL.md，教模型理解你的美感。
  - icon: 🎚️
    title: AI 產生的滑桿
    details: 模型主動提出值得調整的參數——顏色、間距、字型——拖一下即可微調，不用每次重新傳送提示。
  - icon: 💬
    title: 留言，不要重寫
    details: 在預覽中點擊任意元素落一枚 pin，留下註解，模型只重寫該區域。不用為了移動一個按鈕重新提示整個頁面。
  - icon: 🔀
    title: 設計之間切換即時回應
    details: 最近 5 個 design 之間切換零延遲。預覽 iframe 常駐記憶體——不重新解析、不閃白、不用等快照重新載入。
  - icon: 📱
    title: 桌面、平板、手機
    details: 任何設計都能在真實手機框或平板寬度裡預覽，與完整畫布並排檢視。匯出前先看響應式呈現。
  - icon: 🧬
    title: 程式碼庫 → 設計系統
    details: 指向本機 repo，我們擷取 Tailwind token、CSS 變數和 W3C 設計 token——之後每次產生都自動遵循。即將推出。
  - icon: 📐
    title: 版本、比較、快照
    details: 每一次迭代都是一個快照。並排 diff 兩個版本，復原，分支。這是 Claude Design 沒有的歷史紀錄。即將推出。
  - icon: 💸
    title: 成本透明
    details: 產生前顯示 token 估算，工具列顯示本週花費。設定預算，超出前收到提醒，不再有意外帳單。即將推出。
  - icon: 🚢
    title: 五種匯出，真實檔案
    details: HTML（內嵌 CSS）、PDF（本機 Chrome）、PPTX、ZIP、Markdown——全部在本機產生，無需繞道 Canva。
---

<script setup>
import { withBase } from 'vitepress'
</script>

<SmartDownload />

<div class="codesign-section">

## 工作流程

<div class="codesign-steps">
  <div class="codesign-step">
    <span class="num">1</span>
    <h3>帶上你自己的金鑰</h3>
    <p>Anthropic、OpenAI、Gemini、DeepSeek、OpenRouter、Ollama——只要 <code>pi-ai</code> 支援，都能使用。</p>
  </div>
  <div class="codesign-step">
    <span class="num">2</span>
    <h3>寫一段提示</h3>
    <p>從 <strong>15 個內建 demo</strong> 裡選——登陸頁、儀表板、簡報投影片、定價頁、行動應用、聊天 UI、行事曆、部落格文章、發票、作品集、電子郵件等——或自由描述。第一版幾秒內出現在沙盒 iframe 裡。</p>
  </div>
  <div class="codesign-step">
    <span class="num">3</span>
    <h3>打磨、匯出、交付</h3>
    <p>元素層級留言、AI 滑桿、版本時間軸。匯出 HTML、PDF、PPTX、ZIP 或 Markdown——全部在本機產生。</p>
  </div>
</div>

</div>

<div class="codesign-section">

## 深入看一看

<p class="lede">從首次啟動到局部重寫——6 個你會實際遇到的畫面。</p>

<div class="codesign-gallery">
  <figure>
    <img :src="withBase('/screenshots/comment-mode.png')" alt="留言模式 — 點擊任意元素放 pin，模型只重寫該區域" />
    <figcaption><b>留言，不要重寫。</b>在預覽放 pin，模型只改那一塊。</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/tweaks-sliders.png')" alt="AI 生成的調整面板——色票 + RGB 輸入" />
    <figcaption><b>AI 調的滑桿。</b>模型主動提出值得調整的參數，拖曳就能微調。</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/agent-panel.png')" alt="Agent 面板——即時 todos 與串流 tool call" />
    <figcaption><b>看 agent 工作。</b>Todos、tool call、串流推理全部可見。</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/hub-your-designs.png')" alt="設計首頁 — 所有產生過的 artifact" />
    <figcaption><b>每次迭代都保留著。</b>本機 SQLite 快照，最近 5 個零延遲切換。</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/hub-examples.png')" alt="內建範例庫 — 15 個可立即執行的設計命題" />
    <figcaption><b>15 個 demo brief。</b>登陸頁、儀表板、定價、聊天 UI 一鍵體驗。</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/add-provider-menu.png')" alt="新增 provider 選單——Claude Code、Codex、自訂、預設" />
    <figcaption><b>自帶模型。</b>匯入 Claude Code / Codex 設定，或任何 OpenAI 相容 provider。</figcaption>
  </figure>
</div>

</div>

<div class="codesign-section">

## 一份 design 從無到有

<p class="lede">從空白 prompt 到完整 artifact——agent 規劃、寫程式碼、自我檢查，最後交回一個 hover / tab / 空狀態都已接好的互動式設計。</p>

<div class="codesign-demo-video">
  <DemoVideo src="/demos/generate-from-scratch.mp4" label="從零生成一個 design" />
</div>

</div>

<div class="codesign-section">

## 與同類產品比較

<p class="lede">我們不比 Claude Design 更快，我們走的是另一條路：開源、多模型、本機優先。適合無法接受訂閱綁定或雲端資料暴露的團隊。</p>

<div class="codesign-comparison">

|                       | 開源           | 模型                 | 本機執行  | 價格                 |
| --------------------- | :------------: | :------------------: | :-------: | :------------------: |
| **Open CoDesign**     | **MIT**        | **任意（自帶金鑰）** | **✓**     | **僅 token 成本**    |
| Claude Design         | ✗ 閉源         | 僅 Opus              | ✗         | 訂閱                 |
| v0 by Vercel          | ✗ 閉源         | 平台精選             | ✗         | 訂閱                 |
| Lovable               | ✗ 閉源         | 平台精選             | ✗         | 訂閱                 |
| Bolt.new              | 部分開源       | 平台精選             | ✗         | 訂閱                 |

</div>

</div>

<div class="codesign-section">

## 來自社群

<div class="codesign-proof">
  <p class="proof-placeholder">⭐ <strong>在 GitHub 上 Star 我們</strong> — 每一個 Star 都讓更多人找到這個開放替代。</p>
  <!-- 待替換為真實社群評價：Star 數量、使用者引言、HN/PH 提及 -->
</div>

<div class="codesign-community">
  <div class="community-card">
    <h3>使用者交流群（微信）</h3>
    <p class="community-hint">掃碼加入中文討論群。QR code 每 7 天更新，目前到 <strong>4 月 28 日</strong> 有效。過期請到 <a href="https://github.com/OpenCoworkAI/open-codesign/issues">GitHub Issues</a> 留言提醒我們更新。</p>
    <img
      :src="withBase('/community/wechat-group.jpg')"
      alt="Open CoDesign 使用者交流群微信QR code"
      class="wechat-qr"
      width="240"
    />
  </div>
  <div class="community-card">
    <h3>GitHub 社群</h3>
    <p class="community-hint">Bug 報告、功能需求、非同步討論都在 GitHub Issues。安全問題請走 <a href="https://github.com/OpenCoworkAI/open-codesign/blob/main/SECURITY.md">SECURITY.md</a> 私下聯絡。</p>
    <p class="community-cta"><a href="https://github.com/OpenCoworkAI/open-codesign/issues" class="community-button">開啟 Issues →</a></p>
  </div>
</div>

</div>

<div class="codesign-cta">

### 準備好不被任何廠商綁住了嗎？

<a href="/open-codesign/zh-tw/quickstart" class="cta-primary">90 秒上手 →</a>
<a href="https://github.com/OpenCoworkAI/open-codesign" class="cta-secondary">在 GitHub 查看</a>

</div>
