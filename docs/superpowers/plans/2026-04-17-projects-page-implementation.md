# Projects Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an original editorial `/work` page for Hasan & Eman, plus the shared header and footer refinements that support it.

**Architecture:** Keep the page mostly Astro-rendered, with React islands only for category filtering and restrained reveal motion. Centralize placeholder project data in a local data module so layout, routing, and future Arabic support can reuse the same structure.

**Tech Stack:** Astro 4, React 18 islands, Tailwind CSS v3, CSS custom properties, TypeScript, Framer Motion

---

## File Map

- Create: `src/data/projects.ts`
- Create: `src/components/work/ProjectsHero.astro`
- Create: `src/components/work/ProjectsCta.astro`
- Create: `src/components/work/ProjectsFilter.tsx`
- Create: `src/components/work/ProjectsIndex.tsx`
- Create: `src/components/work/ProjectListItem.tsx`
- Modify: `package.json`
- Modify: `src/pages/work/index.astro`
- Modify: `src/pages/ar/work/index.astro`
- Modify: `src/components/work/WorkGrid.astro`
- Modify: `src/components/layout/Header.astro`
- Modify: `src/components/layout/Nav.astro`
- Modify: `src/components/layout/Footer.astro`
- Modify: `src/components/layout/LanguageToggle.tsx`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/ar.json`
- Modify: `src/styles/global.css`
- Modify: `src/styles/tokens.css`

### Task 1: Add Motion Dependency And Project Data Foundation

**Files:**
- Modify: `package.json`
- Create: `src/data/projects.ts`

- [ ] **Step 1: Add the dependency declaration**

Update `package.json` dependencies to include:

```json
"framer-motion": "^11.18.2"
```

- [ ] **Step 2: Install dependencies**

Run: `npm install --package-lock=false`
Expected: install completes with `framer-motion` available and no `package-lock.json` added

- [ ] **Step 3: Write the project data module**

Create `src/data/projects.ts` with:

```ts
export type ProjectCategory = "Branding" | "Visual Identity" | "Web" | "Editorial";

export interface ProjectEntry {
  slug: string;
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    ratio: "landscape" | "portrait" | "wide";
  };
}

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Branding",
  "Visual Identity",
  "Web",
  "Editorial",
];

export const projects: ProjectEntry[] = [
  {
    slug: "nahr-wordmark-system",
    title: "Nahr Wordmark System",
    year: "2026",
    category: "Visual Identity",
    description: "Identity refinement for a hospitality group moving into a quieter luxury register.",
    image: {
      src: "/images/work/editorial-placeholder-01.svg",
      alt: "Abstract placeholder composition for Nahr Wordmark System",
      width: 1440,
      height: 960,
      ratio: "landscape",
    },
  },
];
```

- [ ] **Step 4: Expand the data to 6 to 8 entries**

Append 5 to 7 additional entries using the same structure and category set. Keep copy editorial and studio-appropriate.

- [ ] **Step 5: Verify the dependency and type baseline**

Run: `npm run check`
Expected: `astro check` completes successfully with no TypeScript errors from `src/data/projects.ts`

- [ ] **Step 6: Commit**

Run:

```bash
git add package.json src/data/projects.ts
git commit -m "Add projects page data foundation"
```

### Task 2: Build Shared Header And Footer Refinements

**Files:**
- Modify: `src/components/layout/Header.astro`
- Modify: `src/components/layout/Nav.astro`
- Modify: `src/components/layout/Footer.astro`
- Modify: `src/components/layout/LanguageToggle.tsx`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/ar.json`

- [ ] **Step 1: Write the shell copy additions**

Add i18n keys for:

```json
"footer": {
  "newsletterTitle": "Studio notes",
  "newsletterText": "Occasional updates on selected identity work and availability.",
  "newsletterPlaceholder": "Email address",
  "newsletterButton": "Join",
  "contactLabel": "Contact",
  "navLabel": "Navigation",
  "socialLabel": "Social"
}
```

- [ ] **Step 2: Update `BaseLayout.astro` to expose nav context**

Add a basic shared page shell so `Header` and `Footer` can receive locale-aware nav items and the current pathname.

```astro
---
import Header from "../components/layout/Header.astro";
import Footer from "../components/layout/Footer.astro";
const navItems = [
  { href: locale === "ar" ? "/ar/" : "/", label: dict.nav.home },
  { href: locale === "ar" ? "/ar/work" : "/work", label: dict.nav.work },
  { href: locale === "ar" ? "/ar/about" : "/about", label: dict.nav.about },
  { href: locale === "ar" ? "/ar/services" : "/services", label: dict.nav.services },
  { href: locale === "ar" ? "/ar/contact" : "/contact", label: dict.nav.contact },
];
---
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <Header navItems={navItems} pathname={pathname} locale={locale} dict={dict} />
  <slot />
  <Footer navItems={navItems} locale={locale} dict={dict} />
</body>
```

- [ ] **Step 3: Replace the placeholder header**

Rewrite `src/components/layout/Header.astro` as a slim editorial bar with:

```astro
---
import Nav from "./Nav.astro";
import LanguageToggle from "./LanguageToggle";
import { siteConfig } from "../../lib/site.config";
const { navItems, pathname, locale, dict } = Astro.props;
---
<header class="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-sm">
  <div class="container-shell flex items-center justify-between gap-6 py-4">
    <a href={locale === "ar" ? "/ar/" : "/"} class="font-serif text-lg tracking-[-0.04em]">
      Hasan & Eman
    </a>
    <div class="hidden items-center gap-6 lg:flex">
      <Nav items={navItems} pathname={pathname} />
      <div class="flex items-center gap-3 text-sm text-fg/70">
        <span class="h-2 w-2 rounded-full bg-primary"></span>
        <span>{siteConfig.availability.label}</span>
      </div>
      <LanguageToggle client:idle />
    </div>
  </div>
</header>
```

- [ ] **Step 4: Make `Nav.astro` current-page aware**

Update `src/components/layout/Nav.astro` so the active item can be styled:

```astro
---
const { items = [], pathname = "" } = Astro.props;
---
<nav aria-label="Main navigation">
  <ul class="flex list-none gap-6 p-0 m-0">
    {items.map((item) => {
      const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
      return (
        <li>
          <a
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            class:list={[
              "nav-link",
              isActive && "text-primary",
            ]}
          >
            {item.label}
          </a>
        </li>
      );
    })}
  </ul>
</nav>
```

- [ ] **Step 5: Replace the placeholder footer**

Rewrite `src/components/layout/Footer.astro` into a structured editorial footer with four content blocks: newsletter, contact, navigation, social.

- [ ] **Step 6: Make the language toggle path-aware**

Update `src/components/layout/LanguageToggle.tsx` so it computes the alternate language path from `window.location.pathname` and navigates on click.

- [ ] **Step 7: Verify the shell build**

Run: `npm run check`
Expected: `astro check` passes with the revised shared shell

- [ ] **Step 8: Commit**

Run:

```bash
git add src/components/layout src/layouts/BaseLayout.astro src/i18n/en.json src/i18n/ar.json
git commit -m "Refine shared editorial site shell"
```

### Task 3: Build The Work Page Sections

**Files:**
- Create: `src/components/work/ProjectsHero.astro`
- Create: `src/components/work/ProjectsCta.astro`
- Modify: `src/components/work/WorkGrid.astro`
- Modify: `src/pages/work/index.astro`
- Modify: `src/pages/ar/work/index.astro`

- [ ] **Step 1: Create the hero section**

Create `src/components/work/ProjectsHero.astro` with:

```astro
---
const { title, intro, eyebrow } = Astro.props;
---
<section class="container-shell pt-20 pb-10 md:pt-28 md:pb-16">
  <div class="max-w-4xl">
    <p class="mb-6 text-xs uppercase tracking-[0.24em] text-fg/55">{eyebrow}</p>
    <h1 class="font-serif text-[clamp(3.5rem,10vw,8.25rem)] leading-[0.92] tracking-[-0.06em]">
      {title}
    </h1>
    <p class="mt-8 max-w-2xl text-base leading-7 text-fg/70 md:text-lg">
      {intro}
    </p>
  </div>
</section>
```

- [ ] **Step 2: Create the CTA section**

Create `src/components/work/ProjectsCta.astro` with a muted background block, short editorial copy, and primary/secondary links.

- [ ] **Step 3: Replace `WorkGrid.astro`**

Turn `src/components/work/WorkGrid.astro` into a composition layer:

```astro
---
import ProjectsHero from "./ProjectsHero.astro";
import ProjectsIndex from "./ProjectsIndex";
import ProjectsCta from "./ProjectsCta.astro";
const { locale = "en" } = Astro.props;
---
<>
  <ProjectsHero
    eyebrow={locale === "ar" ? "اختيارات الاستوديو" : "Studio selection"}
    title={locale === "ar" ? "الأعمال" : "Projects"}
    intro={locale === "ar"
      ? "مجموعة من أنظمة الهوية ... "
      : "A considered selection of identity and digital work for brands across the GCC."}
  />
  <ProjectsIndex client:load locale={locale} />
  <ProjectsCta locale={locale} />
</>
```

- [ ] **Step 4: Keep the route files thin**

Update both `src/pages/work/index.astro` and `src/pages/ar/work/index.astro` so they only pass localized titles into `BaseLayout` and render `WorkGrid` with the right locale prop.

- [ ] **Step 5: Verify the section structure**

Run: `npm run check`
Expected: route components compile and `WorkGrid` no longer renders placeholder text

- [ ] **Step 6: Commit**

Run:

```bash
git add src/components/work/ProjectsHero.astro src/components/work/ProjectsCta.astro src/components/work/WorkGrid.astro src/pages/work/index.astro src/pages/ar/work/index.astro
git commit -m "Build editorial work page sections"
```

### Task 4: Build Filter And Project Index Islands

**Files:**
- Create: `src/components/work/ProjectsFilter.tsx`
- Create: `src/components/work/ProjectListItem.tsx`
- Create: `src/components/work/ProjectsIndex.tsx`

- [ ] **Step 1: Create the filter component**

Create `src/components/work/ProjectsFilter.tsx` with accessible button controls:

```tsx
import { projectCategories, type ProjectCategory } from "../../data/projects";

interface ProjectsFilterProps {
  activeCategory: "All" | ProjectCategory;
  onChange: (category: "All" | ProjectCategory) => void;
}

export default function ProjectsFilter({ activeCategory, onChange }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-3" role="toolbar" aria-label="Project categories">
      {projectCategories.map((category) => {
        const active = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(category)}
            className={active ? "chip chip-active" : "chip"}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Create the project list item**

Create `src/components/work/ProjectListItem.tsx` using `motion.article` with a two-zone desktop layout and single-column mobile collapse.

- [ ] **Step 3: Create the index orchestrator**

Create `src/components/work/ProjectsIndex.tsx` with:

```tsx
import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { projects, type ProjectCategory } from "../../data/projects";
import ProjectsFilter from "./ProjectsFilter";
import ProjectListItem from "./ProjectListItem";

export default function ProjectsIndex() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const reducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="container-shell pb-20 md:pb-28">
        <ProjectsFilter activeCategory={activeCategory} onChange={setActiveCategory} />
        <motion.div layout className="mt-10 space-y-14 md:mt-14 md:space-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectListItem
                key={project.slug}
                project={project}
                index={index}
                reducedMotion={Boolean(reducedMotion)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
```

- [ ] **Step 4: Verify the island code**

Run: `npm run check`
Expected: React island types and `framer-motion` imports resolve cleanly

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/work/ProjectsFilter.tsx src/components/work/ProjectListItem.tsx src/components/work/ProjectsIndex.tsx
git commit -m "Add animated projects index islands"
```

### Task 5: Add Global Styling, Responsive Polish, And Verification

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/styles/tokens.css`
- Modify: `src/components/layout/Header.astro`
- Modify: `src/components/layout/Footer.astro`
- Modify: `src/components/work/ProjectListItem.tsx`

- [ ] **Step 1: Add reusable global utility classes**

Extend `src/styles/global.css` with:

```css
.skip-link {
  position: absolute;
  left: 1rem;
  top: 1rem;
  transform: translateY(-200%);
}

.skip-link:focus-visible {
  transform: translateY(0);
}

.nav-link,
.chip {
  transition: color 220ms ease, background-color 220ms ease, border-color 220ms ease, opacity 220ms ease, transform 220ms ease;
}

.chip {
  border: 1px solid var(--border);
  min-height: 2.75rem;
  padding: 0.625rem 1rem;
}

.chip-active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--bg);
}
```

- [ ] **Step 2: Tighten token usage if needed**

Only add tokens in `src/styles/tokens.css` if a repeated spacing or max-width value emerges during implementation. Do not add decorative tokens.

- [ ] **Step 3: Run static verification**

Run:

```bash
npm run check
npm run build
```

Expected:

- `astro check` exits successfully
- `astro build` exits successfully
- no build-time type errors

- [ ] **Step 4: Commit**

Run:

```bash
git add src/styles/global.css src/styles/tokens.css src/components/layout/Header.astro src/components/layout/Footer.astro src/components/work/ProjectListItem.tsx
git commit -m "Polish projects page styling and responsiveness"
```

### Task 6: Final Review And Push

**Files:**
- Review only

- [ ] **Step 1: Inspect changed files**

Run: `git status --short`
Expected: clean working tree before push

- [ ] **Step 2: Push the feature branch**

Run: `git push -u origin codex/projects-editorial-page`
Expected: remote branch created or updated

- [ ] **Step 3: Record final verification**

Run:

```bash
npm run check
npm run build
```

Expected: both commands pass on the final branch state
