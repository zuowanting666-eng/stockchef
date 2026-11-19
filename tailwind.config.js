/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════
      // 色彩系统 — 100% 直接来自 docs/一级页面-数字化食材库.txt
      // tailwind.config 内嵌色值（line 15-62）
      // ═══════════════════════════════════════════════════════════════
      colors: {
        // ── 页面全局背景 ─────────────────────────────────────────────
        // 源码 line 25/42/87: "background"/"surface" = #fcf9f0
        // body { background-color: #fcf9f0 }
        'app-bg':    '#fcf9f0',
        'background':'#fcf9f0',
        'surface':   '#fcf9f0',

        // ── 卡片 / 最低层容器背景 ────────────────────────────────────
        // 源码 line 40: "surface-container-lowest" = #ffffff
        // 卡片 class: bg-surface-container-lowest
        'card-bg':   '#ffffff',
        'surface-container-lowest': '#ffffff',

        // ── 容器层级背景 ─────────────────────────────────────────────
        // 源码 line 23: surface-container-low = #f6f3eb（stepper、排序按钮背景）
        'surface-container-low':    '#f6f3eb',
        // 源码 line 19: surface-container-high = #ebe8df（搜索框、头像边框）
        'surface-container-high':   '#ebe8df',
        'search-bg': '#ebe8df',
        // 源码 line 48: surface-container = #f0eee5（chip 未激活、进度条轨道）
        'surface-container':        '#f0eee5',
        'chip-inactive':            '#f0eee5',
        // 源码 line 17: surface-container-highest = #e5e2da
        'surface-container-highest':'#e5e2da',

        // ── 主色 primary ─────────────────────────────────────────────
        // 源码 line 45: primary = #006c4d
        'primary':              '#006c4d',
        // 源码 line 55: primary-container = #3eb489（激活 chip 背景、FAB渐变）
        'primary-container':    '#3eb489',
        // 源码 line 41: on-primary-container = #00402d（激活 chip 文字）
        'on-primary-container': '#00402d',
        // 源码 line 39: on-primary = #ffffff
        'on-primary':           '#ffffff',
        // 源码 line 22: primary-fixed = #86f8c8（fresh卡片图片容器背景）
        'primary-fixed':        '#86f8c8',
        // 源码 line 57: primary-fixed-dim = #69dbad
        'primary-fixed-dim':    '#69dbad',

        // ── 文字色 ───────────────────────────────────────────────────
        // Figma Dev Mode confirmed: on-surface = #1a1c18（主文字）
        'text-main':        '#1a1c18',
        'on-surface':       '#1a1c18',
        'on-background':    '#1a1c18',
        // 源码 line 58: on-surface-variant = #3d4943（辅助文字、icon静态色）
        'text-secondary':   '#3d4943',
        'on-surface-variant':'#3d4943',
        // Figma Dev Mode confirmed: surface-variant = #e1e3d5（输入框背景）
        'surface-variant':  '#e1e3d5',
        'text-placeholder': '#3d4943',
        // 源码 line 38: outline = #6d7a72（搜索框 placeholder）
        'outline':          '#6d7a72',
        // 源码 line 56: outline-variant = #bccac1（分隔线）
        'outline-variant':  '#bccac1',

        // ── 状态色 ───────────────────────────────────────────────────
        // 源码 line 47: tertiary = #9c413f（过期/Critical 红）
        'tertiary':         '#9c413f',
        // 源码 line 28: tertiary-fixed = #ffdad7（过期卡片图片容器背景）
        'tertiary-fixed':   '#ffdad7',
        // 源码 line 43: secondary = #666018（保质期长/stable 黄绿）
        'secondary':        '#666018',
        // 源码 line 16: secondary-fixed = #efe58f（stable卡片图片容器背景）
        'secondary-fixed':  '#efe58f',
        // 源码 line 32: error = #ba1a1a
        'error':            '#ba1a1a',
        'error-container':  '#ffdad6',
        // 保留兼容旧 token
        'warning':          '#FF9500',
        'danger':           '#FF3B30',

        // ── Tab 激活背景（源码 line 290: bg-[#3eb489]/10）────────────
        // #3eb489 at 10% opacity on #fcf9f0 ≈ #eaf7f2
        'tab-active-bg':    '#eaf7f2',
      },

      // ═══════════════════════════════════════════════════════════════
      // 圆角 — 完整复刻源码 tailwind.config borderRadius（line 69）
      // "DEFAULT":"1rem"=16px, "lg":"2rem"=32px, "xl":"3rem"=48px
      // ═══════════════════════════════════════════════════════════════
      borderRadius: {
        // 源码 rounded-lg = 2rem = 32px（卡片圆角）
        'card':    '2rem',    // 32px ← IngredientCard className="...rounded-card..."
        // 源码 rounded-full = 9999px（chip、FAB、搜索框）
        'button':  '9999px',
        // 源码 rounded-2xl = Tailwind default 1rem = 16px（图片容器）
        'thumb':   '1rem',    // 16px
        // Segment 激活段
        'segment': '0.75rem', // 12px
      },

      // ═══════════════════════════════════════════════════════════════
      // 阴影 — 源码使用 shadow-sm（Tailwind default）
      // shadow-sm = 0 1px 2px 0 rgb(0 0 0 / 0.05)
      // ═══════════════════════════════════════════════════════════════
      boxShadow: {
        'card-shadow': '0px 1px 2px 0px rgba(0,0,0,0.05)',
        'nav':         '0px -10px 40px rgba(28,28,23,0.04)',
      },
    },
  },
  plugins: [],
}
