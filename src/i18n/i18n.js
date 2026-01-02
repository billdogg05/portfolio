import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './langs/en.json';
import uzLang from './langs/uz.json';
import ruLang from './langs/ru.json';

const resources = {
  en: {
    translation: enLang
  },
  uz: {
    translation: uzLang
  },
  ru: {
    translation: ruLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;