-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Tenants table
create table tenants (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  owner_id uuid references auth.users(id) on delete cascade,
  subdomain text unique not null,
  status text check (status in ('onboarding','active','suspended')) default 'onboarding',
  plan text check (plan in ('starter','growth','pro')) default 'starter',
  import_url text
);

-- Enable RLS
alter table tenants enable row level security;

-- Policies
create policy "Owners can read own tenant"
  on tenants for select
  using (auth.uid() = owner_id);

create policy "Owners can update own tenant"
  on tenants for update
  using (auth.uid() = owner_id);
