import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { THEMES } from "@/constants";
import { ThemeName } from "@/types";
import { Storage } from "@/utils";

import { ThemeProviderType } from "./ThemeProvider.types";

export const ThemeProviderContext = createContext<ThemeProviderType>(
  {} as ThemeProviderType,
);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeName>("default");

  const themeHandleChange = async (value: ThemeName) => {
    value && setActiveTheme(value);
    await Storage.storeData("theme", value);
  };

  const getCurrentTheme = async () => {
    const currentTheme = await Storage.getData("theme");

    if (currentTheme) {
      setActiveTheme(currentTheme);
    }
  };

  useEffect(() => {
    void getCurrentTheme();
  }, []);

  return (
    <ThemeProviderContext.Provider
      value={{ activeTheme, themeHandleChange, theme: THEMES[activeTheme] }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
