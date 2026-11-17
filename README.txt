# Ismirti Bohara — Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and reusable shadcn/ui-style primitives.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit profile and project content in `data/portfolio.ts`. Page sections live in `components/sections/`; shared styles and design tokens are in `app/globals.css`.

## Photos

- `public/images/portrait.jpg` — hero portrait
- `public/images/crochet-1.jpg` — handmade crochet top

Replace those files with photos you want to show publicly. Keep the same filenames or update the paths in `data/portfolio.ts`.

## Sections

Hero → Experience → Work & Projects → Education → Stack & Interests → GitHub Contributions → Templates & Resources → Writing → Connect.

The experience, templates, and writing content is intentionally modest and honest. Add internships, resources, or posts when you have them.

## GitHub Pages deployment

This project uses Next.js static export so it can be hosted on GitHub Pages. The workflow is `.github/workflows/deploy.yml`.

In the repository, open **Settings → Pages** and set the source to **GitHub Actions**. Push changes to `main`; the workflow builds the static files and deploys them. The live project URL is `https://ismirtibohara.github.io/ismirti-portfolio/`.

The GitHub Pages subpath is handled by `next.config.ts`; local development uses the root path.
