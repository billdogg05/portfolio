import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './langs/en.json';
import uzLang from './langs/uz.json';
import ruLang from './langs/ru.json';

const supportedLanguages = ['en', 'ru', 'uz']

function detectLanguage() {
  const saved = localStorage.getItem('lang')
  if (saved && supportedLanguages.includes(saved)) {
    return saved
  }

  const systemLang = navigator.language?.split('-')[0]
  if (supportedLanguages.includes(systemLang)) {
    return systemLang
  }

  return 'en'
}

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
    lng: detectLanguage(),
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})
document.documentElement.lang = i18n.language

export default i18n;