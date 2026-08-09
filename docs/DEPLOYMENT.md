# Deployment

The repository is a standard Next.js App Router project intended for Vercel.

## Vercel settings

- Framework Preset: Next.js
- Production Branch: `main`
- Root Directory: `./`
- Build Command: Default
- Output Directory: Default
- Install Command: Default

Do not set the output directory to `dist`, `public`, or `index.html`.

## Contact handling

The contact form posts directly to FormSubmit AJAX and does not require Resend, SMTP credentials, or Vercel email environment variables.

## Domain

Canonical site metadata targets:

`https://snarklogic.josephjilovec.com`

## Legacy routes

The old ad-tech URLs remain as redirects so existing links do not expose obsolete company positioning:

- `/platform` → `/engine`
- `/studio` → `/creators`
- `/marketplace` → `/creators`
- `/council` → `/enterprise`

## Production expansion

Future integrations may include model orchestration, persistent project/workspace storage, authentication, creator-specific evaluation data, enterprise-private deployment boundaries, audit logs, and organization-specific guardrail memory. Those integrations are not represented as already live.
