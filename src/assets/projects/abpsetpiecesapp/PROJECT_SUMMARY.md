# ABP Set Pieces

**Elite football coaching platform for UEFA PRO Coach Bori Moreno.**

## Overview

ABP Set Pieces is a two-in-one digital platform built for professional football set-piece coaching. It combines a Learning Management System (Campus) with a searchable Tactical Set Piece Database, giving coaches and players a single place to learn tactical theory and study/compare real set-piece plays (ABP — *Acciones a Balón Parado*, i.e. dead-ball situations: corners, free kicks, throw-ins).

The product targets a global launch timed to the **2026 FIFA World Cup**, with a delivery deadline of **June 11, 2026**.

The app is live on "campus.abpsetpieces.com".

### The two products

1. **Campus (LMS)** — Video-based courses organized into modules and lessons, progress tracking, an interactive tactical whiteboard for drawing plays, and account/profile management.
2. **Tactical Database** — A searchable library of set-piece plays ("ABP Plays"), each with tactical diagrams, video, AI-generated tactical analysis, difficulty rating, zone/structure/type classification, and side-by-side play comparison. Authenticated users can also save their own private plays.

Access is tiered: **Level 1** users get Campus only; **Level 2** users get Campus + Database.

## Brand

- **Colors:** Pure Black (`#000000`) + Vibrant Yellow (`#FFEB52`) — dark-first visual identity.
- **Typography:** Barlow Condensed (headings), Manrope (body).

## Architecture

Monorepo with two applications:

| Directory | App | Role |
|---|---|---|
| `/backend` | Strapi v5 CMS/API | Content modeling, authentication, business logic, AI integration |
| `/frontend` | Next.js 15 (App Router) | Unified web client for both Campus and Database |

### Backend — Strapi v5

- **Language/runtime:** TypeScript on Node.js.
- **Database:** SQLite for local development, PostgreSQL (Supabase Cloud) in production.
- **File storage:** Cloudinary (required for any upload feature to function).
- **AI integration:** A lifecycle hook on the `abp-play` content type calls the Google Gemini API to automatically generate tactical analysis HTML whenever a play is created or updated.
- **Auth:** Strapi Users & Permissions plugin, JWT-based.
- **Key content types:**
  - *Campus:* `course`, `module`, `lesson`, `category`, `progress`
  - *Tactical Database:* `abp-play`, `abp-type`, `zone`, `structure` (`delivery-mode`, `delivery-zone`, `difficulty`, `game-phase`, `launch-type`), `tag`, `private-play`

### Frontend — Next.js 15

- **Routing:** App Router with route groups — `(auth)/login`, `(auth)/register` (public), `campus/*` (Level 1+), `database/*` (Level 2 only).
- **Auth:** JWT stored in a cookie, validated in `middleware.ts`, redirecting unauthenticated users to `/login`.
- **Data layer:** Axios client centralized in `lib/api.ts` (all Strapi calls must go through this file); TanStack Query v5 for server state; React Context for auth state.
- **UI:** shadcn/ui (Radix UI primitives) + Tailwind CSS with custom brand tokens (`abp-yellow`, `abp-zinc`, `abp-surface`); `lucide-react` icons; `sonner` toasts; forms via `react-hook-form` + `zod`.
- **Tactical whiteboard:** Interactive drawing/diagramming built with Konva (`react-konva`).
- **Other notable libraries:** Framer Motion (animation), Recharts (charts), React Player (video), Embla Carousel.
- **Testing:** Vitest + Testing Library.

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Backend framework | Strapi v5 (Node.js, TypeScript) |
| Database | PostgreSQL (Supabase, prod) / SQLite (dev) |
| File/media storage | Cloudinary |
| AI | Google Gemini API (automated tactical analysis) |
| Frontend framework | Next.js 15 (App Router, TypeScript) |
| UI components | shadcn/ui, Radix UI, Tailwind CSS |
| State/data fetching | TanStack Query v5, Axios, React Context |
| Auth | JWT (cookie-based), Next.js middleware route protection |
| Diagramming | Konva / react-konva |
| Forms & validation | react-hook-form, zod |

## Team

| Role | Responsibility |
|---|---|
| Backend/API Lead | Strapi + Supabase |
| Campus Integration | LMS frontend |
| Database Integration | Tactical database frontend |
| WordPress/WooCommerce & SEO | Marketing site, e-commerce integration |
| WordPress Support / QA | Static pages, UI testing |

## Status

Frontend is under active development. Backend is stable and treated as the system of record for content modeling — schema changes are made by backend developers directly, not through the frontend codebase.
