'use server';

<<<<<<< HEAD
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { listingSchema } from '@/lib/validations/listing.schema';

export async function createListing(formData: FormData) {
  const supabase = createClient();
  
  // 1. Auth check
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Authentication required' };
  }
  
  // 2. Validate input
  const validatedFields = listingSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: Number(formData.get('price')),
    category_id: Number(formData.get('category_id')),
    // ... other fields
  });
  
  if (!validatedFields.success) {
    return { 
      error: 'Validation failed', 
      errors: validatedFields.error.flatten().fieldErrors 
    };
  }
  
  // 3. Handle image uploads to Supabase Storage
  const images = formData.getAll('images') as File[];
  const imageUrls: string[] = [];
  
  for (const image of images) {
    if (image.size > 5 * 1024 * 1024) { // 5MB limit
      return { error: `Image ${image.name} exceeds 5MB limit` };
    }
    
    const fileName = `${user.id}/${Date.now()}-${image.name}`;
    const { error: uploadError, data } = await supabase.storage
      .from('listings')
      .upload(fileName, image, {
        cacheControl: '3600',
        upsert: false,
      });
    
    if (uploadError) {
      return { error: `Failed to upload ${image.name}` };
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('listings')
      .getPublicUrl(fileName);
    
    imageUrls.push(publicUrl);
  }
  
  // 4. Insert listing
  const { error: dbError } = await supabase
    .from('listings')
    .insert({
      seller_id: user.id,
      ...validatedFields.data,
      images: imageUrls,
      thumbnail_url: imageUrls[0],
      published_at: new Date().toISOString(),
    });
  
  if (dbError) {
    return { error: 'Failed to create listing' };
  }
  
  // 5. Revalidate and redirect
  revalidatePath('/listings');
  redirect('/dashboard/listings');
}

export async function updateListingViews(listingId: string) {
  const supabase = createClient();
  
  // Increment view count atomically
  await supabase.rpc('increment_listing_views', { 
    listing_id: listingId 
  });
=======
// Note: For static export on GitHub Pages, Server Actions have limited functionality
// Use client-side Supabase client for auth and data operations instead

export async function createListing() {
  try {
    // This is a stub for static export
    // Actual implementation should be done on the client side with Supabase client
    return { error: 'Please use client-side functions for listing creation' };
  } catch (error) {
    return { error: 'An error occurred' };
  }
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
}