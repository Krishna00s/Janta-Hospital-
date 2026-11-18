# 05 — Performance, accessibility and launch QA

## Targets (not guarantees)
- Core Web Vitals at 75th percentile where field data exists: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.
- Lighthouse aspirational scores: Performance >= 95 on representative mobile tests, Accessibility >= 95, Best Practices >= 95, SEO >= 95. Do not game the metrics; validate actual UX.
- Test slow mobile connections, midrange Android devices, reduced motion, keyboard-only and screen reader navigation.

## Engineering checklist
- [ ] Hero image appropriately compressed, dimensions reserved, priority loaded only where appropriate.
- [ ] Below-fold photos lazy-loaded with proper widths/sizes and descriptive alt text.
- [ ] Self-hosted or system fonts with fallback metrics; avoid FOIT and layout shift.
- [ ] Minimal client JS; no unnecessary carousel/animation packages.
- [ ] Mobile menu, sliders and FAQ usable via keyboard and touch.
- [ ] Focus states visible, skip-to-content link, meaningful headings/landmarks.
- [ ] Contrast passes WCAG AA; no color-only status.
- [ ] Touch targets comfortably sized; no horizontal viewport overflow.
- [ ] Forms (if ever added) have labels, validation and safe data handling.
- [ ] No fabricated claims, people, ratings, awards or medical advice.
- [ ] All routes return expected pages; no broken links or empty department pages.
- [ ] Unique metadata, canonical, OG image, robots, sitemap and JSON-LD validated.
- [ ] HTTPS, redirects, headers, no secrets in repo or client bundle.
- [ ] Verified hospital NAP consistent across pages and Google Business Profile.
- [ ] Privacy policy and analytics configuration reviewed.

## Commands
```bash
npm run lint
npx tsc --noEmit
npm run build
npx serve out
```
If lint script is absent, configure ESLint appropriately rather than silently skipping. Check all generated routes and inspect the output directory.

## QA report format
| Check | Result | Evidence / issue | Owner |
|---|---|---|---|
| Static build | PASS/FAIL | command output | Gravity |
| Mobile UX | PASS/FAIL | viewport/device | Gravity |
| Lighthouse | score/date | report link | Gravity |
| Factual verification | pending/verified | source | Hospital |

## Launch gates
**Never publish** until phone/address, hospital identity, listed services, doctors, schedules, emergency/insurance claims, photographs and consent are confirmed or omitted. Owner must approve public-facing medical content.
