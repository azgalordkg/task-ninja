import "moment/locale/ru";
import "moment/locale/fr";
import "moment/locale/de";
import "moment/locale/it";

import moment from "moment";
import React, { createContext, FC, PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NativeModules, Platform } from "react-native";

import { localeCustomDate } from "@/translations";
import { Storage } from "@/utils";

import { LanguageProviderType } from "./LanguageProvider.types";

export const LanguageProviderContext = createContext<LanguageProviderType>(
  {} as LanguageProviderType,
);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const getSystemLanguage = () => {
    if (Platform.OS === "ios") {
      return (
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      );
    }

    return NativeModules.I18nManager.localeIdentifier;
  };

  const handleChangeLocale = (value: string) => {
    if (value) {
      moment.locale(value);
      moment.updateLocale(value, {
        monthsShort: localeCustomDate[value].monthsShort,
        weekdaysShort: localeCustomDate[value].weekdaysShort,
        weekdays: localeCustomDate[value].weekdays,
      });
    }
  };

  const getCurrentLanguage = async () => {
    const selectedLanguage = await Storage.getData("language");
    const systemLanguage = await getSystemLanguage().split(/[-_]/)[0];

    const supportedLanguages = ["de", "fr", "es", "ru", "en"];
    const languageToUse = await (supportedLanguages.includes(selectedLanguage)
      ? selectedLanguage
      : systemLanguage || "en");

    await changeLanguage(languageToUse);
    await handleChangeLocale(languageToUse);

    return languageToUse;
  };

  useEffect(() => {
    void getCurrentLanguage();
  }, [language]);

  const languageHandleChange = async (value: string) => {
    await Storage.storeData("language", value);
    await changeLanguage(value);
    await handleChangeLocale(value);
  };

  return (
    <LanguageProviderContext.Provider value={{ languageHandleChange }}>
      {children}
    </LanguageProviderContext.Provider>
  );
};
