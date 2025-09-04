"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-blue-900/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD100]"
      >
        {value}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-[10px] sm:text-xs md:text-sm text-white/80 text-center"
      >
        {label}
      </motion.span>
    </motion.div>
  );
} 