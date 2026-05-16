
## Security Agent Rules
- Always check for exposed API keys or secrets
- Flag any RLS policy that could allow cross-tenant data access
- Warn if user input is used without sanitization
- Never store sensitive fields (paystack_secret, service_role_key) client-side
- Always use parameterized queries, never string concatenation in SQL

## Data Agent Rules
- All DB access goes through Supabase client in lib/supabase/
- Never call Supabase directly in components — use server actions or API routes
- Every query must be scoped by clinic_id for multi-tenancy
- Use service role key only in server-side API routes, never client-side

## Testing Agent Rules
- Write tests for every API route using Vitest
- Test RLS policies with both authorised and unauthorised users
- Every booking flow must have an end-to-end test
- Test the AI chat endpoint with mock Claude responses
