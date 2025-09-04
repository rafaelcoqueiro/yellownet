'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-[#FFDD00] rounded-full blur-3xl" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 mb-8"
        >
          <Image
            src="/Ativo-1-2-q6pcokh28i3u0bae6epza1auykycrpibbn01nguonq.png"
            alt="Yellow Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Loading Dots */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-blue-600"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Carregando...
        </motion.p>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-[#FFDD00]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
} 