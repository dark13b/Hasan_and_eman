import { useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { projects, type ProjectCategory } from "../../data/projects";
import type { Locale } from "../../i18n/utils";
import ProjectListItem from "./ProjectListItem";
import ProjectsFilter from "./ProjectsFilter";

interface ProjectsIndexProps {
  locale: Locale;
}

export default function ProjectsIndex({ locale }: ProjectsIndexProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const reducedMotion = useReducedMotion();
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <MotionConfig reducedMotion="user">
      <section className="container-shell pb-14 md:pb-24">
        <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-end md:gap-10">
          <div className="space-y-3">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-fg/46">
              {locale === "ar" ? "الفئة" : "Category"}
            </p>
            <div className="flex items-end gap-4">
              <motion.span layout className="font-serif text-4xl tracking-[-0.05em] text-fg md:text-5xl">
                {String(filteredProjects.length).padStart(2, "0")}
              </motion.span>
              <motion.span
                key={activeCategory}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                className="pb-1 text-sm text-fg/58"
              >
                {locale === "ar"
                  ? activeCategory === "All"
                    ? "جميع الأعمال"
                    : activeCategory
                  : activeCategory === "All"
                    ? "All projects"
                    : activeCategory}
              </motion.span>
            </div>
          </div>

          <ProjectsFilter
            activeCategory={activeCategory}
            locale={locale}
            onChange={setActiveCategory}
          />
        </div>

        <motion.div layout className="mt-12 space-y-16 md:mt-16 md:space-y-24">
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
