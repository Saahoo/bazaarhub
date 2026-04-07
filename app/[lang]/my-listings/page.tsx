import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'My Listings - BazaarHub',
  description: 'Manage your listings on BazaarHub',
};

export default function MyListingsPage({ params }: { params: { lang: string } }) {
  // TODO: Fetch user's listings from database
  const listings: any[] = [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Listings
        </h1>
        <Button asChild size="lg">
          <Link href={`/${params.lang}/listings/new`}>
            Post New Listing
          </Link>
        </Button>
      </div>

      {listings.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
<<<<<<< HEAD
            You haven't posted any listings yet.
=======
            You haven&apos;t posted any listings yet.
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
          </p>
          <Button asChild>
            <Link href={`/${params.lang}/listings/new`}>
              Post Your First Item
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
              {/* Listing Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {listing.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {listing.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {listing.price} AFN
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/${params.lang}/listings/${listing.id}/edit`}>
                        Edit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
