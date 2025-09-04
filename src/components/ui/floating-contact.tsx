"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { companyConfig } from "@/lib/company-config";

export function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <button
        className="bg-[#FFD100] text-blue-900 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative flex items-center gap-2 sm:gap-0"
        onClick={() => window.open(`https://api.whatsapp.com/send?phone=${companyConfig.phoneNumber}`, '_blank')}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="text-xs sm:text-sm font-medium block sm:hidden">
          Fale Conosco
        </span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-white shadow-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Fale com um consultor
        </span>
      </button>
    </motion.div>
  );
} 