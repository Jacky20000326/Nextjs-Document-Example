import { createTheme } from "@mui/material/styles";
import { Geist_Mono, Inter, Pacifico } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A67F5D", // 溫暖的咖啡色
      contrastText: "#F5E6D3", // 米白色文字
    },
    secondary: {
      main: "#899B8F", // 柔和的灰綠色
      light: "#A1B0A7", // 淺灰綠色
      dark: "#6F7F75", // 深灰綠色
    },
    background: {
      default: "#003049",
      primary: "#2b2d42",
      paper: "#332D28", // 稍淺的咖啡色背景
    },
    sidebar: {
      primary: "#E6D5C7", // 淺米色文字
      secondary: "#B4A193", // 灰棕色次要文字
      background: "#2C2723", // 與主背景相同
      divider: "#4A413A", // 深棕色分隔線
    },
    text: {
      primary: "#A67F5D",
      secondary: "#E6D5C7",
      tertiary: "#828282",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    logo: {
      fontFamily: pacifico.style.fontFamily,
    },
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body1: {
      fontFamily: geistMono.style.fontFamily,
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
    body2: {
      fontFamily: geistMono.style.fontFamily,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    tag: {
      fontSize: "1rem",
      fontFamily: geistMono.style.fontFamily,
    },
    article: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "2rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid",
          borderColor: "rgba(139, 99, 70, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          transition: "all 0.3s ease",
          "&.MuiButton-contained": {
            boxShadow: "0 2px 8px rgba(139, 99, 70, 0.15)",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(139, 99, 70, 0.25)",
              transform: "translateY(-1px)",
            },
          },
          "&.MuiButton-outlined": {
            borderWidth: "1.5px",
            "&:hover": {
              borderWidth: "1.5px",
              backgroundColor: "rgba(139, 99, 70, 0.05)",
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            textDecoration: "none",
            opacity: 0.85,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(139, 99, 70, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(139, 99, 70, 0.12)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.3s ease",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 0.6,
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B6346", // 溫暖的深咖啡色
      light: "#A67F5D", // 中咖啡色
      dark: "#704F38", // 更深的咖啡色
      contrastText: "#FFF", // 純白色文字
    },
    secondary: {
      main: "#7D8E83", // 柔和的灰綠色
      light: "#99A89F", // 淺灰綠色
      dark: "#5F6E64", // 深灰綠色
    },
    background: {
      default: "#F5E6D3", // 溫暖的米色背景
      paper: "#FFFFFF", // 純白色背景
    },
    sidebar: {
      primary: "#5C4332", // 深咖啡色文字
      secondary: "#8B7355", // 中咖啡色次要文字
      background: "#FFF9F0", // 更淺的米色背景
      divider: "#E6D5C7", // 淺咖啡色分隔線
    },
  },
});
