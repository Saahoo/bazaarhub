import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '@/public/locales/en/common.json';
import psCommon from '@/public/locales/ps/common.json';
import prCommon from '@/public/locales/pr/common.json';

const resources = {
  en: { common: enCommon },
  ps: { common: psCommon },
  pr: { common: prCommon },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  lng: typeof window !== 'undefined' ? (document.documentElement.lang || 'en') : 'en',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
