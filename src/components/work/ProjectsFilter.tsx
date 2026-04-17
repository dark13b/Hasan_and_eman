import type { Locale } from "../../i18n/utils";
import { projectCategories, type ProjectCategory } from "../../data/projects";

interface ProjectsFilterProps {
  activeCategory: "All" | ProjectCategory;
  locale: Locale;
  onChange: (category: "All" | ProjectCategory) => void;
}

const categoryLabels: Record<Locale, Record<"All" | ProjectCategory, string>> = {
  en: {
    All: "All",
    Branding: "Branding",
    "Visual Identity": "Visual Identity",
    Web: "Web",
    Editorial: "Editorial",
  },
  ar: {
    All: "الكل",
    Branding: "الهوية",
    "Visual Identity": "الهوية البصرية",
    Web: "الويب",
    Editorial: "التحرير",
  },
};

export default function ProjectsFilter({ activeCategory, locale, onChange }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-3" role="toolbar" aria-label={locale === "ar" ? "فئات المشاريع" : "Project categories"}>
      {projectCategories.map((category) => {
        const active = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(category)}
            className={[
              "min-h-[2.85rem] border px-4 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              active
                ? "border-primary bg-primary text-white"
                : "border-border bg-transparent text-fg/72 hover:border-primary hover:text-primary",
            ].join(" ")}
          >
            {categoryLabels[locale][category]}
          </button>
        );
      })}
    </div>
  );
}
