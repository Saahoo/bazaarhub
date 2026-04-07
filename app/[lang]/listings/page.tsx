'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SearchBar } from '@/components/marketplace/SearchBar';
import { SearchFilters } from '@/components/marketplace/SearchFilters';
import { ListingCard } from '@/components/marketplace/ListingCard';

export default function ListingsPage({ params }: { params: { lang: string } }) {
  // Filter options
  const filterOptions = {
    categories: [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Furniture' },
      { id: 3, name: 'Clothing' },
      { id: 4, name: 'Books' },
      { id: 5, name: 'Vehicles' },
      { id: 6, name: 'Real Estate' },
      { id: 7, name: 'Sports' },
      { id: 8, name: 'Other' },
    ],
    locations: [
      { id: 'kabul', name: 'Kabul' },
      { id: 'herat', name: 'Herat' },
      { id: 'kandahar', name: 'Kandahar' },
      { id: 'mazar', name: 'Mazar-e-Sharif' },
      { id: 'jalalabad', name: 'Jalalabad' },
    ],
    priceRanges: [
      { label: 'Under 10,000 AFN', min: 0, max: 10000 },
      { label: '10,000 - 50,000 AFN', min: 10000, max: 50000 },
      { label: '50,000 - 100,000 AFN', min: 50000, max: 100000 },
      { label: '100,000 - 500,000 AFN', min: 100000, max: 500000 },
      { label: 'Over 500,000 AFN', min: 500000, max: 10000000 },
    ],
  };

  // TODO: Fetch listings from API based on filters
  const listings: any[] = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Search Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <SearchBar />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <SearchFilters options={filterOptions} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Browse Listings
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-400">
                  {listings.length} results
                </span>
                <Button asChild size="lg">
                  <Link href={`/${params.lang}/listings/new`}>
                    Post Item
                  </Link>
                </Button>
              </div>
            </div>

            {/* Listings Grid */}
            {listings.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No listings found. Be the first to post!
                </p>
                <Button asChild>
                  <Link href={`/${params.lang}/listings/new`}>
                    Post an Item
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <ListingCard 
                    key={listing.id} 
                    listing={listing}
                    locale={params.lang}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}