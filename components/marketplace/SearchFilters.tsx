'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterOptions {
  categories: Array<{ id: number; name: string }>;
  locations: Array<{ id: string; name: string }>;
  priceRanges: Array<{ label: string; min: number; max: number }>;
}

export function SearchFilters({ options }: { options: FilterOptions }) {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    minPrice: searchParams.get('min_price') || '',
    maxPrice: searchParams.get('max_price') || '',
    condition: searchParams.get('condition') || '',
    sortBy: searchParams.get('sort') || 'newest',
  });

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    
    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      category: '', location: '', minPrice: '', maxPrice: '', 
      condition: '', sortBy: 'newest'
    });
    router.push('/listings');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border 
                    dark:border-gray-700 space-y-4">
      
      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.category')}
        </label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 
                     focus:ring-primary-500 focus:border-primary-500
                     dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">{t('filters.all_categories')}</option>
          {options.categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.min_price')}
          </label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            placeholder="0"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 
                       focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.max_price')}
          </label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            placeholder="Any"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 
                       focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.location')}
        </label>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 
                     focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">{t('filters.any_location')}</option>
          {options.locations.map((loc) => (
            <option key={loc.id} value={loc.id}>{loc.name}</option>
          ))}
        </select>
      </div>

      {/* Condition */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.condition')}
        </label>
        <div className="flex flex-wrap gap-2">
          {['new', 'like-new', 'good', 'fair'].map((cond) => (
            <button
              key={cond}
              onClick={() => setFilters({ 
                ...filters, 
                condition: filters.condition === cond ? '' : cond 
              })}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors
                         ${filters.condition === cond 
                           ? 'bg-primary-100 border-primary-300 text-primary-700 dark:bg-primary-900/30' 
                           : 'border-gray-300 hover:border-gray-400 dark:border-gray-600'}`}
            >
              {t(`condition.${cond}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.sort_by')}
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 
                     focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="newest">{t('sort.newest')}</option>
          <option value="price_low">{t('sort.price_low')}</option>
          <option value="price_high">{t('sort.price_high')}</option>
          <option value="popular">{t('sort.popular')}</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={applyFilters}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white 
                     font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {t('filters.apply')}
        </button>
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 transition-colors"
        >
          {t('filters.clear')}
        </button>
      </div>
    </div>
  );
}