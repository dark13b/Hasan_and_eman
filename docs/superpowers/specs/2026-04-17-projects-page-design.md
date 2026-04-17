# Projects Page Design Spec

Date: 2026-04-17
Topic: Editorial projects index for Hasan & Eman
Status: Draft approved in conversation, written for implementation review

## Objective

Design and implement an original portfolio projects page for Hasan & Eman that captures the editorial rhythm, spacing discipline, and restrained motion behavior of the provided reference in spirit, without copying its branding, wording, imagery, typography files, or exact measurements.

The page must support the studio's positioning as a premium brand identity studio serving GCC clients, agencies, and creative directors.

## Constraints

- Keep the site aligned with `PROJECT_RULES.md`.
- Use Astro 4 with React islands only where interactivity or motion requires them.
- Use Tailwind CSS v3 and existing token-based CSS variables.
- Prioritize visual rhythm, whitespace, and image-led pacing over decoration.
- No gradients beyond extremely subtle background treatment.
- No glassmorphism, loud effects, heavy shadows, hero videos, or trend-driven startup visuals.
- Respect `prefers-reduced-motion`.
- Keep the page responsive and mobile-first.
- Prepare structure so English and Arabic versions can share the same system later.

## Design Direction

The selected direction is a `Hybrid Editorial Index`.

This means:

- The page is primarily a vertical sequence, not a generic card grid.
- Project entries are image-dominant on desktop.
- Metadata stays disciplined and secondary, usually in a side or top-aligned block.
- Layout variation is controlled through alternating alignment, image ratios, and internal spacing rather than dramatic structural changes.
- Mobile collapses into a clean single-column stack with reduced motion and simplified spacing rhythm.

The intended tone is premium, crafted, editorial, and modern.

## Scope

### Shared shell refinement

Upgrade the shared header and footer so the `/work` page does not rely on one-off chrome.

Header requirements:

- Thin editorial bar with quiet border treatment.
- Text wordmark for `Hasan & Eman`.
- Minimal navigation with disciplined spacing.
- Existing language toggle remains supported.
- Availability signal can remain present if consistent with current site config.
- Semi-sticky behavior is allowed if it remains quiet and does not dominate the viewport.

Footer requirements:

- Structured multi-column editorial footer.
- Includes contact details, navigation, social links, and newsletter block.
- Newsletter block is presentational for this step unless existing project rules require deferral of actual signup behavior.
- Typography and spacing should feel calm and premium, not dense.

### Route-specific `/work` page

Build a dedicated work index page composition with:

1. Hero / Intro
2. Category filter row
3. Editorial project index
4. Mid-page CTA
5. Shared footer

## Information Architecture

### Hero / Intro

Content:

- Eyebrow or subtle contextual label if needed
- Large `Projects` heading
- Short supporting paragraph for studio context

Behavior:

- Left-aligned on desktop
- Strong typographic hierarchy
- Generous top and bottom spacing
- Width constrained for readable copy

### Category filter area

Purpose:

- Provide a compact and elegant way to browse project categories

Behavior:

- Chip or tab-like controls near the top of the page
- Categories include: Branding, Visual Identity, Web, Editorial
- Includes an `All` option
- Implemented with accessible toggle/button semantics
- Filter interaction should be immediate, smooth, and keyboard accessible

Motion:

- Active state shift through subtle background, border, and opacity change
- No flashy sliding indicators

### Projects list

Content source:

- Local data file with 6 to 8 original placeholder projects

Each project contains:

- Title
- Year
- Category
- Description
- Cover image placeholder
- Optional accent or tonal metadata only if needed for layout balance

Layout behavior:

- Image-led entries
- Predominantly single project per row
- Alternating internal alignment to create editorial rhythm
- Occasional ratio shift between landscape and portrait-led media blocks
- Text remains compact, structured, and secondary to the image

Desktop:

- Two-zone composition per item:
  - metadata block
  - large image block
- Variations should remain systematic, not random

Mobile:

- Collapse to one column
- Metadata sits above or below image depending on readability
- No horizontal squeeze
- Preserve image prominence without oversized empty space

### Mid-page CTA

Purpose:

- Quiet invitation to start a project or discuss a brief

Tone:

- Editorial and restrained
- No sales-heavy phrasing

Layout:

- Distinct section break with ample spacing
- May use a muted background or fine border separation
- Includes primary action and secondary contact route if useful

### Footer

Use the refined shared footer described above, ensuring it supports:

- contact
- navigation
- social
- newsletter structure

## Visual System

### Color

Follow the locked project color tokens:

- background: `--bg`
- text: `--fg`
- accent/navy: `--primary`
- muted surfaces: `--muted`
- borders: `--border`

Use the deep navy accent sparingly for:

- active filter state
- focused elements
- CTA emphasis
- key micro-details

### Typography

Follow project rules:

- serif-led headings
- neutral sans for body and metadata
- typography should establish hierarchy through scale and spacing, not decorative styling

### Spacing

Spacing should be one of the main design features.

Rules:

- Strong vertical cadence between sections
- Wide internal padding around major blocks
- Tight metadata grouping inside each project entry
- No crowded rows
- Mobile spacing remains generous but slightly compressed from desktop

### Imagery

Use original placeholder artwork or abstract placeholder blocks that do not imitate the reference imagery.

Requirements:

- Explicit dimensions
- Strong aspect-ratio control
- Quiet hover treatment
- No drop shadows
- Very limited corner rounding, consistent with project rules

## Motion System

Framer Motion should be used only where it adds meaningful polish.

### Allowed motion behaviors

- Smooth reveal on scroll
- Staggered entrance for project items
- Gentle image offset or micro-parallax feel using transform only
- Subtle hover transitions on images and metadata
- Fluid opacity and y-offset transitions between filter states

### Motion rules

- Animate only transform and opacity
- Keep durations moderate and editorial
- Use spring easing only where it remains restrained
- Avoid attention-seeking animations
- Disable or simplify motion when `prefers-reduced-motion` is active

### Likely island boundaries

- Filter interaction island
- Project list reveal choreography island

Static layout should stay in Astro components where possible.

## Accessibility

Requirements:

- Semantic landmarks and section headings
- Focus-visible states on all interactive elements
- Keyboard operable filter controls
- Sufficient contrast for all text and controls
- Motion reduced for users who request it
- Decorative images avoided in semantic content unless properly marked

## Component Structure

Planned component split:

- `src/components/layout/Header.astro`
- `src/components/layout/Nav.astro`
- `src/components/layout/Footer.astro`
- `src/components/work/ProjectsHero.astro`
- `src/components/work/ProjectsFilter.tsx`
- `src/components/work/ProjectsIndex.tsx`
- `src/components/work/ProjectListItem.astro` or `.tsx` depending on motion orchestration needs
- `src/components/work/ProjectsCta.astro`

Support files:

- `src/data/projects.ts` or equivalent local data module
- updated i18n strings for page copy and footer labels if needed

## Content Strategy

Placeholder content must feel original and studio-appropriate.

Content rules:

- No borrowed project names
- No generic startup copy
- No filler agency language
- Keep descriptions short, clear, and editorial
- Prepare content structure so Arabic adaptation later is straightforward

## Responsive Behavior

Desktop:

- Spacious composition
- Wide horizontal breathing room
- Semi-sticky or fixed-feeling header permitted if subtle

Tablet:

- Reduce split tension
- Maintain image dominance
- Keep filter row usable without crowding

Mobile:

- Single-column
- Clear section stacking
- Project entries remain image-first
- Footer columns collapse cleanly
- Motion simplified

## Performance

- Keep JavaScript limited to interactive islands
- Avoid unnecessary client-side rendering
- Keep motion payload small
- Use optimized local image placeholders or lightweight static assets
- Maintain high Lighthouse targets consistent with project rules

## Implementation Notes

- The existing `/work` placeholder will be replaced.
- Shared shell improvements should not break existing routes.
- Newsletter in the footer should be treated as structure-first, not a fully integrated feature, unless expanded later.
- English implementation comes first, but code structure should not block Arabic mirroring.

## Verification Targets

Before implementation is considered complete, verify:

- `astro check`
- `astro build`
- responsive behavior across desktop and mobile widths
- keyboard access for filters and nav
- reduced-motion behavior
- no obvious layout shift from media loading

## Out Of Scope

- Real CMS integration
- Final Arabic content implementation for the new page
- Live newsletter backend integration
- Case study detail redesign
- New brand system outside the existing project tokens and rules
