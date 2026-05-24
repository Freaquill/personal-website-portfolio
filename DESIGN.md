# Design Direction

## Product Context

- **What this is:** A personal portfolio for Fadly Ahmad Firdausy, focused on B2B presales, product management, IoT delivery, and enterprise ICT work.
- **Who it is for:** Recruiters, hiring managers, enterprise technology leaders, account/product teams, and technical stakeholders who need to quickly understand credibility, scope, and business impact.
- **Primary job:** Make Fadly feel like a commercially fluent technical operator who can bridge clients, engineering, product, and delivery.

## Recommended Direction

### Direction: Enterprise Systems Editorial

Keep the current editorial identity, but make it less theatrical and more systems-driven. The best rebrand is an evolution, not a reset:

- More structured, less poster-like.
- More case-study/proof oriented.
- Slightly warmer than a pure dark SaaS dashboard.
- Still memorable through typography and precision, not decoration.

This fits the career story: presales, ICT architecture, product, and IoT delivery. A flashy creative portfolio would make the wrong promise. A plain resume site would undersell the cross-functional range. This direction sits in the middle: premium, technical, legible, and serious.

### Design Attributes

- **Credible:** enterprise-ready, not gimmicky.
- **Structured:** visible grid, strong hierarchy, clear section sequencing.
- **Warm technical:** deep neutral base with one confident amber/blue signal color.
- **Editorial:** large typographic moments, but balanced by dense evidence blocks.
- **Operational:** metrics, timelines, tags, and case-study scaffolding feel like real work, not decoration.

## Why This Beats Other Directions

### Not Recommended: Full Creative Rebrand

A high-art, motion-heavy, experimental direction would be memorable but risky. It would imply a visual designer/creative technologist identity more than a presales/product/IoT operator identity.

### Not Recommended: Generic SaaS Minimal

A clean white SaaS resume site would be readable, but too generic. It would flatten the personality and remove the current memorable first impression.

### Not Recommended: Cyber/IoT Dark Tech

A cyber-grid, neon, hardware-console style would match IoT superficially but feel narrow and less senior. The portfolio needs commercial strategy and stakeholder fluency, not just technical atmosphere.

### Best Choice: Enterprise Systems Editorial

It preserves the current site’s strongest signal: confidence. Then it adds more recruiter utility: faster scanning, more proof density, better case-study credibility, and calmer surfaces.

## Research Notes

Recent portfolio guidance and examples consistently reward clarity, directness, strong case-study presentation, and letting the work shine over heavy decoration. Product and engineering portfolio roundups also favor modern, structured layouts with clear project stories, measurable outcomes, and easy navigation for hiring reviewers. This supports evolving the current portfolio toward proof-led editorial rather than a full visual reset.

Reference categories:

- Product manager portfolios with clear case-study structure and strong professional authority.
- Technical/software portfolios that use clean cards, project stories, and modern navigation.
- Design portfolio guidance that favors simple, purpose-driven layouts when the work is functional or enterprise-oriented.

## Typography

### Display/Hero

**Keep:** Instrument Serif for selective emphasis, not full hero dependency.

Use it for:

- emphasized surname
- case-study cover accents
- short pull quotes
- recognition numerals

Avoid using the serif for long body copy, dense modal paragraphs, or anything that must scan quickly.

### Primary UI / Body

**Keep:** Geist.

Rationale: Geist is neutral, technical, and modern. It supports the enterprise/product audience without becoming cold.

### Data / Labels

**Keep:** JetBrains Mono.

Use for:

- section IDs
- metric labels
- timelines
- tags
- compact metadata

Constraint: do not overuse mono for paragraph text. It should feel like instrumentation, not the voice of the whole site.

### Type System

- Hero display: `clamp(52px, 10vw, 150px)`
- Section title: `clamp(30px, 4vw, 48px)`
- Card title: `20px-24px`
- Body: `16px-18px`
- Metadata: `11px-13px`
- Line height body: `1.55-1.7`

## Color

### Approach

Use a restrained dark system with one warm signal accent and one cool technical support color. Avoid turning the whole site into a navy/orange theme by using warmer neutrals and occasional cool blue surfaces.

### Core Palette

- **Background:** `#08111F`
- **Background raised:** `#0D1829`
- **Surface:** `#121E30`
- **Surface warm:** `#1D1B20`
- **Line:** `rgba(255,255,255,0.09)`
- **Strong line:** `rgba(255,255,255,0.16)`
- **Text primary:** `#F4F6FA`
- **Text secondary:** `#C7D0DD`
- **Text muted:** `#8793A6`
- **Accent amber:** `#F0A03E`
- **Signal blue:** `#4B8DFF`
- **Success:** `#2EE6A8`
- **Warning:** `#F6C85F`

### Usage

- Amber is the primary identity accent.
- Blue is used sparingly for technical/system cues.
- Green is only for availability/success.
- Do not use multiple neon colors in the same section.

## Spacing

- **Base unit:** 8px.
- **Section rhythm:** generous, but not landing-page empty.
- **Cards:** 20-28px internal padding.
- **Dense evidence blocks:** 16-20px internal padding.
- **Grid gap:** 16-24px for cards, 32-64px for major layout.

The rebrand should make the page feel more information-rich, not more spacious. Recruiters need to scan quickly.

## Layout

### Approach

Hybrid editorial + evidence grid.

Keep:

- fixed top nav
- section rail on large screens
- large typographic hero
- case-study cards
- timeline disclosure pattern

Improve:

- reduce hero vertical dominance slightly
- make metrics and proof points appear earlier
- make case studies feel like evidence, not just cards
- use stronger section-level rhythm and fewer decorative effects

### Grid

- Desktop: 12-column implied grid, max width around `1200-1240px`.
- Tablet: 6-column implied grid.
- Mobile: single-column, with strong hierarchy and no horizontal scroll.

## Component Style

### Buttons

- Radius: `8px-10px`.
- Primary: amber fill, no heavy glow except subtle shadow.
- Secondary: transparent or surface fill with strong border.
- Text buttons: use sparingly, only when action hierarchy is clear.

### Cards

- Radius: `10px-14px`.
- Border-first, shadow-light.
- Prefer structured headers, metadata rows, and compact evidence lists.
- Avoid card nesting.

### Case Studies

Case studies should become the proof engine of the site.

Recommended structure:

1. Problem
2. Constraints
3. Role
4. Approach
5. Evidence / artifact
6. Result

If artifacts are not available, keep text-only but strengthen constraints and outcomes.

## Motion

### Approach

Minimal-functional.

Use:

- subtle reveal opacity/translate
- hover translation up to `2px`
- modal fade/slide
- timeline expansion with smooth height/grid transition

Avoid:

- slow cinematic page choreography
- decorative parallax
- motion that hides content before JavaScript runs

### Durations

- Micro interaction: `120-180ms`
- Modal/sheet: `220-320ms`
- Section reveal: `300-500ms`, content visible by default as fallback

## Accessibility Rules

- Maintain visible `:focus-visible` styles.
- Preserve keyboard navigation for nav, timeline, cards, and modals.
- Use semantic headings and one clear `h1`.
- Do not convey status by color alone.
- Body text contrast should target WCAG AA or better.
- Touch targets should be at least `44px` where interactive.

## Implementation Plan

1. Tighten hero proportions and reduce theatrical empty space.
2. Refine palette tokens to the Enterprise Systems Editorial palette.
3. Convert case-study modal content into proof-led sections.
4. Add optional artifact slots only when real source material exists.
5. Re-run visual smoke tests after each design pass.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-24 | Chose Enterprise Systems Editorial as the best rebrand direction | Best fit for B2B presales, product, IoT, and enterprise ICT credibility. Evolves the current site without losing its memorable editorial identity. |
