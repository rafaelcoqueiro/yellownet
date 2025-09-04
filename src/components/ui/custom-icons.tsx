"use client";

import { motion } from "framer-motion";

export function WifiIcon() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-12 h-12"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-blue-900 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
      <motion.div
        className="absolute inset-3 bg-[#FFD100] rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

export function LoadingSpinner() {
  return (
    <motion.div
      className="relative w-12 h-12"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    >
      <motion.div className="absolute inset-0 border-4 border-[#FFD100] border-t-transparent rounded-full" />
    </motion.div>
  );
}

export function SignalBars() {
  return (
    <div className="flex items-end h-8 gap-1">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-2 bg-[#FFD100]"
          initial={{ height: 0 }}
          animate={{ height: i * 8 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

export function ConnectionPath() {
  return (
    <svg className="w-full h-32" viewBox="0 0 400 100">
      <motion.path
        d="M0,50 C100,50 100,20 200,20 S300,80 400,80"
        fill="none"
        stroke="#FFD100"
        strokeWidth="4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="0"
        cy="50"
        r="8"
        fill="#FFD100"
        animate={{
          cx: [0, 400],
          cy: [50, 80],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
} 