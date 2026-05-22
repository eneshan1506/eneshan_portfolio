"use client";

import { useTranslations } from "next-intl";

import { ProjectCard } from "@/app/components/ProjectCard";
import { PROJECTS } from "@/constants";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800] py-16 text-center">
        {t("title")}
      </h2>
      <div className="h-full w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={t(`items.${project.descriptionKey}.description`)}
            tags={project.tags}
            demoUrl={project.demoUrl}
            liveDemoLabel={t("liveDemo")}
          />
        ))}
      </div>
    </section>
  );
}
