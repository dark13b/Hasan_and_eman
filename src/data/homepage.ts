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

export const homeProjects: HomeProject[] = [
  {
    slug: "checkpoint-portfolio-system",
    title: "Checkpoint Portfolio System",
    category: "Visual Identity",
    year: "2026",
    description:
      "A quieter digital identity system designed to hold authority across investor, product, and campaign surfaces.",
    image: {
      src: "/images/work/editorial-placeholder-01.svg",
      alt: "Editorial placeholder artwork for Checkpoint Portfolio System",
      width: 1280,
      height: 920,
    },
  },
  {
    slug: "emac-education-framework",
    title: "EMAC Education Framework",
    category: "Editorial",
    year: "2025",
    description:
      "A publication and presentation language built to align course material, admissions, and institutional communications.",
    image: {
      src: "/images/work/editorial-placeholder-02.svg",
      alt: "Editorial placeholder artwork for EMAC Education Framework",
      width: 1280,
      height: 920,
    },
  },
  {
    slug: "cara-digital-launch",
    title: "Cara Digital Launch",
    category: "Web",
    year: "2025",
    description:
      "A restrained launch experience translating a hospitality brand into a slower, image-led digital rhythm.",
    image: {
      src: "/images/work/editorial-placeholder-03.svg",
      alt: "Editorial placeholder artwork for Cara Digital Launch",
      width: 1280,
      height: 920,
    },
  },
  {
    slug: "najah-brand-reset",
    title: "Najah Brand Reset",
    category: "Branding",
    year: "2024",
    description:
      "A brand reset shaped to travel cleanly from leadership decks to campaign systems and public-facing materials.",
    image: {
      src: "/images/work/editorial-placeholder-04.svg",
      alt: "Editorial placeholder artwork for Najah Brand Reset",
      width: 1280,
      height: 920,
    },
  },
];

export const homeProof: HomeProofItem[] = [
  {
    index: "01",
    title: "Built for use",
    body: "Identity systems planned to hold across print, digital, decks, tenders, signage, and day-to-day rollout.",
  },
  {
    index: "02",
    title: "Regional fluency",
    body: "Work shaped for GCC-facing audiences, with structure ready for bilingual expansion and institutional scrutiny.",
  },
  {
    index: "03",
    title: "Measured process",
    body: "A limited studio model with tighter feedback loops, calmer presentation, and fewer unnecessary revision cycles.",
  },
];

export const homeServices: HomeServiceItem[] = [
  {
    index: "01",
    title: "Identity Direction",
    body: "Positioning into visual form, with systems that establish tone before the first page, pitch, or launch surface goes live.",
  },
  {
    index: "02",
    title: "Editorial Systems",
    body: "Structured layouts, presentation kits, and document language designed to support serious conversations and long-term consistency.",
  },
  {
    index: "03",
    title: "Digital Expression",
    body: "Web and campaign surfaces translated from the identity core, with motion, hierarchy, and restraint aligned to the wider system.",
  },
];
