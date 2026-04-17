import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ProjectEntry } from "../../data/projects";

interface ProjectListItemProps {
  project: ProjectEntry;
  index: number;
  reducedMotion: boolean;
}

export default function ProjectListItem({
  project,
  index,
  reducedMotion,
}: ProjectListItemProps) {
  const itemRef = useRef<HTMLElement | null>(null);
  const reversed = index % 2 === 1;
  const variant = index % 4;
  const imageOrderClass = reversed ? "md:order-1" : "md:order-2";
  const metaOrderClass = reversed ? "md:order-2 md:pl-10 lg:pl-16" : "md:order-1 md:pr-10 lg:pr-16";
  const ratioClass =
    project.image.ratio === "portrait"
      ? "aspect-[4/5]"
      : project.image.ratio === "wide"
        ? "aspect-[16/9]"
        : "aspect-[3/2]";
  const layoutClass =
    variant === 0
      ? "md:grid-cols-[minmax(18rem,0.38fr)_minmax(0,1fr)]"
      : variant === 1
        ? "md:grid-cols-[minmax(0,0.86fr)_minmax(18rem,0.44fr)]"
        : variant === 2
          ? "md:grid-cols-[minmax(18rem,0.34fr)_minmax(0,1fr)]"
          : "md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)]";
  const imageOffsetClass =
    variant === 1
      ? "md:mt-14"
      : variant === 2
        ? "md:-mt-10"
        : variant === 3
          ? "md:mt-8"
          : "";
  const framePaddingClass =
    project.image.ratio === "portrait"
      ? "p-8 md:p-12"
      : project.image.ratio === "wide"
        ? "p-6 md:p-10"
        : "p-7 md:p-11";
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [28, -28]);
  const metaY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [12, -12]);

  return (
    <motion.article
      ref={itemRef}
      layout
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-7 border-t border-border pt-7 md:gap-0 md:pt-14 ${layoutClass}`}
    >
      <motion.div
        style={{ y: metaY }}
        className={`${metaOrderClass} flex flex-col gap-6 md:justify-between`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-fg/46">
            <span>{project.category}</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span>{project.year}</span>
          </div>

          <div>
            <h2 className="max-w-[6ch] font-serif text-3xl tracking-[-0.05em] text-fg md:text-[3.35rem] md:leading-[0.95]">
              {project.title}
            </h2>
            <p className="mt-5 max-w-[24rem] text-sm leading-6 text-fg/68 md:text-base">
              {project.description}
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <span className="text-[0.72rem] uppercase tracking-[0.24em] text-fg/34">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      <motion.div
        layout
        style={{ y: mediaY }}
        className={`${imageOrderClass} ${imageOffsetClass} group block overflow-hidden border border-border bg-muted/72`}
        whileHover={reducedMotion ? {} : { y: reversed ? 4 : -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={framePaddingClass}>
          <div className={`overflow-hidden ${ratioClass}`}>
            <motion.img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              whileHover={reducedMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
