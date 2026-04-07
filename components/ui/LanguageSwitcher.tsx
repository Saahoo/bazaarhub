'use client';

import { useRouter, usePathname } from 'next/navigation';
import { i18n, Locale, localeNames, getDirection } from '@/lib/i18n/config';
import { useState, useEffect } from 'react';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    // Update HTML direction attribute
    document.documentElement.dir = getDirection(newLocale);
    document.documentElement.lang = newLocale;
    
    // Replace locale in URL
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsOpen(false);
  };

  // Set initial direction on mount
  useEffect(() => {
    document.documentElement.dir = getDirection(currentLocale);
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 
                   dark:hover:bg-gray-800 transition-colors"
        aria-label="Switch language"
      >
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 
                        rounded-lg shadow-lg border dark:border-gray-700 z-50
                        [dir=rtl]:left-0 [dir=rtl]:right-auto">
          {i18n.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 
                         dark:hover:bg-gray-700 transition-colors
                         ${locale === currentLocale ? 'text-primary font-medium' : ''}
                         [dir=rtl]:text-right`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}