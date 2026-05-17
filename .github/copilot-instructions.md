
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

## ECC Skills — When to Use What
- Planning a feature → planner.md
- System design → architect.md
- Frontend/Next.js work → frontend-patterns/
- TypeScript cleanup → typescript-reviewer.md
- Supabase/DB queries → database-reviewer.md
- Security checks → security-reviewer.md + security-review/
- API routes → backend-patterns/
- Build errors → build-error-resolver.md
- Code quality → code-reviewer.md
- E2E tests → e2e-testing/
- Pre-deploy checks → verification-loop/
- Before any implementation → search-first/
- General TS rules → rules-typescript/
- Universal rules → rules-common/
