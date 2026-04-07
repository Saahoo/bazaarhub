export interface Listing {
  id: string;
  seller_id: string;
  title_en: string;
  title_ps?: string;
  title_pr?: string;
  description_en: string;
  description_ps?: string;
  description_pr?: string;
  price: number;
  currency: string; // 'AFN', 'USD', etc.
  category_id: number;
  category_name?: string;
  location: string; // e.g., "Kabul, Afghanistan"
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  is_negotiable: boolean;
  is_featured: boolean;
  images: string[]; // Array of public URLs
  thumbnail_url: string;
  created_at: string; // ISO timestamp
  updated_at: string;
  published_at: string;
  expires_at?: string;
  status: 'active' | 'draft' | 'closed' | 'sold';
  view_count: number;
  favorite_count: number;
  inquiry_count: number;
  seller?: SellerProfile;
}

export interface SellerProfile {
  id: string;
  full_name: string;
  avatar_url?: string;
  email: string;
  phone?: string;
  rating: number;
  review_count: number;
  is_verified: boolean;
  created_at: string;
}

export interface CreateListingInput {
  title_en: string;
  title_ps?: string;
  title_pr?: string;
  description_en: string;
  description_ps?: string;
  description_pr?: string;
  price: number;
  currency: string;
  category_id: number;
  location: string;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  is_negotiable?: boolean;
  images: File[];
}

export interface ListingFilter {
  category_id?: number;
  location?: string;
  min_price?: number;
  max_price?: number;
  condition?: string;
  sort_by?: 'newest' | 'price_low' | 'price_high' | 'popular' | 'trending';
  search?: string;
  page?: number;
  limit?: number;
}
