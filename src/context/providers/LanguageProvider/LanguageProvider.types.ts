export interface LanguageProviderType {
  languageHandleChange: (value: string) => Promise<void>;
}
