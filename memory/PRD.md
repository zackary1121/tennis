# KineticCourt — Interactive Tennis Technique Learning

## Original Problem Statement
Clean, modern, premium interactive tennis technique learning website for recreational/developing players (beginner → ~UTR 6). Highly visual, image-focused, minimal text. Teaches technique through interactive images. Homepage + Forehand technique page prototype with body-part hotspots, movement timeline, Technique/Common Mistakes/Practice Drill tabs, and UTR level selector.

## Architecture
- Frontend: Vite + React 19 + Tailwind v4 + shadcn/ui + framer-motion. Content-driven (no backend needed for the learning experience).
- Content model: `/app/frontend/src/data/forehandData.js` (9 hotspots × 3 UTR levels × role/mistake/drill, 7 phases, categories, tiers).
- Pages: `Home.jsx` (`/`), `Forehand.jsx` (`/forehand`). Shared `Navbar.jsx`.
- Player image: AI-generated forehand photo, hotspots absolutely positioned by % coordinates.

## User Personas
- Recreational/developing tennis players (beginner to UTR 6) wanting to understand stroke biomechanics visually.

## Core Requirements (static)
- Homepage: hero "Master Your Tennis Technique", subtitle, 4 technique categories, UTR level section, Explore Techniques CTA.
- Forehand page: dominant player image with 9 clickable hotspots, info panel with 3 tabs, selectable 7-phase timeline, UTR level selector that changes coaching depth.
- Aesthetic: light neutral background, tennis-green accents, strong typography, spacious, responsive.

## Implemented (2026-06-24)
- Full homepage with hero (interactive telemetry preview), category cards, UTR tier section (dark green band), CTA banner, footer.
- Forehand Studio: 9 hotspots aligned to player anatomy, active/focus/pulse states; right sticky telemetry panel with Technique/Common Mistakes/Practice Drill tabs; 7-phase timeline with phase-cue banner and focus-hotspot highlighting; UTR 1–2/2–4/4–6 selector switching content depth; save-drill toast; body-area quick chips.
- Backhand/Serve/Volley show "coming soon" toasts.

## Backlog
- P1: Build Backhand page fully; per-phase distinct player images.
- P2: Serve & Volley pages; saved-drills collection view; keyboard nav for timeline/hotspots.
