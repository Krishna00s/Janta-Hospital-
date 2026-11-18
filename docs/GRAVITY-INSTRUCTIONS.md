# GRAVITY — READ FIRST

You are implementing a real, static informational website for **Janta Hospital, Lohardaga**. This project is design-sensitive, SEO-sensitive and medically sensitive. Read all documents in `docs/` before writing code.

## Reading order
1. `README.md`
2. `00-PROJECT-BRIEF.md`
3. `06-CONTENT-REGISTER.md`
4. `01-DESIGN-SYSTEM.md`
5. `02-PAGE-LAYOUTS.md`
6. `03-SEO-STRATEGY.md`
7. `04-TECHNICAL-ARCHITECTURE.md`
8. `05-PERFORMANCE-QA.md`
9. `references/approved-editorial-direction.png` and `references/inspiration-dental-reference.png`

## Non-negotiables
- Inspect existing repo and preserve working project setup; do not reinitialize without need.
- Implement Next.js App Router + TypeScript + Tailwind with static export and Cloudflare Pages compatibility.
- Follow editorial layout language, not generic medical templates. Make mobile experience excellent.
- Do not treat mockup doctors, building, phone numbers, emergency hours, testimonials, statistics or service list as facts.
- Keep unverified content isolated in typed placeholder data, visibly marked as demo, and excluded from publishable output. Use neutral placeholders rather than invented facts.
- Prioritize crawlable HTML, metadata, internal links, structured data only with verified fields, and real-world performance.
- No backend, fake live availability, patient information collection, or unnecessary heavy dependencies.
- Never claim SEO rankings are guaranteed.

## Efficient execution plan
**Run 1 — Foundation + complete frontend:** inspect repo, define tokens/components/content schema, implement all scoped pages and responsive editorial UI, static export, accessible interactions. If facts are missing, build graceful empty/placeholder states in local development.

**Run 2 — SEO + optimization + verification:** metadata, sitemap, robots, canonical, JSON-LD with verified fields only, image/font optimization, Cloudflare headers, lint/type/build, accessibility and mobile audits. Fix issues and produce evidence-based report.

Do not fragment into many tiny prompts; complete compatible tasks together. Stop and ask for owner-confirmed facts only when essential to publish.

## Deliverables
1. Working source code and build.
2. `IMPLEMENTATION-REPORT.md` listing routes, implemented features, decisions and outstanding issues.
3. `VERIFICATION-REPORT.md` with commands run, results, tested breakpoints and any Lighthouse measurements actually obtained.
4. Explicit `BLOCKED-BY-HOSPITAL.md` checklist of missing real content/approvals.

## Definition of done
All pages compile, static output is generated, no dead controls, no invented public-facing facts, mobile navigation and actions work, and deployment instructions are clear. **Production launch is a separate approval gate.**
