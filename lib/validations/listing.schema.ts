import { z } from 'zod';

export const listingSchema = z.object({
  title_en: z.string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  title_ps: z.string().optional(),
  title_pr: z.string().optional(),
  description_en: z.string()
    .min(20, 'Description must be at least 20 characters')
    .max(5000, 'Description must be less than 5000 characters'),
  description_ps: z.string().optional(),
  description_pr: z.string().optional(),
  price: z.number()
    .positive('Price must be greater than 0')
    .min(1, 'Price must be at least 1'),
  currency: z.string().default('AFN'),
  category_id: z.number().positive('Select a valid category'),
  location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be less than 100 characters'),
  condition: z.enum(['new', 'like-new', 'good', 'fair', 'poor']),
  is_negotiable: z.boolean().default(false),
  is_featured: z.boolean().default(false).optional(),
});

export const updateListingSchema = listingSchema.partial();

export const createMessageSchema = z.object({
  content: z.string()
    .min(1, 'Message cannot be empty')
    .max(5000, 'Message must be less than 5000 characters'),
  conversation_id: z.string().uuid('Invalid conversation ID'),
});

export const filterSchema = z.object({
  category_id: z.number().optional(),
  location: z.string().optional(),
  min_price: z.number().optional(),
  max_price: z.number().optional(),
  condition: z.enum(['new', 'like-new', 'good', 'fair', 'poor']).optional(),
  sort_by: z.enum(['newest', 'price_low', 'price_high', 'popular', 'trending']).default('newest'),
  search: z.string().optional(),
  page: z.number().default(1),
  limit: z.number().default(20),
});

export const profileSchema = z.object({
  full_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  phone: z.string().optional(),
  avatar_url: z.string().url('Invalid URL').optional(),
});

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().max(500, 'Comment must be less than 500 characters').optional(),
});

export type ListingSchema = z.infer<typeof listingSchema>;
export type UpdateListingSchema = z.infer<typeof updateListingSchema>;
export type CreateMessageSchema = z.infer<typeof createMessageSchema>;
export type FilterSchema = z.infer<typeof filterSchema>;
export type ProfileSchema = z.infer<typeof profileSchema>;
export type ReviewSchema = z.infer<typeof reviewSchema>;
