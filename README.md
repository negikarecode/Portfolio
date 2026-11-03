# Aryan Negi — Personal Portfolio Website

> A top-tier, retro-editorial developer portfolio website crafted with a designer-notebook aesthetic, inspired by physical sketchbooks, Figma canvases, and classic pixel display craftsmanship.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Design System & Visual Language

- **Atmosphere**: Off-white/ivory ruled notebook paper background with subtle horizontal lines.
- **Accents**: Translucent washi/scotch tape, Polaroid photo frames with drop shadows, pastel sticky notes (canary yellow, mint, rose, sky, lavender), and Figma selection bounding boxes with interactive corner handles.
- **Typography**:
  - **Display / Headings**: `Pixelify Sans` & `Silkscreen` (chunky 8-bit / pixel display fonts).
  - **Handwritten Annotations**: `Caveat` (warm, natural cursive script for notes and arrows).
  - **Body Text**: `Plus Jakarta Sans` (clean, modern, highly legible sans-serif).
  - **Code & Metadata**: `JetBrains Mono` (crisp monospace font for tags, timestamps, and metrics).
- **Interactions**:
  - Winking interactive smiley avatar.
  - One-click copy email button with instant feedback tooltip.
  - Tactile brutalist button states with smooth transitions.
  - Complete support for `prefers-reduced-motion` for accessibility.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript type checking (`tsc -b`) and bundles the static assets into the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📦 One-Click Deployment

### Deploy to Vercel
1. Push this repository to your GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Vite** (detected automatically).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://app.netlify.com/start).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.

---

## 📝 Content Customization (Single Source of Truth)

All content is managed in a single structured data file:
**[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

You can update any detail (bio, bullets, links, metrics, contact info) without touching the React components.

### 📋 Checklist: Items to Fill In or Confirm

Before public launch, review this checklist of items in `src/data/portfolioData.ts`:

- [ ] **GitHub Profile URL**:
  - Current placeholder: `https://github.com/aryan-negi`
  - Update `personal.social.github` with your exact handle.
- [ ] **LinkedIn Profile URL**:
  - Current placeholder: `https://linkedin.com/in/aryan-negi`
  - Update `personal.social.linkedin` with your profile URL.
- [ ] **CUETMate Project Links**:
  - Demo Link: `https://cuetmate.vercel.app` (replace with live link if deployed)
  - GitHub Repo: `https://github.com/aryan-negi/cuetmate`
- [ ] **Urban Essentials Project Links**:
  - Demo Link: `https://urban-essentials-demo.myshopify.com`
  - GitHub Repo: `https://github.com/aryan-negi/urban-essentials-theme`
- [ ] **Metric Placeholders (`[ADD METRIC]` tags)**:
  - Open Limits: `[ADD METRIC: e.g. 35%]` (page speed or conversion improvement).
  - Klynt Solutions: `[ADD METRIC: e.g. 90+]` (Lighthouse score or delivery cycle reduction).
  - CUETMate: `[ADD METRIC: e.g. 1,000+]` (student test sessions or question count).
  - Urban Essentials: `[ADD METRIC: e.g. 25%]` (cart drop-off reduction).
- [ ] **Profile Photo (Optional)**:
  - A stylized developer terminal illustration is currently set as the Polaroid avatar.
  - To use your real photo, drop `photo.jpg` into `public/` and pass `imageSrc="/photo.jpg"` to the `Polaroid` component in `src/components/About.tsx`.
- [ ] **Resume PDF**:
  - Your actual resume (`Black and White Clean Professional A4 Resume.pdf`) is already linked at `public/Aryan_Negi_Resume.pdf` and downloads directly when clicking **RESUME** or **DOWNLOAD RESUME**!

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Aryan_Negi_Resume.pdf   # Direct download of your resume
│   ├── favicon.svg              # Pixel smiley favicon
│   └── robots.txt               # SEO crawler directives
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BoundingBox.tsx  # Figma selection bounding box with grab handles
│   │   │   ├── Icons.tsx        # Inline SVG brand icons (GitHub, LinkedIn)
│   │   │   ├── Polaroid.tsx     # Polaroid photo card with tape & tilt
│   │   │   ├── Smiley.tsx       # Interactive winking retro smiley face
│   │   │   ├── StickyNote.tsx   # Yellow/pastel sticky notes with tape
│   │   │   └── WashiTape.tsx    # Semi-transparent scotch tape strips
│   │   ├── About.tsx            # About section with Polaroid & bio card
│   │   ├── Contact.tsx          # "LET'S TALK" section with 1-click email copy
│   │   ├── Education.tsx        # Delhi University & IBM Certification
│   │   ├── Experience.tsx       # Open Limits & Klynt Solutions internships
│   │   ├── Footer.tsx           # Bottom notebook margin & back-to-top
│   │   ├── Hero.tsx             # Main hero with Figma bounding box & CTAs
│   │   ├── Navbar.tsx           # Floating OS window header with navigation
│   │   ├── Projects.tsx         # CUETMate & Urban Essentials showcase cards
│   │   └── Skills.tsx           # Categorized skill badges (no fake % bars)
│   ├── data/
│   │   └── portfolioData.ts     # SINGLE SOURCE OF TRUTH for all content
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main layout container
│   ├── index.css                # Lined paper texture & Tailwind base
│   └── main.tsx                 # React DOM root entry
├── index.html                   # SEO meta tags, Google Fonts, Open Graph
├── package.json                 # Dependencies & build scripts
├── tailwind.config.js           # Design tokens, custom colors & fonts
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

---

## ♿ Accessibility & Performance

- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` landmarks.
- **Skip Link**: Instant keyboard navigation to `#main-content`.
- **Reduced Motion**: Full fallback for users with `prefers-reduced-motion` enabled.
- **High Contrast**: Dark ink typography against warm ivory paper ensures AA/AAA contrast ratios.
- **Zero Hallucination Guarantee**: All bullet points and experience details derive strictly from your provided resume.
