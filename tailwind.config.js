/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 主色调系统
        primary: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5b9fc",
          400: "#7c93f8",
          500: "#5a72f3",
          600: "#4f58e8",
          700: "#4247d4",
          800: "#383dab",
          900: "#1a1a2e",
          main: "#1a1a2e",
        },
        // 辅助色系统
        secondary: {
          50: "#f4f7fb",
          100: "#e8f0f6",
          200: "#c5d9ea",
          300: "#91bad3",
          400: "#5694b8",
          500: "#3876a0",
          600: "#2a5f85",
          700: "#234e6d",
          800: "#1f445c",
          900: "#16213e",
          main: "#16213e",
        },
        // 中性色系统
        neutral: {
          0: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        // 背景色系统
        background: {
          default: "#ffffff",
          paper: "#f8fafc",
          secondary: "#f1f5f9",
          dark: "#0f172a",
          "dark-paper": "#1e293b",
        },
        // 文字色系统
        text: {
          primary: "#1a1a2e",
          secondary: "#4a5568",
          tertiary: "#718096",
          inverse: "#ffffff",
        },
        // 功能色系统
        success: {
          50: "#f0fdf4",
          500: "#22c55e",
          600: "#16a34a",
        },
        warning: {
          50: "#fffbeb",
          500: "#f59e0b",
          600: "#d97706",
        },
        error: {
          50: "#fef2f2",
          500: "#ef4444",
          600: "#dc2626",
        },
        info: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      // 渐变配置
      gradientColorStops: {
        "primary-gradient": ["#1a1a2e", "#16213e"],
        "secondary-gradient": ["#667eea", "#764ba2"],
        "warm-gradient": ["#ff9a9e", "#fecfef"],
        "cool-gradient": ["#a8edea", "#fed6e3"],
      },
      // 字体系统
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
        display: ["var(--font-geist-sans)", "Inter Display", "sans-serif"],
      },
      // 字体大小系统
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      // 间距系统
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      // 圆角系统
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
      // 阴影系统
      boxShadow: {
        soft: "0 2px 8px 0 rgba(0, 0, 0, 0.05)",
        medium: "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
        strong: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px 0 rgba(90, 114, 243, 0.3)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      },
      // 动画时长
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
      },
      // 动画配置
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        scaleIn: "scaleIn 0.3s ease-out",
        "bounce-soft": "bounce-soft 2s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      // 关键帧定义
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      // 背景图案
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      // 响应式断点
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
