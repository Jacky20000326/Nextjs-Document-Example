"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { useTheme } from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/theme/theme";
import { ThemeType } from "@/store/common/types";

interface MUIThemeProviderProps {
  children: React.ReactNode;
}

export default function MUIThemeProvider({ children }: MUIThemeProviderProps) {
  const { theme: themeType } = useTheme();
  const theme = themeType === ThemeType.LIGHT ? lightTheme : darkTheme;
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
