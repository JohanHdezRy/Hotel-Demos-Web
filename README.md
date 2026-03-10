# 🏨 Hotel Demo Collection

A collection of **7 luxury hotel landing pages** built as frontend demos, each with a unique visual identity, custom design system, and smooth animations.

Live site → **[hotel-demos.vercel.app](https://johanhdezry.github.io/hotel-demos/)**

---

## ✨ Demos

| # | Hotel | Style |
|---|-------|-------|
| 1 | Bella Grace | Boutique / Charleston |
| 2 | La Réserve | Parisian Luxury |
| 3 | Micon Street | Urban Modern |
| 4 | El Fenn | Moroccan Riad |
| 5 | Song Saa | Private Island |
| 8 | Badrutt's Palace | Swiss Alpine |
| 11 | One&Only Cape Town | African Contemporary |

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev & build tooling
- **React Router v7** — client-side routing
- **Motion (Framer Motion v12)** — scroll & entrance animations
- **Pure CSS** — custom design systems per hotel, zero UI frameworks
- **GitHub Actions** — automatic deployment to GitHub Pages

---

## 🎬 Animations

Each page includes animations built from scratch:

- **BlurText** — word-by-word blur reveal on hero titles
- **RevealSection** — scroll-triggered entrance with 5 variants (`fadeUp`, `fadeLeft`, `fadeRight`, `scale`, `fade`)
- **GlareHover** — light sweep glare effect on card images (pure CSS)

---

## 🚀 Run Locally

```bash
git clone https://github.com/JohanHdezRy/hotel-demos.git
cd hotel-demos
npm install
npm run dev
```

---

## 📦 Build & Deploy

Pushing to `main` triggers a GitHub Actions workflow that builds the project and deploys it to GitHub Pages automatically.

```bash
npm run build   # build for production
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/     # BlurText, GlareHover, RevealSection...
│   └── ScrollTop.tsx
├── pages/
│   ├── demo-1/         # Bella Grace
│   ├── demo-2/         # La Réserve
│   ├── demo-3/         # Micon Street
│   ├── demo-4/         # El Fenn
│   ├── demo-5/         # Song Saa
│   ├── demo-8/         # Badrutt's Palace
│   └── demo-11/        # One&Only Cape Town
└── styles/
    └── img/            # Hotel photography assets
```

---

> These are concept demos for portfolio purposes only. All hotel names and imagery are used for demonstration.
