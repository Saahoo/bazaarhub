export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          phone: string | null
          bio: string | null
          rating: number
          review_count: number
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          avatar_url?: string | null
          phone?: string | null
          bio?: string | null
          rating?: number
          review_count?: number
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          phone?: string | null
          bio?: string | null
          rating?: number
          review_count?: number
          is_verified?: boolean
          updated_at?: string
        }
      }
      listings: {
        Row: {
          id: string
          seller_id: string
          title_en: string
          title_ps: string | null
          title_pr: string | null
          description_en: string
          description_ps: string | null
          description_pr: string | null
          price: number
          currency: string
          category_id: number
          location: string
          condition: string
          is_negotiable: boolean
          is_featured: boolean
          images: string[]
          thumbnail_url: string
          status: string
          view_count: number
          favorite_count: number
          inquiry_count: number
          created_at: string
          updated_at: string
          published_at: string
          expires_at: string | null
        }
        Insert: {
          id?: string
          seller_id: string
          title_en: string
          title_ps?: string | null
          title_pr?: string | null
          description_en: string
          description_ps?: string | null
          description_pr?: string | null
          price: number
          currency: string
          category_id: number
          location: string
          condition: string
          is_negotiable?: boolean
          is_featured?: boolean
          images: string[]
          thumbnail_url: string
          status?: string
          view_count?: number
          favorite_count?: number
          inquiry_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string
          expires_at?: string | null
        }
        Update: {
          title_en?: string
          title_ps?: string | null
          title_pr?: string | null
          description_en?: string
          description_ps?: string | null
          description_pr?: string | null
          price?: number
          currency?: string
          category_id?: number
          location?: string
          condition?: string
          is_negotiable?: boolean
          is_featured?: boolean
          images?: string[]
          thumbnail_url?: string
          status?: string
          view_count?: number
          favorite_count?: number
          inquiry_count?: number
          updated_at?: string
          published_at?: string
          expires_at?: string | null
        }
      }
      categories: {
        Row: {
          id: number
          name_en: string
          name_ps: string
          name_pr: string
          slug: string
          icon: string
          created_at: string
        }
        Insert: {
          id?: number
          name_en: string
          name_ps: string
          name_pr: string
          slug: string
          icon: string
          created_at?: string
        }
        Update: {
          name_en?: string
          name_ps?: string
          name_pr?: string
          slug?: string
          icon?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          sender_id: string
          content: string
          created_at: string
          updated_at: string
          read_at: string | null
        }
        Insert: {
          id?: string
          conversation_id: string
          sender_id: string
          content: string
          created_at?: string
          updated_at?: string
          read_at?: string | null
        }
        Update: {
          content?: string
          updated_at?: string
          read_at?: string | null
        }
      }
      conversations: {
        Row: {
          id: string
          buyer_id: string
          seller_id: string
          listing_id: string
          last_message_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          buyer_id: string
          seller_id: string
          listing_id: string
          last_message_at: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          last_message_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          listing_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          listing_id: string
          created_at?: string
        }
        Update: {
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          reviewer_id: string
          reviewee_id: string
          listing_id: string | null
          transaction_id: string | null
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          reviewer_id: string
          reviewee_id: string
          listing_id?: string | null
          transaction_id?: string | null
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          rating?: number
          comment?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_listing_views: {
        Args: { listing_id: string }
        Returns: void
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
