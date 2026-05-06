"use client";

import { motion } from "framer-motion";

type Props = {
  value: string;
  label: string;
  index?: number;
};

export function KpiTile({ value, label, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-bg-secondary"
    >
      <span className="font-heading text-3xl font-bold text-accent leading-none">
        {value}
      </span>
      <span className="text-caption text-text-secondary">{label}</span>
    </motion.div>
  );
}
