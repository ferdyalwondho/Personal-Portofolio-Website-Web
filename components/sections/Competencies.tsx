"use client";

import { motion } from "framer-motion";
import { Radio, Code2, Layers } from "lucide-react";
import { competencies } from "@/data/competencies";
import { SectionHeading } from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Radio,
  Code2,
  Layers,
};

export function Competencies() {
  return (
    <section
      id="competencies"
      className="py-24 md:py-32 bg-bg-secondary"
      aria-labelledby="competencies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / Skills"
          heading="What I Work With"
          subheading="A toolbelt built across telecom field rollouts and enterprise app development."
          id="competencies-heading"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, i) => {
            const Icon = iconMap[comp.iconName] ?? Code2;
            return (
              <motion.article
                key={comp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className="group flex flex-col gap-5 p-6 rounded-2xl border border-border bg-bg-primary
                           hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl
                               bg-bg-tertiary border border-border text-text-secondary
                               group-hover:text-accent group-hover:border-accent/40 transition-colors"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-semibold text-text-primary text-base">
                    {comp.title}
                  </h3>
                </div>

                <ul className="flex flex-col gap-2" role="list">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
