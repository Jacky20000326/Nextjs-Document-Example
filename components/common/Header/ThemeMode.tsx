"use client";

import { useTheme } from "@/hooks/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeType } from "@/store/common/types";
export const ThemeMode = () => {
  const { theme, toggleTheme } = useTheme();

  const Icon = theme === ThemeType.LIGHT ? LightModeIcon : DarkModeIcon;
  return (
    <Icon
      fontSize="small"
      onClick={toggleTheme}
      sx={{
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "primary.main",
        },
      }}
    />
  );
};
