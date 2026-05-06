"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { KpiTile } from "@/components/shared/KpiTile";

function InteractivePhoto() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Photo card — no border */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full aspect-square rounded-2xl overflow-hidden z-10"
      >
        <Image
          src="/profile-full.png"
          alt={profile.name}
          fill
          sizes="(max-width: 1024px) 0px, 50vw"
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Floating badge — Experience */}
      <motion.div
        className="absolute -top-4 -right-4 z-20
                   flex flex-col items-center justify-center w-16 h-16 rounded-2xl
                   bg-accent text-white shadow-lg shadow-accent/30 border border-accent/50"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <span className="text-xl font-bold leading-none">13+</span>
        <span className="text-[10px] font-medium opacity-90">Years</span>
      </motion.div>

      {/* Floating badge — Location */}
      <motion.div
        className="absolute -top-4 -left-4 z-20
                   flex items-center gap-1.5 px-3 py-2 rounded-xl
                   bg-bg-secondary border border-border shadow-lg text-xs text-text-secondary font-medium"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
      >
        <span>📍</span>
        <span>Jakarta, ID</span>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — interactive photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative hidden lg:block px-8 pt-8 pb-10"
        >
          <InteractivePhoto />
        </motion.div>

        {/* Right — content */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={profile.about.eyebrow}
            heading={profile.about.heading}
            id="about-heading"
          />

          <div className="flex flex-col gap-5">
            {profile.about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className="text-body text-text-secondary max-w-[65ch] leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* KPI tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {profile.stats.map((stat, i) => (
              <KpiTile key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
