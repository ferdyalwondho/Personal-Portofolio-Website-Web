"use client";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-bg-secondary"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / Work"
          heading="Selected Work"
          subheading="A mix of platform builds, ERP migrations, and nationwide network programs."
          id="projects-heading"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
