# Janta Hospital — Gravity Implementation Documentation

**Project:** Janta Hospital, Lohardaga, Jharkhand, India  
**Status:** Visual-first editorial design system implemented; hospital facts & photography pending management verification.  
**Primary Aim:** A distinctive, patient-first editorial website featuring modern typography, predominantly white surfaces (75–80%), restrained deep-green accents (20–25%), and authentic local discoverability.

## Creative Direction & Governance
1. **Visual-First Editorial Design**: Follow `docs/01-DESIGN-SYSTEM.md` for tokens, typography scale (Manrope + restrained Newsreader serif accent), and asymmetric layout compositions.
2. **Realism Over Fiction**: Never treat AI-generated buildings or stock models as real hospital imagery. Placeholder slots remain neutral until authentic hospital photography is provided.
3. **Internal Fact Governance**: All verification gates remain internal (`docs/06-CONTENT-REGISTER.md` and `src/content/hospital.ts`). No developer-facing warning boxes or "pending" labels are displayed in the public interface.
4. **Static Performance & SEO**: Pure pre-rendered static HTML compatible with Cloudflare Pages, maintaining Core Web Vitals (LCP $\le 2.5\text{s}$, CLS $\le 0.1$).

## Documentation Index
- `00-PROJECT-BRIEF.md`: Product scope and acceptance criteria.
- `01-DESIGN-SYSTEM.md`: Authoritative visual tokens, typography, and composition rules.
- `02-PAGE-LAYOUTS.md`: Header, hero, and future section layout specifications.
- `03-SEO-STRATEGY.md`: Technical and local SEO guidelines.
- `04-TECHNICAL-ARCHITECTURE.md`: Next.js static export build and security headers.
- `05-PERFORMANCE-QA.md`: Core Web Vitals, accessibility, and QA verification checklist.
- `06-CONTENT-REGISTER.md`: Internal fact verification ledger and owner sign-off tracking.
- `GRAVITY-INSTRUCTIONS.md`: Implementation workflow and deliverables.
