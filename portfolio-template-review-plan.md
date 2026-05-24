# Personal Portfolio Template Improvement Plan

## Goal

Turn the current portfolio template from a strong visual prototype into a launch-ready personal site for recruiters and enterprise stakeholders.

## Success Criteria

- First viewport immediately communicates name, role, positioning, and primary actions.
- Contact, LinkedIn, and CV actions are real or clearly disabled until provided.
- Keyboard and screen-reader users can navigate nav, timeline disclosures, cards, and modal.
- Case studies no longer contain visible placeholder artifact copy.
- Mobile layouts avoid horizontal overflow down to 320px.
- Production path no longer depends on React development builds and in-browser Babel.
- Final verification includes desktop and mobile screenshots plus keyboard interaction checks.

## Step 1. Content Trust Fixes

Replace placeholder identity and action data in `data.jsx`. Use real email, LinkedIn, and CV URL when available. If CV is not available yet, remove or disable download CTAs with honest copy.

Acceptance:
- No `example.com` contact remains.
- No user-facing CTA points to `#` unless intentionally disabled.
- Recruiter can reach email and LinkedIn from hero/contact.

## Step 2. First Viewport Repair

Make hero content visible and resilient before animation. Keep reveal animation as enhancement only. Adjust hero spacing so first viewport shows the name block, role/value proposition, and at least one CTA on common desktop and mobile sizes.

Acceptance:
- Desktop screenshot at 1440x900 shows name, role, value prop, and CTA.
- Mobile screenshot at 390x844 shows name/role without horizontal scroll.
- With JavaScript slow or reduced motion enabled, hero content remains readable.

## Step 3. Accessibility Pass

Add site-wide focus-visible styling, improve nav menu semantics, add disclosure ARIA state to timeline rows, and make the case-study modal accessible with labeling, focus management, Escape close, and focus restoration.

Acceptance:
- Tab order reaches all links/buttons with visible focus.
- Mobile menu exposes `aria-expanded` and closes predictably.
- Timeline rows expose expanded/collapsed state.
- Modal traps focus while open and returns focus to the opener after close.

## Step 4. Case Study Credibility

Replace the modal placeholder artifact section with credible content: anonymized screenshots, architecture diagrams, proposal excerpts, or remove the placeholder block until real assets exist. Keep the editorial cover style.

Acceptance:
- No visible "slot in here" placeholder copy remains.
- Each case study has either real supporting artifact content or a clean text-only layout.
- Visual hierarchy remains consistent across all five cases.

## Step 5. Responsive Layout Tightening

Audit grids and hard minimum widths. Replace risky `minmax(320px, 1fr)` patterns with mobile-safe constraints. Verify hero role chips, metrics, cards, education, and contact cards at 320px, 390px, 768px, 1024px, and 1440px.

Acceptance:
- No horizontal scroll at 320px or 390px.
- Buttons and cards preserve at least 44px touch targets.
- Long labels wrap cleanly without overlapping arrows or icons.

## Step 6. Production Build Path

Move away from CDN React development builds and browser Babel. Choose the smallest appropriate production path: either a Vite build, or a static precompiled bundle if keeping the current structure. Keep the tweak panel only for local edit mode if it is not needed in production.

Acceptance:
- Production page loads minified production React or bundled JS.
- No `type="text/babel"` scripts remain in production HTML.
- Local development still remains easy to run.

## Step 7. Cleanup And Verification

Remove unused CSS, check color contrast in dark and light themes, run smoke tests, and capture final screenshots. Document any remaining user-provided content gaps.

Acceptance:
- Unused recognition-card CSS is removed or justified.
- Dark/light themes pass readable contrast for core text and controls.
- Final desktop and mobile screenshots are saved.
- Verification notes include any unavailable real CV/artifact assets.

## NOT In Scope

- Full visual rebrand or alternate design direction.
- New backend, CMS, analytics, or deployment pipeline.
- Writing all real case-study artifacts from scratch without source material.
- SEO/content strategy beyond fixing trust-breaking placeholders and basic metadata.
