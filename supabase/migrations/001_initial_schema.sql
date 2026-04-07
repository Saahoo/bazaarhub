-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users (id),
  email text not null unique,
  full_name text,
  avatar_url text,
  phone text,
  bio text,
  rating numeric default 0,
  review_count integer default 0,
  is_verified boolean default false,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp
);

-- Create categories table
create table if not exists public.categories (
  id serial primary key,
  name_en text not null,
  name_ps text not null,
  name_pr text not null,
  slug text unique not null,
  icon text,
  created_at timestamp with time zone default current_timestamp
);

-- Create listings table
create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.profiles (id) on delete cascade,
  title_en text not null,
  title_ps text,
  title_pr text,
  description_en text not null,
  description_ps text,
  description_pr text,
  price numeric not null,
  currency text default 'AFN',
  category_id integer references public.categories (id),
  location text not null,
  condition text not null check (condition in ('new', 'like-new', 'good', 'fair', 'poor')),
  is_negotiable boolean default false,
  is_featured boolean default false,
  images text[] not null,
  thumbnail_url text,
  status text default 'active' check (status in ('active', 'draft', 'closed', 'sold')),
  view_count integer default 0,
  favorite_count integer default 0,
  inquiry_count integer default 0,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp,
  published_at timestamp with time zone,
  expires_at timestamp with time zone
);

-- Create messages table
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  sender_id uuid not null references public.profiles (id),
  content text not null,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp,
  read_at timestamp with time zone
);

-- Create conversations table
create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid not null references public.profiles (id),
  seller_id uuid not null references public.profiles (id),
  listing_id uuid not null references public.listings (id) on delete cascade,
  last_message_at timestamp with time zone default current_timestamp,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp,
  unique(buyer_id, seller_id, listing_id)
);

-- Create favorites table
create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  listing_id uuid not null references public.listings (id) on delete cascade,
  created_at timestamp with time zone default current_timestamp,
  unique(user_id, listing_id)
);

-- Create reviews table
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  reviewer_id uuid not null references public.profiles (id),
  reviewee_id uuid not null references public.profiles (id),
  listing_id uuid references public.listings (id) on delete set null,
  transaction_id text,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default current_timestamp
);

-- Create indexes
create index idx_listings_seller_id on public.listings(seller_id);
create index idx_listings_category_id on public.listings(category_id);
create index idx_listings_status on public.listings(status);
create index idx_listings_created_at on public.listings(created_at desc);
create index idx_messages_conversation_id on public.messages(conversation_id);
create index idx_messages_sender_id on public.messages(sender_id);
create index idx_conversations_buyer_id on public.conversations(buyer_id);
create index idx_conversations_seller_id on public.conversations(seller_id);
create index idx_favorites_user_id on public.favorites(user_id);
create index idx_reviews_reviewer_id on public.reviews(reviewer_id);
create index idx_reviews_reviewee_id on public.reviews(reviewee_id);

-- Create function to increment listing views
create or replace function public.increment_listing_views(listing_id uuid)
returns void as $$
begin
  update public.listings
  set view_count = view_count + 1
  where id = listing_id;
end;
$$ language plpgsql;

-- Create updated_at trigger function
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = current_timestamp;
  return new;
end;
$$ language plpgsql;

-- Add updated_at triggers
create trigger handle_profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger handle_listings_updated_at
  before update on public.listings
  for each row execute function public.handle_updated_at();

create trigger handle_messages_updated_at
  before update on public.messages
  for each row execute function public.handle_updated_at();

create trigger handle_conversations_updated_at
  before update on public.conversations
  for each row execute function public.handle_updated_at();

-- Row level security policies
alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.messages enable row level security;
alter table public.conversations enable row level security;
alter table public.favorites enable row level security;
alter table public.reviews enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Listings policies
create policy "Listings are viewable by everyone" on public.listings
  for select using (status = 'active' or auth.uid() = seller_id);

create policy "Users can create listings" on public.listings
  for insert with check (auth.uid() = seller_id);

create policy "Users can update own listings" on public.listings
  for update using (auth.uid() = seller_id);

create policy "Users can delete own listings" on public.listings
  for delete using (auth.uid() = seller_id);

-- Messages policies
create policy "Users can view conversations they are part of" on public.messages
  for select using (
    exists (
      select 1 from public.conversations
      where id = messages.conversation_id
      and (buyer_id = auth.uid() or seller_id = auth.uid())
    )
  );

create policy "Users can create messages in their conversations" on public.messages
  for insert with check (
    exists (
      select 1 from public.conversations
      where id = conversation_id
      and (buyer_id = auth.uid() or seller_id = auth.uid())
    )
  );

-- Conversations policies
create policy "Users can view their conversations" on public.conversations
  for select using (buyer_id = auth.uid() or seller_id = auth.uid());

create policy "Users can create conversations" on public.conversations
  for insert with check (auth.uid() = buyer_id);

-- Favorites policies
create policy "Users can view their favorites" on public.favorites
  for select using (user_id = auth.uid());

create policy "Users can manage their favorites" on public.favorites
  for insert with check (user_id = auth.uid());

create policy "Users can delete their favorites" on public.favorites
  for delete using (user_id = auth.uid());

-- Reviews policies
create policy "Users can view reviews" on public.reviews
  for select using (true);

create policy "Users can create reviews" on public.reviews
  for insert with check (auth.uid() = reviewer_id);
