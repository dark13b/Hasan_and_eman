import { motion } from "framer-motion";
import type { ProjectEntry } from "../../data/projects";
import type { Locale } from "../../i18n/utils";

interface ProjectListItemProps {
  project: ProjectEntry;
  index: number;
  locale: Locale;
  reducedMotion: boolean;
}

export default function ProjectListItem({
  project,
  index,
  locale,
  reducedMotion,
}: ProjectListItemProps) {
  const reversed = index % 2 === 1;
  const imageOrderClass = reversed ? "md:order-1" : "md:order-2";
  const metaOrderClass = reversed ? "md:order-2 md:pl-8 lg:pl-12" : "md:order-1 md:pr-8 lg:pr-12";
  const ratioClass =
    project.image.ratio === "portrait"
      ? "aspect-[4/5]"
      : project.image.ratio === "wide"
        ? "aspect-[16/9]"
        : "aspect-[3/2]";

  return (
    <motion.article
      layout
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-7 border-t border-border pt-7 md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)] md:gap-0 md:pt-10"
    >
      <div className={`${metaOrderClass} flex flex-col justify-between gap-6`}>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-fg/46">
            <span>{project.category}</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span>{project.year}</span>
          </div>

          <div>
            <h2 className="font-serif text-3xl tracking-[-0.05em] text-fg md:text-4xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-fg/68 md:text-base">
              {project.description}
            </p>
          </div>
        </div>

        <p className="inline-flex w-fit text-sm text-fg/54">
          {locale === "ar" ? "معاينة المشروع" : "Project preview"}
        </p>
      </div>

      <motion.div
        layout
        className={`${imageOrderClass} group block overflow-hidden border border-border bg-muted`}
        whileHover={reducedMotion ? {} : { y: -2 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`overflow-hidden ${ratioClass}`}>
          <motion.img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            whileHover={reducedMotion ? {} : { scale: 1.015 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </motion.article>
  );
}
