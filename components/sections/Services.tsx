"use client";

import { motion } from "framer-motion";
import { Radio, Code2, Layers, Home, Sun } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Radio,
  Code2,
  Layers,
  Home,
  Sun,
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <SectionHeading
        eyebrow="05 / Services"
        heading="How I Can Help"
        subheading="Four focus areas — pick what fits your need."
        id="services-heading"
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.iconName] ?? Code2;
          return (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="relative group flex flex-col gap-4 p-6 rounded-2xl border border-border
                         bg-transparent overflow-hidden
                         hover:bg-accent/5 hover:border-accent/40 transition-all duration-300"
            >
              {/* Large background number */}
              <span
                className="absolute top-4 right-5 font-heading text-7xl font-bold text-text-muted/8
                           leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-4 relative">
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                             bg-bg-secondary border border-border text-text-secondary
                             group-hover:text-accent group-hover:border-accent/40 transition-colors"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>

                <h3 className="font-heading font-semibold text-text-primary text-base">
                  {service.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
