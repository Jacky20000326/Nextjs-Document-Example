import { SxProps, Theme } from "@mui/material";

// Header 容器樣式
export const headerContainerStyles: SxProps<Theme> = {
  background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #D2B48C 100%)",
  boxShadow: "0 4px 20px rgba(139, 69, 19, 0.15)",
  borderBottom: "2px solid rgba(160, 82, 45, 0.3)",
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
      "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
    pointerEvents: "none",
  },
};

// Logo 容器樣式
export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

// 咖啡圖示樣式
export const coffeeIconStyles: SxProps<Theme> = {
  fontSize: "1.8rem",
  color: "#F5DEB3",
  filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
};

// 品牌名稱樣式
export const brandNameStyles: SxProps<Theme> = {
  display: "flex",
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontWeight: 600,
  fontSize: "1.8rem",
  color: "#F5DEB3",
  textDecoration: "none",
  letterSpacing: "-0.01em",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#FFFACD",
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
