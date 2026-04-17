import { MotionConfig, motion } from "framer-motion";

import { homeProjects } from "../../data/homepage";
import HomeProjectCard from "./HomeProjectCard";

interface HomeProjectsProps {
  dict: any;
  locale: "en" | "ar";
}

export default function HomeProjects({ dict, locale }: HomeProjectsProps) {
  const workHref = locale === "ar" ? "/ar/work" : "/work";

  return (
    <MotionConfig reducedMotion="user">
      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="editorial-label text-fg/46">{dict.homePage.projectsLabel}</p>
            <p className="mt-4 max-w-[14rem] text-sm leading-6 text-fg/58">{dict.workIndex.intro}</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.35 }}
            className="space-y-10 md:space-y-14"
          >
            {homeProjects.map((project, index) => (
              <HomeProjectCard key={project.slug} project={project} index={index} href={workHref} />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
