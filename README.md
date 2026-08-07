# SnarkLogic — Next.js / Vercel Production Prototype

A complete multi-file Next.js application for **SnarkLogic**, designed to demonstrate the architecture discussed in the planning conversation: brand system + reusable UI + interactive client behavior + server routes + multi-page information architecture + Vercel deployment readiness.

## Stack

- Next.js 16.2.11 (App Router)
- React 19.2
- TypeScript
- Pure CSS design system (no UI framework dependency)
- Next.js Route Handlers for server-side demo logic
- Vercel-ready configuration

## Pages

- `/` — brand/product home
- `/platform` — SaaS product architecture
- `/lab` — interactive campaign workspace concept
- `/agents` — four-pod multi-agent operating model
- `/studio` — enterprise performance studio
- `/marketplace` — creator & talent marketplace
- `/enterprise` — governance and unit economics
- `/council` — multidisciplinary executive advisory system
- `/investors` — 10-slide investor narrative
- `/about` — brand voice and visual system
- `/contact` — working server-posted brief form

## Server routes

- `POST /api/brief` — deterministic orchestration demo. Works without API keys; replace with your model/orchestration provider later.
- `POST /api/contact` — validates contact briefs. Production integration point for CRM/email/database.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy with GitHub + Vercel

1. Create a new GitHub repository, e.g. `snarklogic`.
2. Upload **the entire contents of this project**, not only one HTML file.
3. Commit and push to the repository.
4. In Vercel choose **Add New → Project**.
5. Import the GitHub repository.
6. Vercel should detect **Next.js** automatically.
7. Keep the root directory as `./` and deploy.
8. Point `snarklogic.com` to the Vercel project when you are ready to use the custom domain.

Every later GitHub push can create a fresh Vercel deployment/preview depending on your Git integration settings.

## Recommended production integrations

The repository intentionally ships without secrets or paid external dependencies. Add them only when needed:

- email delivery / CRM in `app/api/contact/route.ts`
- model provider / orchestration service in `app/api/brief/route.ts`
- persistent database for briefs, campaigns and experiments
- authentication for customer workspaces
- object storage for creative assets
- analytics/event pipeline for creative performance data
- queue/background job system for long-running generation workflows

Never commit live API keys. Configure secrets as Vercel Environment Variables.

## Brand direction

**Tagline:** Make them laugh. Make the numbers move.

**Position:** comedy with a quant desk behind it.

**Visual logic:** editorial black + warm paper; signal lime for system intelligence/positive movement; coral for creative heat/risk; violet for synthetic depth. The design intentionally avoids generic "AI blue", robot heads, and template-SaaS aesthetics.

## Important prototype notes

This is a production-buildable brand/application prototype, not a finished enterprise back end. The UI and route architecture are real; external model, CRM, database, rights-management, ad-network, identity, and billing integrations are represented as clean integration points rather than fake live connections.

Campaign/ROI examples are illustrative and not guarantees.
