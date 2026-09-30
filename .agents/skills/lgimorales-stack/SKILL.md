---
name: lgimorales-stack
description: >-
  Use this skill whenever you are writing or refactoring code for the LgiMorales project.
  It contains the architectural rules, technology stack, and specific design patterns required for this Next.js application.
---

# LgiMorales Technology Stack & Guidelines

Whenever you write or modify code in this project, STRICTLY adhere to the following rules.

## 1. Core Stack
*   **Framework:** Next.js 15 (App Router only). Do not use the `pages/` directory.
*   **Language:** TypeScript (Strict mode). Always type your components and API responses.
*   **Styling:** Tailwind CSS 4. Use the custom variables defined in `globals.css` (e.g., `var(--color-brand-primary)`).
*   **UI Components:** shadcn/ui. Use `lucide-react` for icons unless emojis are explicitly requested.
*   **Database:** PostgreSQL (hosted on Neon).
*   **ORM:** Prisma Client (v7+). Remember that v7 does NOT use `url` in `schema.prisma`. It relies on `prisma.config.ts`.
*   **Authentication:** NextAuth.js v5 (beta) with dual credentials (Admin and Client).

## 2. Architectural Patterns
*   **Server Components by Default:** All components inside `app/` should be React Server Components unless they require interactivity (hooks, state, event listeners).
*   **Client Components:** Only use `"use client"` at the very top of a file when absolutely necessary. Push client boundaries as far down the tree as possible.
*   **Route Groups:** Use route groups for logical separation:
    *   `(site)`: Public institutional pages.
    *   `(admin)`: Protected admin panel pages.
    *   `(client)`: Protected client portal pages.
*   **API Routes:** Place all backend endpoints in `app/api/`. Use the new App Router API syntax (`export async function GET(req: NextRequest)`).

## 3. Style & Aesthetics
*   The project uses a "Dark & Sophisticated" theme.
*   Backgrounds should generally be `bg-[var(--color-brand-dark)]` or `bg-[var(--color-brand-surface)]`.
*   Use the classes `.glass-card` and `.gradient-text` for emphasizing important elements.
*   Ensure all buttons have hover states with `transition-colors duration-200`.

## 4. Prisma Conventions
*   Never edit `schema.prisma` `url` property directly.
*   Always run `npx prisma generate` after changing the schema.
*   Use `db` from `@/lib/db` for all database calls.

## 5. File Naming
*   Use `kebab-case` for all files and folders (e.g., `whatsapp-button.tsx`).
*   Component names should be `PascalCase` (e.g., `export function WhatsAppButton()`).
