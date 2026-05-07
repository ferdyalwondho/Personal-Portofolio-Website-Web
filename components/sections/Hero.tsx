"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { LogoMarquee } from "@/components/shared/LogoMarquee";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay } satisfies Transition,
});

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14 w-full">
        {/* Hero card */}
        <div className="relative rounded-2xl overflow-hidden
                        bg-gradient-to-br from-[#0D1F3C] via-[#0F2040] to-[#0A1628]
                        border border-blue-800/30 shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)]
                        px-8 pt-10 pb-0 md:px-12 md:pt-14 md:pb-0">

          {/* Inner glow top-left */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none
                       bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
          {/* Inner glow bottom-right */}
          <div
            className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full pointer-events-none
                       bg-blue-400/10 blur-3xl"
            aria-hidden="true"
          />

        <div className="relative grid lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-stretch">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-slow"
                aria-hidden="true"
              />
              <span className="text-caption text-text-secondary">
                {profile.availability}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-display font-heading text-text-primary"
            >
              {profile.tagline}
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p {...fadeUp(0.2)} className="text-body-lg text-text-secondary max-w-xl">
              Head of IT Apps & Integration with 13+ years across PM, PMO, telecom rollouts,
              ERP migrations, and full-stack app delivery. ISO 27001:2022 certified internal auditor —
              bringing security governance into every system I build. Based in Jakarta, working globally.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                           bg-accent text-accent-foreground hover:bg-accent-hover
                           transition-colors text-base"
              >
                View My Work
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                           border border-border text-text-secondary hover:border-border-hover
                           hover:text-text-primary transition-colors text-base"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Get in Touch
              </button>
            </motion.div>

          </div>

          {/* Right column — full-height floating photo */}
          <div className="relative flex items-start justify-center lg:justify-end self-stretch min-h-[520px]">
            {/* Subtle base glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-accent/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {profile.profilePhoto ? (
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 } satisfies Transition}
                className="relative w-full h-full"
              >
                <Image
                  src={profile.profilePhoto}
                  alt="Ferdy Alwondho"
                  fill
                  priority
                  className="object-contain object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 } satisfies Transition}
                className="font-heading text-[10rem] font-bold text-text-muted/10 select-none leading-none"
              >
                FA
              </motion.span>
            )}
          </div>
        </div>

        </div> {/* end hero card */}

        {/* Logo marquee — outside card, full width */}
        <motion.div {...fadeUp(0.45)} className="mt-5">
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
}
