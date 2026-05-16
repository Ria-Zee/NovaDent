create table clinics (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  name text not null,
  tagline text,
  address text,
  city text,
  country text not null default 'NG',
  timezone text not null default 'Africa/Lagos',
  phone text,
  email text,
  logo_url text,
  hero_image_url text,
  accent_color text default '#0D9488',
  about_text text,
  currency text default 'USD',
  stripe_account_id text,
  paystack_public text,
  paystack_secret text,
  paypal_merchant_id text,
  bank_name text,
  bank_account_number text,
  cash_on_arrival boolean default false,
  vapi_assistant_id text,
  vapi_phone_number text,
  ai_greeting text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table clinics enable row level security;

create policy "Owners can manage own clinic"
  on clinics for all
  using (
    tenant_id in (
      select id from tenants where owner_id = auth.uid()
    )
  );
