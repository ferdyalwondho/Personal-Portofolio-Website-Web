"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className,
  align = "left",
  id,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-caption font-heading text-accent tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-h1 font-heading text-text-primary">{heading}</h2>
      {subheading && (
        <p className="text-body-lg text-text-secondary max-w-2xl">{subheading}</p>
      )}
    </motion.div>
  );
}
