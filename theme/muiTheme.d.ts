import type { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      primary: string;
      secondary: string;
      background: string;
      divider: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: {
      default: string;
      paper: string;
      primary: string;
    };
  }

  interface PaletteOptions {
    sidebar: {
      primary: string;
      secondary: string;
      background: string;
      divider: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: {
      default: string;
      paper: string;
      primary: string;
    };
  }

  interface TypeText {
    tertiary?: string;
  }

  interface TypeBackground {
    primary: string;
  }

  interface TypographyVariant {
    logo: React.CSSProperties;
    tag: React.CSSProperties;
    article: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    logo: React.CSSProperties;
    tag: React.CSSProperties;
    article: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    tag: true;
    article: true;
  }
}
