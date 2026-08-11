"use client";

import { useTranslations } from "next-intl";

import { Container } from "@/app/components/Container";
import { ProjectCard } from "@/app/components/ProjectCard";
import { PROJECTS } from "@/constants";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 scroll-mt-24"
    >
      <Container>
        <h2 className="py-16 text-center text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800] sm:text-4xl">
          {t("title")}
        </h2>
        <div className="grid h-full w-full grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={t(`items.${project.descriptionKey}.description`)}
              tags={project.tags}
              demoUrl={project.demoUrl}
              image={project.image}
              imageAlt={project.title}
              liveDemoLabel={t("liveDemo")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
