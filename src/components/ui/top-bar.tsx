"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Clock, User, Menu, X, ChevronDown, Wifi, Router, Building2, Smartphone, Briefcase, Zap, MessageCircle, Shield, Activity, Timer, Network } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { companyConfig } from "@/lib/company-config";

type PlanCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
  consultOnly?: boolean;
};

type PlanCards = {
  residential: PlanCard[];
  corporate: PlanCard[];
  mobile: PlanCard[];
};

export function TopBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planType = searchParams.get("type");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Fecha o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Para sua casa", type: "residential", icon: Wifi },
    { name: "Para sua empresa", type: "corporate", icon: Building2 },
    { name: "YellowMóvel", type: "mobile", icon: Smartphone, isDropdown: true },
    { name: "Área do Cliente", type: "client-area", icon: User, isSpecial: true },
    { name: "Status da Rede", type: "status", icon: Activity, isSpecial: true }
  ];

  const isActive = (type: string) => {
    if (!planType && type === "residential") return true;
    return planType === type;
  };

  const handleMenuClick = (type: string) => {
    if (type === "client-area") {
      router.push("/login");
    } else if (type === "status") {
      router.push("/status");
    } else {
      router.push(`/?type=${type}`, { scroll: false });
      setTimeout(() => {
        const plansSection = document.getElementById("planos");
        if (plansSection) {
          plansSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const planCards: PlanCards = {
    residential: [
      {
        title: "Internet Fibra",
        description: "A partir de R$ 99,90/mês",
        icon: Wifi,
        highlight: "350 a 1 GIGA"
      }
    ],
    corporate: [
      {
        title: "Internet Empresarial",
        description: "Planos de 100 MEGA até 650 MEGA",
        icon: Building2,
        highlight: "Empresas"
      }
    ],
    mobile: [
      {
        title: "Planos Móveis",
        description: "A partir de R$ 30,33/mês",
        icon: Smartphone,
        highlight: "5GB a 45GB"
      },
      {
        title: "Planos Móveis Corporativos",
        description: "Gestão online e suporte prioritário",
        icon: Briefcase,
        highlight: "Empresas",
        consultOnly: true
      }
    ]
  };

  // Função para abrir WhatsApp
  const openWhatsApp = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${companyConfig.phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="relative z-50">
      {/* Top Info Bar - Maior e mais visível */}
      <div className="w-full bg-blue-900 py-2 md:py-3 text-white relative overflow-hidden">
        {/* Elementos decorativos de conectividade */}
        <div className="absolute inset-0 bg-network-grid opacity-10"></div>
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFDD00] to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-start">
              <Link
                href={`mailto:${companyConfig.email}`}
                className="flex items-center gap-1 sm:gap-2 hover:text-[#FFDD00] transition-colors text-[11px] sm:text-sm md:text-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="hidden xs:inline">{companyConfig.email}</span>
                <span className="xs:hidden">Email</span>
              </Link>
              <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm md:text-base">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Segunda a Sábado:</span>
                <span className="hidden xs:inline sm:hidden">Seg-Sáb:</span>
                <span>08h-19h</span>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 mt-1 sm:mt-0">
<Link
  href={companyConfig.customerPortal}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 text-[11px] sm:text-sm md:text-base hover:text-[#FFDD00] transition-colors"
>
  <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
  <span>Área do Cliente</span>
</Link>

              {/* Status de velocidade */}
              <div className="hidden sm:flex items-center gap-1 sm:gap-2 text-sm bg-blue-800/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                <Zap className="w-3 h-3 text-[#FFDD00]" />
                <span className="text-[10px] sm:text-xs">Velocidade Máxima</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 w-full bg-[#FFDD00] py-2 md:py-4 px-3 sm:px-4 md:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/"
              className="relative w-20 sm:w-24 md:w-32 h-8 md:h-10 z-10"
            >
              <Image
                src="/Ativo-1-2-q6pcokh28i3u0bae6epza1auykycrpibbn01nguonq.png"
                alt="Yellow Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {menuItems.slice(0, 3).map((item) => (
                <div key={item.name} className="relative dropdown-container group">
                  <button
                    onClick={() => handleMenuClick(item.type)}
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isActive(item.type)
                        ? "text-blue-900"
                        : "text-blue-900/80 hover:text-blue-900"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Content */}
                  <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full right-0 mt-2 w-[480px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-lg py-3 border border-gray-100 transition-all duration-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Escolha o melhor plano para você</p>
                    </div>
                    <div className="p-3 grid grid-cols-1 gap-3 max-h-[calc(100vh-16rem)] overflow-y-auto">
                      {item.type === "corporate" ? (
                        <>
                          {/* Planos Corporativos */}
                          {planCards[item.type as keyof typeof planCards]?.map((card, index) => (
                            <button
                              key={card.title}
                              onClick={() => handleMenuClick(item.type)}
                              className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-all group relative flex items-start gap-3 border border-transparent hover:border-gray-200"
                            >
                              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-900/10 rounded-lg flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                                <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-900" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-medium text-gray-900 text-sm sm:text-base">{card.title}</span>
                                  {card.highlight && (
                                    <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium truncate">
                                      {card.highlight}
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs sm:text-sm text-gray-500 block mt-0.5 line-clamp-2">{card.description}</span>
                              </div>
                            </button>
                          ))}
                          {/* Link Dedicado */}
                          <button
                            onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre as soluções de Link Dedicado para minha empresa.")}
                            className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-all group relative flex items-start gap-3 border border-transparent hover:border-gray-200"
                          >
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-900/10 rounded-lg flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                              <Network className="w-5 sm:w-6 h-5 sm:h-6 text-blue-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-gray-900 text-sm sm:text-base">Link Dedicado</span>
                                <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium truncate">
                                  Premium
                                </span>
                              </div>
                              <span className="text-xs sm:text-sm text-gray-500 block mt-0.5 line-clamp-2">Soluções corporativas de alta performance</span>
                              <div className="flex items-center gap-1 mt-2 text-blue-900 text-xs sm:text-sm">
                                <span>Consultar valores</span>
                                <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                              </div>
                            </div>
                          </button>
                        </>
                      ) : (
                        planCards[item.type as keyof typeof planCards]?.map((card, index) => (
                          <button
                            key={card.title}
                            onClick={() => {
                              if (card.consultOnly) {
                                openWhatsApp("Olá! Gostaria de saber mais sobre os planos móveis corporativos.");
                              } else {
                                handleMenuClick(item.type);
                              }
                            }}
                            className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-all group relative flex items-start gap-3 border border-transparent hover:border-gray-200"
                          >
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-900/10 rounded-lg flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                              <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-gray-900 text-sm sm:text-base">{card.title}</span>
                                {card.highlight && (
                                  <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium truncate">
                                    {card.highlight}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs sm:text-sm text-gray-500 block mt-0.5 line-clamp-2">{card.description}</span>
                              {card.consultOnly && (
                                <div className="flex items-center gap-1 mt-2 text-blue-900 text-xs sm:text-sm">
                                  <span>Consultar valores</span>
                                  <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                              )}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 hover:bg-blue-900/5 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Versão melhorada */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-md bg-white transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
            <Link href="/" className="relative w-20 sm:w-24 h-8">
              <Image
                src="/Ativo-1-2-q6pcokh28i3u0bae6epza1auykycrpibbn01nguonq.png"
                alt="Yellow Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-56px)] sm:h-[calc(100%-64px)]">
            <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
              {/* Main Menu Items */}
              {menuItems.slice(0, 3).map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center gap-2 px-2">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-2 space-y-2">
                    {item.type === "mobile" ? (
                      // YellowMóvel Cards
                      planCards.mobile.map((card) => (
                        <button
                          key={card.title}
                          onClick={() => card.title === "Planos Móveis Corporativos" 
                            ? openWhatsApp("Olá! Gostaria de saber mais sobre os planos móveis corporativos.") 
                            : handleMenuClick("mobile")}
                          className="w-full text-left p-3 rounded-xl hover:bg-white transition-all flex items-start gap-3"
                        >
                          <div className="w-10 h-10 bg-blue-900/10 rounded-lg flex items-center justify-center">
                            <card.icon className="w-5 h-5 text-blue-900" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-gray-900">{card.title}</span>
                              {card.highlight && (
                                <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium">
                                  {card.highlight}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-500 block mt-0.5">{card.description}</span>
                            {card.title === "Planos Móveis Corporativos" && (
                              <div className="flex items-center gap-1 mt-2 text-blue-900 text-sm">
                                <span>Consultar valores</span>
                                <MessageCircle className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))
                    ) : item.type === "corporate" ? (
                      // Corporate Cards + Link Dedicado
                      <>
                        {planCards.corporate?.map((card) => (
                          <button
                            key={card.title}
                            onClick={() => handleMenuClick(item.type)}
                            className="w-full text-left p-3 rounded-xl hover:bg-white transition-all flex items-start gap-3"
                          >
                            <div className="w-10 h-10 bg-blue-900/10 rounded-lg flex items-center justify-center">
                              <card.icon className="w-5 h-5 text-blue-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-gray-900">{card.title}</span>
                                {card.highlight && (
                                  <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium">
                                    {card.highlight}
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-gray-500 block mt-0.5">{card.description}</span>
                            </div>
                          </button>
                        ))}
                        <div className="p-3 space-y-3">
                          <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                            <Network className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="text-sm font-medium text-blue-900">Link Dedicado</h4>
                              <p className="text-xs text-blue-700 mt-1">Soluções corporativas de alta performance</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded">Full-Duplex</span>
                                <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded">SLA 99.9%</span>
                                <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded">24/7</span>
                              </div>
                              <button
                                onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre as soluções de Link Dedicado para minha empresa.")}
                                className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-900 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
                              >
                                Consultar valores
                                <MessageCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Residential Cards
                      planCards.residential?.map((card) => (
                        <button
                          key={card.title}
                          onClick={() => handleMenuClick(item.type)}
                          className="w-full text-left p-3 rounded-xl hover:bg-white transition-all flex items-start gap-3"
                        >
                          <div className="w-10 h-10 bg-blue-900/10 rounded-lg flex items-center justify-center">
                            <card.icon className="w-5 h-5 text-blue-900" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-gray-900">{card.title}</span>
                              {card.highlight && (
                                <span className="px-2 py-0.5 rounded-full bg-[#FFDD00] text-blue-900 text-xs font-medium">
                                  {card.highlight}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-500 block mt-0.5">{card.description}</span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="mt-auto p-3 sm:p-4 border-t border-gray-100 bg-gray-50">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-2">
                  <Link
                    href={`mailto:${companyConfig.email}`}
                    className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    {companyConfig.email}
                  </Link>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    Seg a Sáb: 08h às 19h
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Link
                    href="/status"
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Status
                  </Link>
                  <Link 
                    href="/login"
                    className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-[#FFDD00] py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                  >
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    Área do Cliente
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 