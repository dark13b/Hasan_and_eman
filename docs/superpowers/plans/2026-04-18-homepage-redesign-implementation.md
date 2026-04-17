# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `/` homepage for Hasan & Eman as a high-similarity original editorial studio homepage with stronger section pacing, image-led hierarchy, and restrained motion.

**Architecture:** Keep the page Astro-first and split each homepage module into a focused section component. Use one homepage data module for content and proof structure, then add React islands only where sequencing, reveal, or scroll-linked image motion materially improve the experience.

**Tech Stack:** Astro 4, React 18 islands, Tailwind CSS v3, TypeScript, Framer Motion, CSS custom properties

---

## File Map

- Create: `src/data/homepage.ts`
- Create: `src/components/sections/HomeHero.astro`
- Create: `src/components/sections/HomeClients.astro`
- Create: `src/components/sections/HomeProjects.tsx`
- Create: `src/components/sections/HomeProof.astro`
- Create: `src/components/sections/HomeServices.astro`
- Create: `src/components/sections/HomeClosingCta.astro`
- Create: `src/components/sections/HomeHeroMotion.tsx`
- Create: `src/components/sections/HomeProjectCard.tsx`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/ar/index.astro`
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/ar.json`
- Modify: `src/styles/global.css`
- Modify: `public/images/work/editorial-placeholder-01.svg`
- Modify: `public/images/work/editorial-placeholder-02.svg`
- Modify: `public/images/work/editorial-placeholder-03.svg`
- Modify: `public/images/work/editorial-placeholder-04.svg`

### Task 1: Create Homepage Content Foundation

**Files:**
- Create: `src/data/homepage.ts`
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/ar.json`

- [ ] **Step 1: Create the homepage data module**

Create `src/data/homepage.ts` with shared content structures:

```ts
export interface HomeClient {
  name: string;
}

export interface HomeProject {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HomeProofItem {
  index: string;
  title: string;
  body: string;
}

export interface HomeServiceItem {
  index: string;
  title: string;
  body: string;
}

export const homeClients: HomeClient[] = [
  { name: "EMAC" },
  { name: "Checkpoint" },
  { name: "Tiba" },
  { name: "Cara" },
  { name: "Najah" },
  { name: "Pocoloco" },
  { name: "زخرف" },
];
```

- [ ] **Step 2: Add selected-project and proof arrays**

Append arrays for 4 featured projects, 3 proof items, and 3 service items:

```ts
export const homeProjects: HomeProject[] = [
  {
    slug: "checkpoint-portfolio-system",
    title: "Checkpoint Portfolio System",
    category: "Visual Identity",
    year: "2026",
    description: "A quieter digital identity system designed to hold authority across investor, product, and campaign surfaces.",
    image: {
      src: "/images/work/editorial-placeholder-01.svg",
      alt: "Editorial placeholder artwork for Checkpoint Portfolio System",
      width: 1280,
      height: 920,
    },
  },
];
```

Use the same structure for the remaining items and keep all copy original, short, and studio-appropriate.

- [ ] **Step 3: Expand localized homepage copy**

Add a `homePage` object to `src/i18n/en.json` with:

```json
"homePage": {
  "metaTitle": "Hasan & Eman | Brand Identity Studio",
  "eyebrow": "Hasan & Eman",
  "title": "Brand identity systems shaped for serious growth.",
  "intro": "We design editorial, digital, and visual identity systems for brands across Iraq and the GCC that need clarity, range, and long-term use.",
  "primaryCta": "View projects",
  "secondaryCta": "Start a conversation",
  "proofLine": "Selected by founders, agencies, and internal teams who need a quieter kind of authority.",
  "clientsLabel": "Selected clients",
  "projectsLabel": "Selected work",
  "proofLabel": "Proof",
  "servicesLabel": "Scope",
  "closingTitle": "If the next chapter needs more precision than noise, we should talk.",
  "closingText": "We take on a limited number of commissions each season, with a focus on identity systems built to travel across print, digital, and presentation contexts.",
  "closingPrimary": "Book a project call",
  "closingSecondary": "Email the studio",
  "testimonialQuote": "Hasan & Eman brought structure to a scattered brand and made it feel ready for serious growth.",
  "testimonialAttribution": "Marketing Director, regional education group"
}
```

- [ ] **Step 4: Mirror the structure in Arabic**

Add the same `homePage` keys to `src/i18n/ar.json` with concise Arabic placeholder copy that matches the English structure exactly.

- [ ] **Step 5: Verify the content baseline**

Run: `npm run check`
Expected: `astro check` passes with `src/data/homepage.ts` and the new i18n keys resolving cleanly

- [ ] **Step 6: Commit**

Run:

```bash
git add src/data/homepage.ts src/i18n/en.json src/i18n/ar.json
git commit -m "Add homepage content foundation"
```

### Task 2: Rebuild The Hero And Clients Band

**Files:**
- Create: `src/components/sections/HomeHero.astro`
- Create: `src/components/sections/HomeHeroMotion.tsx`
- Create: `src/components/sections/HomeClients.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/ar/index.astro`

- [ ] **Step 1: Create the hero motion island**

Create `src/components/sections/HomeHeroMotion.tsx` with restrained sequencing:

```tsx
import { MotionConfig, motion } from "framer-motion";

interface HomeHeroMotionProps {
  imageSrc: string;
  imageAlt: string;
}

export default function HomeHeroMotion({ imageSrc, imageAlt }: HomeHeroMotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border border-border bg-[rgba(255,255,255,0.45)]"
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[5/6] object-cover md:aspect-[4/5]"
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.figure>
    </MotionConfig>
  );
}
```

- [ ] **Step 2: Create the Astro hero shell**

Create `src/components/sections/HomeHero.astro` with a two-column editorial composition:

```astro
---
import HomeHeroMotion from "./HomeHeroMotion";
const { dict, locale } = Astro.props;
const workHref = locale === "ar" ? "/ar/work" : "/work";
const contactHref = locale === "ar" ? "/ar/contact" : "/contact";
---
<section class="container-shell pt-12 pb-14 md:pt-20 md:pb-20 xl:pt-24 xl:pb-24">
  <div class="grid gap-10 border-b border-border pb-12 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.78fr)] md:items-end md:gap-12 xl:gap-16 xl:pb-16">
    <div class="max-w-4xl">
      <p class="mb-5 text-[0.72rem] uppercase tracking-[0.28em] text-fg/52">{dict.homePage.eyebrow}</p>
      <h1 class="max-w-5xl text-[clamp(3.8rem,9vw,8.9rem)] leading-[0.9] tracking-[-0.065em]">
        {dict.homePage.title}
      </h1>
      <p class="mt-7 max-w-2xl text-base leading-7 text-fg/72 md:text-lg">
        {dict.homePage.intro}
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a href={workHref} class="inline-flex min-h-[3.25rem] items-center justify-center border border-primary bg-primary px-6 text-sm text-white transition-colors duration-200 hover:bg-fg hover:border-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          {dict.homePage.primaryCta}
        </a>
        <a href={contactHref} class="inline-flex min-h-[3.25rem] items-center justify-center border border-border px-6 text-sm transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          {dict.homePage.secondaryCta}
        </a>
      </div>
      <p class="mt-10 max-w-xl text-sm leading-6 text-fg/58">{dict.homePage.proofLine}</p>
    </div>
    <HomeHeroMotion client:visible imageSrc="/images/work/editorial-placeholder-02.svg" imageAlt="Hero artwork for Hasan and Eman homepage" />
  </div>
</section>
```

- [ ] **Step 3: Create the clients band**

Create `src/components/sections/HomeClients.astro`:

```astro
---
import { homeClients } from "../../data/homepage";
const { dict } = Astro.props;
---
<section class="border-b border-border">
  <div class="container-shell py-6 md:py-7">
    <div class="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
      <p class="text-[0.72rem] uppercase tracking-[0.24em] text-fg/46">{dict.homePage.clientsLabel}</p>
      <ul class="grid list-none gap-x-6 gap-y-3 p-0 text-sm text-fg/74 sm:grid-cols-2 lg:grid-cols-4">
        {homeClients.map((client) => <li>{client.name}</li>)}
      </ul>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Replace homepage route composition**

Update `src/pages/index.astro` and `src/pages/ar/index.astro` so they import `BaseLayout`, `HomeHero`, and `HomeClients`, set `title={dict.homePage.metaTitle}`, and render the new sections instead of the old placeholder hero.

- [ ] **Step 5: Verify the opening sequence**

Run: `npm run check`
Expected: homepage routes compile, the old placeholder `Hero.astro` is no longer used on `/`, and no prop errors remain

- [ ] **Step 6: Commit**

Run:

```bash
git add src/components/sections/HomeHero.astro src/components/sections/HomeHeroMotion.tsx src/components/sections/HomeClients.astro src/pages/index.astro src/pages/ar/index.astro
git commit -m "Build homepage hero and clients band"
```

### Task 3: Build Selected Projects And Proof Modules

**Files:**
- Create: `src/components/sections/HomeProjectCard.tsx`
- Create: `src/components/sections/HomeProjects.tsx`
- Create: `src/components/sections/HomeProof.astro`

- [ ] **Step 1: Create the animated project card**

Create `src/components/sections/HomeProjectCard.tsx`:

```tsx
import { motion } from "framer-motion";
import type { HomeProject } from "../../data/homepage";

interface HomeProjectCardProps {
  project: HomeProject;
  index: number;
  href: string;
}

export default function HomeProjectCard({ project, index, href }: HomeProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-4 border-t border-border pt-5 md:grid-cols-[minmax(0,0.9fr)_minmax(220px,1.12fr)] md:gap-8 md:pt-7"
    >
      <div className="order-2 flex items-end justify-between gap-4 md:order-1">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-fg/46">{project.category}</p>
          <h3 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] leading-[0.94] tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-fg/68">{project.description}</p>
        </div>
        <span className="shrink-0 text-sm text-fg/52">{project.year}</span>
      </div>
      <a href={href} className="group order-1 overflow-hidden border border-border bg-[rgba(255,255,255,0.4)] md:order-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <motion.img
          src={project.image.src}
          alt={project.image.alt}
          className="aspect-[16/11] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </a>
    </motion.article>
  );
}
```

- [ ] **Step 2: Create the selected-projects section**

Create `src/components/sections/HomeProjects.tsx` with `MotionConfig`, `homeProjects`, localized section labels, and a compact list of 4 image-led entries.

- [ ] **Step 3: Create the proof section**

Create `src/components/sections/HomeProof.astro` using `homeProof` data plus the required testimonial high on the page:

```astro
---
import { homeProof } from "../../data/homepage";
const { dict } = Astro.props;
---
<section class="border-y border-border">
  <div class="container-shell py-14 md:py-18">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
      <div>
        <p class="text-[0.72rem] uppercase tracking-[0.24em] text-fg/46">{dict.homePage.proofLabel}</p>
        <blockquote class="mt-5 max-w-xl text-[clamp(1.8rem,3.4vw,3.25rem)] leading-[1] tracking-[-0.05em]">
          “{dict.homePage.testimonialQuote}”
        </blockquote>
        <p class="mt-4 text-sm text-fg/58">{dict.homePage.testimonialAttribution}</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3 md:gap-5">
        {homeProof.map((item) => (
          <article class="border-t border-border pt-4">
            <p class="text-[0.72rem] uppercase tracking-[0.24em] text-fg/42">{item.index}</p>
            <h3 class="mt-3 text-2xl leading-[0.98] tracking-[-0.04em]">{item.title}</h3>
            <p class="mt-3 text-sm leading-6 text-fg/68">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Mount the new mid-page modules**

Update both homepage route files so `HomeProjects` and `HomeProof` render directly below `HomeClients`.

- [ ] **Step 5: Verify the middle-page structure**

Run: `npm run check`
Expected: the homepage now renders hero, clients, selected projects, and proof without placeholder section imports

- [ ] **Step 6: Commit**

Run:

```bash
git add src/components/sections/HomeProjectCard.tsx src/components/sections/HomeProjects.tsx src/components/sections/HomeProof.astro src/pages/index.astro src/pages/ar/index.astro
git commit -m "Add homepage work and proof sections"
```

### Task 4: Build Services And Closing CTA

**Files:**
- Create: `src/components/sections/HomeServices.astro`
- Create: `src/components/sections/HomeClosingCta.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/ar/index.astro`

- [ ] **Step 1: Create the services/process section**

Create `src/components/sections/HomeServices.astro` with numbered editorial rows:

```astro
---
import { homeServices } from "../../data/homepage";
const { dict } = Astro.props;
---
<section class="container-shell py-14 md:py-20">
  <div class="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
    <p class="text-[0.72rem] uppercase tracking-[0.24em] text-fg/46">{dict.homePage.servicesLabel}</p>
    <div class="space-y-8">
      {homeServices.map((item) => (
        <article class="grid gap-4 border-t border-border pt-4 md:grid-cols-[72px_minmax(0,1fr)] md:pt-5">
          <p class="text-sm text-fg/48">{item.index}</p>
          <div>
            <h3 class="text-[clamp(1.9rem,3vw,3.2rem)] leading-[0.95] tracking-[-0.05em]">{item.title}</h3>
            <p class="mt-3 max-w-2xl text-sm leading-6 text-fg/68">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create the closing CTA**

Create `src/components/sections/HomeClosingCta.astro` with a quieter closing composition:

```astro
---
const { dict, locale } = Astro.props;
const contactHref = locale === "ar" ? "/ar/contact" : "/contact";
---
<section class="border-t border-border">
  <div class="container-shell py-16 md:py-24">
    <div class="max-w-4xl">
      <h2 class="max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.055em]">
        {dict.homePage.closingTitle}
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-7 text-fg/68">
        {dict.homePage.closingText}
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={contactHref} class="inline-flex min-h-[3.25rem] items-center justify-center border border-primary bg-primary px-6 text-sm text-white transition-colors duration-200 hover:bg-fg hover:border-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          {dict.homePage.closingPrimary}
        </a>
        <a href="mailto:hello@hasanandeman.com" class="inline-flex min-h-[3.25rem] items-center justify-center border border-border px-6 text-sm transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          {dict.homePage.closingSecondary}
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Finish the route composition**

Update the homepage route files so the final order is:

```astro
<main>
  <HomeHero dict={dict} locale={locale} />
  <HomeClients dict={dict} />
  <HomeProjects client:visible dict={dict} locale={locale} />
  <HomeProof dict={dict} />
  <HomeServices dict={dict} />
  <HomeClosingCta dict={dict} locale={locale} />
</main>
```

- [ ] **Step 4: Verify the full module stack**

Run: `npm run check`
Expected: all approved homepage modules render in the correct order with no orphaned placeholder sections on `/`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/sections/HomeServices.astro src/components/sections/HomeClosingCta.astro src/pages/index.astro src/pages/ar/index.astro
git commit -m "Finish homepage section stack"
```

### Task 5: Refine Styling, Assets, And Responsive Motion

**Files:**
- Modify: `src/styles/global.css`
- Modify: `public/images/work/editorial-placeholder-01.svg`
- Modify: `public/images/work/editorial-placeholder-02.svg`
- Modify: `public/images/work/editorial-placeholder-03.svg`
- Modify: `public/images/work/editorial-placeholder-04.svg`
- Modify: `src/components/sections/HomeHeroMotion.tsx`
- Modify: `src/components/sections/HomeProjects.tsx`
- Modify: `src/components/sections/HomeProjectCard.tsx`

- [ ] **Step 1: Add homepage-specific global utilities**

Extend `src/styles/global.css` with reusable classes:

```css
.editorial-label {
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.focus-ring {
  outline: none;
}

.focus-ring:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
}
```

- [ ] **Step 2: Refresh the placeholder SVGs**

Update the four existing `public/images/work/editorial-placeholder-0*.svg` files so they feel calmer and more premium for homepage use:

```svg
<svg width="1280" height="920" viewBox="0 0 1280 920" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1280" height="920" fill="#F4EFE7"/>
  <rect x="92" y="92" width="1096" height="736" stroke="#CDBFAF"/>
  <rect x="188" y="184" width="420" height="552" fill="#19243A"/>
  <rect x="670" y="184" width="330" height="240" fill="#E5DBCF"/>
  <rect x="670" y="466" width="240" height="178" fill="#D7CABC"/>
</svg>
```

Vary each placeholder while keeping the same muted palette and framed editorial structure.

- [ ] **Step 3: Tighten motion behavior**

Adjust `HomeHeroMotion.tsx`, `HomeProjects.tsx`, and `HomeProjectCard.tsx` so:

- animation uses only transform and opacity
- hover movement stays under 6px
- reduced motion collapses to minimal fade or static behavior
- mobile animation is slightly shorter than desktop timing

- [ ] **Step 4: Run full verification**

Run:

```bash
npm run check
npm run build
```

Expected:

- `astro check` passes
- `astro build` passes
- no motion or island typing errors remain

- [ ] **Step 5: Commit**

Run:

```bash
git add src/styles/global.css public/images/work/editorial-placeholder-01.svg public/images/work/editorial-placeholder-02.svg public/images/work/editorial-placeholder-03.svg public/images/work/editorial-placeholder-04.svg src/components/sections/HomeHeroMotion.tsx src/components/sections/HomeProjects.tsx src/components/sections/HomeProjectCard.tsx
git commit -m "Polish homepage styling and motion"
```

### Task 6: Visual Verification, Push, And Figma Handoff Prep

**Files:**
- Review only

- [ ] **Step 1: Run desktop and mobile preview capture**

Run the dev server and capture screenshots for `/` on desktop and mobile using the existing browser workflow already used in this repo.
Expected: both breakpoints show the new homepage hierarchy without collapsed spacing, overflow, or broken section ordering

- [ ] **Step 2: Confirm clean git state**

Run: `git status --short`
Expected: clean working tree before final push

- [ ] **Step 3: Push the feature branch**

Run: `git push -u origin codex/projects-editorial-page`
Expected: remote branch updated with homepage redesign commits

- [ ] **Step 4: Prepare Figma handoff**

List the implemented section order, reusable content/data files, and image asset paths that should be represented in the Figma file once the code is final.

