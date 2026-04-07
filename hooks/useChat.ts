'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Message } from '@/types/message';

export function useChat(conversationId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // 1. Fetch initial messages
    const fetchMessages = async () => {
<<<<<<< HEAD
      const { data, error } = await supabase
=======
      const { data } = await supabase
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
        .from('messages')
        .select(`
          *,
          sender:profiles!sender_id(full_name, avatar_url)
        `)
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });
      
      if (data) setMessages(data);
      setIsLoading(false);
    };
    
    fetchMessages();

    // 2. Subscribe to real-time updates
    const channel = supabase
      .channel(`chat:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          // Add new message to state
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  const sendMessage = async (content: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

<<<<<<< HEAD
    const { error } = await supabase
      .from('messages')
=======
    const { error } = await (supabase.from('messages') as any)
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
      .insert({
        conversation_id: conversationId,
        sender_id: user.id,
        content,
      });
    
    if (error) {
      console.error('Failed to send message:', error);
      return false;
    }
    
    // Mark conversation as having new message
<<<<<<< HEAD
    await supabase
      .from('conversations')
=======
    await (supabase.from('conversations') as any)
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', conversationId);
    
    return true;
  };

  return { messages, isLoading, sendMessage };
}