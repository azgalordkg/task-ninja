import { useContext } from "react";

import { DARK_THEMES_LIST } from "@/constants";

import { ThemeProviderContext } from "../providers";

export const useThemeContext = () => {
  const { activeTheme, themeHandleChange, theme } =
    useContext(ThemeProviderContext);

  const isDark = DARK_THEMES_LIST.includes(activeTheme);

  return {
    activeTheme,
    themeHandleChange,
    theme,
    isDark,
  };
};
