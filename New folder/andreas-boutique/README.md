# Andreas Boutiques — React + TypeScript

React + TypeScript version of the Andreas Boutiques static site, built with **Vite**, **Tailwind CSS**, and **shadcn-style UI** components.

## Stack

- **Vite** — build tool and dev server
- **React 18** + **TypeScript**
- **React Router** — client-side routing
- **Tailwind CSS** — styling (custom theme: pink, gray-soft, serif/sans fonts)
- **shadcn-style components** — Button, Card, Input, Label, Textarea (themed to match the boutique design)
- **Lucide React** — icons (Menu, X, ShoppingBag, ChevronLeft, ChevronRight)

## Getting started

```bash
cd andreas-boutique
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally

## Project structure

- `src/pages/` — route pages (Home, Collections, Featured, Features, Our Story, Contact, Cart, ProductDetails, Checkout, Terms)
- `src/components/` — Header, Footer, Logo, FeaturedCarousel, Timeline
- `src/components/ui/` — Button, Card, Input, Label, Textarea (shadcn-style, boutique theme)
- `src/lib/utils.ts` — `cn()` for class names
- `src/index.css` — Tailwind + custom utilities (glass, btn-pink, nav-link, carousel, timeline, etc.)

## Routes

| Path         | Page           |
|-------------|----------------|
| `/`         | Home           |
| `/collections` | Collections  |
| `/featured` | Featured        |
| `/features`  | Why Andreas    |
| `/our-story`| Our Story      |
| `/contact`  | Contact Us     |
| `/cart`     | Cart           |
| `/product/:id` | Product details |
| `/checkout` | Checkout       |
| `/terms`    | Terms & Conditions |

Design (colors, fonts, glass nav, hero, featured carousel, timeline) matches the original HTML site and is responsive.
