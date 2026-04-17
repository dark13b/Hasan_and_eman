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
  {
    slug: "safa-retail-press-kit",
    title: "Safa Retail Press Kit",
    year: "2025",
    category: "Editorial",
    description: "A launch system pairing print matter, campaign pacing, and a disciplined retail voice.",
    image: {
      src: "/images/work/editorial-placeholder-02.svg",
      alt: "Editorial placeholder composition for Safa Retail Press Kit",
      width: 1080,
      height: 1350,
      ratio: "portrait",
    },
  },
  {
    slug: "almarfa-digital-rollout",
    title: "Almarfa Digital Rollout",
    year: "2025",
    category: "Web",
    description: "A digital expression system translating brand clarity into a measured product-facing interface.",
    image: {
      src: "/images/work/editorial-placeholder-03.svg",
      alt: "Wide digital placeholder composition for Almarfa Digital Rollout",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
  },
  {
    slug: "noura-packaging-refresh",
    title: "Noura Packaging Refresh",
    year: "2024",
    category: "Branding",
    description: "Packaging and naming cues realigned around contrast, restraint, and better shelf presence.",
    image: {
      src: "/images/work/editorial-placeholder-04.svg",
      alt: "Abstract placeholder composition for Noura Packaging Refresh",
      width: 1440,
      height: 960,
      ratio: "landscape",
    },
  },
  {
    slug: "burj-signature-suite",
    title: "Burj Signature Suite",
    year: "2024",
    category: "Visual Identity",
    description: "A premium stationery and signage direction for a property group with regional ambitions.",
    image: {
      src: "/images/work/editorial-placeholder-05.svg",
      alt: "Portrait placeholder composition for Burj Signature Suite",
      width: 1080,
      height: 1350,
      ratio: "portrait",
    },
  },
  {
    slug: "midad-annual-review",
    title: "Midad Annual Review",
    year: "2023",
    category: "Editorial",
    description: "A publication system balancing institutional clarity with a warmer, more human reading pace.",
    image: {
      src: "/images/work/editorial-placeholder-06.svg",
      alt: "Editorial placeholder composition for Midad Annual Review",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
  },
  {
    slug: "waha-launch-site",
    title: "Waha Launch Site",
    year: "2023",
    category: "Web",
    description: "A launch experience built around typography, motion restraint, and calm product framing.",
    image: {
      src: "/images/work/editorial-placeholder-07.svg",
      alt: "Landscape placeholder composition for Waha Launch Site",
      width: 1440,
      height: 960,
      ratio: "landscape",
    },
  },
  {
    slug: "riyaf-brand-system",
    title: "Riyaf Brand System",
    year: "2022",
    category: "Branding",
    description: "A complete identity system designed to move from investor decks to signage without friction.",
    image: {
      src: "/images/work/editorial-placeholder-08.svg",
      alt: "Portrait placeholder composition for Riyaf Brand System",
      width: 1080,
      height: 1350,
      ratio: "portrait",
    },
  },
];
