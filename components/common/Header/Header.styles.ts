import { SxProps, Theme } from "@mui/material";

// Header 容器樣式 - 現代深色版
export const headerContainerStyles: SxProps<Theme> = {
  background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
  boxShadow: "0 4px 20px rgba(30, 41, 59, 0.25)",
  borderBottom: "2px solid rgba(71, 85, 105, 0.3)",

  top: 0,
  zIndex: 100,
  transition: "all 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
    pointerEvents: "none",
  },
  "&:hover": {
    boxShadow: "0 6px 25px rgba(30, 41, 59, 0.35)",
  },
};

// Logo 容器樣式
export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

// 咖啡圖示樣式 - 配合深色背景
export const coffeeIconStyles: SxProps<Theme> = {
  fontSize: "1.8rem",
  color: "#94a3b8", // 淺灰藍色
  filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#cbd5e1",
  },
};

// 品牌名稱樣式 - 配合深色背景
export const brandNameStyles: SxProps<Theme> = {
  display: "flex",
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontWeight: 600,
  fontSize: "1.8rem",
  color: "#e2e8f0", // 淺灰色，適合深色背景
  textDecoration: "none",
  letterSpacing: "-0.01em",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#ffffff", // hover 時變純白
    transform: "translateY(-1px)",
    textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
  },
};

// 右側容器樣式
export const rightSectionStyles: SxProps<Theme> = {
  direction: "row",
  alignItems: "center",
  gap: 4,
};
