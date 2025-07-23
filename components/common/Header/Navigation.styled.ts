import { SxProps, Theme } from "@mui/material";

export const StyledLink: SxProps<Theme> = {
  color: "#b5b5b5", // 淺灰色，適合深色背景
  fontWeight: 700,
  fontSize: "1rem",
  letterSpacing: "0.02em",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    color: "#ffffff", // hover 時變純白
    transform: "translateY(-1px)",
    textShadow: "2px 2px 3px rgba(0,0,0,0.4)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: "-4px",
    left: "50%",
    backgroundColor: "#94a3b8", // 底線顏色改為淺灰藍
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover:after": {
    width: "100%",
    backgroundColor: "#cbd5e1", // hover 時底線變更淺
  },
};
