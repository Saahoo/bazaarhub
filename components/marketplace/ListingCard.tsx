'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Listing } from '@/types/listing';
import { formatPrice, formatLocation } from '@/lib/utils';

interface ListingCardProps {
  listing: Listing;
  locale: string;
}

export function ListingCard({ listing, locale }: ListingCardProps) {
  const { t } = useTranslation();
  const isRTL = locale === 'ps' || locale === 'pr';
  
  // Get localized content
<<<<<<< HEAD
  const title = listing[`title_${locale}`] || listing.title_en;
  const description = listing[`description_${locale}`] || listing.description_en;
=======
  const title = (listing as any)[`title_${locale}`] || listing.title_en;
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)

  return (
    <Link 
      href={`/${locale}/listings/${listing.id}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm 
                 hover:shadow-lg transition-all duration-200 overflow-hidden
                 border border-gray-100 dark:border-gray-700"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.thumbnail_url || listing.images[0]}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        
        {/* Badges */}
        <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} flex gap-2`}>
          {listing.is_featured && (
            <span className="px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
              {t('listing.featured')}
            </span>
          )}
          {listing.condition === 'new' && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
              {t('condition.new')}
            </span>
          )}
        </div>
        
        {/* Favorite Button */}
        <button
          className={`absolute bottom-3 ${isRTL ? 'left-3' : 'right-3'} 
                     p-2 bg-white/90 dark:bg-gray-800/90 rounded-full 
                     hover:bg-white dark:hover:bg-gray-700 transition-colors
                     shadow-sm`}
          onClick={(e) => {
            e.preventDefault();
            // Handle favorite toggle
          }}
          aria-label={t('listing.add_to_favorites')}
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
          {title}
        </h3>
        
        <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-2">
          {formatPrice(listing.price, listing.currency, locale)}
          {listing.is_negotiable && (
            <span className="text-sm font-normal text-gray-500 ml-1">
              {t('listing.negotiable')}
            </span>
          )}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {formatLocation(listing.location, locale)}
          </span>
          <span>•</span>
          <span>{new Date(listing.created_at).toLocaleDateString(locale)}</span>
        </div>
      </div>
    </Link>
  );
}