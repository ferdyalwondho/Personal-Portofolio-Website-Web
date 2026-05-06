"use client";

import { motion } from "framer-motion";
import {
  Package,
  LayoutDashboard,
  Database,
  Radio,
  MapPin,
  FolderKanban,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  LayoutDashboard,
  Database,
  Radio,
  MapPin,
  FolderKanban,
};

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  const Icon = iconMap[project.iconName] ?? Package;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-border bg-bg-secondary overflow-hidden
                 hover:border-accent transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative flex items-center justify-center h-44 bg-gradient-to-br",
          project.gradient
        )}
      >
        <Icon className="w-14 h-14 text-text-secondary/40 group-hover:text-accent/60 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-caption px-2.5 py-0.5 rounded-full border border-border text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-h3 font-heading text-text-primary leading-snug">
          {project.title}
        </h3>

        <p className="text-body text-text-secondary line-clamp-2 flex-1">
          {project.description}
        </p>

        <p className="text-caption text-text-muted mt-auto">
          {project.period} · {project.role}
        </p>
      </div>
    </motion.article>
  );
}
