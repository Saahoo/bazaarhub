import { createClient } from '@/lib/supabase/server';
import { Listing, ListingFilter } from '@/types/listing';

export async function getListings(filters?: ListingFilter): Promise<Listing[]> {
  const supabase = await createClient();
  
  let query = supabase
    .from('listings')
    .select(`
      *,
      seller:profiles(full_name, avatar_url, rating, review_count, is_verified)
    `)
    .eq('status', 'active');

  if (filters?.category_id) {
    query = query.eq('category_id', filters.category_id);
  }

  if (filters?.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }

  if (filters?.min_price) {
    query = query.gte('price', filters.min_price);
  }

  if (filters?.max_price) {
    query = query.lte('price', filters.max_price);
  }

  if (filters?.condition) {
    query = query.eq('condition', filters.condition);
  }

  if (filters?.search) {
    query = query.or(`title_en.ilike.%${filters.search}%,description_en.ilike.%${filters.search}%`);
  }

  // Sorting
  const sortBy = filters?.sort_by || 'newest';
  switch (sortBy) {
    case 'price_low':
      query = query.order('price', { ascending: true });
      break;
    case 'price_high':
      query = query.order('price', { ascending: false });
      break;
    case 'popular':
      query = query.order('view_count', { ascending: false });
      break;
    case 'trending':
      query = query.order('favorite_count', { ascending: false });
      break;
    case 'newest':
    default:
      query = query.order('created_at', { ascending: false });
  }

  // Pagination
  const page = filters?.page || 1;
  const limit = filters?.limit || 20;
  const offset = (page - 1) * limit;

  const { data, error } = await query.range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching listings:', error);
    return [];
  }

  return data || [];
}

export async function getListingById(id: string): Promise<Listing | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('listings')
    .select(`
      *,
      seller:profiles(full_name, avatar_url, rating, review_count, is_verified)
    `)
    .eq('id', id)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching listing:', error);
  }

  return data || null;
}

<<<<<<< HEAD
export async function getUserListings(userId: string): Promise<Listing[]> {
=======
export async function getUserListings(_userId: string): Promise<Listing[]> {
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  return getListings({ category_id: undefined }); // Placeholder
}

export async function getFeaturedListings(): Promise<Listing[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('listings')
    .select(`
      *,
      seller:profiles(full_name, avatar_url, rating, review_count, is_verified)
    `)
    .eq('status', 'active')
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(8);

  if (error) {
    console.error('Error fetching featured listings:', error);
    return [];
  }

  return data || [];
}
