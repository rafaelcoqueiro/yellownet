"use client";

import { IconFeature } from "@/components/ui/icon-feature";
import { motion } from "framer-motion";
import {
  Wifi,
  Zap,
  Shield,
  Gamepad2,
  Clock,
  HeartHandshake,
  Rocket,
  Award,
  Network,
  Globe,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Wifi,
      title: "Wi-Fi Premium Inteligente",
      description: "Cobertura completa com tecnologia Mesh para toda sua casa.",
    },
    {
      icon: Zap,
      title: "Baixa Latência",
      description: "Conexão ultra-rápida e estável para todas suas atividades.",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção integrada contra ameaças e ataques cibernéticos.",
    },
    {
      icon: Gamepad2,
      title: "Gamer Ready",
      description: "Roteamento otimizado para jogos online e streaming.",
    },
    {
      icon: Clock,
      title: "99.9% de Uptime",
      description: "Disponibilidade garantida com redundância de rede.",
    },
    {
      icon: HeartHandshake,
      title: "Suporte 24/7",
      description: "Atendimento especializado a qualquer momento.",
    },
    {
      icon: Network,
      title: "Fibra Ótica Dedicada",
      description: "Tecnologia de ponta com conexão direta e exclusiva.",
    },
    {
      icon: Globe,
      title: "Conexão Global",
      description: "Acesso rápido ao mundo todo com rotas otimizadas.",
    },
  ];

  return (
    <section className="relative w-full bg-blue-900 py-16 md:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Por Que Escolher a Yellow?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Oferecemos mais do que internet. Entregamos uma experiência completa de conectividade com recursos exclusivos.
          </p>
          
          {/* Velocidade e qualidade - indicadores */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 md:mt-8">
            <div className="bg-blue-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFDD00]" />
              <span className="text-xs sm:text-sm text-white">Velocidade Máxima</span>
            </div>
            <div className="bg-blue-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFDD00]" />
              <span className="text-xs sm:text-sm text-white">Conexão Segura</span>
            </div>
            <div className="bg-blue-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFDD00]" />
              <span className="text-xs sm:text-sm text-white">Qualidade Premium</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <IconFeature
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Indicador de velocidade na parte inferior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-sm sm:max-w-md md:max-w-3xl mx-auto"
        >
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>Performance garantida</span>
            <span>Velocidade consistente</span>
          </div>
          <div className="velocity-meter rounded-full bg-white/10"></div>
        </motion.div>
      </div>
    </section>
  );
} 