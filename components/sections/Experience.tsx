"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <SectionHeading
        eyebrow="03 / Career"
        heading="Experience Timeline"
        subheading="From telecom field to enterprise app delivery."
        id="experience-heading"
        className="mb-16"
      />

      <div className="relative">
        {/* Vertical line — desktop */}
        <div
          className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block"
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-0" role="list" aria-label="Career timeline">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.07 }}
              className="relative grid md:grid-cols-[7.5rem_1fr] gap-4 md:gap-8 pb-10 last:pb-0"
            >
              {/* Year / period */}
              <div className="hidden md:flex flex-col items-end gap-1 pt-1 pr-8">
                <span className="text-caption text-text-muted text-right leading-snug">
                  {exp.period}
                </span>
              </div>

              {/* Dot */}
              <div
                className="absolute left-[7.5rem] top-1.5 w-3 h-3 -translate-x-1/2 rounded-full
                           border-2 border-accent bg-bg-primary hidden md:block"
                aria-hidden="true"
              />

              {/* Card */}
              <article
                className="flex flex-col gap-3 pl-0 md:pl-8
                           group hover:border-accent/40 transition-colors"
              >
                {/* Mobile: period */}
                <span className="md:hidden text-caption text-text-muted">{exp.period}</span>

                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-heading font-semibold text-text-primary text-lg leading-snug">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="text-caption px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-medium text-text-secondary">{exp.company}</span>
                  <span className="flex items-center gap-1 text-caption text-text-muted">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-body text-text-secondary leading-relaxed max-w-[65ch]">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption px-2.5 py-0.5 rounded-full border border-border text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider */}
                {i < experiences.length - 1 && (
                  <div className="mt-4 h-px bg-border md:hidden" aria-hidden="true" />
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
