"use client";

import { motion } from "framer-motion";
import { PlanCard } from "../ui/plan-card";
import { Building2, Smartphone, Home, Heart, Users, Shield, Wifi, Monitor, Headphones, Globe, Zap, Lock, BarChart3, Laptop } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { PlanFeature } from "@/components/ui/plan-card";

type PlanType = 'residential' | 'corporate' | 'mobile';

const allPlans = {
  residential: [
    {
      id: "350mega",
      title: "Internet Fibra",
      speed: "350 mega",
      price: 99.90,
      nextPrice: 109.90,
      image: "/plans/350.jpg",
      features: [
        { type: 'text' as const, text: "Download 350 Mbps" },
        { type: 'text' as const, text: "Upload 175 Mbps" },
        { type: 'text' as const, text: "Ideal para streaming HD" },
        { type: 'text' as const, text: "Suporte a jogos online" },
        { type: 'text' as const, text: "Wi-Fi 6 de alta performance" }
      ],
      variant: "default" as const
    },
    {
      id: "650mega",
      title: "Internet Fibra",
      speed: "650 mega",
      price: 109.90,
      nextPrice: 119.90,
      image: "/plans/650.jpg",
      features: [
        { type: 'text' as const, text: "Download 650 Mbps" },
        { type: 'text' as const, text: "Upload 325 Mbps" },
        { type: 'text' as const, text: "Perfeito para 4K streaming" },
        { type: 'text' as const, text: "Ótimo para home office" },
        { type: 'text' as const, text: "Jogos com baixa latência" },
        { type: 'text' as const, text: "Wi-Fi 6 mesh inteligente" }
      ],
      variant: "highlight" as const
    },
    {
      id: "1Giga",
      title: "Internet Fibra",
      speed: "1 Giga",
      price: 139.90,
      nextPrice: 159.90,
      image: "/plans/1000.jpg",
      features: [
        { type: 'text' as const, text: "Download 1000 Mbps" },
        { type: 'text' as const, text: "Upload 500 Mbps" },
        { type: 'text' as const, text: "Streaming 4K/8K" },
        { type: 'text' as const, text: "Ideal para criadores de conteúdo" },
        { type: 'text' as const, text: "Wi-Fi 6 mesh premium" }
      ],
      variant: "dark" as const
    },
  ],
  
  corporate: [
    {
      id: "corporate-100",
      title: "Internet Empresarial",
      speed: "100 mega",
      price: 199.90,
      nextPrice: 199.90,
      image: "/plans/corporate-100.jpg",
      features: [
        { type: 'text' as const, text: "Download/Upload 100 Mbps" },
        { type: 'text' as const, text: "IP fixo incluso" },
        { type: 'text' as const, text: "Suporte prioritário" },
        { type: 'text' as const, text: "SLA de 99.5%" },
        { type: 'text' as const, text: "Ideal para pequenas empresas" }
      ],
      variant: "default" as const
    },
    {
      id: "corporate-300",
      title: "Internet Empresarial",
      speed: "350 mega",
      price: 349.90,
      nextPrice: 349.90,
      image: "/plans/corporate-300.jpg",
      features: [
        { type: 'text' as const, text: "Download/Upload 350 Mbps" },
        { type: 'text' as const, text: "IP fixo dedicado" },
        { type: 'text' as const, text: "Suporte 24/7" },
        { type: 'text' as const, text: "SLA de 99.8%" },
        { type: 'text' as const, text: "Backup de conectividade" }
      ],
      variant: "highlight" as const
    },
    {
      id: "corporate-650",
      title: "Internet Empresarial",
      speed: "650 mega",
      price: 529.90,
      nextPrice: 529.90,
      image: "/plans/corporate-650.jpg",
      features: [
        { type: 'text' as const, text: "Download/Upload 650 Mbps" },
        { type: 'text' as const, text: "Múltiplos IPs fixos" },
        { type: 'text' as const, text: "Gerente de conta dedicado" },
        { type: 'text' as const, text: "SLA de 99.9%" },
        { type: 'text' as const, text: "Redundância total" }
      ],
      variant: "dark" as const
    }
  ],
  
  mobile: [
    {
      id: "mobile-5gb",
      title: "YellowMóvel",
      speed: "5GB + Ilimitado",
      price: 34.90,
      nextPrice: 34.90,
      image: "/plans/mobile-5gb.jpg",
      features: [
        { type: 'text' as const, text: "5GB alta velocidade" },
        { type: 'text' as const, text: "WhatsApp ilimitado" },
        { type: 'text' as const, text: "Redes sociais grátis" },
        { type: 'text' as const, text: "Cobertura nacional" },
        { type: 'text' as const, text: "Portabilidade grátis" }
      ],
      variant: "default" as const
    },
    {
      id: "mobile-15gb",
      title: "YellowMóvel",
      speed: "19GB + Apps",
      price: 59.90,
      nextPrice: 59.90,
      image: "/plans/mobile-15gb.jpg",
      features: [
        { type: 'text' as const, text: "19GB alta velocidade" },
        { type: 'text' as const, text: "Apps ilimitados" },
        { type: 'text' as const, text: "YouTube Premium" },
        { type: 'text' as const, text: "Spotify Premium" },
        { type: 'text' as const, text: "Roaming nacional" }
      ],
      variant: "highlight" as const
    },
    {
      id: "mobile-45gb",
      title: "YellowMóvel Premium",
      speed: "45GB + Tudo Ilimitado",
      price: 89.99,
      nextPrice: 89.99,
      image: "/plans/mobile-45gb.jpg",
      features: [
        { type: 'text' as const, text: "45GB alta velocidade" },
        { type: 'text' as const, text: "Tudo ilimitado" },
        { type: 'text' as const, text: "5G prioritário" },
        { type: 'text' as const, text: "Netflix incluso" },
        { type: 'text' as const, text: "Suporte premium" }
      ],
      variant: "dark" as const
    }
  ]
};

const planTypeLabels = {
  residential: { label: "Para sua casa", icon: Home },
  corporate: { label: "Para sua empresa", icon: Building2 },
  mobile: { label: "YellowMóvel", icon: Smartphone }
};

const residentialFeatures = [
  { text: "Wi-Fi 6 Mesh Inteligente", icon: Wifi },
  { text: "Streaming 4K/8K Garantido", icon: Monitor },
  { text: "Proteção Familiar Avançada", icon: Shield },
  { text: "Suporte Técnico Domiciliar", icon: Heart },
];

const corporateFeatures = [
  { text: "Backup de Conectividade", icon: Zap },
  { text: "Monitoramento 24/7", icon: BarChart3 },
  { text: "Gerente Dedicado", icon: Users },
  { text: "Certificação ISO/SOC", icon: Lock },
];

const mobileFeatures = [
  { text: "Cobertura 5G Nacional", icon: Globe },
  { text: "Roaming Internacional", icon: Smartphone },
  { text: "Apps Premium Inclusos", icon: Headphones },
  { text: "Hotspot Ilimitado", icon: Wifi },
];

export function PlansSection() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const initialType = (typeParam && typeParam in allPlans) ? typeParam as PlanType : 'residential';

  const [selectedPlanType, setSelectedPlanType] = useState<PlanType>(initialType);
  const currentPlans = allPlans[selectedPlanType];

  // Sincronizar com parâmetros de URL
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam && typeParam in allPlans) {
      setSelectedPlanType(typeParam as PlanType);
    }
  }, [searchParams]);

  const handlePlanTypeChange = (type: PlanType) => {
    setSelectedPlanType(type);
    // Atualizar URL sem recarregar a página
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.replaceState({}, '', url.toString());
  };

  // Configurações de tema por tipo de plano
  const getThemeConfig = (planType: PlanType) => {
    switch (planType) {
      case 'residential':
        return {
          background: 'bg-gradient-to-br from-[#FFDD00] via-orange-400 to-orange-600',
          title: 'Conectividade Inteligente para Toda Família',
          subtitle: 'Internet fibra com Wi-Fi 6, streaming 4K/8K e proteção avançada para seu lar',
          decorativeElements: (
            <>
              {/* Casa principal - símbolo de lar */}
              <div className="absolute top-16 left-16 opacity-50">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.5, rotate: 12 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-32 h-32 border-2 border-white/70 rounded-xl backdrop-blur-sm bg-white/20 flex items-center justify-center relative shadow-lg"
                >
                  <Home className="w-18 h-18 text-white/80" />
                  {/* Chaminé com fumaça */}
                  <div className="absolute -top-2 -right-2 w-3 h-6 bg-white/30 rounded-t"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 0.3, y: -10 }}
                    transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -top-6 -right-1 w-2 h-2 bg-white/40 rounded-full"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Família conectada */}
              <div className="absolute top-32 right-24 opacity-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="w-28 h-28 border-2 border-white/70 rounded-full backdrop-blur-sm bg-white/20 flex items-center justify-center relative shadow-lg"
                >
                  <Users className="w-16 h-16 text-white/80" />
                  {/* Pontos de conexão */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/60 rounded-full"></div>
                  {/* Linhas de conexão */}
                  <div className="absolute top-4 left-4 w-4 h-px bg-blue-900/40 transform rotate-45"></div>
                  <div className="absolute top-4 right-4 w-4 h-px bg-blue-900/40 transform -rotate-45"></div>
                </motion.div>
              </div>

              {/* Jardim/Plantas */}
              <div className="absolute top-1/2 left-8 opacity-20">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.2, y: 0 }}
                  transition={{ duration: 2, delay: 1.2 }}
                  className="w-16 h-20 flex flex-col items-center justify-end"
                >
                  <div className="w-8 h-12 bg-blue-900/30 rounded-t-full"></div>
                  <div className="w-12 h-4 bg-blue-900/40 rounded-full"></div>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="w-2 h-2 bg-blue-900/50 rounded-full -mt-8"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Coração pulsante - amor pelo lar */}
              <div className="absolute bottom-32 right-32 opacity-25">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  transition={{ duration: 2, delay: 1.8 }}
                  className="w-20 h-20 border-2 border-blue-900/50 rounded-full backdrop-blur-sm bg-blue-900/10 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Heart className="w-10 h-10 text-white/60" />
                  </motion.div>
                </motion.div>
              </div>

              {/* WiFi doméstico avançado */}
              <div className="absolute bottom-16 right-16 opacity-25">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                  className="relative w-24 h-24"
                >
                  <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-900/60 rounded-full transform -translate-x-1/2"></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-0 left-1/2 w-8 h-8 border-2 border-blue-900/50 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 2.7, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-0 left-1/2 w-12 h-12 border-2 border-blue-900/40 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 2.9, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-0 left-1/2 w-16 h-16 border-2 border-blue-900/30 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 3.1, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-0 left-1/2 w-20 h-20 border-2 border-blue-900/20 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 3.3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-0 left-1/2 w-24 h-24 border-2 border-blue-900/15 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Escudo de proteção familiar */}
              <div className="absolute bottom-24 left-24 opacity-25">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.25, rotate: -6 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="w-22 h-22 border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/10 flex items-center justify-center relative"
                >
                  <Shield className="w-12 h-12 text-white/60" />
                  {/* Checkmark de segurança */}
                  <div className="absolute top-1 right-1 w-3 h-3 border-2 border-white/40 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  </div>
                </motion.div>
              </div>

              {/* Partículas de conforto flutuantes */}
              <div className="absolute top-1/4 left-1/3 opacity-15">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.15, y: 0 }}
                  transition={{ duration: 4, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="w-3 h-3 bg-blue-900/40 rounded-full"
                ></motion.div>
              </div>
              <div className="absolute top-1/3 right-1/3 opacity-15">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 0.15, y: 0 }}
                  transition={{ duration: 5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-2 h-2 bg-blue-900/50 rounded-full"
                ></motion.div>
              </div>
              <div className="absolute bottom-1/3 left-1/2 opacity-15">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.15, x: 0 }}
                  transition={{ duration: 6, delay: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-2 h-2 bg-blue-900/45 rounded-full"
                ></motion.div>
              </div>

              {/* Casa adicional menor */}
              <div className="absolute bottom-16 left-1/3 opacity-35">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.35, rotate: -8 }}
                  transition={{ duration: 2, delay: 2.5 }}
                  className="w-20 h-20 border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/15 flex items-center justify-center relative"
                >
                  <Home className="w-10 h-10 text-white/70" />
                  <div className="absolute -top-1 left-3 w-1 h-3 bg-white/30 rounded-t"></div>
                </motion.div>
              </div>

              {/* Smart TV/Entretenimento */}
              <div className="absolute top-1/2 right-1/3 opacity-35">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.35, scale: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  className="w-20 h-16 border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/15 flex items-center justify-center relative"
                >
                  <Monitor className="w-10 h-10 text-white/70" />
                  {/* Tela brilhando */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2, delay: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-2 bg-white/20 rounded"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Console de Games */}
              <div className="absolute bottom-1/4 right-1/4 opacity-25">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.25, rotate: 8 }}
                  transition={{ duration: 2, delay: 3.5 }}
                  className="w-16 h-12 border-2 border-white/40 rounded-lg backdrop-blur-sm bg-white/10 flex items-center justify-center relative"
                >
                  <div className="w-8 h-6 bg-white/50 rounded"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white/60 rounded-full"></div>
                </motion.div>
              </div>

              {/* Tablet/Dispositivo Móvel */}
              <div className="absolute top-1/3 left-1/4 opacity-30">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.3, y: 0 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="w-12 h-18 border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/15 flex items-center justify-center"
                >
                  <div className="w-6 h-10 bg-white/40 rounded"></div>
                </motion.div>
              </div>
            </>
          )
        };
      case 'corporate':
        return {
          background: 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900',
          title: 'Internet Corporativa de Alta Performance',
          subtitle: 'Soluções empresariais com backup, monitoramento 24/7 e gerente dedicado',
          decorativeElements: (
            <>
              {/* Elementos corporativos elegantes */}
              <div className="absolute top-20 left-20 opacity-40">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.4, rotate: 15 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-32 h-32 border-2 border-[#FFDD00]/60 rounded-lg backdrop-blur-sm bg-[#FFDD00]/15 flex items-center justify-center shadow-lg relative"
                >
                  <Building2 className="w-18 h-18 text-[#FFDD00]/80" />
                  {/* Janelas do prédio */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFDD00]/40 rounded-sm"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#FFDD00]/40 rounded-sm"></div>
                  <div className="absolute bottom-6 left-2 w-2 h-2 bg-[#FFDD00]/40 rounded-sm"></div>
                  <div className="absolute bottom-6 right-2 w-2 h-2 bg-[#FFDD00]/40 rounded-sm"></div>
                </motion.div>
              </div>

              {/* Gráfico de crescimento */}
              <div className="absolute top-32 right-28 opacity-15">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="w-20 h-20 border-2 border-[#FFDD00]/40 rounded-lg backdrop-blur-sm bg-[#FFDD00]/5 flex items-center justify-center"
                >
                  <div className="flex items-end gap-1">
                    <div className="w-2 h-6 bg-[#FFDD00]/50 rounded"></div>
                    <div className="w-2 h-8 bg-[#FFDD00]/60 rounded"></div>
                    <div className="w-2 h-10 bg-[#FFDD00]/70 rounded"></div>
                    <div className="w-2 h-12 bg-[#FFDD00]/80 rounded"></div>
                  </div>
                </motion.div>
              </div>

              {/* Rede corporativa */}
              <div className="absolute bottom-20 right-20 opacity-15">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                  className="relative w-24 h-24"
                >
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#FFDD00]/60 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FFDD00]/50 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FFDD00]/50 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#FFDD00]/70 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  {/* Linhas conectando */}
                  <div className="absolute top-2 left-1/2 w-px h-8 bg-[#FFDD00]/40 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-px bg-[#FFDD00]/40 transform rotate-45 origin-left"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-px bg-[#FFDD00]/40 transform -rotate-45 origin-right"></div>
                </motion.div>
              </div>

              {/* Escudo de segurança corporativa */}
              <div className="absolute bottom-28 left-28 opacity-15">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.15, rotate: -8 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="w-20 h-20 border-2 border-[#FFDD00]/40 rounded-lg backdrop-blur-sm bg-[#FFDD00]/5 flex items-center justify-center"
                >
                  <Shield className="w-10 h-10 text-[#FFDD00]/60" />
                </motion.div>
              </div>

              {/* Prédio adicional */}
              <div className="absolute top-1/2 left-1/3 opacity-30">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  className="w-24 h-24 border-2 border-[#FFDD00]/50 rounded-lg backdrop-blur-sm bg-[#FFDD00]/10 flex items-center justify-center relative"
                >
                  <Building2 className="w-12 h-12 text-[#FFDD00]/70" />
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#FFDD00]/30 rounded-sm"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-[#FFDD00]/30 rounded-sm"></div>
                  <div className="absolute bottom-4 left-1 w-2 h-2 bg-[#FFDD00]/30 rounded-sm"></div>
                </motion.div>
              </div>

              {/* Laptop/Workstation */}
              <div className="absolute bottom-20 left-1/2 opacity-30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.3, y: 0 }}
                  transition={{ duration: 2, delay: 3.5 }}
                  className="w-24 h-16 border-2 border-[#FFDD00]/50 rounded-lg backdrop-blur-sm bg-[#FFDD00]/10 flex items-center justify-center relative"
                >
                  <Laptop className="w-12 h-12 text-[#FFDD00]/70" />
                  {/* Tela brilhando */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 3, delay: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-2 left-1/2 w-8 h-6 bg-[#FFDD00]/20 rounded transform -translate-x-1/2"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Servidor/Data Center */}
              <div className="absolute top-1/3 right-1/4 opacity-25">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="w-16 h-20 border-2 border-[#FFDD00]/40 rounded-lg backdrop-blur-sm bg-[#FFDD00]/5 flex flex-col items-center justify-center relative"
                >
                  <div className="w-10 h-3 bg-[#FFDD00]/50 rounded mb-1"></div>
                  <div className="w-10 h-3 bg-[#FFDD00]/40 rounded mb-1"></div>
                  <div className="w-10 h-3 bg-[#FFDD00]/50 rounded mb-1"></div>
                  <div className="w-10 h-3 bg-[#FFDD00]/40 rounded"></div>
                  {/* LEDs piscando */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-2 right-1 w-1 h-1 bg-[#FFDD00]/80 rounded-full"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Dashboard/Analytics */}
              <div className="absolute bottom-1/3 right-1/3 opacity-20">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.2, rotate: -5 }}
                  transition={{ duration: 2, delay: 4.5 }}
                  className="w-20 h-16 border-2 border-[#FFDD00]/30 rounded-lg backdrop-blur-sm bg-[#FFDD00]/5 flex items-center justify-center"
                >
                  <BarChart3 className="w-10 h-10 text-[#FFDD00]/60" />
                </motion.div>
              </div>
            </>
          )
        };
      case 'mobile':
        return {
          background: 'bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800',
          title: 'YellowMóvel - Liberdade Total',
          subtitle: 'Conectividade 5G, apps premium inclusos e roaming internacional sem limites',
          decorativeElements: (
            <>
              {/* Smartphone central */}
              <div className="absolute top-16 left-24 opacity-45">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.45, y: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-20 h-32 border-2 border-white/60 rounded-xl backdrop-blur-sm bg-white/15 flex flex-col items-center justify-center shadow-lg"
                >
                  <Smartphone className="w-12 h-12 text-white/80" />
                  <div className="w-8 h-1 bg-white/40 rounded mt-2"></div>
                </motion.div>
              </div>

              {/* Torres de sinal */}
              <div className="absolute top-24 right-24 opacity-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="w-20 h-20 flex items-end justify-center gap-1"
                >
                  <div className="w-2 h-8 bg-white/50 rounded"></div>
                  <div className="w-2 h-12 bg-white/60 rounded"></div>
                  <div className="w-2 h-16 bg-white/70 rounded"></div>
                  <div className="w-2 h-12 bg-white/60 rounded"></div>
                  <div className="w-2 h-8 bg-white/50 rounded"></div>
                </motion.div>
              </div>

              {/* Ondas de sinal móvel */}
              <div className="absolute bottom-20 right-20 opacity-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                  className="relative w-24 h-24"
                >
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-8 h-8 border-2 border-white/50 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-12 h-12 border-2 border-white/40 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-16 h-16 border-2 border-white/30 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-24 h-24 border-2 border-white/10 rounded-full transform -translate-x-1/2"></div>
                </motion.div>
              </div>

              {/* Localização/GPS */}
              <div className="absolute bottom-32 left-32 opacity-20">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.2, rotate: -10 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="w-18 h-18 border-2 border-white/40 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute w-6 h-6 border-2 border-white/40 rounded-full"></div>
                </motion.div>
              </div>

              {/* Partículas flutuantes móveis */}
              <div className="absolute top-1/3 left-1/2 opacity-15">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.15, y: 0 }}
                  transition={{ duration: 3, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="w-2 h-2 bg-white/50 rounded-full"
                ></motion.div>
              </div>
              <div className="absolute top-1/2 right-1/3 opacity-15">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 0.15, y: 0 }}
                  transition={{ duration: 4, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-3 h-3 bg-white/40 rounded-full"
                ></motion.div>
              </div>

              {/* Torre de celular adicional */}
              <div className="absolute bottom-24 left-1/4 opacity-35">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.35, scale: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  className="w-16 h-24 flex flex-col items-center justify-end"
                >
                  <div className="w-1 h-16 bg-white/50 rounded"></div>
                  <div className="w-8 h-2 bg-white/40 rounded"></div>
                  {/* Ondas de sinal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1, delay: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-2 left-1/2 w-6 h-6 border border-white/30 rounded-full transform -translate-x-1/2"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Smartphone adicional */}
              <div className="absolute top-1/3 right-1/4 opacity-30">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.3, rotate: 15 }}
                  transition={{ duration: 2, delay: 3.5 }}
                  className="w-12 h-20 border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/10 flex items-center justify-center"
                >
                  <div className="w-6 h-10 bg-white/30 rounded-md"></div>
                </motion.div>
              </div>

              {/* Símbolo 5G */}
              <div className="absolute bottom-1/3 right-1/3 opacity-40">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="w-16 h-16 border-2 border-white/60 rounded-lg backdrop-blur-sm bg-white/15 flex items-center justify-center"
                >
                  <span className="text-white/80 font-bold text-sm">5G</span>
                </motion.div>
              </div>

              {/* Headphones/Apps Premium */}
              <div className="absolute top-1/4 right-1/4 opacity-35">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.35, rotate: -12 }}
                  transition={{ duration: 2, delay: 4.5 }}
                  className="w-18 h-18 border-2 border-white/50 rounded-full backdrop-blur-sm bg-white/10 flex items-center justify-center"
                >
                  <Headphones className="w-10 h-10 text-white/70" />
                </motion.div>
              </div>

              {/* Globe/Roaming Internacional */}
              <div className="absolute bottom-1/4 left-1/4 opacity-30">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 2, delay: 5 }}
                  className="w-20 h-20 border-2 border-white/40 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center relative"
                >
                  <Globe className="w-12 h-12 text-white/60" />
                  {/* Órbitas */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border border-white/20 rounded-full"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Hotspot WiFi */}
              <div className="absolute top-1/2 left-1/3 opacity-25">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.25, y: 0 }}
                  transition={{ duration: 2, delay: 5.5 }}
                  className="relative w-16 h-16"
                >
                  <Wifi className="w-8 h-8 text-white/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 6, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 6.2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  ></motion.div>
                </motion.div>
              </div>
            </>
          )
        };
      default:
        return {
          background: 'bg-blue-900',
          title: 'Internet Fibra Ótica',
          subtitle: 'Planos com tecnologia de ponta e suporte especializado para sua melhor experiência',
          decorativeElements: null
        };
    }
  };

  const themeConfig = getThemeConfig(selectedPlanType);

  return (
    <section id="planos" className={`w-full ${themeConfig.background} py-16 md:py-24 relative transition-all duration-700 ease-in-out overflow-hidden`}>
      {/* Overlay gradiente para profundidade */}
      {selectedPlanType === 'residential' && (
        <div className="absolute inset-0 bg-gradient-to-t from-orange-800/20 via-transparent to-yellow-300/10"></div>
      )}
      {selectedPlanType === 'corporate' && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-blue-800/10"></div>
      )}
      {selectedPlanType === 'mobile' && (
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 via-transparent to-cyan-500/10"></div>
      )}

      {/* Elementos decorativos de fundo */}
      {themeConfig.decorativeElements}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <motion.h2
            key={selectedPlanType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
              selectedPlanType === 'residential' ? 'text-white' :
              selectedPlanType === 'corporate' ? 'text-white' :
              selectedPlanType === 'mobile' ? 'text-white' : 'text-white'
            }`}
          >
            {themeConfig.title}
          </motion.h2>
          <motion.p
            key={`${selectedPlanType}-subtitle`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`max-w-2xl mx-auto text-sm sm:text-base ${
              selectedPlanType === 'residential' ? 'text-white/90' :
              selectedPlanType === 'corporate' ? 'text-gray-300' :
              selectedPlanType === 'mobile' ? 'text-white/90' : 'text-gray-300'
            }`}
          >
            {themeConfig.subtitle}
          </motion.p>
          
          {/* Plan Type Selector */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {Object.entries(planTypeLabels).map(([type, config]) => {
              const Icon = config.icon;
              const isActive = selectedPlanType === type;
              const getButtonStyle = () => {
                if (isActive) {
                  switch (selectedPlanType) {
                    case 'residential':
                      return 'bg-white text-orange-600 shadow-lg scale-105 border-2 border-white';
                    case 'corporate':
                      return 'bg-[#FFDD00] text-orange-600 shadow-lg scale-105 border-2 border-[#FFDD00]';
                    case 'mobile':
                      return 'bg-white text-purple-600 shadow-lg scale-105 border-2 border-white';
                    default:
                      return 'bg-[#FFDD00] text-orange-600 shadow-lg scale-105 border-2 border-[#FFDD00]';
                  }
                }

                switch (selectedPlanType) {
                  case 'residential':
                    return 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/30 backdrop-blur-sm font-medium';
                  case 'corporate':
                    return 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 backdrop-blur-sm font-medium';
                  case 'mobile':
                    return 'bg-white/15 text-white hover:bg-white/25 border-2 border-white/25 backdrop-blur-sm font-medium';
                  default:
                    return 'bg-blue-800/50 text-white hover:bg-blue-700/50 border-2 border-transparent';
                }
              };

              return (
                <motion.button
                  key={type}
                  onClick={() => handlePlanTypeChange(type as PlanType)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${getButtonStyle()}`}
                >
                  <Icon className="w-4 h-4" />
                  {config.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          key={selectedPlanType}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="plan-card-grid mb-12 md:mb-16 justify-items-center"
        >
          {currentPlans.map((plan, index) => (
            <motion.div
              key={`${selectedPlanType}-${plan.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex w-full h-full max-w-md"
            >
              <PlanCard
                {...plan}
                variant={plan.variant}
                planType={selectedPlanType}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Features específicas por tipo de plano */}
        <motion.div
          key={`${selectedPlanType}-features`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className={`mb-4 sm:mb-6 text-sm sm:text-base font-medium ${
            selectedPlanType === 'residential' ? 'text-white/90' :
            selectedPlanType === 'corporate' ? 'text-gray-300' :
            selectedPlanType === 'mobile' ? 'text-white/90' : 'text-gray-300'
          }`}>
            {selectedPlanType === 'residential' ? 'Todos os planos incluem:' :
             selectedPlanType === 'corporate' ? 'Planos empresariais incluem:' :
             selectedPlanType === 'mobile' ? 'Todos os planos YellowMóvel incluem:' : 'Todos os planos incluem:'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {(selectedPlanType === 'residential' ? residentialFeatures :
              selectedPlanType === 'corporate' ? corporateFeatures :
              selectedPlanType === 'mobile' ? mobileFeatures : residentialFeatures
            ).map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className={`backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full flex items-center gap-2 border transition-all duration-300 ${
                  selectedPlanType === 'residential' ? 'bg-white/20 border-white/30 hover:bg-white/30' :
                  selectedPlanType === 'corporate' ? 'bg-white/10 border-white/20 hover:bg-white/20' :
                  selectedPlanType === 'mobile' ? 'bg-white/15 border-white/25 hover:bg-white/25' : 'bg-white/20 border-white/30 hover:bg-white/30'
                }`}
              >
                <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  selectedPlanType === 'residential' ? 'text-white' :
                  selectedPlanType === 'corporate' ? 'text-[#FFDD00]' :
                  selectedPlanType === 'mobile' ? 'text-white' : 'text-white'
                }`} />
                <span className={`text-xs sm:text-sm font-medium ${
                  selectedPlanType === 'residential' ? 'text-white' :
                  selectedPlanType === 'corporate' ? 'text-white' :
                  selectedPlanType === 'mobile' ? 'text-white' : 'text-white'
                }`}>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
} 