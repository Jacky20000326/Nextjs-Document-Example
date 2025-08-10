import { useAtom } from "jotai";
import { themeAtom } from "@/store/common/atoms";
import { ThemeType } from "@/store/common/types";

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT);
  };

  return { theme, toggleTheme };
};
