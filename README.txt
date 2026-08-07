SnarkLogic email replacement files

Replace these files in the existing repository:

1. app/api/contact/route.ts
2. components/ContactForm.tsx
3. .env.example (optional documentation update)

No package.json change is required.

Then configure these Vercel Environment Variables:
- RESEND_API_KEY
- BRIEF_TO_EMAIL
- BRIEF_FROM_EMAIL (optional until you verify a custom sending domain)

The server route sends the submitted brief through Resend's HTTPS API.
