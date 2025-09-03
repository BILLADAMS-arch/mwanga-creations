-- Enable pgcrypto for UUIDs if needed
create extension if not exists pgcrypto;

-- PRODUCTS TABLE
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text check (category in ('Soap', 'Detergent', 'Chicken Feed')) not null,
  brand text not null,
  quantity text not null,
  price_wholesale numeric(10,2) not null,
  price_retail numeric(10,2) not null,
  image_url text,
  created_at timestamp with time zone default now()
);

-- SALES TABLE (optional for trends)
create table if not exists sales (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  region text check (region in ('Nyamira', 'Kisii', 'Migori')) not null,
  quantity int not null,
  created_at timestamp with time zone default now()
);

-- RLS
alter table products enable row level security;
alter table sales enable row level security;

-- Policies:
-- Public can read products (for customer-facing pages)
drop policy if exists "Public read products" on products;
create policy "Public read products" on products
for select using (true);

-- Only authenticated users can modify products (admin dashboard)
drop policy if exists "Admins write products" on products;
create policy "Admins write products" on products
for all
to authenticated
using (true)
with check (true);

-- Sales: only authenticated can read/insert (optional)
drop policy if exists "Admins read sales" on sales;
create policy "Admins read sales" on sales
for select to authenticated using (true);

drop policy if exists "Admins write sales" on sales;
create policy "Admins write sales" on sales
for insert to authenticated with check (true);

-- Storage bucket for product images (optional if you host externally)
-- In Supabase Storage UI, create bucket: 'products' (public)
-- Example public URL: https://<YOUR-PROJECT>.supabase.co/storage/v1/object/public/products/filename.jpg
