# Hotel & Restaurant Demos

Portfolio of six Business web concepts — each with its own design system, color palette, typography, and custom animations. Built from scratch, no UI component libraries.

Live → **[johanhdezry.github.io/Hotel-Demos-Web](https://johanhdezry.github.io/Hotel-Demos-Web/)**

---

## Tech

|                            |                                         |
| -------------------------- | --------------------------------------- |
| React 19 + TypeScript      | UI & type safety                        |
| Vite                       | Dev server & build                      |
| Tailwind CSS v4            | Styling                                 |
| GSAP + ScrollTrigger       | Landing scroll system & hero animations |
| Motion (Framer Motion v12) | Scroll-triggered entrance animations    |
| React Router v7            | Client-side routing                     |

---

## Project structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
│
├── pages/
│   ├── Landing.tsx              # Scrolljack landing with panel system
│   ├── demo-1/                  # Bella Grace — Boutique Hotel
│   ├── demo-2/                  # FreshBox — Fast Casual
│   ├── demo-3/                  # Costa Mare — Luxury Resort
│   ├── demo-4/                  # El Fenn — Luxury Riad
│   ├── demo-5/                  # Mare e Terra — Italian Restaurant
│   └── demo-6/                  # Blossom Café — Specialty Coffee
│
├── components/
│   ├── landing/
│   │   ├── DemoPanel.tsx        # Full-screen panel for each demo
│   │   └── DemoCard.tsx
│   └── animations/
│       ├── GlareHover.tsx
│       ├── Marquee.tsx
│       └── RevealSection.tsx
│
├── hooks/
│   ├── useLandingHero.ts        # GSAP hero entrance animation
│   ├── usePanelScroll.ts        # Infinite scroll-stack panel system
│   └── ...
│
└── styles/
    └── img/                     # Local assets per demo
```

---

## Claude's Role in this Project

This project was developed with [Claude Code](https://claude.ai/claude-code) as the primary coding assistant.

**What Claude built or generated:**

- **README** — this file
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`) — CI/CD pipeline for automatic deployment to GitHub Pages on every push to `main`

---

## Author

**JohanHdezRy**
