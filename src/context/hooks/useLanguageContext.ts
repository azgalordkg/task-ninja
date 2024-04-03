import { useContext } from "react";

import { LanguageProviderContext } from "@/context/providers/LanguageProvider";

export const useLanguageContext = () => {
  const { languageHandleChange } = useContext(LanguageProviderContext);

  return {
    languageHandleChange,
  };
};
