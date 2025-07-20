import type { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      primary: string;
      secondary: string;
      background: string;
      divider: string;
    };
  }
  interface PaletteOptions {
    sidebar: {
      primary: string;
      secondary: string;
      background: string;
      divider: string;
    };
  }
}
