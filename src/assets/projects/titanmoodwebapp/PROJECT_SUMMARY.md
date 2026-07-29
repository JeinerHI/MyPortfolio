# TitanMood — Web (Trainer Dashboard)

## What it is

TitanMood is a fitness coaching platform built as a graduation project (DAW). The web app is the **trainer/manager/admin dashboard**: the side of the platform coaches use to manage clients, design workout programs, track progress, and schedule sessions. It pairs with a companion mobile app used by the clients themselves.

The trainer creates reusable workout **templates**, assigns them to clients as live **plans**, and then follows each client's adherence and physical progress over time — set-by-set training data, body measurements, and a shared events calendar — all from one dashboard.

## Core features

- **Authentication & role gating** — Supabase Auth with role checks at login; client-only roles (`titan_coached`, `titan_solo`) are blocked from ever reaching the web app.
- **Dashboard** — stats summary and a live activity feed (workout completions) with a detail modal showing per-exercise insights and client notes.
- **Template editor** — build weekly workout programs (Monday–Sunday, rest-day toggle) with per-routine config (category, RPE/RIR display, rest timers, duration), an exercise picker backed by the ExerciseDB API, and day-to-day exercise copying.
- **Client management** — active/inactive/pending client lists, per-client detail view with three tabs:
  - **Planes** — assign/activate/deactivate/delete workout plans from templates.
  - **Medidas** — body measurement history (weight + 9 circumference fields, metric/imperial toggle).
  - **Stats** — training progress charts (max weight per exercise over time) with session-over-session deltas.
- **Eventos** — a shared calendar (sessions, measurements, check-ins) with full CRUD, month view, and upcoming/past filtering.
- **Profile avatars** — upload/crop/remove trainer and client profile photos via Supabase Storage.
- **Soft-delete model** — templates, plans, routines, and events are retired via `deleted_at` (never hard-deleted) through SECURITY DEFINER RPCs, preserving workout history integrity.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router v7 |
| Charts | Recharts |
| Backend | Supabase (Postgres 17, Auth, PostgREST, Row Level Security) — no custom backend server |
| External API | ExerciseDB (RapidAPI) for exercise search/metadata |
| Hosting | Vercel |
| Language | JavaScript (JSX) |

## Architecture notes

- **No Express/API layer** — the app talks to Supabase directly via `@supabase/supabase-js`; all access control is enforced by Postgres Row Level Security policies, not application code.
- **Data model highlights**: reusable `workout_templates` (trainer blueprints) are cloned into client-specific copies on assignment, keeping edits to a client's plan isolated from the original template. Per-set training targets (`routine_exercise_sets`) and actual logged sets (`exercise_sets`) share an aligned schema so progress comparisons are direct.
- **Security**: RLS policies avoid recursive `profiles` lookups (via a `SECURITY DEFINER` helper function), never trust client-writable JWT metadata, and restrict soft-deletes to auth-checked RPCs rather than direct table updates.

## Role in the project

This is the operational hub for coaches — the counterpart to the mobile app's client-facing workout tracker. Both apps share the same Supabase project and schema, giving trainers real-time visibility into the training data their clients log from the field.
