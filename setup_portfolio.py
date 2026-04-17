from pathlib import Path
import json

BASE_DIR = Path(r"E:\Random IDEA\My WebSite Portifoloi")

DIRS = [
    "src/components/layout",
    "src/components/sections",
    "src/components/work",
    "src/components/ui",
    "src/components/forms",
    "src/content/work/en",
    "src/content/work/ar",
    "src/layouts",
    "src/pages/work",
    "src/pages/ar/work",
    "src/styles",
    "src/i18n",
    "src/lib",
    "public/fonts",
    "public/images/work",
    "public/images/clients",
    "public/images/portraits",
    "public/cv",
]

FILES = {
    "src/styles/tokens.css": r''':root {
  --bg: #FFFFFF;
  --fg: #0A0A0A;
  --primary: #19243a;
  --muted: #F5F5F2;
  --border: #E8E8E3;

  /* Per-project accents — used inside case study scope only */
  --accent-blue: #6b93f3;
  --accent-pink: #f7cbcc;
  --accent-yellow: #f3e36a;

  /* Typography */
  --font-serif: "Editorial New", "Jawad Lyon", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-arabic-serif: "Zarid Serif", "Amiri", serif;
  --font-arabic-sans: "IBM Plex Sans Arabic", system-ui, sans-serif;

  /* Spacing scale */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem; --space-16: 4rem; --space-24: 6rem; --space-32: 8rem;

  /* Type scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-lg: 1.125rem; --text-xl: 1.25rem; --text-2xl: 1.5rem;
  --text-3xl: 2rem; --text-4xl: 2.75rem; --text-5xl: 4rem; --text-6xl: 5.5rem;

  /* Layout */
  --container-max: 1440px;
  --gutter: clamp(1rem, 4vw, 3rem);
}
''',

    "src/styles/global.css": r'''@import "./tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-sans);
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
}

html[dir="rtl"] body {
  font-family: var(--font-arabic-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  margin: 0;
}

html[dir="rtl"] h1,
html[dir="rtl"] h2,
html[dir="rtl"] h3,
html[dir="rtl"] h4,
html[dir="rtl"] h5,
html[dir="rtl"] h6 {
  font-family: var(--font-arabic-serif);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container-shell {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
''',

    "tailwind.config.mjs": r'''/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,json}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        border: "var(--border)",
        accentBlue: "var(--accent-blue)",
        accentPink: "var(--accent-pink)",
        accentYellow: "var(--accent-yellow)"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        arabicSerif: ["var(--font-arabic-serif)"],
        arabicSans: ["var(--font-arabic-sans)"]
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)"
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)"
      },
      maxWidth: {
        container: "var(--container-max)"
      },
      padding: {
        gutter: "var(--gutter)"
      },
      borderColor: {
        DEFAULT: "var(--border)"
      }
    }
  },
  plugins: []
};
''',

    "src/lib/site.config.ts": r'''export const siteConfig = {
  studioName: "Hasan & Eman",
  tagline: "A brand identity studio building considered visual systems.",
  locationPrimary: "from Iraq",
  locationPublic: true,
  availability: {
    active: true,
    label: "Accepting projects for Q3"
  },
  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    instagram: "https://instagram.com/your-profile",
    behance: "https://behance.net/your-profile",
    twitter: "https://x.com/your-profile"
  },
  email: "hello@hasanandeman.com",
  calendlyUrl: "https://calendly.com/your-profile",
  googleAppsScriptUrl: import.meta.env.PUBLIC_GOOGLE_APPS_SCRIPT_URL ?? ""
} as const;

export type SiteConfig = typeof siteConfig;
''',

    "src/i18n/en.json": json.dumps({
        "site": {
            "locale": "en",
            "dir": "ltr",
            "languageLabel": "English"
        },
        "nav": {
            "home": "Home",
            "work": "Work",
            "about": "About",
            "services": "Services",
            "contact": "Contact",
            "book": "Book",
            "cv": "CV"
        },
        "home": {
            "heroTitle": "A brand identity studio from Iraq.",
            "heroSubtitle": "We build considered visual systems for ambitious companies across the GCC.",
            "availability": "Accepting projects for Q3"
        }
    }, indent=2, ensure_ascii=False),

    "src/i18n/ar.json": json.dumps({
        "site": {
            "locale": "ar",
            "dir": "rtl",
            "languageLabel": "العربية"
        },
        "nav": {
            "home": "الرئيسية",
            "work": "الأعمال",
            "about": "من نحن",
            "services": "الخدمات",
            "contact": "تواصل",
            "book": "احجز",
            "cv": "السيرة"
        },
        "home": {
            "heroTitle": "استوديو هوية بصرية من العراق.",
            "heroSubtitle": "نصمم أنظمة بصرية مدروسة للشركات الطموحة في الخليج.",
            "availability": "نستقبل المشاريع للربع الثالث"
        }
    }, indent=2, ensure_ascii=False),

    "src/i18n/utils.ts": r'''import en from "./en.json";
import ar from "./ar.json";

export const locales = {
  en,
  ar
} as const;

export type Locale = keyof typeof locales;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/ar") ? "ar" : "en";
}

export function getDictionary(locale: Locale) {
  return locales[locale];
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const normalized = pathname.replace(/^\/ar/, "") || "/";
  if (target === "ar") {
    return normalized === "/" ? "/ar" : `/ar${normalized}`;
  }
  return normalized;
}
''',

    "src/layouts/BaseLayout.astro": r'''---
import "../styles/global.css";
import { getDir, getLocaleFromPath, getDictionary } from "../i18n/utils";
import { siteConfig } from "../lib/site.config";

const pathname = Astro.url.pathname;
const locale = getLocaleFromPath(pathname);
const dir = getDir(locale);
const dict = getDictionary(locale);
const pageTitle = Astro.props.title ?? siteConfig.studioName;
---

<!DOCTYPE html>
<html lang={locale} dir={dir}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
''',

    "src/layouts/CaseStudyLayout.astro": r'''---
import BaseLayout from "./BaseLayout.astro";
const { title } = Astro.props;
---
<BaseLayout title={title}>
  <main>
    <slot />
  </main>
</BaseLayout>
''',

    "src/components/layout/Header.astro": r'''---
---
<header class="border-b border-border">
  <div class="container-shell py-4">
    <slot />
  </div>
</header>
''',

    "src/components/layout/Footer.astro": r'''---
import { siteConfig } from "../../lib/site.config";
---
<footer class="border-t border-border mt-16">
  <div class="container-shell py-8 text-sm">
    <p>{siteConfig.studioName}</p>
  </div>
</footer>
''',

    "src/components/layout/Nav.astro": r'''---
const items = Astro.props.items ?? [];
---
<nav aria-label="Main navigation">
  <ul class="flex gap-6 list-none p-0 m-0">
    {items.map((item: { href: string; label: string }) => (
      <li><a href={item.href}>{item.label}</a></li>
    ))}
  </ul>
</nav>
''',

    "src/components/layout/LanguageToggle.tsx": r'''import React from "react";

export default function LanguageToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle language"
      className="border border-border px-3 py-2 text-sm"
    >
      EN / ع
    </button>
  );
}
''',

    "src/components/sections/Hero.astro": r'''---
const { title = "A brand identity studio from Iraq.", subtitle = "We build considered visual systems for ambitious companies across the GCC." } = Astro.props;
---
<section class="container-shell py-24">
  <h1 class="text-5xl mb-6">{title}</h1>
  <p class="text-lg max-w-2xl">{subtitle}</p>
</section>
''',

    "src/components/sections/FeaturedWork.astro": r'''---
---
<section class="container-shell py-16">
  <h2 class="text-3xl mb-8">Featured Work</h2>
  <p>Featured projects will go here.</p>
</section>
''',

    "src/components/sections/ClientMarquee.astro": r'''---
---
<section class="container-shell py-16">
  <h2 class="text-3xl mb-8">Selected Clients</h2>
  <p>Client logo marquee placeholder.</p>
</section>
''',

    "src/components/sections/Testimonial.astro": r'''---
---
<section class="container-shell py-16">
  <blockquote class="text-2xl">A featured testimonial will go here.</blockquote>
</section>
''',

    "src/components/sections/ServicesTeaser.astro": r'''---
---
<section class="container-shell py-16">
  <h2 class="text-3xl mb-8">Services</h2>
  <p>Services teaser placeholder.</p>
</section>
''',

    "src/components/sections/FooterCTA.astro": r'''---
---
<section class="container-shell py-16">
  <h2 class="text-4xl mb-6">Start a project</h2>
  <a href="/contact" class="inline-block border border-border px-4 py-3">Contact</a>
</section>
''',

    "src/components/work/WorkGrid.astro": r'''---
---
<div class="container-shell py-16">
  <p>Work grid placeholder.</p>
</div>
''',

    "src/components/work/WorkCard.astro": r'''---
const { title = "Project", year = "2026" } = Astro.props;
---
<article class="border border-border p-4">
  <h3>{title}</h3>
  <p>{year}</p>
</article>
''',

    "src/components/work/CaseStudyHeader.astro": r'''---
const { title = "Case Study", client = "Client" } = Astro.props;
---
<header class="container-shell py-16">
  <p class="text-sm">{client}</p>
  <h1 class="text-5xl mt-2">{title}</h1>
</header>
''',

    "src/components/work/CaseStudyVisuals.astro": r'''---
---
<section class="container-shell py-16">
  <p>Case study visuals placeholder.</p>
</section>
''',

    "src/components/work/NextProject.astro": r'''---
const { href = "/work", label = "Next Project" } = Astro.props;
---
<div class="container-shell py-16">
  <a href={href} class="inline-block border border-border px-4 py-3">{label}</a>
</div>
''',

    "src/components/ui/Button.astro": r'''---
const { href, label = "Click", type = "link" } = Astro.props;
---
{type === "link" ? (
  <a href={href} class="inline-block border border-border px-4 py-3">
    {label}
  </a>
) : (
  <button class="border border-border px-4 py-3">{label}</button>
)}
''',

    "src/components/ui/Container.astro": r'''---
---
<div class="container-shell">
  <slot />
</div>
''',

    "src/components/ui/SectionHeading.astro": r'''---
const { title = "Section" } = Astro.props;
---
<h2 class="text-3xl mb-8">{title}</h2>
''',

    "src/components/ui/AvailabilityDot.tsx": r'''import React from "react";

export default function AvailabilityDot() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "999px",
        background: "var(--primary)"
      }}
    />
  );
}
''',

    "src/components/forms/ContactForm.tsx": r'''import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      setTimeout(() => setStatus("success"), 800);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border border-border p-3" placeholder="Name" />
      <input className="w-full border border-border p-3" placeholder="Email" />
      <textarea className="w-full border border-border p-3" placeholder="Project brief" rows={6} />
      <button className="border border-border px-4 py-3" type="submit">
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
      {status === "success" && <p>Submitted successfully.</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </form>
  );
}
''',

    "src/pages/index.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
import Hero from "../components/sections/Hero.astro";
---
<BaseLayout title="Hasan & Eman">
  <main>
    <Hero />
  </main>
</BaseLayout>
''',

    "src/pages/work/index.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
import WorkGrid from "../../components/work/WorkGrid.astro";
---
<BaseLayout title="Work">
  <main>
    <WorkGrid />
  </main>
</BaseLayout>
''',

    "src/pages/work/[slug].astro": r'''---
import CaseStudyLayout from "../../layouts/CaseStudyLayout.astro";
import CaseStudyHeader from "../../components/work/CaseStudyHeader.astro";
import CaseStudyVisuals from "../../components/work/CaseStudyVisuals.astro";
import NextProject from "../../components/work/NextProject.astro";

export async function getStaticPaths() {
  return [
    { params: { slug: "checkpoint" } },
    { params: { slug: "zakhraf" } },
    { params: { slug: "tiba" } }
  ];
}

const { slug } = Astro.params;
---
<CaseStudyLayout title={slug}>
  <CaseStudyHeader title={slug} client="Client" />
  <CaseStudyVisuals />
  <NextProject />
</CaseStudyLayout>
''',

    "src/pages/about.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="About">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">About</h1>
  </main>
</BaseLayout>
''',

    "src/pages/services.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="Services">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">Services</h1>
  </main>
</BaseLayout>
''',

    "src/pages/contact.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactForm from "../components/forms/ContactForm";
---
<BaseLayout title="Contact">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">Contact</h1>
    <ContactForm client:load />
  </main>
</BaseLayout>
''',

    "src/pages/book.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="Book">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">Book</h1>
  </main>
</BaseLayout>
''',

    "src/pages/cv.astro": r'''---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="CV">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">CV</h1>
  </main>
</BaseLayout>
''',

    "src/pages/ar/index.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
import Hero from "../../components/sections/Hero.astro";
---
<BaseLayout title="حسن وإيمان">
  <main>
    <Hero title="استوديو هوية بصرية من العراق." subtitle="نصمم أنظمة بصرية مدروسة للشركات الطموحة في الخليج." />
  </main>
</BaseLayout>
''',

    "src/pages/ar/work/index.astro": r'''---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import WorkGrid from "../../../components/work/WorkGrid.astro";
---
<BaseLayout title="الأعمال">
  <main>
    <WorkGrid />
  </main>
</BaseLayout>
''',

    "src/pages/ar/work/[slug].astro": r'''---
import CaseStudyLayout from "../../../layouts/CaseStudyLayout.astro";
import CaseStudyHeader from "../../../components/work/CaseStudyHeader.astro";
import CaseStudyVisuals from "../../../components/work/CaseStudyVisuals.astro";
import NextProject from "../../../components/work/NextProject.astro";

export async function getStaticPaths() {
  return [
    { params: { slug: "checkpoint" } },
    { params: { slug: "zakhraf" } },
    { params: { slug: "tiba" } }
  ];
}

const { slug } = Astro.params;
---
<CaseStudyLayout title={slug}>
  <CaseStudyHeader title={slug} client="العميل" />
  <CaseStudyVisuals />
  <NextProject label="المشروع التالي" />
</CaseStudyLayout>
''',

    "src/pages/ar/about.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
---
<BaseLayout title="من نحن">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">من نحن</h1>
  </main>
</BaseLayout>
''',

    "src/pages/ar/services.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
---
<BaseLayout title="الخدمات">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">الخدمات</h1>
  </main>
</BaseLayout>
''',

    "src/pages/ar/contact.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
import ContactForm from "../../components/forms/ContactForm";
---
<BaseLayout title="تواصل">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">تواصل</h1>
    <ContactForm client:load />
  </main>
</BaseLayout>
''',

    "src/pages/ar/book.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
---
<BaseLayout title="احجز">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">احجز</h1>
  </main>
</BaseLayout>
''',

    "src/pages/ar/cv.astro": r'''---
import BaseLayout from "../../layouts/BaseLayout.astro";
---
<BaseLayout title="السيرة">
  <main class="container-shell py-16">
    <h1 class="text-5xl mb-6">السيرة</h1>
  </main>
</BaseLayout>
''',

    "src/content/work/en/checkpoint.mdx": r'''---
title: "Checkpoint"
client: "Checkpoint"
year: "2026"
sector: "Gaming"
---

Checkpoint project content placeholder.
''',

    "src/content/work/en/zakhraf.mdx": r'''---
title: "Zakhraf"
client: "Zakhraf"
year: "2026"
sector: "Design"
---

Zakhraf project content placeholder.
''',

    "src/content/work/en/tiba.mdx": r'''---
title: "Tiba"
client: "Tiba"
year: "2026"
sector: "Brand"
---

Tiba project content placeholder.
''',

    "src/content/work/ar/checkpoint.mdx": r'''---
title: "Checkpoint"
client: "Checkpoint"
year: "2026"
sector: "Gaming"
---

محتوى مشروع Checkpoint.
''',

    "public/cv/hasan-zayni-cv-en.pdf": b"",
    "public/cv/hasan-zayni-cv-ar.pdf": b"",
    "public/cv/hasan-eman-onepager-en.pdf": b"",
    "public/cv/hasan-eman-onepager-ar.pdf": b"",
}

OPTIONAL_FILES_IF_MISSING = {
    "src/env.d.ts": r'''/// <reference types="astro/client" />
''',

    "src/components.d.ts": r'''declare module "*.json" {
  const value: any;
  export default value;
}
''',
}

def ensure_directories():
    for rel in DIRS:
        path = BASE_DIR / rel
        path.mkdir(parents=True, exist_ok=True)
        print(f"[DIR]  {path}")

def write_file(path: Path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(content, bytes):
        path.write_bytes(content)
    else:
        path.write_text(content, encoding="utf-8")
    print(f"[FILE] {path}")

def main():
    if not BASE_DIR.exists():
        raise FileNotFoundError(f"Base path does not exist: {BASE_DIR}")

    print(f"Setting up Astro portfolio structure in:\n{BASE_DIR}\n")
    ensure_directories()

    for rel, content in FILES.items():
        write_file(BASE_DIR / rel, content)

    for rel, content in OPTIONAL_FILES_IF_MISSING.items():
        file_path = BASE_DIR / rel
        if not file_path.exists():
            write_file(file_path, content)

    print("\nDone.")
    print("Important:")
    print("1. tailwind.config.mjs was created.")
    print("2. Empty placeholder PDFs were created in public/cv.")
    print("3. Replace social URLs, email, and Calendly in src/lib/site.config.ts")
    print("4. If your project still uses tailwind.config.cjs, update package/tooling if needed.")

if __name__ == "__main__":
    main()