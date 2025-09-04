"use client";

import { Check, Zap, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { companyConfig } from "@/lib/company-config";

export interface TextFeature {
  type: 'text';
  text: string;
}

export interface TitleFeature {
  type: 'title';
  title: string;
  description: string;
}

export type PlanFeature = TextFeature | TitleFeature;

export interface PlanCardProps {
  title: string;
  speed: string;
  price?: number;
  nextPrice?: number;
  features: PlanFeature[];
  variant?: "default" | "highlight" | "dark" | "residential";
  id?: string;
  planType?: string;
}

export function PlanCard({
  title,
  speed,
  price,
  nextPrice,
  features,
  variant = "default",
  id,
  planType
}: PlanCardProps) {
  // Configurações de estilo baseadas no tipo de plano e variante
  const getCardStyles = () => {
    if (planType === "residential") {
      return {
        bgColor: variant === "highlight"
          ? "bg-white border-2 border-[#FFDD00] shadow-[0_0_20px_rgba(255,221,0,0.3)]"
          : variant === "dark"
            ? "bg-blue-900 border-2 border-[#FFDD00]/50"
            : "bg-white border-2 border-blue-900/20 hover:border-[#FFDD00]/50 hover:shadow-[0_0_15px_rgba(255,221,0,0.2)]",
        textColor: variant === "dark" ? "text-white" : "text-blue-900",
        checkColor: variant === "dark" ? "text-[#FFDD00]" : "text-blue-900",
        badgeColor: variant === "dark" ? "bg-[#FFDD00]/20" : "bg-[#FFDD00]/10"
      };
    }

    // Estilo padrão para outros tipos
    return {
      bgColor: variant === "highlight"
        ? "bg-[#FFDD00]"
        : variant === "dark"
          ? "bg-blue-900"
          : "bg-white",
      textColor: variant === "dark" ? "text-white" : "text-blue-900",
      checkColor: variant === "dark" ? "text-[#FFDD00]" : "text-blue-900",
      badgeColor: variant === "dark" ? "bg-[#FFDD00]/20" : "bg-blue-900/10"
    };
  };

  const { bgColor, textColor, checkColor, badgeColor } = getCardStyles();

  const handleAssinar = () => {
    let message = `Olá! Gostaria de assinar o plano ${title} de ${speed}`;
    if (price) {
      message += ` por R$ ${price.toFixed(2)}`;
    }
    
    // Mensagem especial para Link Dedicado
    if (id?.startsWith('dedicated-')) {
      message = `Olá! Gostaria de saber mais sobre o Link Dedicado de ${speed}. Preciso de uma solução corporativa de alta performance.`;
    }
    
    const whatsappUrl = `https://wa.me/${companyConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const popularBadgeVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  // Determinar ícone baseado no plano
  const getPlanIcon = () => {
    if (title.includes("Móvel")) {
      return "mobile";
    } else if (title.includes("Empresarial") || id?.startsWith('corporate-')) {
      return "corporate";
    } else if (id?.startsWith('dedicated-')) {
      return "dedicated";
    } else {
      return "residential";
    }
  };

  const planIcon = getPlanIcon();

  return (
    <motion.div 
      variants={cardVariants}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative w-full rounded-2xl ${bgColor} shadow-xl transition-all duration-300 hover:shadow-2xl mx-auto h-full flex flex-col min-h-[600px] max-w-md`}
    >
      {variant === "highlight" && (
        <motion.div
          variants={popularBadgeVariants}
          initial="initial"
          animate="animate"
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-10 ${
            planType === "residential"
              ? "bg-[#FFDD00] text-blue-900 shadow-[0_0_15px_rgba(255,221,0,0.5)]"
              : "bg-blue-900 text-[#FFDD00]"
          }`}
        >
          Mais Popular
        </motion.div>
      )}
      
      <div className={`p-6 flex flex-col gap-6 relative overflow-hidden h-full ${variant === "highlight" ? "pt-8" : ""}`}>
        {/* Efeito de sinal de Internet - reduzido */}
        <div className="absolute -right-4 -top-4 opacity-5">
          <div className="w-24 h-24 relative">
            <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full border-2 border-current"></div>
            <div className="absolute right-2 bottom-2 w-12 h-12 rounded-full border-2 border-current"></div>
            <div className="absolute right-4 bottom-4 w-18 h-18 rounded-full border-2 border-current"></div>
          </div>
        </div>
        
        {/* Cabeçalho do card com ícone e tipo de plano */}
        <div className="flex items-center gap-3">
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${badgeColor}`}>
            {planIcon === "residential" && <Wifi className={`w-5 h-5 ${checkColor}`} />}
            {planIcon === "corporate" && <Wifi className={`w-5 h-5 ${checkColor}`} />}
            {planIcon === "dedicated" && <Zap className={`w-5 h-5 ${checkColor}`} />}
            {planIcon === "mobile" && <Wifi className={`w-5 h-5 ${checkColor}`} />}
          </div>
          <div className="inline-block">
            <span className={`text-sm font-semibold ${textColor} px-3 py-1 rounded-full ${badgeColor}`}>
              {title}
            </span>
          </div>
        </div>

        {/* Velocidade do plano */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${textColor}`}>{speed}</span>
            <span className={`text-sm ${textColor} opacity-70`}>de internet</span>
          </div>
        </div>

        {/* Price Section */}
        {price && (
          <div className="space-y-3">
            <div className="flex items-baseline gap-1">
              <span className={`text-xl ${textColor}`}>R$</span>
              <span className={`text-4xl font-bold tracking-tight ${textColor}`}>
                {price.toString().split(".")[0]}
              </span>
              <div className="flex flex-col items-start leading-none mt-1">
                <span className={`text-xl ${textColor}`}>,{price.toFixed(2).split(".")[1]}</span>
                {!id?.startsWith('corporate-') && (
                  <span className={`text-xs ${textColor} opacity-70`}>por 3 meses</span>
                )}
              </div>
            </div>
            {nextPrice && nextPrice !== price && !id?.startsWith('corporate-') && (
              <p className={`text-xs ${textColor} opacity-70`}>
                A partir do 4º mês R$ {nextPrice.toFixed(2).replace('.', ',')} por mês
              </p>
            )}
            
            {/* Indicador de velocidade */}
            <div className="w-full">
              <div className={`velocity-meter rounded-full ${variant === "highlight" ? "bg-blue-900/20" : variant === "dark" ? "bg-white/20" : "bg-blue-900/10"}`}></div>
            </div>
          </div>
        )}

        {/* Features List */}
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex flex-col gap-1"
            >
              {feature.type === 'title' ? (
                <>
                  <span className="text-sm font-bold text-red-500">
                    {feature.title}
                  </span>
                  <p className="text-xs text-blue-900">
                    {feature.description}
                  </p>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${badgeColor} flex-shrink-0`}>
                    <Check className={`w-3 h-3 ${checkColor}`} />
                  </div>
                  <span className={`text-sm font-medium ${textColor} leading-relaxed`}>
                    {feature.text}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto pt-4">
          <Button 
            onClick={handleAssinar}
            className="w-full shadow-md hover:shadow-lg transition-all duration-300 py-3 text-base font-semibold"
            variant="secondary"
            size="lg"
          >
            Assinar Agora
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 