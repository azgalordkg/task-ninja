import { SchemeType, ThemeName } from "@/types/themes";

export interface ThemeProviderType {
  activeTheme: ThemeName;
  themeHandleChange: (value: ThemeName) => Promise<void>;
  theme: SchemeType;
}
