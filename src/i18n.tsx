import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const env = import.meta.env;

/**
 * define custom backend path
 * start from /public folder
 */
const backend = new Backend({
  loadPath: `/locales/{{lng}}/{{ns}}.json`,
});

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    initImmediate: true,
    debug: env.MW_DEBUG === 'true',
    supportedLngs: ['en', 'it', 'fr', 'es', 'de'], // array of allowed languages
    load: 'languageOnly', // language loading strategy
    lowerCaseLng: true, // parse everything to lowercase
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    ignoreJSONStructure: true, // it a key is not found as nested key, it will try to lookup as flat key
  });

export default i18n;
