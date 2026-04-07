# NOCHECK WEBSITE — CLAUDE CODE PROJECT BRIEF

## Project Overview

Build a complete, production-ready, multi-page marketing website for NoCheck — an enterprise digital payment platform that replaces paper checks with instant digital disbursements. The site must be professional, modern, and enterprise-grade — designed to win the trust of VP-level decision makers at Fortune 500 insurers, state government agencies, major universities, and financial institutions.

This is not a startup landing page. This is the digital front door for a company that has been processing billions in payments since 1993, partnered with JP Morgan Chase, US Bank, Bank of America, and Key Bank, and is a member of the Federal Reserve Business Payments Coalition. The design must reflect that institutional weight.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with a custom theme config matching the brand system below
- **Animations:** Framer Motion for scroll-triggered reveals, page transitions, and micro-interactions
- **Deployment target:** Vercel (include vercel.json if needed)
- **TypeScript:** Yes
- **Icons:** Lucide React
- **Fonts:** Google Fonts — Lato (body). For the display/headline font "Agressive" — since this is a custom font that would need to be licensed and loaded as a local file, use a bold, condensed sans-serif from Google Fonts as a stand-in. Recommended: "Archivo Black" or "Bebas Neue" for hero headlines only. Include a comment in the theme config noting that "Agressive" should replace the stand-in once the font files are available.

---

## Brand System

### Colors

```
Primary Background:    #141414  (near-black — used for hero sections, stat bars, footer, and dark panels)
Primary Text:          #FFFFFF  (white — on dark backgrounds)
Accent:                #C3E941  (electric lime — CTA buttons, stat numbers, hover states, active indicators, key highlights)
Accent Hover:          #D4F055  (lighter lime for hover states)
Accent Dark:           #9BBF2E  (darker lime for active/pressed states)
Body Background:       #FFFFFF  (white — for light content sections)
Alt Background:        #F7F7F5  (warm off-white — alternating light sections to create rhythm)
Body Text:             #141414  (near-black on light backgrounds)
Secondary Text:        #5A5A5A  (dark gray — subheadings, secondary copy)
Muted Text:            #8A8A8A  (medium gray — captions, metadata, labels)
Border:                #E5E5E3  (light gray — subtle dividers and card borders)
Card Background:       #FFFFFF  (white cards on off-white sections, or slightly lighter dark on dark sections)
Dark Card:             #1E1E1E  (for cards on dark backgrounds)
Dark Border:           #2A2A2A  (subtle borders on dark backgrounds)
```

### Typography Scale

```
Hero Headline:         Archivo Black (stand-in for Agressive), 56-72px, uppercase, letter-spacing: -0.02em, line-height: 1.0
                       (Mobile: 36-44px)
Section Headline:      Archivo Black, 36-44px, uppercase or sentence case depending on context
                       (Mobile: 28-32px)
Sub-headline:          Lato Bold (700), 24-28px, sentence case
                       (Mobile: 20-24px)
Body Large:            Lato Regular (400), 18-20px, line-height: 1.7
Body:                  Lato Regular (400), 16px, line-height: 1.7
Body Small:            Lato Regular (400), 14px, line-height: 1.6
Label/Caption:         Lato Bold (700), 12-13px, uppercase, letter-spacing: 0.08em
Stat Number:           Archivo Black, 48-56px, color: #C3E941
Stat Label:            Lato Regular, 14px, uppercase, letter-spacing: 0.06em, color: #FFFFFF or #8A8A8A
```

### Spacing System

Use Tailwind's default spacing scale. Key rhythm:
- Section padding: py-24 (96px) on desktop, py-16 (64px) on mobile
- Between major content blocks within a section: gap of 48-64px
- Between text elements: 16-24px
- Card padding: p-8 (32px) on desktop, p-6 (24px) on mobile
- Container max-width: max-w-7xl (1280px), centered with px-6

### Buttons

```
Primary CTA:           bg-[#C3E941] text-[#141414] font-bold px-8 py-4 rounded-lg
                       Hover: bg-[#D4F055] with slight scale transform (scale-[1.02])
                       Text: Lato Bold, 16px, uppercase, letter-spacing: 0.04em

Secondary CTA:         border-2 border-white text-white font-bold px-8 py-4 rounded-lg
                       Hover: bg-white/10
                       On light backgrounds: border-[#141414] text-[#141414], hover bg-[#141414]/5

Tertiary/Text Link:    text-[#C3E941] with arrow (→), hover underline
```

### Border Radius
- Buttons: rounded-lg (8px)
- Cards: rounded-2xl (16px)
- Badges/pills: rounded-full
- Images/media: rounded-xl (12px)

---

## Design Direction & Aesthetic

### The Feeling

Think Stripe meets Bloomberg Terminal. Clean, precise, confident. Not playful, not startup-y, not SaaS-template. This is financial infrastructure — the design should feel like the company has been doing this for 30 years because they have.

### Key Design Principles

1. **Dark authority with lime punctuation.** The site should lean heavily on the dark palette (#141414) for hero sections, stat bars, CTAs, and the footer — creating a sense of weight and seriousness. The electric lime (#C3E941) is used sparingly but boldly: CTA buttons, stat numbers, hover accents, and key data points. It should feel like a precision instrument, not a neon sign. White and off-white sections provide breathing room between the dark panels.

2. **Proof everywhere.** Client names, stats, and trust signals should be visible within every 2 sections of scrolling. This is not a features-first site — it's a proof-first site. The trust strip, stat bar, case studies, banking partner logos, and compliance badges are the most important visual elements on the page.

3. **Typography as hierarchy.** The display font (Agressive / stand-in) is used ONLY for hero headlines and major section titles. Everything else is Lato. The display font's impact comes from restraint — if it's used everywhere, it loses its power. Headlines should be large, bold, and uppercase. Body copy should be generous in size (18-20px) and line-height (1.7) for readability.

4. **Whitespace as a signal of quality.** Enterprise buyers subconsciously associate generous spacing with premium products. Don't cram content. Let sections breathe. A headline with 96px of padding above and below it signals confidence. Tight layouts signal desperation.

5. **Subtle motion, not animation for animation's sake.** Use Framer Motion for: scroll-triggered fade-up reveals on sections (staggered 100ms between child elements), number count-up animations on the stat bar, smooth page transitions between routes. Do NOT use: bouncing elements, parallax scrolling, particle effects, or anything that feels like a template.

6. **Grid-breaking moments.** Not every section should be a centered container. Consider: the trust strip as a full-bleed horizontal scroll on mobile, the case study section with an asymmetric card layout, the industries grid with uneven card sizes to create visual interest. But always within the overall system — calculated asymmetry, not chaos.

### Visual References (for tone, not copying)

- stripe.com — Clean, dark heroes, precise typography, generous whitespace
- plaid.com — Enterprise fintech gravitas, dark palette with color accents
- ramp.com — Modern enterprise, stats-forward, proof-heavy
- rippling.com — Bold headlines, confident tone, section rhythm

### What to AVOID

- Generic SaaS templates (gradient blobs, floating UI mockups, isometric illustrations)
- Stock photography of people in offices pointing at screens
- Blue-and-white fintech template aesthetics
- Rounded, bubbly, "friendly" design elements
- Overuse of icons — use them sparingly and only when they genuinely aid comprehension
- Purple gradient backgrounds
- Cookie-cutter card grids with identical sizing

---

## Target Audience

The people visiting this site are:

**Primary: VP of Finance / CFO / Treasury Director**
At insurance companies (like Aflac, Zurich), state government agencies, universities, and large corporations. They care about: cost reduction, fraud prevention, compliance, audit readiness, and operational efficiency. They are risk-averse. They need to justify the decision to a board or committee. Social proof and security credentials are the #1 thing they look for.

**Secondary: VP of Operations / CTO / CIO**
Technical decision-makers evaluating the platform's integration capabilities, API architecture, uptime SLAs, and security posture. They want to see: technical specs, compliance certifications, infrastructure details, and proof of scale.

**Tertiary: Procurement / Vendor Management**
Looking for: case studies, compliance documentation, certifications, and references. They will visit the Security page and Case Studies page more than any other.

**What they all have in common:** They are not impulse buyers. They are evaluating NoCheck against 3-5 competitors. They will spend 5-15 minutes on the site before deciding whether to request a demo. Every section must earn the next scroll.

---

## Site Architecture

```
/                           → Homepage
/solutions/insurance        → Insurance Solution Page
/solutions/healthcare       → Healthcare & Medical Payers
/solutions/government       → Municipalities & Government
/solutions/ticketing        → Ticketing & Entertainment
/solutions/universities     → Universities & Institutions
/solutions/transportation   → Transportation & Logistics
/platform                   → Platform Capabilities (optional — can be a homepage section instead)
/why-nocheck                → Competitive Positioning
/security                   → Security & Compliance
/case-studies               → Case Studies (Aflac + AT&T)
/about                      → About / Company
/contact                    → Contact
/privacy                    → Privacy Policy (simple text page)
```

---

## Global Components

### Navigation (Sticky Header)

- Background: transparent on hero, transitions to bg-[#141414]/95 backdrop-blur-md on scroll
- Left: NoCheck logo (white on dark, dark on light — use text "NOCHECK™" styled in the display font as a placeholder until the actual logo SVG is provided. include a comment in the code about this.)
- Center/Left: Nav links — Home, Solutions (dropdown), Why NoCheck, Security, About, Contact
- Solutions dropdown: Insurance, Healthcare, Government, Ticketing, Universities, Transportation
- Right: Phone number (248.621.0900) as a subtle link + "Request a Demo" lime CTA button
- Mobile: Hamburger menu with full-screen overlay, dark background, lime accents

### Footer

- Dark background (#141414)
- Top section: 4-column grid — Company (links), Solutions (links), Resources (Security, Case Studies, Privacy), Contact (phone, email, address)
- Middle: Compliance badges row — PCI-DSS · SOC2 · HIPAA · FedNow · Federal Reserve BPC
- Bottom: © The NoCheck Group, LLC. All rights reserved.
- The footer should feel substantial — not an afterthought. Enterprise buyers scroll to the footer looking for compliance info and contact details.

### Shared Section Components

**Trust Strip** — Horizontal row of client/partner logos. White/light gray on dark background. Subtle opacity on idle (60%), full opacity on hover. Can use logo text names if actual logo SVGs aren't available yet — style them as: Lato Bold, 18px, uppercase, letter-spacing 0.06em.

**Stat Bar** — Dark background (#141414). Stats in a horizontal grid. Numbers in lime (#C3E941) using the display font, 48-56px. Labels below in white, small caps. Animate numbers counting up on scroll into view.

**CTA Block** — Reusable full-width section with dark background, centered headline, subtext, and primary + secondary buttons. Used at the bottom of every page.

**Section Reveal** — Every major section should animate in on scroll: fade-up with 30px translateY, 600ms duration, staggered children at 100ms intervals. Use Framer Motion's `whileInView` with `viewport={{ once: true }}`.

---

## Page-by-Page Design Specifications

### Homepage (/)

This is the most important page. It needs to make a complete case for NoCheck in a single scroll — hitting every note: problem, solution, proof, platform, security, industries, case studies, and CTA.

**Section 1: Hero**
- Full-viewport-height dark section (#141414)
- Headline: "MOVE MONEY FORWARD." / "WITHOUT CHECKS." — two lines, display font, 64-72px, white, uppercase
- Subheadline: "The enterprise payment platform trusted by Aflac, AT&T, and leading institutions to move billions — securely, instantly, and at scale." — Lato, 20px, #C9C9C9 (light gray), max-width 640px
- Two buttons: "Request a Demo" (lime) + "Talk to Sales" (white outline)
- Subtle background: consider a very subtle grid pattern or fine dot matrix at 3-5% opacity to add texture without distraction. NOT a gradient. NOT an image.
- Optional: subtle animated line or pulse effect on the accent color — minimal, not distracting

**Section 2: Trust Strip**
- Slightly different dark shade (#1A1A1A or #1E1E1E) to create separation from hero
- "Trusted by the companies that can't afford to get payments wrong." — small, Lato, uppercase label
- Client logos row + Banking partner logos row (separate visual groupings)
- Compliance badge pills: PCI-DSS · SOC2 · HIPAA · FedNow · Fed Reserve BPC

**Section 3: By the Numbers / Stat Bar**
- Dark background (#141414) with the stat grid
- 6 stats: 30+ Years, Billions Processed, 99.99% Uptime, 250ms Response, US + EU, 4 Bank Partners
- Numbers animate counting up on scroll
- Below stats: a subtle tagline line: "Preferred service provider since 1996. Aflac Partner of the Year. Federal Reserve BPC Member."

**Section 4: The Problem**
- Light background (white or #F7F7F5)
- Headline: "PAPER CHECKS COST MORE THAN YOU THINK."
- Body copy as provided
- Optional: a simple visual element — e.g., a cost comparison showing check cost vs. digital cost, or a timeline showing days (check) vs. seconds (digital)

**Section 5: The Solution**
- Light background, alternating from section 4 (use the other of white/#F7F7F5)
- Headline: "THE PROVEN WAY TO MOVE MONEY."
- Payment methods displayed as a clean grid of small cards or pills — each with a subtle icon and label
- "Recipients choose how they receive funds. You choose how fast you want to move." — closing line

**Section 6: How It Works**
- Light background
- Two-column layout at desktop: Left column "For Your Operations" (3 steps), Right column "For Your Recipients" (3 steps)
- Each step: number (large, lime), title (bold), description
- Steps should feel connected — consider a subtle vertical line connecting the numbers
- On mobile: stacks vertically, operations first, then recipients

**Section 7: The Platform**
- Dark background (#141414) for contrast
- Headline: "MORE THAN PAYOUTS. A COMPLETE PAYMENT OPERATIONS PLATFORM."
- Grid of platform capabilities as cards on dark background (#1E1E1E cards with #2A2A2A borders)
- Each card: title (white, bold) + short description (gray) + optional subtle icon
- 8 cards: Branded Portals, Call Center, Enrollment, Admin Portals, Multi-Rail, Prepaid Cards, Dual Payment, e2check

**Section 8: Security & Compliance**
- Light background
- Headline: "BANK-GRADE SECURITY. AUDITED ANNUALLY."
- Compliance badges displayed prominently — consider a horizontal row of badge-style cards
- Key security features listed below
- This section should feel institutional and trustworthy

**Section 9: Industries**
- Light or dark background (designer's choice based on rhythm)
- Headline: "PROVEN ACROSS THE INDUSTRIES THAT MATTER MOST."
- Industry cards in a grid — each links to its solution page
- Cards should have: industry name (bold), one-line description, and a subtle arrow or link indicator
- 7 industries + "Also serving" line at bottom

**Section 10: Case Studies**
- Light background with slightly elevated card treatment
- Headline: "DON'T TAKE OUR WORD FOR IT."
- Two case study cards side-by-side (Aflac + AT&T)
- Each card: client name, the challenge (1 line), the key result stat (large, lime — "99.99% uptime" / "99.999% accuracy"), the award/outcome
- Cards should feel premium — consider a subtle shadow or border treatment

**Section 11: About / Company (Brief)**
- Dark background
- Headline: "30+ YEARS OF MOVING MONEY FORWARD."
- Brief narrative (2-3 sentences from the copy)
- Federal Reserve BPC callout
- Banking partners listed
- [Learn More → /about] link

**Section 12: Final CTA**
- Dark background (#141414)
- Headline: "ELIMINATE CHECKS. JOIN THE COMPANIES THAT ALREADY HAVE."
- Subhead with Aflac/AT&T/government proof
- Primary + Secondary buttons
- Phone: 248.621.0900 / Email: sales@nocheck.com

**Section 13: Footer**
- As described in Global Components

---

### Solution Pages (/solutions/*)

All 6 solution pages share the same template/layout structure but with different content. Build a reusable solution page component.

**Layout:**

1. **Hero** — Dark background, industry-specific headline + subheadline, "Request a Demo" CTA
2. **Overview** — Light background, 2-3 paragraphs of context. If a case study or social proof exists for this industry, call it out here (e.g., Insurance → Aflac award, Government → state unemployment systems, Transportation → Wheels/CGB)
3. **Key Benefits** — Light or alternating background. Grid of benefit cards (4-6 per page). Each: bold title, description paragraph. Consider a two-column layout on desktop.
4. **Use Cases** — Simple list or pill grid of specific use cases
5. **Case Study** (if applicable) — Abbreviated case study card (Insurance gets Aflac, Government gets the unemployment mention)
6. **Compliance** (if applicable) — Security/compliance callout relevant to the industry (HIPAA for healthcare/insurance, Federal Reserve for government)
7. **CTA Block** — Industry-specific headline + demo button

**Solution Pages Content:**
All copy is in the attached `NoCheck_Complete_Website_Copy.md` file. Each page has its own complete content section.

---

### Why NoCheck (/why-nocheck)

This is the competitive positioning page. Design it as a bold editorial layout.

- Hero: Dark, "NOT EVERY PAYMENT PLATFORM IS BUILT THE SAME." + subhead about 30 years vs. startup competitors
- Each differentiator gets its own visual block — not just a bulleted list. Consider alternating left-right layouts or a staggered card approach.
- Key differentiators to make visually prominent: 30+ years, 4 banking partners, Federal Reserve, HIPAA + PCI-DSS + SOC2, Dual US/EU, branded everything, on-shore call center, proprietary fraud detection
- Final block: "THE BOTTOM LINE" — a confident closing statement with CTA

---

### Security (/security)

This page gets the most scrutiny from procurement and compliance teams.

- Structured, scannable layout
- Certifications section: prominent badge-style cards for PCI-DSS, SOC2, HIPAA, Data Privacy Framework, Federal Reserve
- Infrastructure section: dual data center visual (Michigan + Luxembourg), uptime stats, response time
- Encryption section: AES 256, end-to-end flow description
- Fraud Prevention section: Early Warning System, IP filtering, duplicate detection
- Payment Gateway section: how data flows securely

---

### About (/about)

- Founder story (Chuck Kopko, 30+ years, Federal Reserve BPC)
- Banking partners (4 logos/names)
- Global presence (Michigan + Luxembourg)
- Recognition/awards section
- Timeline optional: 1993 founded → key milestones → present

---

### Contact (/contact)

- Clean, simple layout
- Contact form (Name, Email, Company, Phone, Industry dropdown, Message)
- Sidebar or adjacent panel with: phone number, email, physical address
- "What to Expect" steps (Discovery → Demo → Technical Review → Pilot)

---

### Case Studies (/case-studies)

- Two expanded case studies: Aflac and AT&T
- Full narrative for each with Challenge, Solution, Results structure
- Key stats displayed prominently
- Aflac award badge/callout

---

## Responsive Breakpoints

- Mobile: < 768px — single column, stacked sections, hamburger nav, touch-friendly tap targets (min 44px)
- Tablet: 768-1024px — 2-column grids where desktop uses 3-4, nav can stay horizontal or collapse
- Desktop: > 1024px — full layout with max-w-7xl container
- Large desktop: > 1440px — content stays max-w-7xl centered, dark sections remain full-bleed

---

## SEO Requirements

Each page needs:
- Unique `<title>` tag (format: "Page Title | NoCheck — Enterprise Payment Platform")
- Meta description (150-160 chars, unique per page)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter card tags
- Canonical URL
- Structured data (Organization schema on homepage)
- Semantic HTML (proper heading hierarchy: one H1 per page, H2 for sections, H3 for subsections)
- Alt text on all images (when actual images are added)

---

## Performance Requirements

- Target Lighthouse score: 90+ on all categories
- Use Next.js Image component for any images
- Lazy load below-fold sections
- Use `next/font` for font loading optimization
- Minimize JavaScript bundle — most of the site is content, not interactive widgets
- Preload critical fonts

---

## File Structure

```
nocheck-website/
├── app/
│   ├── layout.tsx              (root layout with nav + footer)
│   ├── page.tsx                (homepage)
│   ├── solutions/
│   │   ├── insurance/page.tsx
│   │   ├── healthcare/page.tsx
│   │   ├── government/page.tsx
│   │   ├── ticketing/page.tsx
│   │   ├── universities/page.tsx
│   │   └── transportation/page.tsx
│   ├── why-nocheck/page.tsx
│   ├── security/page.tsx
│   ├── case-studies/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── privacy/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx            (reusable dark hero with headline/subhead/CTAs)
│   │   ├── TrustStrip.tsx
│   │   ├── StatBar.tsx
│   │   ├── CTABlock.tsx        (reusable end-of-page CTA)
│   │   ├── IndustryGrid.tsx
│   │   ├── CaseStudyCard.tsx
│   │   └── BenefitGrid.tsx     (reusable for solution pages)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SectionReveal.tsx   (Framer Motion scroll animation wrapper)
│   │   └── CountUp.tsx         (animated number counter)
│   └── solutions/
│       └── SolutionPageTemplate.tsx  (shared layout for all 6 solution pages)
├── lib/
│   ├── content.ts              (all copy content as typed constants — single source of truth)
│   └── metadata.ts             (SEO metadata for each page)
├── public/
│   ├── logos/                  (placeholder directory for client/partner logos)
│   └── og-image.png            (placeholder Open Graph image)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Content Reference

All website copy is in the companion file: `NoCheck_Complete_Website_Copy.md`

This file contains the complete, production-ready copy for all 11 pages plus navigation and footer. Import this content into `lib/content.ts` as typed constants so it's a single source of truth that can be updated without touching component code.

---

## Logo & Image Placeholders

Since actual logo files and images aren't available yet:

- **NoCheck logo:** Use styled text "NOCHECK™" in the display font (Archivo Black), white on dark backgrounds, dark on light. Leave a comment: `{/* TODO: Replace with actual NoCheck logo SVG */}`
- **Client logos (Aflac, AT&T, Zurich, etc.):** Use styled text names for now. Leave placeholder `<div>` elements with comments noting dimensions and expected format.
- **Banking partner logos:** Same approach — styled text with placeholder containers.
- **Compliance badges:** Create simple pill/badge components with text: "PCI-DSS", "SOC2", "HIPAA", "FedNow", "Fed Reserve BPC"
- **Hero backgrounds:** Use the subtle pattern/texture approach described in the design specs — no stock images needed.

---

## Interaction Details

- **Smooth scroll** to sections when clicking in-page anchor links
- **Page transitions** between routes — subtle fade or slide (200-300ms)
- **Scroll-triggered reveals** on every major section (Framer Motion whileInView)
- **Stat counter animation** — numbers count up from 0 when the stat bar scrolls into view
- **Navigation dropdown** — Solutions dropdown with smooth open/close animation
- **Mobile menu** — full-screen overlay with staggered link reveal animation
- **Hover states** on all interactive elements — buttons scale slightly, cards lift with subtle shadow, links underline
- **Active nav indicator** — lime underline or dot on the current page's nav link

---

## Quality Checklist

Before considering the build complete, verify:

- [ ] All 13 routes render and are accessible
- [ ] Navigation works on all pages (desktop + mobile)
- [ ] Solutions dropdown functions correctly
- [ ] All CTAs link to /contact or open mail/phone
- [ ] Stat bar numbers animate on scroll
- [ ] Section reveals animate on scroll (every page)
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Fonts load correctly (Archivo Black for headlines, Lato for body)
- [ ] Color system is consistent (#141414, #C3E941, #FFFFFF throughout)
- [ ] Dark/light section rhythm creates visual variety on long pages
- [ ] Footer is consistent across all pages
- [ ] SEO meta tags are unique per page
- [ ] No horizontal scroll on any breakpoint
- [ ] All text is readable (sufficient contrast ratios — WCAG AA minimum)
- [ ] Phone number and email are clickable (tel: and mailto: links)
- [ ] The site FEELS like a company that processes billions — not a template

---

## Final Note for Claude Code

This brief, combined with the `NoCheck_Complete_Website_Copy.md` file, contains everything needed to build the complete site. The copy file is the single source of truth for all text content. This brief is the single source of truth for design, architecture, and technical requirements.

Build it with the confidence of a company that's been moving money since 1993. No placeholders that feel like placeholders. No "coming soon" sections. Every page should feel finished, professional, and ready for the enterprise buyers who will judge NoCheck by this site.
