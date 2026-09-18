<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project architecture

## Product areas

- `src/app/(main)` contains the public landing-page experience.
- `src/app/(backoffice)` contains the CMS experience.

Keep concerns from these route groups separate unless the code is genuinely shared.

## Server-first

- Use Server Components by default.
- Use Server Actions for application mutations by default.
- Add `"use client"` only when a component needs browser APIs, client-side state, or event handlers. Keep that client boundary as close to the interactive leaf as practical.
- Keep data access and secrets in server-only code. Client Components receive the smallest serializable props they need.

## File ownership

- `src/app` is the routing layer. Route files and layouts compose features; keep business logic out of them.
- Put each product capability in `src/features/<feature>/`.
- A feature may contain:
  - `components/` for feature-owned UI
  - `actions.ts` for Server Actions and mutation orchestration
  - `queries.ts` for reads and data-access queries
  - `schemas.ts` for Zod schemas and validation
  - `types.ts` for types that cannot be derived from a schema
- Put primitive and genuinely cross-feature components in `src/components/`.
- Put functions used by multiple features in `src/lib/`. Keep feature-specific helpers inside their feature.

## Schema-first types

Define the Zod schema as the source of truth for validated data, then derive its TypeScript type with `z.infer`. Add a handwritten type to `types.ts` only when no schema represents that concept; do not duplicate a schema-derived shape as an interface or type alias.

## Completion check

Before finishing a change, verify that every new file has the narrowest correct owner, route files only compose or route, Server Components and Server Actions remain the default, and every validated data type is inferred from its Zod schema.
