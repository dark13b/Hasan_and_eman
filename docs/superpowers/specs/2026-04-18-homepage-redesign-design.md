# Homepage Redesign Design Spec

Date: 2026-04-18
Topic: Homepage redesign for Hasan & Eman
Status: Approved in conversation for implementation

## Objective

Redesign the actual `/` homepage for Hasan & Eman so it moves much closer to the editorial pacing, modular sequencing, and restrained motion behavior of the Fabrica homepage while remaining original and aligned with `PROJECT_RULES.md`.

This is not a clone request. The goal is a high-similarity original homepage in feel, section choreography, and premium density, translated for Hasan & Eman as a GCC-facing brand identity studio.

## Constraints

- Follow `PROJECT_RULES.md` as the source of truth.
- Preserve originality in branding, copy, visual composition, spacing system, and proportions.
- Use Astro 4 with React islands only where interactivity or motion needs them.
- Use Tailwind CSS v3 with existing token-based CSS variables.
- No gradients beyond subtle tonal treatment.
- No glassmorphism, loud effects, drop shadows, autoplay video, particles, or 3D backgrounds.
- No desperate or startup-style marketing copy.
- Keep the homepage responsive and mobile-first.
- Respect `prefers-reduced-motion`.
- Keep code modular so the final result can be translated into Figma after implementation.

## Homepage Direction

The selected direction is:

- Fabrica-style homepage pacing
- type-led hero plus one dominant visual block
- stacked editorial sections with stronger contrast in scale
- calmer motion than the reference, but more authored than the current site

This means:

- stronger alternation between open whitespace and denser modules
- clearer section boundaries
- larger shifts in heading scale and block weight
- a more structured narrative across the scroll
- more visible reveal orchestration than the current site

The intended tone remains:

- premium
- crafted
- editorial
- modern

## Homepage Module Stack

The homepage will be rebuilt with this sequence:

1. Hero
2. Clients band
3. Selected projects
4. Proof / results
5. Services / process
6. Closing CTA
7. Shared footer

## Information Architecture

### Hero

Purpose:

- establish authority
- communicate positioning quickly
- create a stronger opening composition closer to the Fabrica homepage feel

Content:

- large editorial headline
- short supporting paragraph
- primary CTA
- secondary CTA or contextual proof line
- one dominant visual/media block

Behavior:

- asymmetrical desktop composition
- strong size contrast between headline zone and media zone
- mobile collapses into a clean single-column stack

Motion:

- restrained staged entrance
- visual block can have subtle scroll-linked offset
- CTA interactions remain tactile but quiet

### Clients Band

Purpose:

- answer the “serious brands” objection early
- create a compressed proof section between large modules

Content:

- selected client names or logo placeholders using permitted clients
- minimal label and supporting context

Behavior:

- not a flashy marquee
- should feel like a quiet institutional band
- repeated rhythm and separator logic matter more than decoration

### Selected Projects

Purpose:

- show the studio’s work with stronger homepage pacing than the `/work` index

Content:

- 3 to 4 selected projects only
- image-led layout
- tighter metadata than the dedicated work index

Behavior:

- more compressed than `/work`
- still editorial and spacious
- should feel like a homepage excerpt, not the full archive

Motion:

- stronger stagger than the current homepage placeholder system
- image drift or offset allowed

### Proof / Results

Purpose:

- create the kind of structural “why choose us” or “proof” band the reference homepage uses
- answer trust objections without sounding sales-heavy

Content:

- 2 to 3 proof blocks
- can combine outcomes, approach markers, or studio principles
- copy must remain editorial and flat

Behavior:

- not generic stats cards
- use spacing, numbering, and dividers rather than card-heavy patterns

### Services / Process

Purpose:

- show studio scope and process in a more authored way

Content:

- branding / identity focus
- strategic process language
- short module descriptions

Behavior:

- likely a numbered or indexed editorial section
- can borrow some sequencing feel from Fabrica’s services band
- must still reflect Hasan & Eman’s identity studio positioning rather than generic web agency services

### Closing CTA

Purpose:

- transition from editorial browsing into action

Content:

- short closing line
- contact / book routes

Behavior:

- should feel quieter and more inevitable than the current CTA block
- less like a banner, more like a closing editorial note

## Visual System

### Color

Use the locked project tokens:

- `--bg`
- `--fg`
- `--primary`
- `--muted`
- `--border`

The page should stay mostly neutral with one deep navy accent.

### Typography

Follow project rules:

- serif headings
- neutral sans body
- strong hierarchy through scale and whitespace

Headline treatment should feel more commanding than the current homepage, but never loud or gimmicky.

### Spacing

The homepage should have:

- stronger section spacing contrast
- tighter compressed proof bands between larger open sections
- more deliberate alignment breaks across modules
- clean mathematical spacing rather than expressive randomness

The spacing system must be original even if the pacing is influenced by the reference.

### Imagery

The hero and selected-projects sections should carry much of the visual weight.

Requirements:

- explicit dimensions
- calm frames and borders
- no drop shadows
- no loud overlays
- subtle hover and scroll treatment only

## Motion System

The new homepage should be noticeably more choreographed than the current site.

### Allowed motion behaviors

- staged section reveals
- stronger staggered entrances
- image offset on scroll using transforms only
- subtle hover transitions
- section-to-section pacing changes
- filtered or delayed text/media sequencing where useful

### Motion rules

- animate transform and opacity only
- no raw scroll listeners
- no flashy parallax
- no looping hero gimmicks
- reduce or disable movement for `prefers-reduced-motion`

### Likely island boundaries

- homepage hero motion layer
- selected projects motion layer
- optional proof/service reveal sequencing

Static section layout should stay in Astro where possible.

## Accessibility

Requirements:

- semantic section structure
- visible focus states
- keyboard accessible CTAs and nav
- reduced-motion support
- clear contrast
- mobile readability first

## Component Structure

Planned homepage component split:

- `src/components/sections/Hero.astro`
- `src/components/sections/ClientMarquee.astro`
- `src/components/sections/FeaturedWork.astro`
- `src/components/sections/Testimonial.astro` or replacement proof section
- `src/components/sections/ServicesTeaser.astro`
- `src/components/sections/FooterCTA.astro`
- possible new React motion helpers in `src/components/sections/` or `src/components/ui/`

Support files likely needed:

- homepage-specific content/data module if the current sections become too large
- updated i18n strings for homepage copy

## Content Strategy

Homepage copy must:

- stay short
- feel editorial
- avoid agency cliches
- support GCC trust and seriousness
- maintain Hasan & Eman voice rather than Fabrica wording

The homepage should emphasize:

- identity design credibility
- considered systems
- serious client readiness
- availability without desperation

## Responsive Behavior

Desktop:

- asymmetrical hero
- clear section pacing
- broader spatial variation

Tablet:

- preserve section hierarchy
- reduce asymmetry without flattening everything

Mobile:

- single-column
- preserve visual order and hierarchy
- no cramped dense bands
- proof and services must stay legible and calm

## Verification Targets

Before completion:

- `npm run check`
- `npm run build`
- visual review of `/` on desktop and mobile
- verify no obvious layout shift
- verify reduced-motion support still behaves correctly

## Out Of Scope

- exact Fabrica reproduction
- new CMS integration
- final Arabic homepage rewrite beyond structural support unless implemented in this pass
- case study redesign
- new services outside studio scope
