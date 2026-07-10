create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  institution text,
  main_interest text,
  consent boolean not null default true,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Public newsletter registration"
on public.newsletter_subscribers
for insert
to anon
with check (
  consent = true
  and status = 'active'
);
