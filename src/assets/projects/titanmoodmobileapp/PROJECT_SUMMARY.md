# TitanMood — Mobile (Client App)

## What it is

TitanMood is a fitness coaching platform built as a graduation project (DAW). The mobile app is the **client-facing** side of the platform: the app trainees use to view their assigned workout plan, log training sessions set-by-set, track body measurements and progress photos, and stay on top of scheduled sessions with their coach. It pairs with a companion web dashboard used by trainers.

Access is restricted to users with the `titan_coached` role — clients coached by a trainer through TitanMood — with a self-coached (`titan_solo`) tier planned for the future.

## Core features

- **Onboarding** — a 12-screen guided flow (gradient hero visual style) collecting goals, activity level, equipment, training preferences, and baseline measurements, written to Supabase in a single batch on completion.
- **Inicio (Home)** — today's routine card (adapts to rest day / already completed / no active plan states), a weekly day-circle tracker, and achievement cards (streaks, monthly session count).
- **Plan** — month calendar with color-coded events (sessions, measurements, check-ins) plus a plan detail view listing each day's routine, exercise count, and duration.
- **Session tracker** — the core workout-logging screen: a full set table (weight, reps, RPE/RIR), a circular rest timer with haptic feedback and local notifications, free exercise substitution, and trainer notes. Every set is written to Supabase (`workout_sessions` → `session_exercises` → `exercise_sets`).
- **Session summary** — post-workout recap comparing this session against the last: per-exercise better/worse/neutral badges, total volume, and duration.
- **Progreso** — an **Estadísticas** tab (per-exercise line chart with date-range filters, last-session KPI) and a **Medidas** tab (body measurement history with an add-measurement sheet).
- **Perfil** — profile editing, password change (with re-authentication), theme toggle (persisted per user), avatar upload with crop, and sign-out.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Expo SDK 54, React Native 0.81 (New Architecture enabled) |
| Language | TypeScript (strict mode) |
| Routing | expo-router v6 (file-based, typed routes) |
| Styling | `StyleSheet.create` + a shared theme token system — no CSS-in-JS or utility-class library |
| Backend | Supabase (Postgres 17, Auth, PostgREST, Row Level Security) — no custom backend server |
| Images | expo-image, with Supabase Storage for avatar uploads |
| External API | ExerciseDB (RapidAPI) for exercise metadata (GIFs, instructions, equipment) |
| Testing | jest-expo + @testing-library/react-native |

## Architecture notes

- **No Express/API layer** — talks to Supabase directly via `@supabase/supabase-js`; access control lives in Postgres Row Level Security, not app code.
- **Offline-friendly auth gate**: session state and onboarding completion are cached to `AsyncStorage` for a fast path on relaunch, falling back to a DB check.
- **Design system**: two theme modes — dark uses frosted-glass cards, light uses elevated white cards with shadow — driven entirely by a shared color token hook (`useThemeColors`), with all iconography from a single monochromatic icon set.
- **Session insights**: on workout completion, a structured `insights` JSON payload (per-exercise deltas vs. the previous session) is persisted alongside the raw set data, powering both the in-app summary screen and the trainer's web dashboard feed.

## Role in the project

This is the day-to-day training companion for clients — the counterpart to the web dashboard trainers use to build and monitor plans. Both apps share the same Supabase project and schema, so a set logged here is visible to the trainer in real time.
