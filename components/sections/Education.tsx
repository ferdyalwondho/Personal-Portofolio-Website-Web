"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Languages } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Electrical, Electronics & Communications Engineering",
    institution: "Universitas Pamulang",
    period: "2009 – 2016",
  },
];

const certifications = [
  "ISO 27001 Internal Auditor",
  "ISO 27001:2022 Awareness & Implementation — ISMS",
  "VMware VTSP",
];

const courses = [
  "Scrum Master",
  "Power BI",
  "Technical Partner Enablement — Dynamics CRM Online Deep Dive",
  "Windows Server 2016 and Hybrid Cloud — Cloud + Enterprise Bootcamp",
  "VMware VTSP Training",
];

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional Working" },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-bg-secondary"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 / Background"
          heading="Education & Certifications"
          id="education-heading"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2 text-text-secondary">
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-text-primary">Education</h3>
            </div>
            {education.map((edu) => (
              <article
                key={edu.degree}
                className="p-5 rounded-xl border border-border bg-bg-primary flex flex-col gap-1"
              >
                <span className="text-caption text-text-muted">{edu.period}</span>
                <span className="font-medium text-text-primary">{edu.degree}</span>
                <span className="text-sm text-text-secondary">{edu.field}</span>
                <span className="text-caption text-text-muted">{edu.institution}</span>
              </article>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2 text-text-secondary">
              <Award className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-text-primary">Certifications</h3>
            </div>
            <ul className="flex flex-col gap-2" role="list">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-bg-primary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-secondary">{cert}</span>
                </li>
              ))}
            </ul>

            {/* Courses */}
            <div className="flex items-center gap-2 text-text-secondary mt-4">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-text-primary">Courses</h3>
            </div>
            <ul className="flex flex-col gap-2" role="list">
              {courses.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-bg-primary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-secondary">{course}</span>
                </li>
              ))}
            </ul>

            {/* Languages */}
            <div className="flex items-center gap-2 text-text-secondary mt-4">
              <Languages className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-text-primary">Languages</h3>
            </div>
            <ul className="flex flex-col gap-2" role="list">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-bg-primary"
                >
                  <span className="text-sm text-text-secondary">{lang.name}</span>
                  <span className="text-caption text-text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
