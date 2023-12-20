// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHRBackend from 'i18next-xhr-backend';

i18n
  .use(XHRBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  });

export default i18n;
