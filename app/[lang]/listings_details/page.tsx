import { i18n } from '@/lib/i18n/config';

// For static export: generate static params for all locales  
export const generateStaticParams = () => {
  return i18n.locales.map(lang => ({ lang, id: 'sample' }));
};

export async function generateMetadata() {
  return {
    title: 'Listing - BazaarHub',
  };
}

export default function ListingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Listing Details</h1>
      <p>Individual listing pages coming soon.</p>
    </div>
  );
}
