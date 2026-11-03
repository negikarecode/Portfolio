# Aryan Negi — Retro OS Personal Portfolio

> A top-tier, retro desktop operating system portfolio website inspired by graph-paper sketchbooks and 90s OS graphical user interfaces (`design 2.jpeg`).

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Visual Identity & System Tokens

- **Atmosphere & Canvas**: Cream graph paper background (`#F4EEDB`) with fine olive grid lines (`rgba(88, 106, 76, 0.15)`).
- **Retro OS Windows (`C:\ARYAN\...`)**:
  - Dark olive title bar (`#546647`) with DOS path syntax: `C:\ARYAN\portfolio`, `C:\ARYAN\works`, `C:\ARYAN\tools`, `C:\ARYAN\experience`, `C:\ARYAN\education`, `C:\ARYAN\contact`.
  - Functional window controls:
    - **Minimize `[-]`**: Collapses/expands window body with `aria-expanded` and keyboard support.
    - **Maximize `[□]`**: Opens that window in a focused fullscreen overlay, closable via `Esc` or close button.
    - **Close `[X]`**: Hides window and registers a restore chip in a bottom OS Taskbar.
  - Peach accent bar (`#EFA072`) on feature windows.
  - Ivory window surface (`#FBF8F1`) with 2.5px solid border (`#36432C`) and retro drop shadow (`5px 5px 0px 0px rgba(54, 67, 44, 0.95)`).
- **Desktop Folders & Icons**:
  - Yellow manila folders with blue floppy disk insert: `works`, `contact`, `resume`, `experience`, `education`, `tools`.
  - Monogram icon: `[h] profile`.
- **Dock Bar**:
  - Real social links only: **LinkedIn** and **GitHub**.
- **Typography & Accessibility**:
  - Hero Display: `DM Serif Display` with `clamp()` for fluid scaling without awkward wraps.
  - Body text: `Plus Jakarta Sans`, minimum 16px font size, line-height 1.65, letter-spacing 0.
  - Tags and captions: Minimum 12px, letter-spacing +0.03em.
  - High contrast (WCAG AA compliant).
  - Single source of truth: [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Needs Your Input Checklist

- [ ] **Confirmed Metrics (Optional)**: If you want to highlight verified percentage numbers or volume stats for Open Limits, Klynt Solutions, CUETMate, or Urban Essentials in the future, add them to [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). Current copy is outcome-driven and factual without placeholder text.
- [ ] **IBM Credential URL**: If you have an official Credly / IBM verification link for your *IBM Full Stack Software Developer* certification, add `credentialUrl: "https://..."` in `portfolioData.ts`.
- [ ] **Project Live & Code Links**: If CUETMate or Urban Essentials have public live deployments or GitHub repositories, add `live` and `github` URLs in `projects[].links` to reveal the DEMO / CODE buttons.
- [ ] **Profile Photo**: To replace the "AN" initials avatar, place `photo.jpg` (or `.png` / `.webp`) in `public/` and reference it in the circular avatar.
- [ ] **Education Date Confirmation**: The Srijan School is set to `"Completed 2025"`. If you have a specific starting year for senior secondary (e.g. `2023 – 2025`), confirm or update it in `portfolioData.ts`.
