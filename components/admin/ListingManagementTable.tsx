'use client';

import { Listing } from '@/types/listing';
import { Button } from '@/components/ui/Button';
import { formatPrice, formatDate } from '@/lib/utils';

interface ListingManagementTableProps {
  listings: Listing[];
  onEdit?: (listing: Listing) => void;
  onDelete?: (listingId: string) => void;
  onFeature?: (listingId: string) => void;
}

export function ListingManagementTable({
  listings,
  onEdit,
  onDelete,
  onFeature,
}: ListingManagementTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Title</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Seller</th>
            <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Price</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Date</th>
            <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{listing.title_en}</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{listing.seller?.full_name || 'Unknown'}</td>
              <td className="py-3 px-4 text-right text-gray-900 dark:text-white font-semibold">
                {formatPrice(listing.price, listing.currency)}
              </td>
              <td className="py-3 px-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  listing.status === 'active' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {listing.status}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                {formatDate(listing.created_at)}
              </td>
              <td className="py-3 px-4 text-right space-x-2">
                {onEdit && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onEdit(listing)}
                  >
                    Edit
                  </Button>
                )}
                {onFeature && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onFeature(listing.id)}
                  >
                    {listing.is_featured ? 'Unfeature' : 'Feature'}
                  </Button>
                )}
                {onDelete && (
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    onClick={() => onDelete(listing.id)}
                  >
                    Delete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {listings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No listings found</p>
        </div>
      )}
    </div>
  );
}
