'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, AlertCircle, Phone, Mail } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { companyConfig } from "@/lib/company-config";

export function StatusContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Status Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6 mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-full mb-4">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Todos os sistemas operacionais
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          No momento não existem manutenções programadas ou incidentes reportados.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-blue-50 p-8 sm:p-12 rounded-3xl">
          <div className="flex items-start gap-4 text-blue-900 mb-6">
            <AlertCircle className="w-6 h-6 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Está tendo problemas?</h2>
              <p className="text-blue-800">
                Se você está enfrentando dificuldades com sua conexão, nossa equipe está pronta para ajudar.
                Entre em contato através de um dos canais abaixo:
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`tel:${companyConfig.phoneNumber}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl text-gray-600 hover:text-blue-600 transition-colors flex-1 group"
              >
                <Phone className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{companyConfig.phone}</span>
              </Link>
              <Link
                href={`mailto:${companyConfig.email}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl text-gray-600 hover:text-blue-600 transition-colors flex-1 group"
              >
                <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{companyConfig.email}</span>
              </Link>
            </div>

            <WhatsAppButton 
              variant="primary"
              className="w-full h-14 text-base shadow-lg bg-[#FFDD00] hover:bg-[#FFE45C] text-blue-900"
            />
          </div>
        </div>
      </motion.div>

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
        >
          <ArrowRight className="w-5 h-5 transform rotate-180 transition-transform group-hover:-translate-x-1" />
          Voltar para a página inicial
        </Link>
      </motion.div>
    </div>
  );
} 