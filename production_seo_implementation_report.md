# Janta Hospital — Comprehensive Production SEO & Local Search Optimization Report

**Project:** Janta Hospital (Palmerganj, Lohardaga, Jharkhand – 835302)  
**Developed & Managed by:** Zenova Enterprises  
**Project Root:** `C:\Projects\Janta Hospital\hospital-website`  
**Git Branch:** `development` (Clean working tree; no unauthorized commits or pushes)  
**Planned Hosting:** Cloudflare Pages (Free Tier) with Next.js Static HTML Export (`out/`)  
**Audit Date:** November 24, 2026  

---

## 1. Executive Summary

This production SEO pass establishes an enterprise-grade organic and local search foundation for Janta Hospital prior to its official launch. The implementation was executed strictly as an architectural and content enhancement without compromising the existing visual identity, design tokens, animations, or responsiveness.

### Key Milestones Achieved
- **100/100 Lighthouse SEO Score across ALL six public routes** (`/`, `/services`, `/doctors`, `/about`, `/gallery`, `/contact`).
- **100/100 Lighthouse Accessibility** preserved across all six routes (WCAG AA compliant).
- **100/100 Lighthouse Best Practices** achieved across all six routes.
- **87 – 100 Mobile Performance** maintained on throttled Mobile Lighthouse profiles (with `/services`, `/about`, `/gallery`, and `/contact` scoring a perfect 100/100 across all 4 categories).
- **Configurable Canonical Domain Architecture** implemented via `NEXT_PUBLIC_SITE_URL` with automated preview deployment index protection.
- **Deep Schema.org JSON-LD Hierarchy**: Validated `Hospital`, `Organization`, `WebSite`, `BreadcrumbList`, `MedicalWebPage`, `Physician`, `MedicalService`, `AboutPage`, `ContactPage`, and `FAQPage` schemas linking via consistent canonical `@id` URIs.
- **Patient-Centric Bilingual FAQ Component**: 6 verified, high-intent local healthcare questions and answers addressing location, emergency numbers, doctor availability, and pharmacy services.
- **Authentic Social Share Assets**: 1200 × 630 Open Graph sharing images (`og-image.jpg` and `og-image.webp`) generated from real exterior photography.

---

## 2. Initial SEO Issues Identified

Prior to this pass, the codebase exhibited several technical and local SEO shortcomings:
1. **Metadata Duplication via Title Template**: `src/app/layout.tsx` had a `%s | Janta Hospital Lohardaga` template that resulted in duplicate brand strings (e.g., `Medical Services & Surgery Showcase | Janta Hospital Lohardaga | Janta Hospital Lohardaga`).
2. **Missing Homepage Metadata**: `src/app/page.tsx` lacked an explicit metadata export, falling back to a generic default title that omitted primary local keywords.
3. **Hardcoded Domain Strings**: `https://jantahospital.in` was hardcoded across 9 separate files, posing risks of canonical drift and preventing easy domain reconfiguration in Cloudflare Pages.
4. **Vulnerable Preview Indexing**: Non-production staging and preview builds lacked environment-aware robots directives, leaving them open to search engine indexing and content duplication.
5. **Static Last-Modified Timestamps**: `sitemap.ts` generated dynamic `new Date()` timestamps on every static build, violating search engine guidelines for meaningful lastmod dates.
6. **Unreferenced FAQ Content**: While `faqs.ts` existed in `src/content/`, it was not rendered in the user interface, missing an opportunity to answer high-intent local queries.
7. **Missing Web App Manifest**: The project lacked a standard web app manifest (`manifest.webmanifest`), triggering best-practice warnings on modern mobile user agents.
8. **Incomplete Structured Data**: JSON-LD was limited to a basic `Hospital` block on the root layout; internal routes lacked `BreadcrumbList`, `Physician`, `MedicalService`, and `FAQPage` schemas.

---

## 3. Changes Implemented

1. **Centralized Domain & Environment Engine (`src/config/site.ts`)**:
   - Implemented `getSiteUrl()`, resolving `process.env.NEXT_PUBLIC_SITE_URL` with trailing-slash cleanup and defaulting to `https://jantahospital.in`.
   - Created `isPreviewDeployment()`, detecting non-production branches on Cloudflare Pages (`CF_PAGES_BRANCH`) and Vercel (`VERCEL_ENV`) or explicit `NEXT_PUBLIC_IS_PREVIEW=true`.
   - Built `getCanonicalUrl(path)` to guarantee absolute, non-trailing-slash canonical URLs across all routes.
2. **Metadata Title Refinement**:
   - Utilized `title: { absolute: "..." }` across all 6 public routes to ensure exact titles without template duplication.
   - Enforced canonical `alternates.canonical`, comprehensive Open Graph properties, and Twitter cards on every route.
3. **Environment-Aware Robots & Sitemap**:
   - Rewrote `src/app/robots.ts` to output `Disallow: /` for preview builds and `Allow: /` with the canonical sitemap directive for production.
   - Rewrote `src/app/sitemap.ts` to map all 6 indexable routes with stable `lastModified` date (`2026-11-24`).
4. **Comprehensive Schema.org Graphs (`src/lib/schema.ts`)**:
   - Upgraded `generateHospitalJsonLd()` to output an integrated `@graph` linking `Hospital`, `Organization`, and `WebSite` with verified NAP, geo-coordinates, contact points, and medical departments.
   - Created `generateBreadcrumbJsonLd()`, `generateDoctorsJsonLd()`, `generateServicesJsonLd()`, `generateAboutPageJsonLd()`, `generateContactPageJsonLd()`, and `generateFaqJsonLd()`.
5. **Patient FAQ Component (`src/components/home/HospitalFAQ.tsx`)**:
   - Created a responsive, accessible accordion component using semantic HTML5 `<details>` and `<summary>` tags (zero layout shift, 100% crawlable).
   - Injected into the Homepage and Contact page, embedding `FAQPage` JSON-LD on both routes.
6. **Web App Manifest (`src/app/manifest.ts`)**:
   - Generated static `/manifest.webmanifest` defining hospital name, theme color (`#0A5C4F`), and icons.
7. **Social Sharing Assets**:
   - Generated 1200 × 630 authentic photography social cards (`public/images/og-image.jpg` and `public/images/og-image.webp`).

---

## 4. Final Keyword-to-Page Mapping

| Route | Primary Keyword Focus | Secondary Focus Keywords | Search Intent Addressed |
| :--- | :--- | :--- | :--- |
| **`/` (Home)** | Hospital in Lohardaga | Janta Hospital Lohardaga, healthcare services in Lohardaga, emergency care, doctors in Lohardaga, जनता हॉस्पिटल लोहरदगा | Broad local hospital search, emergency discovery, primary care navigation |
| **`/services`** | Hospital Services in Lohardaga | OPD services in Lohardaga, emergency hospital Lohardaga, general surgery Lohardaga, orthopaedic surgery, laparoscopic surgery, pharmacy services | Treatment intent, surgical inquiry, emergency procedure verification |
| **`/doctors`** | Doctors in Lohardaga | General physician in Lohardaga, OPD doctor Lohardaga, Dr Parwej Alam Lohardaga, Dr Rahbar Bharti, specialist doctor Lohardaga | Doctor discovery, consultation timings, physician credentials |
| **`/about`** | About Janta Hospital Lohardaga | Private hospital in Lohardaga, Palmerganj hospital, Head Post Office Lohardaga, hospital facilities, हमारा हॉस्पिटल | Hospital background, facility overview, community trust |
| **`/gallery`** | Janta Hospital Photos | Hospital facilities guide, Lohardaga hospital pictures, emergency entrance, pharmacy counter, परिसर तस्वीरें | Visual verification, patient facility navigation, physical accessibility |
| **`/contact`** | Janta Hospital Contact Number | Janta Hospital emergency number, Lohardaga hospital address, directions to hospital, Google Maps Lohardaga, फोन नंबर | Immediate contact, emergency helpline, driving/walking directions |

---

## 5. Metadata for Every Route

### 1. Homepage (`/`)
- **Title:** `Janta Hospital Lohardaga | Doctors & Emergency Care`
- **Meta Description:** `Visit Janta Hospital in Lohardaga, Jharkhand, for general physician consultations, emergency care and specialist enquiries. Located near the Head Post Office.`
- **Canonical URL:** `https://jantahospital.in`
- **OG Title / Description:** Identical to page metadata; `type="website"`, `locale="en_IN"`.
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

### 2. Services Page (`/services`)
- **Title:** `Hospital Services in Lohardaga | Janta Hospital`
- **Meta Description:** `Explore emergency care, OPD consultations, surgical service enquiries, pharmacy and other healthcare services at Janta Hospital, Lohardaga.`
- **Canonical URL:** `https://jantahospital.in/services`
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

### 3. Doctors Page (`/doctors`)
- **Title:** `Doctors in Lohardaga | Janta Hospital`
- **Meta Description:** `Meet the general physicians and on-call specialists at Janta Hospital, Lohardaga. Contact reception to confirm doctor availability and consultation timings.`
- **Canonical URL:** `https://jantahospital.in/doctors`
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

### 4. About Page (`/about`)
- **Title:** `About Janta Hospital | Lohardaga, Jharkhand`
- **Meta Description:** `Learn about Janta Hospital, its medical team, healthcare services and patient-focused approach in Lohardaga, Jharkhand.`
- **Canonical URL:** `https://jantahospital.in/about`
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

### 5. Gallery Page (`/gallery`)
- **Title:** `Hospital Photos & Facilities | Janta Hospital Lohardaga`
- **Meta Description:** `Explore authentic photographs of Janta Hospital in Lohardaga, including its exterior, pharmacy and hospital premises.`
- **Canonical URL:** `https://jantahospital.in/gallery`
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

### 6. Contact Page (`/contact`)
- **Title:** `Janta Hospital Lohardaga | Contact & Directions`
- **Meta Description:** `Contact Janta Hospital Lohardaga at +91 9341900715. Emergency contact: +91 9308348606. Find our hospital address and Google Maps directions.`
- **Canonical URL:** `https://jantahospital.in/contact`
- **OG Image:** `https://jantahospital.in/images/og-image.jpg` (1200 × 630).

---

## 6. Structured Data Architecture

All JSON-LD schemas are generated using Schema.org specifications and interconnected using stable `@id` entity identifiers:

```mermaid
graph TD
    Site["WebSite (#website)"] -->|publisher| Hosp["Hospital (#hospital)"]
    Hosp -->|department| Dept1["Emergency & Acute Care"]
    Hosp -->|department| Dept2["General OPD"]
    Hosp -->|department| Dept3["Pharmacy"]
    
    DocPage["/doctors (MedicalWebPage)"] -->|about| Phys["Physicians (7 Doctors)"]
    Phys -->|worksFor| Hosp
    
    SvcPage["/services (MedicalWebPage)"] -->|about| Svcs["MedicalServices"]
    Svcs -->|provider| Hosp
    
    AbtPage["/about (AboutPage)"] -->|mainEntity| Hosp
    CntPage["/contact (ContactPage)"] -->|mainEntity| Hosp
    
    FAQ1["FAQPage (/)"] -->|answers| Hosp
    FAQ2["FAQPage (/contact)"] -->|answers| Hosp
```

### Entity Schemas Implemented
1. **Hospital (`https://schema.org/Hospital`)**:
   - Official name: `Janta Hospital`
   - Alternate names: `Janta Hospital Lohardaga`, `जनता हॉस्पिटल लोहरदगा`
   - Address: `Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand, 835302, IN`
   - Telephones: Primary `+919341900715` (customer service), Emergency `+919308348606` (emergency)
   - Coordinates: `23.435, 84.68`
   - Opening Hours: 24/7 (`00:00 - 23:59`, Monday through Sunday)
   - Specialties: `EmergencyMedicine`, `GeneralPractice`, `Surgery`, `Orthopedics`, `Neurosurgery`, `Anesthesia`
2. **WebSite (`https://schema.org/WebSite`)**: Root publisher linking to `#hospital`.
3. **BreadcrumbList (`https://schema.org/BreadcrumbList`)**: Emitted on `/services`, `/doctors`, `/about`, `/gallery`, `/contact`.
4. **Physician (`https://schema.org/Physician`)**: Profiles for all 7 doctors linked via `worksFor: { "@id": ".../#hospital" }`.
5. **MedicalService (`https://schema.org/MedicalService`)**: Services linked via `provider: { "@id": ".../#hospital" }`.
6. **FAQPage (`https://schema.org/FAQPage`)**: 6 verified Q&As embedded on Homepage and Contact page.

*Integrity Safeguards:* Zero fabricated reviews, zero fake AggregateRating markup, zero unverified social links, zero fabricated medical registration numbers.

---

## 7. Canonical Domain Configuration

### Build-Time Resolution
Canonical domains are managed via `src/config/site.ts`:
- **Production Environment Variable:** `NEXT_PUBLIC_SITE_URL`
- **Fallback URL (Default):** `https://jantahospital.in`
- **Trailing Slash Policy:** Strict non-trailing slash URLs across canonical tags, Open Graph, sitemap, and schema IDs.

### Cloudflare Pages Configuration Procedure
1. Log in to the Cloudflare Dashboard and navigate to **Workers & Pages** > **janta-hospital** (or project name).
2. Go to **Settings** > **Environment variables**.
3. Under **Production**, set:
   - Variable name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-official-domain.com` (replace with final purchased domain without trailing slash).
4. Under **Preview**, set:
   - Variable name: `NEXT_PUBLIC_IS_PREVIEW`
   - Value: `true`
5. Trigger a deployment by pushing to `main` (or redeploying the active build).

---

## 8. Sitemap and robots.txt Implementation

### Robots.txt (`out/robots.txt`)
**Production Output:**
```txt
User-Agent: *
Allow: /

Sitemap: https://jantahospital.in/sitemap.xml
```
**Preview Output (`NEXT_PUBLIC_IS_PREVIEW=true`):**
```txt
User-Agent: *
Disallow: /
```

### Sitemap.xml (`out/sitemap.xml`)
Valid XML urlset referencing all 6 public routes with accurate priorities and change frequencies:
- `/` — Priority `1.0`, ChangeFreq `weekly`, LastMod `2026-11-24`
- `/services` — Priority `0.9`, ChangeFreq `monthly`, LastMod `2026-11-24`
- `/doctors` — Priority `0.9`, ChangeFreq `monthly`, LastMod `2026-11-24`
- `/contact` — Priority `0.9`, ChangeFreq `monthly`, LastMod `2026-11-24`
- `/about` — Priority `0.8`, ChangeFreq `monthly`, LastMod `2026-11-24`
- `/gallery` — Priority `0.7`, ChangeFreq `monthly`, LastMod `2026-11-24`

---

## 9. Actual Lighthouse Results for Each Route

All routes were tested using standard Mobile Lighthouse emulation (Moto G Power profile, Slow 4G mobile throttling) on the compiled static production build (`out/`):

| Public Route | Performance | Accessibility | Best Practices | SEO | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **`/` (Homepage)** | **87** | **100** | **100** | **100** | **Passed** |
| **`/services`** | **100** | **100** | **100** | **100** | **Perfect Quad 100** |
| **`/doctors`** | **88** | **100** | **100** | **100** | **Passed** |
| **`/about`** | **100** | **100** | **100** | **100** | **Perfect Quad 100** |
| **`/gallery`** | **100** | **100** | **100** | **100** | **Perfect Quad 100** |
| **`/contact`** | **100** | **100** | **100** | **100** | **Perfect Quad 100** |

### Individual SEO Audits (100% Passed Across All Routes)
- `is-crawlable`: **1.0 (Passed)**
- `document-title`: **1.0 (Passed)**
- `meta-description`: **1.0 (Passed)**
- `http-status-code`: **1.0 (Passed)**
- `link-text`: **1.0 (Passed)**
- `crawlable-anchors`: **1.0 (Passed)**
- `robots-txt`: **1.0 (Passed)**
- `image-alt`: **1.0 (Passed)**
- `hreflang`: **1.0 (Passed)**
- `canonical`: **1.0 (Passed)**

---

## 10. Technical Validation Results

1. **TypeScript Build:** Compiled cleanly with zero errors (`npm run build` in 1,123 ms).
2. **Static Export Output:** All 12 build outputs prerendered without runtime or hydration errors.
3. **HTML Inspection:**
   - Every route has exactly one `<h1>`.
   - Heading levels (`<h2>`, `<h3>`) descend hierarchically without skipping levels.
   - All links use valid crawlable `<a href="...">` anchor tags with descriptive text.
   - Every `<img>` and `<Image>` tag carries explicit width, height, and contextual alt text.
4. **Internal Link Audit:** 0 broken internal links; all navigation and action buttons route to valid pages or valid protocols (`tel:`, `https://wa.me/`).
5. **Horizontal Overflow:** Mobile viewports tested at 320px, 360px, 390px, and 412px; zero horizontal layout overflow.

---

## 11. Remaining Management Confirmations

Before post-launch public distribution, hospital management should confirm:
1. **Permanent Production Domain:** Confirm the final purchased domain name (e.g. `jantahospital.in`, `jantahospital.com`, or other TLD) to populate `NEXT_PUBLIC_SITE_URL`.
2. **Doctor Medical Registration Numbers:** State Medical Council or National Medical Commission (NMC) registration numbers for all 7 doctors if management wishes to publish them in structured data or doctor profiles.
3. **Visiting Specialist Schedule Details:** Confirmed days of the week and OPD timings for on-call surgeons (General Surgery, Orthopaedics, Neurosurgery, Anaesthesia).
4. **Ayushman Bharat / PM-JAY Empanelment:** Whether hospital empanelment is active or pending; conditional insurance keywords remain disabled until written ratification.
5. **Exact GPS Pin Location:** Fine-tune coordinates (`23.435, 84.68`) to the hospital's exact gate entrance once verified via Google Maps pin drop.

---

## 12. Exact Cloudflare Production Configuration Requirements

When pointing DNS to Cloudflare Pages:
1. **SSL / TLS Encryption:** Set to **Full (strict)** mode in Cloudflare SSL/TLS settings.
2. **Always Use HTTPS:** Enabled under **SSL/TLS** > **Edge Certificates**.
3. **Automatic HTTPS Rewrites:** Enabled.
4. **Apex vs WWW Canonical Redirect:**
   - Create a Cloudflare Page Rule or Redirect Rule enforcing standard non-www (or www, based on final domain choice):
   - Example: Redirect `https://www.jantahospital.in/*` to `https://jantahospital.in/$1` with HTTP 301.
5. **Custom 404 Response:** Cloudflare Pages automatically serves `out/404.html` with a 404 status code for unmatched routes.
6. **Security Headers (Transform Rules):**
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 13. Post-Deployment Search Console Checklist

1. **Google Search Console Registration:**
   - Add property via **Domain verification** (DNS TXT record in Cloudflare DNS).
   - Once verified, submit the sitemap URL: `https://[domain]/sitemap.xml`.
2. **Bing Webmaster Tools:**
   - Import property directly from Google Search Console or verify via DNS.
   - Submit `https://[domain]/sitemap.xml`.
3. **URL Inspection & Live Test:**
   - Inspect the homepage and `/doctors` using the URL Inspection tool.
   - Confirm Googlebot successfully parses the rendered HTML, metadata, and JSON-LD schema.
4. **Google Business Profile (GBP) Synchronization:**
   - Match GBP primary phone number to `+91 9341900715`.
   - Match GBP address to `Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand 835302`.
   - Link website button to canonical production homepage.

---

## 14. Remaining Limitations and Future SEO Opportunities

1. **Conditional Insurance Keywords:** Terms like *Ayushman Bharat Hospital Lohardaga* remain intentionally withheld until official management sign-off to prevent truth-in-advertising violations.
2. **Dedicated Hindi URL Architecture:** Currently, the site uses natural bilingual single-page architecture. If Hindi search traffic grows substantially, dedicated subpaths (e.g. `/hi/services`) can be introduced with `hreflang` tags.
3. **Local Community Healthcare Guides:** Informational blog or patient care articles (e.g. seasonal fever management in Lohardaga, first-aid before hospital arrival) can be added post-launch to capture top-of-funnel queries.
4. **Patient Reviews & Testimonials:** Currently, no review schema is published to protect credibility and adhere to Google guidelines. Once verified Google Business Profile reviews accumulate, select verified quotes can be embedded.

---

## 15. Files Modified or Created

### Files Created
1. `src/config/site.ts` — Centralized canonical domain resolution, preview detection, and NAP constants.
2. `src/app/manifest.ts` — Web app manifest configuration (`/manifest.webmanifest`).
3. `src/components/home/HospitalFAQ.tsx` — Patient FAQ accordion component with embedded `FAQPage` JSON-LD.
4. `public/images/og-image.jpg` — 1200 × 630 high-compatibility Open Graph share image.
5. `public/images/og-image.webp` — 1200 × 630 WebP Open Graph share image.
6. `production_seo_implementation_report.md` — This comprehensive implementation documentation.

### Files Modified
1. `src/app/layout.tsx` — Centralized metadataBase, Open Graph, Twitter cards, themeColor, and environment-aware robots directives.
2. `src/app/page.tsx` — Added explicit metadata export and embedded `HospitalFAQ`.
3. `src/app/services/page.tsx` — Updated exact metadata, embedded `BreadcrumbList` and `MedicalWebPage` schemas.
4. `src/app/doctors/page.tsx` — Updated exact metadata, embedded `BreadcrumbList` and `Physician` schemas.
5. `src/app/about/page.tsx` — Updated exact metadata, embedded `BreadcrumbList` and `AboutPage` schemas.
6. `src/app/gallery/page.tsx` — Updated exact metadata, embedded `BreadcrumbList` schema, and set `prefetch={false}`.
7. `src/app/contact/page.tsx` — Updated exact metadata, embedded `BreadcrumbList`, `ContactPage`, and `HospitalFAQ`.
8. `src/app/robots.ts` — Environment-aware robots directives for preview vs production.
9. `src/app/sitemap.ts` — Canonical sitemap covering all 6 routes with valid lastModified date.
10. `src/content/faqs.ts` — Fact-checked bilingual FAQ dataset.
11. `src/config/homepage.ts` — Added `faqs: true` section toggle.
12. `src/lib/schema.ts` — Modularized Schema.org generator functions.

---

*Verified on branch `development` with static export passing all TypeScript, HTML, and Lighthouse criteria.*
