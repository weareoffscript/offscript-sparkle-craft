# Export Plan — Full Source Code

## Goal
Get the complete crash course codebase out of Lovable so it can be hosted or developed anywhere (GitHub, Vercel, Netlify, your own server, or a local machine).

## What's in the code
A standard React + TypeScript + Vite + Tailwind project. No Lovable-specific lock-in in the code itself — it builds with `npm install` + `npm run build` and the output is plain static files that any web host can serve.

## Option A — Connect to GitHub (recommended)
Best if you want to keep developing, use version history, or deploy to Vercel/Netlify.

1. In the Lovable editor, open the **Plus (+) menu** in the chat input → **GitHub** → **Connect project**.
2. Authorize the Lovable GitHub App and pick the account/organization.
3. Click **Create Repository** — your full code syncs there automatically and stays in sync both ways.
4. From GitHub: **Code → Download ZIP**, or `git clone` the repo.

## Option B — Download codebase directly
Fastest if you just want a ZIP right now.

1. Open the project in the Lovable editor on desktop.
2. Open the **Code Editor** (file tree view).
3. Click **Download codebase** at the bottom of the file tree sidebar.
   (Requires a paid workspace.)

## Running it elsewhere
After you have the code:

```text
npm install      # install dependencies
npm run dev      # local dev server (port 8080)
npm run build    # production build → dist/ folder
```

Deploy the `dist/` folder (or connect the repo) to any static host: Vercel, Netlify, Cloudflare Pages, GitHub Pages, or your own server.

## Prep work I'll do in this project
- Write a proper `README.md` replacing the template placeholder — covering what the app is, how to install/run/build, and the project structure — so the repo is self-explanatory wherever it lands.

## Notes
- The app stores workshop progress in the browser (localStorage) — no backend or database to migrate.
- The PDF/text exports already in your Files are separate deliverables, not part of the codebase.
