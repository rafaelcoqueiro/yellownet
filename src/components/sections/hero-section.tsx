"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Map, Zap } from "lucide-react";
import { companyConfig } from "@/lib/company-config";

export function HeroSection() {
  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Ajustar layout, espaçamentos, tamanhos de texto e ordem dos elementos para melhor experiência mobile
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Grid decorativo e elementos de fundo */}
      <div className="absolute inset-0 bg-network-grid opacity-10"></div>
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      {/* Partículas de Internet flutuantes (apenas em telas maiores) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0"
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.max(3, Math.random() * 10)}px`,
                height: `${Math.max(3, Math.random() * 10)}px`,
                animationDuration: `${Math.max(10, Math.random() * 50)}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </motion.div>
      </div>
      
      {/* Conexões de fibra (apenas em telas maiores) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 hidden md:block">
        <div className="fiber-line"></div>
        <div className="fiber-line" style={{ animationDelay: '2s', top: '65%' }}></div>
        <div className="fiber-line" style={{ animationDelay: '4s', top: '25%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative">
        {/* Conteúdo texto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-blue-900/10 text-blue-900 rounded-full px-3 py-1 text-xs sm:text-sm font-medium mb-4"
          >
            Internet de Alta Velocidade para sua Casa
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 leading-tight"
          >
            Internet Fibra de <span className="text-[#FFDD00]">Verdade</span> para você
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-slate-700 max-w-lg mx-auto md:mx-0"
          >
            Navegue sem limites com a melhor internet da região. Planos com velocidades de até 650 Mbps e tecnologia 100% fibra óptica.
          </motion.p>
          
          {/* Indicadores */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm text-slate-700">100% Fibra</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm text-slate-700">Sem Fidelidade</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm text-slate-700">Suporte 24/7</span>
            </div>
          </motion.div>
          
          {/* Indicadores */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
          >
            <button
              onClick={scrollToPlans}
              className="bg-[#FFDD00] hover:bg-yellow-500 text-blue-900 py-2 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg"
            >
              <Zap className="w-4 h-4" />
              Ver planos e preços
            </button>
            <button
              onClick={() => {
                const message = "Olá! Gostaria de verificar a cobertura da Yellow Internet na minha região.";
                const whatsappUrl = `https://wa.me/${companyConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white border border-blue-200 hover:border-blue-300 hover:shadow-md text-blue-900 py-2 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Map className="w-4 h-4" />
              Verificar cobertura
            </button>
          </motion.div>
        </motion.div>
        
        {/* Imagem/Ilustração */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 max-w-md mx-auto md:max-w-none relative"
        >
          <div className="relative aspect-square md:aspect-auto md:h-auto">
            <Image
              src="/images/hero-image.png"
              alt="Yellow Internet Fibra"
              width={600}
              height={600}
              priority
              className="object-contain z-10 relative"
            />
            
            {/* Círculo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-yellow-100 rounded-full opacity-50 scale-95 blur-2xl"></div>
            
            {/* Pontos de conexão */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-400 animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-blue-400 animate-ping animation-delay-1000"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-sm text-blue-900 mb-1">Rolar para baixo</span>
        <ChevronDown className="w-5 h-5 text-blue-900" />
      </div>
    </section>
  );
} 