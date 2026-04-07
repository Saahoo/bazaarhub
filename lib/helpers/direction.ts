export async function getDirection(locale: string): Promise<'ltr' | 'rtl'> {
  const rtlLocales = ['ps', 'pr', 'ar', 'he', 'ur'];
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}
