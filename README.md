# Aryan Negi — Retro OS Personal Portfolio

> A top-tier, retro desktop operating system portfolio website inspired by graph-paper sketchbooks and 90s OS graphical user interfaces (`design 2.jpeg`).

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Design 2 System & Aesthetic Tokens

- **Atmosphere & Canvas**: Cream graph paper background (`#F4EEDB`) with fine olive grid lines (`rgba(88, 106, 76, 0.15)`).
- **Retro OS Windows (`C:\ARYAN\...`)**:
  - Dark olive title bar (`#546647`) with DOS path syntax: `C:\ARYAN\portfolio`, `C:\ARYAN\works`, `C:\ARYAN\tools`, `C:\ARYAN\experience`, `C:\ARYAN\education`, `C:\ARYAN\contact`.
  - Functional window controls: Minimize `[-]`, Maximize `[□]`, and Coral Red Close `[X]` button.
  - Peach accent bar (`#EFA072`) on feature windows.
  - Ivory window surface (`#FBF8F1`) with 2.5px solid border (`#36432C`) and retro drop shadow (`5px 5px 0px 0px rgba(54, 67, 44, 0.95)`).
- **Desktop Folders & Icons**:
  - Classic yellow manila folders with blue floppy disk / document inserts: `works`, `contact`, `resume`, `experience`, `education`, `tools`.
  - App icon: `[h] profile` in dark olive rounded square.
- **Dock Bar**:
  - Horizontal sage/olive rounded dock (`#6A7B5A`) with desktop dock icons:
    - `in` (LinkedIn — sky blue square)
    - GitHub (dark charcoal square with Octocat)
    - `Bē` (Featured works — bright blue square)
    - Dribbble / Contact (bubblegum pink square)
- **Typography**:
  - **Hero Title**: `DM Serif Display` (condensed wireframe `PORTFOLIO` title).
  - **Name & Headings**: `DM Serif Display` in warm copper orange (`#D97236`).
  - **DOS System Paths & Metadata**: `Space Mono` & `JetBrains Mono`.
  - **Body Text**: `Plus Jakarta Sans`.

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
This runs TypeScript type checking (`tsc -b`) and bundles static assets into `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Content Management (Single Source of Truth)

All content is managed in **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**.

### Checklist of Items to Confirm / Personalize:
- [ ] **GitHub Profile**: Update `personal.social.github` (default: `https://github.com/aryan-negi`).
- [ ] **LinkedIn Profile**: Update `personal.social.linkedin` (default: `https://linkedin.com/in/aryan-negi`).
- [ ] **CUETMate Links**: Set live demo and repo URLs in `projects[0].links`.
- [ ] **Urban Essentials Links**: Set live demo and repo URLs in `projects[1].links`.
- [ ] **Metric Placeholders (`[ADD METRIC]` tags)**:
  - Open Limits: `[ADD METRIC: e.g. 35%]`
  - Klynt Solutions: `[ADD METRIC: e.g. 90+]`
  - CUETMate: `[ADD METRIC: e.g. 1,000+]`
  - Urban Essentials: `[ADD METRIC: e.g. 25%]`
- [ ] **Resume PDF**:
  - Your actual resume (`Black and White Clean Professional A4 Resume.pdf`) is located at `public/Aryan_Negi_Resume.pdf` and downloads immediately from the desktop folder or CTA buttons.
