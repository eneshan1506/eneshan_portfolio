"use client";

import { useTranslations } from "next-intl";

import { ProjectCard } from "@/app/components/ProjectCard";
import { PROJECTS } from "@/constants";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800] py-20">
        {t("title")}
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={t(`items.${project.descriptionKey}.description`)}
            tags={project.tags}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
            liveDemoLabel={t("liveDemo")}
            codeLabel={t("code")}
          />
        ))}
      </div>
    </section>
  );
}
