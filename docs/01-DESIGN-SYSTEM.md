# 01 — Design System (Authoritative Reset)

## Creative Direction
This design system establishes an **editorial, visual-first, patient-centered aesthetic** for Janta Hospital, Lohardaga. The visual language communicates healthcare professionalism through meaningful imagery, disciplined modern typography, generous whitespace, and restrained deep-green accents.

### Core Non-Negotiables
1. **Visual-First Storytelling**: Use large photography, cinematic natural crops, asymmetric editorial layouts, image-led navigation, and purposeful whitespace. Avoid walls of text, repetitive card grids, software dashboard styling, or generic medical templates.
2. **Color Balance (80 / 20 Rule)**:
   - **75–80% Surface**: Pure white (`#FFFFFF`) and warm off-white (`#FAFCFA` / `#F7FAF8`). No full-screen dark-green hero.
   - **20–25% Accents**: Deep medical green (`#0A5C4F` / `#073B32`) and mint accents (`#E8F5F1` / `#7CE4C9`) used strategically for identity, primary actions, and visual grounding.
3. **Typography**: Single modern sans-serif family (**Manrope**) for UI, navigation, buttons, body copy, and headings. A restrained editorial serif (**Newsreader**) is permitted solely for short italic accents (e.g. *closer to home.*), never for entire blocks of text.
4. **Authenticity & Realism**: Never present AI-generated or stock architecture as real hospital photography. Unverified facts stay in internal configuration/documentation; public interfaces display only verified operational details without developer-facing "pending" tags or warning boxes.

---

## Design Tokens

```css
:root {
  /* Surface Tokens (75-80% of Page Canvas) */
  --color-surface-bg: #FFFFFF;
  --color-surface-subtle: #FAFCFA;
  --color-surface-card: #FFFFFF;
  --color-surface-muted: #F4FAF7;

  /* Brand Accent Tokens (20-25% Strategic Contrast) */
  --color-brand-primary: #0A5C4F;       /* Accessible deep medical green */
  --color-brand-primary-hover: #074B40;
  --color-brand-dark: #073B32;          /* Heading and brand ink */
  --color-brand-mint: #E8F5F1;          /* Soft badge and container backgrounds */
  --color-brand-mint-accent: #7CE4C9;   /* Subtle vibrant mint details */
  --color-brand-mint-border: #C2EADB;   /* Soft border for badges & cards */

  /* Typography Colors */
  --color-text-primary: #122421;        /* High-contrast headings and primary text */
  --color-text-body: #475B57;           /* Readable body copy (contrast > 5:1 on white) */
  --color-text-muted: #6B7F7B;          /* Secondary metadata and footnotes */
  --color-text-inverse: #FFFFFF;

  /* Borders & Dividers */
  --color-border-light: #EAF2EF;
  --color-border-subtle: #E2ECE9;
  --color-border-strong: #C8DDD7;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

---

## Typography Scale

- **Family**: `Manrope` (Sans-serif) for all interface layers; `Newsreader` (Serif) strictly for italic editorial accents.
- **Hero Display H1**: `clamp(2.5rem, 4.5vw, 4rem)` (line-height: `1.12`, tracking: `-0.025em`).
- **Section Heading H2**: `clamp(1.75rem, 3vw, 2.25rem)` (line-height: `1.2`).
- **Subsection Heading H3**: `1.25rem`–`1.5rem` (line-height: `1.3`).
- **Body Text**: `1rem` (16px) on mobile, `1.0625rem` (17px) on desktop (line-height: `1.6`, font-weight `400/500`).
- **Eyebrow / Micro-label**: `0.75rem` (12px) (tracking: `0.08em` uppercase, font-weight `700`).
- **Buttons & Nav**: `0.875rem`–`0.9375rem` (font-weight `600`).

---

## Composition Principles

1. **Asymmetric Hero**:
   - Left side: One impactful headline, one concise factual sentence, two relevant actions (*Call Hospital* & *Get Directions*).
   - Right side: Large photographic composition with an art-directed convex arch on desktop (`lg:rounded-l-[160px]`), cinematic crop, and an overlapping location card.
2. **Compact Integrated Quick-Information Strip**:
   - Floats cleanly below the hero with verified operational items (OPD consultation, location, reception).
   - Light white container, soft border, rounded mint icon containers.
3. **No Dashboard Resemblance**:
   - Avoid busy metric grids, developer status widgets, or dark dashboard layouts.
   - Use whitespace generously to let photography and clear patient guidance breathe.
4. **Mobile Usability**:
   - Single-column editorial flow on mobile.
   - Touch targets $\ge 44 \times 44\text{px}$.
   - Quick-access phone and directions immediately accessible without obstructive popups.
