"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PartnersSection() {
  const partners = [
    {
      name: "Anatel",
      logo: "/partners/anatel.png",
      description: "Agência Nacional de Telecomunicações"
    },
    {
      name: "IX.br",
      logo: "/partners/ix-br.png",
      description: "Ponto de Troca de Tráfego"
    },
    {
      name: "Cirion",
      logo: "/partners/cirion.png",
      description: "Infraestrutura de Telecomunicações"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Parcerias Estratégicas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Trabalhamos em conjunto com as principais instituições do setor para garantir a melhor qualidade de serviço
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all group"
            >
              <div className="relative w-32 sm:w-36 md:w-40 h-20 sm:h-22 md:h-24 mb-3 sm:mb-4 bg-white rounded-lg p-2">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    console.error(`Error loading image: ${partner.logo}`);
                  }}
                  priority={index === 0}
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">{partner.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 