export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ps', 'pr'], // ps=Pashto, pr=Dari (Persian)
  localeDetection: true,
  rtlLocales: ['ps', 'pr'], // Right-to-Left languages
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ps: 'پښتو', // Pashto
  pr: 'دری',   // Dari
};

export const getDirection = (locale: Locale): 'ltr' | 'rtl' => {
<<<<<<< HEAD
  return i18n.rtlLocales.includes(locale) ? 'rtl' : 'ltr';
=======
  return (i18n.rtlLocales as unknown as string[]).includes(locale) ? 'rtl' : 'ltr';
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
};