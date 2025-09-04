"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wifi, ArrowLeft, Router, SignalHigh } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/lib/company-config";

export default function NotFound() {
  useEffect(() => {
    // Qualquer efeito necessário
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFDD00] to-[#FFE45C] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-blue-900/5 rounded-full blur-3xl" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left space-y-6"
          >
            <div className="relative w-32 h-10 mx-auto md:mx-0">
              <Image
                src="/Ativo-1-2-q6pcokh28i3u0bae6epza1auykycrpibbn01nguonq.png"
                alt="Yellow Logo"
                fill
                className="object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Ops! Sinal perdido...
            </h1>
            
            <p className="text-lg md:text-xl text-blue-900/80 max-w-xl">
              Parece que você não encontrou a página que procurava, mas não se preocupe!
              Com a Yellow, você nunca perde a conexão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-900 text-[#FFDD00] hover:bg-blue-800 min-w-[200px] h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar para Home
                </Button>
              </Link>
              <Link href="/?scrollToPlans=true">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-[#FFDD00] min-w-[200px] h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Ver Planos
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start text-blue-900/60 text-sm">
              <Link
                href={`mailto:${companyConfig.email}`}
                className="flex items-center gap-2 hover:text-blue-900 transition-colors"
              >
                <Wifi className="w-4 h-4" />
                {companyConfig.email}
              </Link>
              <span>•</span>
              <span className="flex items-center gap-2">
                <SignalHigh className="w-4 h-4" />
                {companyConfig.phone}
              </span>
            </div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Router Animation */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Router className="w-32 h-32 text-blue-900" />
              </motion.div>

              {/* Signal Waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.5, 2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-900/20 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 