import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en";
import indonesian from "./locales/indonesian";
import japanese from "./locales/japanese";
import russian from "./locales/russian";
import spanishTranslaction from "./locales/spanish";
import zhTranslation from "./locales/zh";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  spanish: {
    translation: spanishTranslaction,
  },
  russian: {
    translation: russian,
  },
  indonesian: {
    translation: indonesian,
  },
  japanese: {
    translation: japanese,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "zh",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
