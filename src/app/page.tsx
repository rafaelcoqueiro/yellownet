"use client";

import { Footer } from "@/components/ui/footer";
import { TopBar } from "@/components/ui/top-bar";
import { PlansSection } from "@/components/sections/plans-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WhyYellowSection } from "@/components/sections/why-yellow-section";
import { StatsSection } from "@/components/sections/stats-section";
import { InstallationSteps } from "@/components/sections/installation-steps";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { motion } from "framer-motion";
import { Network, ArrowRight, Wifi, Building2, Smartphone, Shield, Zap, Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Componente para ícone hexagonal
const HexagonIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <polygon
        points="50,5 85,25 85,75 50,95 15,75 15,25"
        fill="currentColor"
        className="opacity-20"
      />
      <polygon
        points="50,5 85,25 85,75 50,95 15,75 15,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />

      {/* Hero Section com elementos de internet */}
      <section className="w-full bg-[#FFDD00] overflow-hidden relative min-h-[100dvh] lg:min-h-screen flex items-center">
        {/* Background decorativo com elementos de conectividade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFDD00] via-[#FFE433] to-[#FFDD00] opacity-90"></div>
        
        {/* Padrão de rede e conectividade */}
        <div className="absolute inset-0 bg-network-grid"></div>
        <div className="absolute inset-0 bg-honeycomb-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-connection-pattern opacity-10"></div>
        
        {/* Círculos abstratos representando dados - reduzidos no mobile */}
        <div className="absolute top-0 left-0 w-[60%] md:w-[40%] h-[40%] md:h-[60%] bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[70%] md:w-[50%] h-[50%] md:h-[70%] bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 pt-safe pb-safe relative h-full">
          {/* Layout principal com imagem da mulher */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center min-h-[calc(100dvh-8rem)] lg:min-h-0">
            
            {/* Título e descrição no mobile - aparece primeiro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:hidden"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
                Soluções completas em conectividade
              </h1>
              <p className="text-blue-900/80 text-sm sm:text-base max-w-md mx-auto">
                Escolha a solução ideal para suas necessidades
              </p>
            </motion.div>
            
            {/* Coluna da esquerda - Imagem da mulher */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1 w-full"
            >
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                {/* Container da imagem */}
                <div className="relative z-10">
                  <Image
                    src="/hero-woman.png"
                    alt="Mulher usando internet Yellow"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                
                {/* Elementos decorativos ao redor da imagem */}
                <div className="absolute -inset-4 sm:-inset-10 bg-gradient-radial from-white/20 via-transparent to-transparent blur-xl sm:blur-3xl"></div>
                
                {/* Ícones de conectividade - menores no mobile */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Wifi className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-900" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" />
                </div>
                
                {/* Sinal de WiFi estático - escondido no mobile */}
                <div className="hidden sm:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <Network className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Coluna da direita - Conteúdo e botões */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 w-full">
              {/* Título e descrição no desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                  Soluções completas em conectividade
                </h1>
                <p className="text-blue-900/80 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                  Escolha a solução ideal para suas necessidades
                </p>
                
                {/* Indicador de velocidade */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-6 max-w-sm"
                >
                  <div className="flex justify-between text-xs text-blue-900/70 mb-1">
                    <span>Até 1 GIGA de velocidade</span>
                    <span>Ultrarrápido</span>
                  </div>
                  <div className="velocity-meter rounded-full"></div>
                </motion.div>
              </motion.div>
              
              {/* Grid de botões de serviços - ajustado para mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Residencial */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onClick={() => {
                    router.push('/?type=residential', { scroll: false });
                    setTimeout(() => {
                      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HexagonIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white transition-transform flex-shrink-0">
                      <Wifi className="w-6 h-6 sm:w-7 sm:h-7" />
                    </HexagonIcon>
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl">Residencial</h3>
                      <p className="text-xs sm:text-sm opacity-90 truncate">Internet fibra para sua casa</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0" />
                  </div>
                </motion.button>

                {/* Empresarial */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => {
                    router.push('/?type=corporate', { scroll: false });
                    setTimeout(() => {
                      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HexagonIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white transition-transform flex-shrink-0">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </HexagonIcon>
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl">Empresarial</h3>
                      <p className="text-xs sm:text-sm opacity-90 truncate">Soluções para sua empresa</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0" />
                  </div>
                </motion.button>

                {/* Yellow Móvel */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => {
                    router.push('/?type=mobile', { scroll: false });
                    setTimeout(() => {
                      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HexagonIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white transition-transform flex-shrink-0">
                      <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
                    </HexagonIcon>
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl">Yellow Móvel</h3>
                      <p className="text-xs sm:text-sm opacity-90 truncate">Planos móveis completos</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0" />
                  </div>
                </motion.button>

                {/* Dedicado */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onClick={() => {
                    router.push('/?type=corporate', { scroll: false });
                    setTimeout(() => {
                      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HexagonIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white transition-transform flex-shrink-0">
                      <Network className="w-6 h-6 sm:w-7 sm:h-7" />
                    </HexagonIcon>
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl">Dedicado</h3>
                      <p className="text-xs sm:text-sm opacity-90 truncate">Links dedicados empresariais</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0" />
                  </div>
                </motion.button>
              </div>
              
              {/* Badges com design atualizado - centralizados no mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 flex-wrap"
              >
                <span className="bg-gradient-to-r from-blue-900 to-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 font-medium shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD100]" />
                  Suporte 24/7
                </span>
                <span className="bg-gradient-to-r from-blue-900 to-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 font-medium shadow-lg hover:shadow-xl transition-shadow">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD100]" />
                  Alta Performance
                </span>
                <span className="bg-gradient-to-r from-blue-900 to-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 font-medium shadow-lg hover:shadow-xl transition-shadow">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD100]" />
                  Monitoramento
                </span>
              </motion.div>
              
              {/* Indicador de velocidade no mobile */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block lg:hidden max-w-sm mx-auto"
              >
                <div className="flex justify-between text-xs text-blue-900/70 mb-1">
                  <span>Até 1 GIGA</span>
                  <span>Ultrarrápido</span>
                </div>
                <div className="velocity-meter rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <PlansSection />

      {/* Seção de Características */}
      <FeaturesSection />

      {/* Por que Yellow */}
      <WhyYellowSection />

      {/* Estatísticas */}
      <StatsSection />

      {/* Passos de Instalação */}
      <InstallationSteps />

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Parceiros */}
      <PartnersSection />

      <Footer />
    </div>
  );
}
