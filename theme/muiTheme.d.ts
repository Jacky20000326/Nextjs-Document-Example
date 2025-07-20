import type { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      title: string;
    };
  }
  interface PaletteOptions {
    sidebar: {
      title: string;
    };
  }
}
