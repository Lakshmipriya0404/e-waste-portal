import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from 'C:/Users/purva/Desktop/e-waste-portal/frontend/src/locales/en/translation.json';
import hinTranslation from 'C:/Users/purva/Desktop/e-waste-portal/frontend/src/locales/hin/translation.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'hin',
  resources: {
    en: {
      translation: enTranslation,
    },
    hin: {
      translation: hinTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;