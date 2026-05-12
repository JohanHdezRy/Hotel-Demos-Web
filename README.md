# Hotel & Restaurant Demos

Portfolio of six business web concepts — each with its own design system, color palette, typography, and custom animations. Built from scratch, no UI component libraries.

Live → **[johanhdezry.github.io/Hotel-Demos-Web](https://johanhdezry.github.io/Hotel-Demos-Web/)**

---

## Tech

|                          |                                                  |
| ------------------------ | ------------------------------------------------ |
| React 19 + TypeScript    | UI & strict type safety                          |
| Vite 7                   | Dev server & build                               |
| Tailwind CSS v4          | Styling (theme tokens, arbitrary variants)       |
| GSAP 3 + ScrollTrigger   | Landing scroll system & hero animations          |
| `@gsap/react`            | `useGSAP` hook (demo-5)                          |
| React Router v7          | Client-side routing (`HashRouter` for GH Pages)  |
| `clsx` + `tailwind-merge`| `cn()` helper for conditional classes            |
| `lucide-react`           | Icons (demo-5)                                   |

Scroll reveals use a custom `IntersectionObserver` + CSS transitions hook — no Framer/Motion dependency.

---

## Demos

| # | Name          | Style              | Location                  |
|---|---------------|--------------------|---------------------------|
| 1 | Bella Grace   | Boutique Hotel     | Charleston, SC · USA      |
| 2 | FreshBox      | Fast Casual        | Illinois · USA            |
| 3 | Costa Mare    | Luxury Resort      | Pacific Coast · Resort    |
| 4 | El Fenn       | Luxury Riad        | Marrakech · Morocco       |
| 5 | Mare e Terra  | Italian Restaurant | Madrid · Spain            |
| 6 | Blossom Café  | Specialty Coffee   | —                         |

Each demo is lazy-loaded (`React.lazy` + per-route `<Suspense>` with a brand-tinted page loader).

---

## Project structure

```
src/
├── App.tsx                       # Routes, ErrorBoundary, per-route Suspense
├── main.tsx
├── index.css                     # Tailwind theme + shared keyframes
│
├── pages/
│   ├── Landing.tsx               # Scrolljack landing with panel system
│   ├── demo-1/                   # Bella Grace — Boutique Hotel
│   ├── demo-2/                   # FreshBox — Fast Casual
│   ├── demo-3/                   # Costa Mare — Luxury Resort
│   ├── demo-4/                   # El Fenn — Luxury Riad
│   ├── demo-5/                   # Mare e Terra — Italian Restaurant
│   └── demo-6/                   # Blossom Café — Specialty Coffee
│
├── components/
│   ├── ErrorBoundary.tsx         # Fallback for failed lazy chunks
│   ├── ScrollTop.tsx
│   ├── landing/
│   │   └── DemoPanel.tsx         # Full-screen panel for each demo
│   └── animations/
│       ├── GlareHover.tsx
│       ├── Marquee.tsx
│       └── RevealSection.tsx
│
├── hooks/                        # Shared hooks (cross-demo)
│   ├── useCarousel.ts
│   ├── useCopyToClipboard.ts
│   ├── useFocusTrap.ts
│   ├── useGsapHero.ts
│   ├── useLandingHero.ts
│   ├── useMobileDrawer.ts        # body-lock + Escape + focus trap
│   ├── useNavbarScroll.ts
│   ├── usePanelScroll.ts         # Infinite scroll-stack panel system
│   ├── useScrollReveal.ts
│   └── useScrollVisibility.ts
│
├── lib/
│   ├── dateHelpers.ts            # Shared date helpers (demo-1 + demo-3)
│   └── utils.ts                  # cn() = clsx + tailwind-merge
│
└── styles/
    └── img/                      # Local assets per demo (WebP for landing)
```

Each demo also has its own `components/`, `data/`, `hooks/`, and `types/` directories. The convention is that components only destructure a hook and render JSX — logic lives in hooks.

---

## Accessibility

- All 5 mobile drawers share `useMobileDrawer` (body-lock + Escape-to-close + focus trap via `useFocusTrap`)
- Hamburger triggers have `aria-expanded` + `aria-controls`
- Form fields have explicit `htmlFor` / `id`
- Carousel arrows use `<button aria-label="…">` with `<span aria-hidden>` for the glyph
- `MiniCalendar` day cells expose full date via `aria-label` + `aria-current="date"`
- Color contrast verified to meet WCAG AA on body text

---

## Performance

- Landing panel images converted to WebP (~150–300 KB each, down from 2–3 MB PNGs)
- `loading="lazy"` + `fetchPriority="auto"` on every panel after the first; `eager` + `high` on panel 1
- `<link rel="preconnect">` to `images.unsplash.com` and `cdn.pixabay.com` in `index.html`
- `usePanelScroll` uses `pinType: 'transform'` to avoid scroll-time reflows
- `useBreakpoint` is backed by `matchMedia` + `useSyncExternalStore` (re-renders only on breakpoint crossings, not per-pixel)
- `React.memo` on `DemoPanel` and `RoomCard`

---

## Claude's role in this project

This project was developed with [Claude Code](https://claude.ai/claude-code) as the primary coding assistant.

**What Claude built or generated:**

- **README** — this file
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`) — CI/CD pipeline for automatic deployment to GitHub Pages on every push to `main`
- **Shared hooks** — `useMobileDrawer`, `useFocusTrap`, `usePicker`, `useScrollVisibility`, `useCopyToClipboard`, `useCategoryFilter`, `useRoomReservation`, etc.
- **Refactors** — extraction of logic from components into hooks, a11y pass, image optimization, error boundary

---

## Author

**JohanHdezRy**
