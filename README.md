# Mwanga Creations (Next.js + Supabase)

Simple, classy storefront for soaps, detergents, and chicken feeds with WhatsApp ordering.
- Customer: browse, search, see wholesale & retail prices. No login.
- Admin: private dashboard to add/edit/delete products (Supabase Auth).

## 1) Setup
- Clone repo and install:
  ```bash
  npm install
  ```
- Copy `.env.local.example` to `.env.local` and set:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2) Supabase
- Create a new project at Supabase.
- Open SQL editor, paste `sql/schema.sql` and run.
- (Optional) Create public Storage bucket `products` for images.

## 3) Dev
```bash
npm run dev
```
Visit http://localhost:3000

## 4) Deploy
- Push to GitHub and import into Vercel.

## Notes
- Background images use Unsplash's random source query.
- Update WhatsApp phone in `lib/whatsapp.js` if needed.
