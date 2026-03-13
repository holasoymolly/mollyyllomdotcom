# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 15 App Router** portfolio site for MOLLY YLLOM, a graphic design studio. The site is in Spanish and deployed on Vercel.

### Key Conventions

**Two-layer component pattern:**
- `src/app/` — Thin Next.js route files. Each `page.tsx` simply imports and renders from `pageComponents/`.
- `src/pageComponents/` — Full page implementations (e.g., `HomePage/HomePage.tsx`). Each folder has an `index.ts` barrel export.
- `src/components/` — Shared UI components (`Header`, `Footer`, `AppDrawer`, `PortfolioGrid`, etc.), also with barrel `index.ts` exports.

**Data files (not API/DB):**
- `src/projects.tsx` — All portfolio projects as static data. Exports `activeProjects` (ordered array) and `projectsBySlug` (lookup map). Add new projects here and they automatically appear in `PortfolioGrid` and get a dynamic route at `/proyectos/[slug]`.
- `src/data/collections.ts` — NFT collections data for the `/nfts` page.
- `src/pageComponents/DownloadsPage/downloadData.ts` — Downloads page data.

**Styling:** Tailwind CSS. Brand colors are `indigo-950` (primary text/dark), `violet-900` (hover/accent), and `stone-200` (background).

**Icons:** Custom SVG icon components in `src/icons/` (not from a library).

### Routes

| Route | Page Component |
|-------|---------------|
| `/` | `HomePage` |
| `/conoceme` | `ConocemePage` |
| `/proyectos` | `ProjectsPage` (grid via `PortfolioGrid`) |
| `/proyectos/[slug]` | `ProjectPage` (data from `projectsBySlug`) |
| `/contacto` | `ContactPage` |
| `/descargas` | `DownloadsPage` |
| `/nfts` | `NFTsPage` |

### Adding a New Project

1. Define a new `Project` object in `src/projects.tsx` with `slug`, `title`, `portfolioImage`, `heroImage`, `paragraphs`, and `images`.
2. Add it to the `activeProjects` array (order determines grid position).
3. Place images in `public/img/projects/[slug]/`.

### Analytics & Third-party Scripts

`src/app/layout.tsx` includes Google Analytics (GTM ID: `G-Q3TSX67D2J`), Vercel Analytics, Vercel Speed Insights, and LaunchMyNFT scripts for the Solana NFT integration.
