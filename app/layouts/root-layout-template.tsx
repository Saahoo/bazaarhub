import { Metadata } from 'next';
import { ReactNode } from 'react';
import { getDirection } from '@/lib/helpers/direction';

interface LayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
<<<<<<< HEAD
  const direction = await getDirection(params.lang);
  
=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  return {
    title: 'BazaarHub - Afghan Marketplace',
    description: 'Buy and sell items online safely on BazaarHub',
    other: {
      'lang': params.lang,
    },
  };
}

export default async function Layout({ children, params }: LayoutProps) {
  const direction = await getDirection(params.lang);

  return (
    <html lang={params.lang} dir={direction}>
      <body>
        {children}
      </body>
    </html>
  );
}
