# 04 — Technical architecture and security

## Stack
- Next.js App Router + TypeScript + Tailwind CSS.
- Static export via `output: 'export'` in `next.config.ts`.
- Cloudflare Pages static hosting; build command `npm run build`; output directory `out`.
- No production Node server, database, auth, server actions or API routes for phase 1.
- Prefer native React/Next primitives; keep client components limited to interactive UI.

## Static export constraints
- Do not use runtime server features, dynamic cookies/headers, ISR or server-dependent image optimization.
- For `next/image`, use `images: { unoptimized: true }` if necessary and provide optimized image files and responsive sizing; alternatively use responsive `<picture>`/`srcset` carefully.
- For dynamic department routes, use `generateStaticParams()` for verified slugs.
- Verify metadata routes, sitemap and robots export as expected in the chosen Next.js version.
- Do not assume every Next.js feature works with static export; validate production output.

## Suggested source structure
```
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    doctors/page.tsx
    departments/page.tsx
    departments/[slug]/page.tsx
    facilities/page.tsx
    patient-info/page.tsx
    contact/page.tsx
    privacy/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/  home/  shared/
  content/
    hospital.ts  departments.ts  doctors.ts  faqs.ts
  lib/
    seo.ts  schema.ts
public/
  images/
```

## Content data model
Type content with explicit verification state, e.g. `status: 'verified' | 'pending'`, source/contact, lastVerifiedAt. Production pages must filter or exclude pending facts. Keep phone/address/URLs in one canonical config to prevent mismatch. Avoid client-visible comments that imply placeholders are real.

## HTTPS and deployment
- Attach hospital-owned domain and enable Cloudflare-managed HTTPS/TLS.
- Redirect HTTP to HTTPS; pick one canonical hostname and redirect the other.
- Configure appropriate `_headers` for static Cloudflare Pages: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, suitable `Permissions-Policy`, and a tested CSP. Do not blindly apply CSP that breaks Next.js or maps; audit actual resources first.
- Set secure external link attributes, review third-party scripts, keep dependencies updated and run `npm audit` with judgment.
- Free-tier service limits and lack of SLA must be accepted by the hospital; re-evaluate for stricter uptime/support requirements.

## Privacy
- No patient medical records, medical enquiry form, or unnecessary tracking.
- If analytics are added, document their use and configure consent where legally required.
- Prefer a normal Google Maps directions link to a heavy third-party map embed on every page.
- Hospital owns domain, hosting account, Google Business Profile and Search Console access; developer receives delegated permissions.

## Deploy steps
1. Build locally, inspect `out/` and test static preview.
2. Push to repository, connect Cloudflare Pages, set build/output.
3. Deploy preview and validate routes/assets/headers.
4. Connect custom domain, DNS, HTTPS, canonical redirects.
5. Run post-deploy audit and register Search Console after hospital approval.
