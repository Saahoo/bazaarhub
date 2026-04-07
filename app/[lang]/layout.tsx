import { Noto_Naskh_Arabic, Vazirmatn } from 'next/font/google';
<<<<<<< HEAD
import { getDirection } from '@/lib/i18n/config';
=======
import { getDirection, i18n } from '@/lib/i18n/config';
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
import { Header } from '@/components/layout/Header';
import { RootProvider } from '@/components/providers/RootProvider';
import type { ReactNode } from 'react';

const noto = Noto_Naskh_Arabic({ 
  subsets: ['arabic'], 
  weight: ['400', '700'],
  variable: '--font-noto',
  display: 'swap',
});

const vazir = Vazirmatn({ 
  subsets: ['arabic'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-vazir',
  display: 'swap',
});

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

<<<<<<< HEAD
=======
export function generateStaticParams() {
  return i18n.locales.map(lang => ({
    lang,
  }));
}

>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
export default function LangLayout({ children, params: { lang } }: LangLayoutProps) {
  const fontClass = lang === 'ps' ? noto.variable : vazir.variable;
  
  return (
    <div lang={lang} dir={getDirection(lang as any)} className={fontClass}>
      <RootProvider>
        <Header />
        {children}
      </RootProvider>
    </div>
  );
}