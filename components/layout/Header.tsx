'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { SearchBar } from '@/components/marketplace/SearchBar';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { i18n, type Locale } from '@/lib/i18n/config';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Extract language from pathname with validation
  const pathSegments = pathname.split('/');
  const lang = (i18n.locales.includes(pathSegments[1] as Locale) ? pathSegments[1] : i18n.defaultLocale) as Locale;
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 
                       backdrop-blur-md border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">BazaarHub</span>
          </Link>
          
          {/* Search Bar - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher currentLocale={lang} />
            
            {/* Mobile Search Toggle */}
            <button className="md:hidden p-2" aria-label="Search">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Auth Buttons - Responsive */}
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Search - Expanded when toggled */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-800">
            <SearchBar />
          </div>
        )}
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" 
             onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-16 w-64 bg-white dark:bg-gray-900 
                          h-full p-4 shadow-xl"
               onClick={(e) => e.stopPropagation()}>
            {/* Mobile navigation links */}
            <nav className="space-y-2">
              <Link href={`/${lang}/listings`} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Browse
              </Link>
              <Link href={`/${lang}/listings/new`} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Sell Item
              </Link>
              <Link href={`/${lang}/dashboard`} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Dashboard
              </Link>
              <hr className="my-2" />
              <Link href="/auth/login" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </Link>
              <Link href="/auth/signup" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}