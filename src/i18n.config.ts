import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { de, en, fr, ru } from "@/translations";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  // es: {
  //   translation: es,
  // },
  fr: {
    translation: fr,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init(
  {
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  },
  err => {
    if (err) {
      console.error("i18next initialization error:", err);
    }
  },
);

export default i18n;
