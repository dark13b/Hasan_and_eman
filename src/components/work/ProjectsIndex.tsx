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
        <ProjectsFilter
          activeCategory={activeCategory}
          locale={locale}
          onChange={setActiveCategory}
        />

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
