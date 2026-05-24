# Future Scope Plan

## Purpose

This plan turns the previous `NOT In Scope` items into a separate roadmap. It is intentionally separate from the launch-readiness work so the current portfolio can stay simple, fast, and shippable.

## Planning Principle

Only start one future track when it has a clear reason, source material, and an acceptance bar. Do not combine a rebrand, CMS, artifact writing, and SEO into one rewrite.

## Track 1. Visual Rebrand Or Alternate Direction

### Consultation Result

Recommended direction: **Enterprise Systems Editorial**.

This is an evolution of the current site, not a full reset. It keeps the strong editorial typography and dark enterprise feel, but makes the system calmer, denser, warmer, and more proof-led. The goal is to make Fadly feel like a commercially fluent technical operator: credible with clients, useful to sales/product teams, and capable with engineering/delivery.

Source of truth: `DESIGN.md`.

### When To Start

- You feel the current editorial enterprise direction no longer fits your target roles.
- You want to target a different audience, such as product leadership, startup founders, or highly technical architecture roles.
- You have 2-3 reference sites or mood directions you genuinely like.

### Inputs Needed

- Target audience and job type.
- 3 visual references with notes on what to borrow and what to avoid.
- Decision on whether the current content structure stays or changes.

### Work Plan

1. Define brand attributes: serious, technical, warm, premium, experimental, restrained, etc. **Done in `DESIGN.md`.**
2. Produce 2-3 visual directions as screenshots or static mockups.
3. Pick one direction and document design tokens: color, type, spacing, radius, motion, card style.
4. Implement the chosen direction in a branch or duplicate template.
5. Run visual smoke tests at desktop/mobile.

### Acceptance

- First viewport still communicates name, role, value prop, and CTA.
- New style improves fit for target audience without reducing readability.
- No regression in accessibility, keyboard behavior, or mobile layout.

### Do Not Do Yet

- Do not rebrand just because the current design can be different.
- Do not change the information architecture and visual style in the same first pass.

## Track 2. Backend, CMS, Analytics, Or Deployment Pipeline

### When To Start

- You update portfolio content often enough that editing `data.jsx` becomes annoying.
- You need public deployment, custom domain, or traffic visibility.
- You want a contact form or lead-capture flow.

### Inputs Needed

- Hosting target: Vercel, Netlify, GitHub Pages, personal VPS, or other.
- Content editing preference: code-only, markdown, Notion/Sanity/Contentful, or simple JSON.
- Analytics preference: privacy-first, Google Analytics, Vercel Analytics, Plausible, or none.

### Work Plan

1. Choose the smallest hosting/deployment path.
2. Add environment-specific build/deploy scripts.
3. Decide whether content remains static or moves into markdown/CMS.
4. Add analytics only after privacy/cookie implications are clear.
5. Add deployment checks: build, visual smoke, link check.

### Acceptance

- One command builds the site.
- One documented path deploys the site.
- Analytics, if added, does not block page rendering or create obvious privacy surprises.
- No backend exists unless it solves a real workflow problem.

### Do Not Do Yet

- Do not add a CMS if content changes are rare.
- Do not add a backend just to send email unless a mailto flow is insufficient.

## Track 3. Real Case-Study Artifact Creation

### When To Start

- You have source material: screenshots, diagrams, anonymized proposals, decks, architecture notes, or project summaries.
- You can safely share artifacts without exposing confidential client information.
- You want the portfolio to move from resume-like to proof-heavy.

### Inputs Needed

- For each project: problem, constraints, your role, artifact source, what must be anonymized.
- Permission boundaries for clients, logos, numbers, diagrams, and screenshots.
- Which 2-3 projects deserve artifact depth first.

### Work Plan

1. Inventory available artifacts and confidentiality risks.
2. Pick the strongest 2-3 case studies first.
3. Create anonymized visuals: architecture diagram, workflow map, delivery timeline, metric card, or screenshot collage.
4. Replace text-only modal sections with artifact-supported sections.
5. Verify that visuals are legible on desktop and mobile.

### Acceptance

- Every artifact supports a claim already made in the case study.
- No confidential client detail is exposed.
- Visuals improve credibility without bloating the page or distracting from the story.

### Do Not Do Yet

- Do not fabricate project artifacts.
- Do not over-design every case study before proving the pattern on one or two.

## Track 4. SEO And Content Strategy

### When To Start

- The site is going public under a real domain.
- You want discoverability for searches around your name, presales, product, IoT, or Jakarta enterprise tech.
- You are ready to tune copy for search intent, not just visual presentation.

### Inputs Needed

- Domain name.
- Preferred title and meta description.
- Target search phrases and role positioning.
- Social preview image direction.

### Work Plan

1. Add basic metadata: title, description, canonical URL, Open Graph, Twitter card.
2. Add structured content hierarchy: one `h1`, clean section headings, descriptive link text.
3. Add sitemap and robots file only when deployed.
4. Audit copy for clarity, keyword fit, and recruiter scanning.
5. Validate social preview and search snippet.

### Acceptance

- Search/social previews look intentional.
- Metadata reflects the actual site and target role.
- Copy remains human and credible, not keyword-stuffed.

### Do Not Do Yet

- Do not do a keyword-heavy rewrite before the public domain and positioning are settled.
- Do not add SEO tooling that complicates the static site without a clear gain.

## Suggested Order

1. Deployment pipeline, if you want the site public soon.
2. SEO basics, once the public URL exists.
3. Case-study artifacts, when source material is available.
4. Visual rebrand only if your positioning changes or you want a deliberate alternate direction.

## Decision Gates

- Rebrand gate: `Do I have a target audience shift or a clear visual reference set?`
- CMS gate: `Have I edited content enough times that code edits are slowing me down?`
- Artifact gate: `Do I have real, safe source material?`
- SEO gate: `Is there a public URL and a settled positioning statement?`

## Next Best Future Step

If the current portfolio passes your manual review, the best future track is deployment first. A public URL makes SEO, CV linking, social preview, and recruiter sharing concrete instead of theoretical.
