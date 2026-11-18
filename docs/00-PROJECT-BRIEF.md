# 00 — Project brief

## Mission
Build a standout website for **Janta Hospital in Lohardaga** that serves patients first and creates a strong, credible online identity. The user values original, professional design over generic hospital templates. This is also a showcase of the developer's design and engineering skill.

## Audience and jobs to be done
- Local residents looking for the hospital by name, address or nearby landmarks.
- Patients looking for **verified** departments, doctors, consultation information, directions and contact details.
- Mobile users on slow networks who need answers in seconds.
- Search engines needing crawlable, structured, accurate content.

## Experience principles
1. **Useful before decorative:** call, directions, opening hours and services must be easy to find.
2. **Editorial, not template-like:** deliberate typography, asymmetry, original composition and photography.
3. **Truthful medical information:** no invented credentials, service claims, success rates, awards, reviews, availability, emergencies, or insurance acceptance.
4. **Fast by default:** prioritize content, images, semantic HTML and limited JS.
5. **Accessible by design:** keyboard, contrast, reduced motion, screen-reader support.
6. **Local authenticity:** real building, staff and facilities once permission is obtained.

## Scope — phase 1
- Home, About, Doctors, Departments overview and **only verified** department detail pages, Facilities, Patient Information, Contact, Privacy Policy.
- Responsive navigation, calls, map/directions links, optional WhatsApp contact (only if confirmed), FAQ disclosure, lightweight image gallery.
- No patient account, database, booking engine, payment, or medical records.
- A 'Book Enquiry' CTA must **not imply confirmed appointment booking**; label it 'Call for Appointment' or 'Enquire' until an actual booking process exists.
- Static export hosted on Cloudflare Pages; domain owned by hospital.

## Non-goals
- Fabricating 'live' doctor schedules, 24×7 emergency coverage, bed availability or reviews.
- Collecting patient medical information via static forms or third-party widgets without privacy review.
- Promising search rank #1 or exact Lighthouse 100 scores.

## Acceptance criteria
- All required public pages work on desktop/mobile and are statically generated.
- Clear location and contact actions work using verified details.
- Unique, useful page content and metadata; no thin doorway pages.
- All placeholder information is removed, withheld, or clearly marked as demo before production.
- Build, lint, type-check, accessibility and production deployment tests pass.
- Google Business Profile and Search Console setup are ready for authorized owner action.
