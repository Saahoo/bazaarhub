export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  read_at?: string;
  sender?: {
    full_name: string;
    avatar_url?: string;
  };
}

export interface Conversation {
  id: string;
  buyer_id: string;
  seller_id: string;
  listing_id: string;
  last_message_at: string;
  created_at: string;
  updated_at: string;
  unread_count?: number;
}

export interface ConversationWithDetails extends Conversation {
  buyer?: {
    full_name: string;
    avatar_url?: string;
  };
  seller?: {
    full_name: string;
    avatar_url?: string;
  };
  listing?: {
    title_en: string;
    thumbnail_url: string;
  };
  last_message?: Message;
}
