import { SxProps, Theme, alpha } from "@mui/material";

export const headerContainerStyles: SxProps<Theme> = {
  backgroundColor: "background.default",
  boxShadow: "0 4px 20px rgba(30, 41, 59, 0.25)",
  borderBottom: "1px solid",
  borderColor: "rgba(230, 213, 199, 0.3)", // sidebar.primary with 30% opacity
};

// Logo 容器樣式
export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const coffeeIconStyles: SxProps<Theme> = {
  fontSize: "1.8rem",
  color: "#94a3b8", // 淺灰藍色
  filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#cbd5e1",
  },
};

export const brandNameStyles: SxProps<Theme> = {
  display: "flex",
  fontWeight: 600,
  fontSize: "1.8rem",
  color: "text.secondary",
  textDecoration: "none",
};

// 右側容器樣式
export const rightSectionStyles: SxProps<Theme> = {
  direction: "row",
  alignItems: "center",
  gap: 4,
};
