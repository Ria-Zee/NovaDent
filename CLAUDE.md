# NovaDent — Build Command Center

## What this project is
Multi-tenant dental SaaS platform. Shopify model — clinics pay, patients benefit.
Every dental clinic gets a professional website, AI webchat agent, AI voice agent,
smart booking system, and real-time dashboard. Live in under 30 minutes.

## Tech Stack
- Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Database: PostgreSQL via Supabase (multi-tenant, Row Level Security)
- Auth: Supabase Auth (email + Google OAuth)
- AI Webchat: Anthropic Claude API (claude-sonnet-4-20250514)
- AI Voice: Vapi.ai + Twilio
- Payments: Stripe (global) + Paystack (Africa)
- Messaging: Twilio SMS + WhatsApp
- Email: Resend
- Hosting: Vercel (wildcard subdomains *.novadent.com)
- Monorepo: Turborepo + pnpm

## Source of Truth Files (read before doing anything)
1. NovaDent_BuildDocuments_v3.md — PRD, TRD, App Flow, Schema, Implementation Plan
2. design-system/MASTER.md — colours, fonts, components, design tokens
3. .github/copilot-instructions.md — coding rules, agent instructions, ECC skills

## Current Build Phase
Phase 2 — Supabase schema + auth migrations

## Completed
- [x] Turborepo monorepo scaffold
- [x] Next.js 14 app in apps/web
- [x] Lovable homepage migrated to Next.js components
- [x] Supabase project created, env vars configured
- [x] UI/UX Pro Max design intelligence installed
- [x] NovaDent design system generated (design-system/MASTER.md)
- [x] Security, Data, Testing agent instructions added
- [x] ECC skills installed for Copilot

## Pending
- [ ] Supabase migrations (all 15 tables)
- [ ] Auth middleware + subdomain routing
- [ ] Clinic onboarding wizard
- [ ] Clinic public website generator
- [ ] AI webchat agent (Claude API)
- [ ] Booking system + payments
- [ ] Clinic dashboard
- [ ] Super-admin dashboard
- [ ] Deploy to Vercel

## Design System
- Primary: #2F4156 (deep navy)
- Accent: #567C8D (teal)
- Background: #F5EFEB (warm beige off-white)
- Surface: #FFFFFF
- Font headers: Merriweather
- Font body: Lato

## Architecture Rules
- All DB access via lib/supabase/ — never call Supabase directly in components
- Every query scoped by clinic_id for multi-tenancy
- Service role key: server-side API routes only, never client-side
- Subdomain routing via Next.js middleware.ts
- RLS on every table — test with both authorised and unauthorised users

## Never Do
- Modify src/ folder (Lovable reference only, not production code)
- Expose SUPABASE_SERVICE_ROLE_KEY to client
- Write SQL without RLS policies
- Use string concatenation in SQL queries
- Break multi-tenant data isolation
- Install packages in repo root (use apps/web for frontend deps)
