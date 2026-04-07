<<<<<<< HEAD
import { i18n } from './config';

=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
export async function getTranslations(locale: string) {
  // Load translations based on locale
  try {
    const messages = await import(`@/public/locales/${locale}/common.json`);
    return messages.default;
  } catch {
    const messages = await import(`@/public/locales/en/common.json`);
    return messages.default;
  }
}

// Helper to get translated string on server
<<<<<<< HEAD
export function t(key: string, locale: string = 'en', messages?: Record<string, any>): string {
=======
export function t(key: string, _locale: string = 'en', messages?: Record<string, any>): string {
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  if (!messages) return key;
  
  const keys = key.split('.');
  let value: any = messages;
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return typeof value === 'string' ? value : key;
}
