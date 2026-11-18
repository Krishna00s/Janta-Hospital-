# 03 — SEO strategy (technical + local)

## Objective and honest limits
Aim to make Janta Hospital easy to discover for branded searches ('Janta Hospital Lohardaga') and relevant local service searches **where genuinely offered**. Organic and Maps rankings are not guaranteed; local results depend on relevance, distance and prominence, not just technical implementation.

## Technical implementation
- Static HTML for all indexable routes; content visible without client-side JS.
- One descriptive `<h1>` per page, semantic landmarks and sensible heading hierarchy.
- Unique, accurate `<title>` and meta description per page; titles based on actual services, not generic stuffing.
- Absolute canonical URLs once domain is selected; consistent trailing slash policy and internal links.
- `app/sitemap.ts` and `app/robots.ts` compatible with static export; verify generated output.
- Open Graph/Twitter metadata with owned assets; share previews.
- Noindex dev/staging deployments where appropriate; ensure production is indexable.
- Accessible breadcrumbs and internal linking between doctors, departments, patient info and contact.
- Structured data: `Hospital` (or `MedicalOrganization` where appropriate), `PostalAddress`, `GeoCoordinates` only if verified, `openingHoursSpecification` only if confirmed, `telephone` and `url`; `Physician` only for verified doctors. No fabricated ratings, review counts, medical specialties or emergency coverage.
- Validate JSON-LD with Schema Markup Validator and relevant Google rich result tools; structured data does not guarantee rich results.
- Avoid duplicate/low-value location landing pages, hidden text, misleading keyword repetition.

## Suggested page intent map (validate against real services)
| Page | Search intent | Notes |
|---|---|---|
| Home | Janta Hospital Lohardaga | Official identity, contact, location |
| Contact | Janta Hospital address / phone / directions | Clear NAP details |
| Doctors | Janta Hospital doctors | Real roster only |
| Departments | Hospital services in Lohardaga | Real services only |
| Department detail | [verified service] in Lohardaga | Original, accurate content |
| About | Janta Hospital information | History and trust signals |

## Local SEO beyond the code
1. Hospital owner claims/verifies Google Business Profile; exact name, address and phone match website signage and citations.
2. Select truthful primary/secondary GBP categories, upload real photos, maintain hours/holiday hours, add genuine services.
3. Add accurate map pin and directions; confirm bus stand/post office landmark with owner.
4. Encourage genuine patient reviews ethically, without incentives or review gating; never fabricate or embed fake testimonials.
5. Check existing directory citations for name/address/phone consistency and fix errors where authorized.
6. Add official site URL to GBP; monitor Search Console and GBP performance.
7. Publish medically reviewed informational content only if the hospital can sustain quality, expertise and updates.

## Measurement after launch
- Verify site in Google Search Console; submit sitemap; inspect key URLs and indexing.
- Track branded vs non-branded search queries, clicks, impressions, CTR and average position; account for time and location variation.
- Track click-to-call and directions events without collecting patient-sensitive data; use privacy-conscious analytics.
- Monthly audit: broken links, page indexing, local listing accuracy, CWV, content freshness.

## Launch metadata examples (DRAFT)
Home title: `Janta Hospital, Lohardaga | Official Website`  
Home description: `Find verified contact details, location, doctors, departments and visitor information for Janta Hospital in Lohardaga, Jharkhand.`  
Only publish copy that reflects the actual website and confirmed hospital details.
