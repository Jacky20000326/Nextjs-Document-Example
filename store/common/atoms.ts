import { atom } from "jotai";
import { ThemeType } from "./types";

export const themeAtom = atom<ThemeType>(ThemeType.LIGHT);
