# 02 — Page Layouts and Editorial Compositions (Complete Homepage Implementation)

## Centralized Section Visibility Configuration
All sections are governed by a strongly-typed toggle manifest in `src/config/homepage.ts`:
```ts
export const homepageSections = {
  hero: true,
  hospitalGallery: true,
  services: true,
  medicalTeam: true,
  facilities: true,
  location: true,
} as const;
```
When any key is set to `false`, Next.js completely omits the component from the prerendered HTML tree at build time.

---

## 1. Global Navigation & Header
- **Desktop Navbar**: Clean white backdrop (`bg-white/95 backdrop-blur-md`) with subtle border (`border-[#EAF2EF]`). Emerald medical cross logo, bold modern typography (*Janta Hospital · LOHARDAGA*), navigation links (`Home`, `About`, `Doctors`, `Departments`, `Facilities`, `Patient Info`, `Contact`), and action buttons (*Call Hospital* and *Get Directions*).
- **Mobile Navbar**: Dedicated mobile layout featuring a solid emerald circular call button (`bg-[#0A5C4F] text-white w-10 h-10 rounded-full`) and a borderless 3-bar hamburger toggle. Full accessible drawer modal with Escape listener and focus trapping.

---

## 2. Cinematic Hero Section
- **Desktop Composition**:
  - Left column: Light mint eyebrow pill (`JANTA HOSPITAL · LOHARDAGA`), headline (`Care,` in bold sans, `closer to home.` in Newsreader serif italic with curved underline flourish), 3 micro-pills (`OPD Consultation`, `General Medicine`, `Patient Guidance`), 2 action buttons, and floating landmark location card over layered bottom-left mint waves (`#E2F6EE`, `#D0EFE3`, `#B6E5D4`).
  - Right 58% full-bleed frame: Real hospital photograph (`janta-hospital-exterior.webp`) masked by the signature organic S-curve with dual-stroke wave contours (`#E2F6EE` / `#BCE7D7`) and subtle mint underglow.
- **Mobile Composition**:
  - Stacked editorial order: Header $\rightarrow$ Hero text, micro-pills, and side-by-side action buttons $\rightarrow$ Full-bleed hospital photo masked by an organic wave boundary (`#hero-mobile-curve`) with a soft mint crest on the right.
  - Floating Location Card hovering over the bottom veranda of the photograph, framed by bottom corner foliage and mint waves.

---

## 3. Inside Janta Hospital (Editorial Photography Gallery)
- **Visual Strategy**: Visual storytelling using only 100% genuine hospital photography cropped from the authorized building photograph.
- **Asymmetric Grid**:
  - Dominant 7-column exterior facade card with illuminated signboard, verified badge, and community landmark narrative strip.
  - Secondary asymmetric cards: Main Veranda & Ground-Floor Entryway (`gallery-entrance.webp`), On-Site Medicine Dispensary (`gallery-pharmacy.webp`).
  - Third row: Detailed Signboard Close-Up (`gallery-signboard.webp`) displaying emergency lines, and Architectural Spiral Staircase (`gallery-staircase.webp`).

---

## 4. Medical Services (Asymmetric Clinical Panels)
- **Verified Operations Only**:
  - **Featured Primary Card**: 24-Hour Emergency Care (solid deep-green gradient card `#0A5C4F` with emergency phone action and 24/7 badge).
  - **Outpatient (OPD) Consultations**: Daily general consultations and physician reviews.
  - **General Medicine & Care**: Acute fevers, infections, chronic conditions.
  - **On-Site Medicine Dispensary**: Front-porch pharmacy counter (`दवाई`).
  - **Clinical Procedures & Dressing**: Sterile wound management, dressing, injections.
  - **Patient Guidance & Referral**: Reception navigation and specialist referral assistance.

---

## 5. Our Medical Team (Physician Roster & Transparent Availability)
- **Truth in Presentation**: No fabricated doctor personas, fictional credentials, or stock headshots.
- **Structured Clinical Roles**:
  - General Medicine & Daily OPD
  - 24-Hour Emergency Medical Officer
  - Visiting Specialists
- **Front-Desk Protocol**: Daily doctor availability and consultation schedules confirmed directly via reception hotline `+91 96938 21174` and WhatsApp.

---

## 6. Facilities & Patient Experience (Cinematic Walkthrough)
- **Key Real-World Highlights**:
  1. Accessible Ground-Floor Entry with front porch and veranda.
  2. 24-Hour Emergency Response Area.
  3. Front-Porch Medicine Dispensary (`दवाई`).
  4. Clean Outpatient Consultation Rooms.
  5. Central Palmerganj Location behind Head Post Office.
- **Visuals**: Overlapping photographic composition pairing the veranda entryway with the on-site pharmacy card and hospital architecture badges.

---

## 7. Location & Contact (Integrated Directions & Access)
- **Verified Address**: Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand – 835302.
- **Verified Telephone Numbers**:
  - Primary Hotline: `+91 96938 21174`
  - Registered Signboard Lines: `9308348608`, `8340678334`, `8825389125`
  - WhatsApp: `+91 96938 21174`
- **Interactive Google Maps Card**: Art-directed map route preview with live pulse marker, directions guide from Lohardaga Bus Stand and Railway Station, and direct GPS navigation trigger.

---

## 8. Footer
- Minimal, clean, light-editorial footer with official brand cross, short intro, full navigation, verified telephone, address, copyright, and static export notice.
