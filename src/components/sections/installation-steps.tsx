"use client";

import { motion } from "framer-motion";
import { 
  CalendarIcon,
  TruckIcon,
  InstallIcon,
  ConfigIcon,
  ApprovalIcon,
  SignalIcon,
  SpeedIcon,
  StabilityIcon
} from "@/components/ui/installation-icons";
import { FC } from "react";

type IconComponent = FC<{ className?: string }>;

interface Step {
  title: string;
  description: string;
  icon: IconComponent;
  number: number;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: IconComponent;
}

export function InstallationSteps() {
  const steps: Step[] = [
    {
      icon: CalendarIcon,
      title: "Agendamento",
      description: "Escolha o melhor dia e horário",
      number: 1
    },
    {
      icon: TruckIcon,
      title: "Visita Técnica",
      description: "Técnico especializado em sua casa",
      number: 2
    },
    {
      icon: InstallIcon,
      title: "Instalação",
      description: "Instalação profissional e rápida",
      number: 3
    },
    {
      icon: ConfigIcon,
      title: "Configuração",
      description: "Configuração e otimização da rede",
      number: 4
    },
    {
      icon: ApprovalIcon,
      title: "Aprovação",
      description: "Teste de velocidade e qualidade",
      number: 5
    }
  ];

  const features: FeatureItem[] = [
    {
      icon: SignalIcon,
      title: "Sinal Forte",
      description: "Cobertura em toda sua casa"
    },
    {
      icon: SpeedIcon,
      title: "Alta Performance",
      description: "Velocidade máxima garantida"
    },
    {
      icon: StabilityIcon,
      title: "Estabilidade",
      description: "Conexão sem interferências"
    }
  ];

  return (
    <section className="w-full bg-blue-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Instalação Simplificada
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Processo rápido e profissional para você começar a aproveitar sua internet de alta velocidade
          </p>
        </motion.div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Connecting Line - apenas no desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.5rem] left-[60%] w-[calc(100%-2rem)] h-[2px]">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-[#FFDD00]/30" />
                      <motion.div 
                        className="absolute inset-0 bg-[#FFDD00]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Step Content */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFDD00] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-[#FFDD00]/25 transition-all duration-300"
                    >
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </motion.div>
                    
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-800 border border-[#FFDD00] text-[#FFDD00] text-xs sm:text-sm font-bold flex items-center justify-center"
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-[#FFDD00] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : index === 1 ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFDD00] rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold text-sm sm:text-base">{feature.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 