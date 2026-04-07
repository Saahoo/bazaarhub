'use client';

import { useState, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { i18n, type Locale } from '@/lib/i18n/config';

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [isLoading, setIsLoading] = useState(false);
  
  // Extract locale from pathname
  const pathSegments = pathname.split('/');
  const currentLang = (i18n.locales.includes(pathSegments[1] as Locale) ? pathSegments[1] : i18n.defaultLocale) as Locale;

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      router.push(`/${currentLang}/listings`);
      return;
    }

    setIsLoading(true);
    const params = new URLSearchParams(searchParams);
    params.set('search', search);
    params.set('page', '1');
    router.push(`/${currentLang}/listings?${params.toString()}`);
    setIsLoading(false);
  }, [search, searchParams, router, currentLang]);

  const handleClear = () => {
    setSearch('');
    router.push(`/${currentLang}/listings`);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white
                     dark:bg-gray-800 dark:border-gray-600 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {search && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <Button type="submit" isLoading={isLoading}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Button>
    </form>
  );
}
