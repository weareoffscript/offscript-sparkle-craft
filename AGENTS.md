# Base44 Dev Environment

## Stack
- Vite 5 + React 18 + TypeScript + Tailwind + shadcn/ui (Lovable export)
- Pure frontend — no backend, no database. Workshop progress stored in browser localStorage.
- Package manager: npm (both `bun.lock` and `package-lock.json` exist; npm is used in dev).

## Running
```sh
docker compose -f docker-compose.base44.yml up -d --build
```
- Dev server runs on container port 8080, mapped to host port 3000.
- `npm install` runs at container start, then `npm run dev --host 0.0.0.0`.
- Live reload via Vite HMR; source is bind-mounted so edits appear without rebuilds.

## Notes
- `vite.config.ts` sets `server.allowedHosts: true` so the preview proxy origin is accepted.
- No external secrets or credentials are required.
- Verify: `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000` should return 200.
