"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconFeatureProps {
  Icon: LucideIcon;
  title: string;
  description?: string;
  delay?: number;
}

export function IconFeature({ Icon, title, description, delay = 0 }: IconFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center bg-blue-800/30 rounded-2xl p-5 group hover:bg-blue-800/50 transition-all duration-300 card-shine relative overflow-hidden"
    >
      {/* Network line decoration */}
      <div className="absolute inset-x-0 top-[45%] h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/30 to-transparent"></div>
      <div className="absolute inset-y-0 left-[45%] w-[1px] bg-gradient-to-b from-transparent via-[#FFD100]/30 to-transparent"></div>
      
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 2 } }}
        className="bg-[#FFD100] p-4 rounded-full shadow-lg group-hover:shadow-[#FFD100]/25 transition-all mb-4 data-flow"
      >
        <Icon className="w-6 h-6 text-blue-900" />
      </motion.div>
      
      <div className="space-y-2 relative z-10">
        <h3 className="text-lg font-semibold text-white group-hover:text-[#FFD100] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
            {description}
          </p>
        )}
      </div>
      
      {/* Velocity indicator */}
      <div className="mt-4 w-full max-w-[80%]">
        <div className="velocity-meter rounded-full bg-white/10 h-1"></div>
      </div>
    </motion.div>
  );
} 