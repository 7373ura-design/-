"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/cards";
import { projectCategories } from "@/data/projects";
import type { Project } from "@/lib/types";
import { T } from "@/lib/i18n";

type Key = (typeof projectCategories)[number]["key"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Key>("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="tablist" aria-label="Project categories" className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {projectCategories.map((c) => {
          const count = c.key === "all" ? projects.length : projects.filter((p) => p.category === c.key).length;
          const selected = active === c.key;
          return (
            <button
              key={c.key}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="projects-panel"
              onClick={() => setActive(c.key)}
              className={`label shrink-0 border px-5 py-3 transition-colors duration-300 ${
                selected
                  ? "border-navy bg-navy text-paper"
                  : "border-navy/25 text-navy hover:border-navy"
              }`}
            >
              {c.label}
              <span className={`ml-2 ${selected ? "text-aqua" : "text-navy/45"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div id="projects-panel" role="tabpanel" className="mt-12">
        {shown.length > 0 ? (
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 [&_article]:w-auto">
            {shown.map((p, i) => (
              <div key={p.slug} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border hairline bg-paper px-6 py-16 text-center">
            <p className="label text-deep">COMING SOON</p>
            <p className="jp-body mt-4 text-[0.9375rem] text-navy/80">
              <T
                ja={"このカテゴリーのプロジェクトは準備中です。\n公開まで今しばらくお待ちください。"}
                en="Projects in this category are coming soon."
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
