"use client";

import { motion } from "framer-motion";
import { Wifi, Zap, Shield, HeartHandshake, Banknote, Clock, Network, Gauge, Signal, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyConfig } from "@/lib/company-config";

export function WhyYellowSection() {
  const features = [
    {
      icon: Wifi,
      title: "Tecnologia Avançada",
      description: "Trabalhamos com os equipamentos mais modernos do mercado para garantir a melhor experiência de conexão."
    },
    {
      icon: Network,
      title: "Link Redundante",
      description: "Sistema redundante com múltiplas rotas de conexão para você não se preocupar com quedas de internet."
    },
    {
      icon: HeartHandshake,
      title: "Equipe Especializada",
      description: "Equipe de atendimento e técnica treinada periodicamente para melhor atendê-lo em qualquer situação."
    }
  ];

  const benefits = [
    {
      icon: Signal,
      title: "Conexão Wifi Ultra-rápida",
      description: "A melhor cobertura Wi-Fi para toda sua família nos quatro cantos da sua residência."
    },
    {
      icon: Banknote,
      title: "Instalação Gratuita",
      description: "Instalação profissional sem custos para aproximar você de nosso serviço de qualidade."
    },
    {
      icon: Gauge,
      title: "Sem Franquia de Dados",
      description: "Aqui não cobramos franquia. Use sua internet sem limites de download ou upload!"
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-24 overflow-hidden relative">
      {/* Padrão de rede de fundo */}
      <div className="absolute inset-0 bg-network-grid"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Internet além da fibra
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Conectando-se ao futuro com soluções que vão além da simples conexão,
            oferecendo uma experiência global de navegação por fibra com os mais altos padrões de qualidade.
          </p>
          
          {/* Indicador de velocidade */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-6 max-w-xs mx-auto"
          >
            <div className="flex justify-between text-xs text-blue-900/70 mb-1">
              <span>Internet de alta performance</span>
              <span>Fibra ótica</span>
            </div>
            <div className="velocity-meter rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-3xl p-4 sm:p-6 md:p-8 group hover:bg-blue-100 transition-colors card-shine relative overflow-hidden"
            >
              {/* Decoração de linhas de internet */}
              <div className="absolute inset-x-0 top-[45%] h-[1px] bg-gradient-to-r from-transparent via-blue-900/20 to-transparent"></div>
              <div className="absolute inset-y-0 left-[45%] w-[1px] bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
              
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 relative z-10">
                <div className="bg-[#FFD100] p-3 sm:p-4 rounded-2xl data-flow mb-2 sm:mb-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-900 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-[#FFD100]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-[#FFD100]/10 rounded-full blur-3xl" />
          </div>
          
          {/* Padrão de rede */}
          <div className="absolute inset-0 bg-network-grid opacity-20"></div>
          
          {/* Linhas de dados animadas */}
          <div className="absolute left-0 top-1/3 w-full h-8 data-flow"></div>
          <div className="absolute right-0 bottom-1/3 w-full h-8 data-flow" style={{ animationDelay: '3s' }}></div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-6 md:mb-12"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 glitch-effect" data-text="Internet Rápida e Estável Por Um Preço Justo">
                Internet Rápida e Estável Por Um Preço Justo
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                Nós da Yellow trabalhamos para ter a qualidade mais avançada para garantir aos nossos 
                clientes serviços que permitam uma interação com todas as novidades do mercado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-800/50 rounded-2xl p-4 sm:p-6 group hover:bg-blue-800/70 transition-colors card-shine"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#FFD100] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 data-flow">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{benefit.description}</p>
                    
                    {/* Indicador de velocidade */}
                    <div className="mt-3 sm:mt-4 w-full max-w-[80%]">
                      <div className="velocity-meter rounded-full bg-white/10 h-1"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-16 space-y-4 md:space-y-6"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
            Quer assinar a Internet Fibra mais rápida da Grande São Paulo?
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Não perca tempo, peça já seu pacote
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto sm:min-w-[200px] data-flow"
              onClick={() => {
                const plansSection = document.getElementById('planos');
                if (plansSection) {
                  plansSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Assine Já
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto sm:min-w-[200px]"
              onClick={() => {
                const message = "Olá! Gostaria de saber mais sobre os planos da Yellow Internet.";
                const whatsappUrl = `https://wa.me/${companyConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Saiba Mais
            </Button>
          </div>
          <p className="text-blue-900 font-semibold text-sm sm:text-base">
            Ligue agora: {companyConfig.phone}
          </p>
          
          {/* Badges de tecnologia */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-6">
            <span className="bg-blue-100 text-blue-900 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
              Fibra Ótica
            </span>
            <span className="bg-blue-100 text-blue-900 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
              Wi-Fi 6
            </span>
            <span className="bg-blue-100 text-blue-900 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
              Baixa Latência
            </span>
            <span className="bg-blue-100 text-blue-900 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
              Alto Desempenho
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 