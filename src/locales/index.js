/**
 * @format
 * @flow
 */

import {I18nManager} from 'react-native';
import i18n from 'i18next';
import * as RNLocalize from 'react-native-localize';

// Import all locales
import en from './en';
import ru from './ru';

const translations = {
  en,
  ru,
};

const {languageTag, isRTL} = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations),
);

I18nManager.allowRTL(isRTL);

const languageDetector = {
  type: 'languageDetector',
  detect: () => languageTag,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n.use(languageDetector).init({
  fallbackLng: 'en',

  resources: Object.keys(translations).reduce((acc, cur) => {
    acc[cur] = {translation: translations[cur]};
    return acc;
  }, {}),

  debug: true,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
