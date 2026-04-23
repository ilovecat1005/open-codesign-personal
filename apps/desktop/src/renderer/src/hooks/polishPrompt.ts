/**
 * Second-loop injection — after the agent fires its `agent_end` on the first
 * round of a design, we automatically post this as a follow-up user prompt
 * so the agent adds interactive depth without the user having to nudge it.
 *
 * Locale-aware because the user's preference carries through: a Chinese
 * request deserves a Chinese follow-up so tone and examples feel consistent.
 *
 * Safety: `autoPolishFired` in the store dedupes by designId so we never
 * trigger more than once per design, and a Stop click during this second
 * round cancels it exactly like any other generation.
 */

export const POLISH_PROMPT_ZH = `现在针对刚才的设计再深化一轮。重点加交互深度，直接在现有 index.html 上改，不要重做：

1. 挑 2-3 个元素接上真实的状态切换：tab 切换 / 卡片展开 / 收藏 toggle / 下拉菜单 / inline 编辑。React useState + 事件处理，不要外部库。
2. 所有可点击元素补 hover + press 反馈：按钮 active 时 scale(0.96)、卡片 hover 抬升 2px、行 hover 换底色。统一过渡 \`transform 120ms var(--ease-out), background-color 120ms\`。
3. 至少 1 个列表/表格/网格定义一个 <EmptyState /> 组件（icon + 原因 + CTA），即便当前数据非空，空状态组件要在文件里存在。
4. 数据换成有质感的真实值：姓名多样化、数字真实量级、日期用相对时间（"3 小时前"、"昨天"）。不要 placeholder、不要重复。
5. 挑 1 个小惊喜：快捷键提示（⌘K 写成 <kbd>）、数据图表 hover 二层、动画脉冲、或一条机灵的空态文案。

节奏保持上一轮：一句 prose → 一个 view → 一个 str_replace → 一句 prose。每步只做一件事。改完调 \`done\` 验收。`;

export const POLISH_PROMPT_ZH_TW = `現在針對剛才的設計再深化一輪。重點放在互動深度，直接修改現有的 index.html，不要重做：

1. 挑 2-3 個元素接上真實的狀態切換：tab 切換 / 卡片展開 / 收藏 toggle / 下拉選單 / inline 編輯。使用 React useState + 事件處理，不要外部套件。
2. 所有可點擊元素補 hover + press 回饋：按鈕 active 時 scale(0.96)、卡片 hover 抬升 2px、列表列 hover 換底色。統一過渡 \`transform 120ms var(--ease-out), background-color 120ms\`。
3. 至少替 1 個清單/表格/網格定義一個 <EmptyState /> 元件（icon + 原因 + CTA），即使目前資料非空，空狀態元件也要保留在檔案裡。
4. 資料換成有質感的真實值：姓名多樣化、數字符合真實量級、日期用相對時間（"3 小時前"、"昨天"）。不要 placeholder、不要重複。
5. 挑 1 個小驚喜：快捷鍵提示（⌘K 寫成 <kbd>）、資料圖表 hover 第二層、動畫脈衝，或一句聰明的空狀態文案。

節奏保持上一輪：一句 prose → 一個 view → 一個 str_replace → 一句 prose。每步只做一件事。改完呼叫 \`done\` 驗收。`;

export const POLISH_PROMPT_EN = `Now deepen the design you just produced. Focus on interactive depth — edit the existing index.html in place, do not rebuild:

1. Wire up 2-3 real state changes: tab switching, accordion / card expand, favorite toggle, avatar dropdown, or inline-edit. Plain React useState + handlers, no external libraries.
2. Add hover + press feedback to every clickable element: buttons scale(0.96) on active, cards lift 2px on hover, rows get a hover tint. Standard transition: \`transform 120ms var(--ease-out), background-color 120ms\`.
3. Define an <EmptyState /> component (icon + reason + CTA) for at least one list / table / grid. Keep the component in the file even if current data isn't empty.
4. Replace placeholder data with believable content: varied names, realistic numbers, relative dates ("3h ago", "yesterday"). No repeats, no Lorem.
5. Add one delightful touch: a keyboard shortcut hint rendered as <kbd>⌘K</kbd>, a chart that reveals a second layer on hover, a pulse animation on a fresh notification, or a clever empty-state copy line.

Keep the same cadence as round one: one prose line → view → one str_replace → one prose line. Each turn does one thing. Call \`done\` when finished.`;

export function pickPolishPrompt(locale: string): string {
  const lower = locale.toLowerCase();
  if (lower === 'zh-tw' || lower.startsWith('zh-hant')) return POLISH_PROMPT_ZH_TW;
  if (lower.startsWith('zh')) return POLISH_PROMPT_ZH;
  return POLISH_PROMPT_EN;
}
