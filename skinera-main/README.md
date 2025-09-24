# Vite React Tailwind Toggle

Simple React (JS) + Vite + Tailwind setup with a single dark/light toggle button.

## Scripts

- dev: start dev server
- build: production build
- preview: preview build

## Usage

1. Install deps

```bash
npm install
```

2. Run

```bash
npm run dev
```

3. Click the button to toggle dark / light (text changes Turn On / Turn Off).

No extra functionality added per request.

## Header migration note

- Header component now mirrors the one from `ssss` with:
  - Top contact bar and social icons
  - Desktop hover menus for Skin and Hair with nested items
  - Mobile slide-over with accordions
- Menu data lives in `src/data/menuData.js` (skinMenu, hairMenu, getNested).
- Header UI is in `src/components/Header.jsx`. Background is white with subtle borders, matching `ssss`.
- Images are referenced from `Images/Header/logo.png` (already present).
