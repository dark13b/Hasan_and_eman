import { motion, useReducedMotion } from "framer-motion";

import type { HomeProject } from "../../data/homepage";

interface HomeProjectCardProps {
  project: HomeProject;
  index: number;
  href: string;
}

export default function HomeProjectCard({ project, index, href }: HomeProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.68, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-4 border-t border-border pt-5 md:grid-cols-[minmax(0,0.9fr)_minmax(240px,1.12fr)] md:gap-8 md:pt-7"
    >
      <div className="order-2 flex items-end justify-between gap-4 md:order-1">
        <div>
          <p className="editorial-label text-fg/46">{project.category}</p>
          <h3 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] leading-[0.94] tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-fg/68">{project.description}</p>
        </div>
        <span className="shrink-0 text-sm text-fg/52">{project.year}</span>
      </div>
      <a href={href} className="focus-ring group order-1 overflow-hidden border border-border bg-[rgba(255,255,255,0.4)] md:order-2">
        <motion.img
          src={project.image.src}
          alt={project.image.alt}
          className="aspect-[16/11] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          whileHover={reducedMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        />
      </a>
    </motion.article>
  );
}
