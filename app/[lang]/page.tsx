import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getFeaturedListings } from '@/lib/queries/server';
import { ListingCard } from '@/components/marketplace/ListingCard';

export const metadata = {
  title: 'BazaarHub - Afghan Marketplace',
  description: 'Buy and sell items online safely on BazaarHub, the trusted marketplace for Afghanistan.',
};

export default async function HomePage({ params }: { params: { lang: string } }) {
  const featuredListings = await getFeaturedListings();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to BazaarHub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Buy and sell items online safely. The trusted marketplace for Afghanistan.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href={`/${params.lang}/listings`}>
                Browse Listings
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${params.lang}/listings/new`}>
                Sell an Item
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.slice(0, 8).map((listing) => (
            <ListingCard key={listing.id} listing={listing} locale={params.lang} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href={`/${params.lang}/listings`}>
              View All Listings
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose BazaarHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your transactions are protected with our secure payment and messaging system.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multi-Language</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse and sell in English, Pashto, or Dari for easy communication.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Trusted Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join thousands of verified buyers and sellers in Afghanistan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
