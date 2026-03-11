# Claude — Project Context

## Project Overview

This is a React-based replica of the [xplore.ca](https://www.xplore.ca/) website — a Canadian rural Internet service provider. The site is a marketing/informational website showcasing 5G, fibre, and satellite Internet products.

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** for dev server and builds
- **Tailwind CSS 4** (v4 uses `@import "tailwindcss"` syntax, not the v3 `@tailwind` directives)
- **React Router DOM 7** for client-side routing
- **Lucide React** for SVG icons
- **ESLint 9** with flat config (`eslint.config.js`)

## Key Conventions

- Components use **function declarations** (`export default function ComponentName()`) rather than arrow functions.
- **No TypeScript** — all files are `.jsx` or `.js`.
- Styling is done entirely with **Tailwind utility classes** inline — no separate CSS modules or styled-components.
- Custom brand colors are defined in `src/index.css` under `@theme` (e.g., `xplore-green`, `xplore-dark`).
- Static data (nav links, blog posts, FAQs, testimonials) lives in `src/data/` as exported JS arrays/objects.
- Pages are in `src/pages/`, reusable components in `src/components/ui/`, layout shell in `src/components/layout/`.

## Common Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Known Patterns & Gotchas

- The `Infinity` icon from `lucide-react` must be imported as `Infinity as InfinityIcon` to avoid shadowing the global JavaScript `Infinity` value (ESLint `no-shadow-restricted-names` rule).
- The `<Layout>` component wraps all routes and provides Header + Footer via React Router `<Outlet>`.
- `ScrollToTop` (inside Layout) scrolls to the top on every route change.
- There is no backend or API — all data is static/mocked.
- The address lookup in the footer is a demo placeholder.
- No test framework is currently set up.

## File Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout (with Outlet)
│   ├── sections/      # BlogPreview, CTABanner
│   └── ui/            # Button, Card, HeroSection, FAQAccordion, etc.
├── data/              # navigation.js, blogPosts.js, testimonials.js, faq/
├── pages/             # One component per route (Home, About, Shop, etc.)
├── App.jsx            # All <Route> definitions
├── main.jsx           # createRoot + BrowserRouter
└── index.css          # Tailwind @import + custom @theme colors
```
