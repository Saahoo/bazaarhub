import Image from 'next/image';
import { getListingById } from '@/lib/queries/server';
import { formatPrice } from '@/lib/utils';
import { Heart, AlertCircle, CheckCircle } from 'lucide-react';

export async function generateMetadata({ 
  params: { id } 
}: { params: { lang: string; id: string } }) {
  const listing = await getListingById(id);
  
  if (!listing) {
    return {
      title: 'Listing Not Found - BazaarHub',
    };
  }
  
  return {
    title: `${listing.title_en} - BazaarHub`,
    description: listing.description_en.slice(0, 160),
    openGraph: {
      title: listing.title_en,
      description: listing.description_en,
      images: [listing.thumbnail_url || listing.images[0]],
    },
  };
}

export default async function ListingPage({
  params: { lang, id }
}: {
  params: { lang: string; id: string }
}) {
  const listing = await getListingById(id);
  
  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Listing Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">This listing may have been removed or is no longer available.</p>
          </div>
        </div>
      </div>
    );
  }
  
  const isRTL = lang === 'ps' || lang === 'pr';
  const title = listing[`title_${lang as 'en' | 'ps' | 'pr'}`] || listing.title_en;
  const description = listing[`description_${lang as 'en' | 'ps' | 'pr'}`] || listing.description_en;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Images Section */}
        <div className="lg:col-span-2">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4">
            <Image
              src={listing.thumbnail_url || listing.images[0]}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            {listing.is_featured && (
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
          </div>
          
          {/* Additional Images */}
          {listing.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {listing.images.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={img}
                    alt={`${title} ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Info Section */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            {/* Title and Price */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {formatPrice(listing.price, listing.currency)}
            </p>
            
            {/* Details Grid */}
            <div className="space-y-3 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Condition</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">{listing.condition}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{listing.location}</p>
              </div>
              {listing.is_negotiable && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Price Negotiable</p>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                Contact Seller
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition">
                <Heart className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>
          
          {/* Seller Info */}
          {listing.seller && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Sold by</p>
              <div className="flex items-center gap-3">
                {listing.seller.avatar_url && (
                  <Image
                    src={listing.seller.avatar_url}
                    alt={listing.seller.full_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{listing.seller.full_name}</p>
                  <p className="text-xs text-gray-500">
                    {listing.seller.rating.toFixed(1)} ⭐ ({listing.seller.review_count})
                  </p>
                </div>
                {listing.seller.is_verified && (
                  <CheckCircle className="h-4 w-4 text-blue-600 ml-auto" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
}