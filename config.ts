/**
 * BazaarHub - Afghan Marketplace Platform
 * 
 * A Next.js application for buying and selling items online safely.
 * Built with TypeScript, Supabase, and Tailwind CSS.
 * 
 * Features:
 * - Multi-language support (English, Pashto, Dari)
 * - RTL/LTR text direction support
 * - Real-time messaging with Supabase
 * - Image uploads to Supabase Storage
 * - User authentication with Supabase Auth
 * - Admin dashboard for moderation
 * - Favorites and reviews system
 * - Category-based browsing and filtering
 * 
 * Getting Started:
 * 1. Copy .env.example to .env.local
 * 2. Add your Supabase credentials
 * 3. Run migrations on your Supabase database
 * 4. npm install && npm run dev
 */

export const APP_NAME = 'BazaarHub';
export const APP_DESCRIPTION = 'Buy and sell items online safely - Afghan Marketplace';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const LOCALES = ['en', 'ps', 'pr'] as const;
export const DEFAULT_LOCALE = 'en';

export const IMAGE_LIMITS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_FILES: 10,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

export const LISTING_LIMITS = {
  MIN_PRICE: 1,
  MIN_TITLE_LENGTH: 5,
  MAX_TITLE_LENGTH: 200,
  MIN_DESCRIPTION_LENGTH: 20,
  MAX_DESCRIPTION_LENGTH: 5000,
};

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
};

export const CATEGORIES = [
  { id: 1, name_en: 'Electronics', name_ps: 'الیکترونکس', name_pr: 'الکترونیکی' },
  { id: 2, name_en: 'Furniture', name_ps: 'فرنیچر', name_pr: 'مبلمان' },
  { id: 3, name_en: 'Clothing', name_ps: 'جامے', name_pr: 'لباس' },
  { id: 4, name_en: 'Books', name_ps: 'کتابونه', name_pr: 'کتاب‌ها' },
  { id: 5, name_en: 'Sports', name_ps: 'ورزش', name_pr: 'ورزش' },
  { id: 6, name_en: 'Home & Garden', name_ps: 'کور او باغ', name_pr: 'خانه و باغ' },
  { id: 7, name_en: 'Vehicles', name_ps: 'موټرونه', name_pr: 'خودروها' },
  { id: 8, name_en: 'Services', name_ps: 'خدمات', name_pr: 'خدمات' },
];
