"use client";

import { StatCard } from "@/components/ui/stat-card";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "+3k", label: "Clientes Atendidos" },
    { value: "24/7", label: "Suporte Técnico" },
    { value: "+5", label: "Cidades Atendidas" },
  ];

  return (
    <section className="relative w-full bg-blue-900 py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,209,0,0.1)_0%,rgba(30,58,138,0)_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Números que Comprovam Nossa Excelência
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
            Oferecemos o melhor serviço de internet fibra óptica da região, com tecnologia de ponta e atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 