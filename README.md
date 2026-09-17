# Revenue Leak Crash Course

An interactive workshop that diagnoses where a business is leaking money, time, and systems capacity, and generates a personalized leak report at the end.

A React + TypeScript + Vite + Tailwind (shadcn/ui) single-page app. No backend — workshop progress and answers are kept in browser state.

## Development

You need Node.js (see `package.json` engines / `.nvmrc` if present) and npm.

```sh
git clone <this-repository-url>
cd offscript-sparkle-craft
npm i
npm run dev
```

The dev server runs at http://localhost:8080.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run build:dev` — development-mode build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally
- `npm test` — run the Vitest unit test suite
- `npm run test:watch` — run Vitest in watch mode

## Deployment

`npm run build` produces static files in `dist/` that can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc).
