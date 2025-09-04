"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Clock, ArrowRight, Wifi, Zap, Globe, Shield } from "lucide-react";
import { companyConfig } from "@/lib/company-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: companyConfig.social.instagram
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: companyConfig.social.facebook
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: companyConfig.social.linkedin
    }
  ];

  const quickLinks = [
{ name: "Central de Ajuda", href: `https://api.whatsapp.com/send/?phone=${companyConfig.phoneNumber}&text&type=phone_number&app_absent=0` },

    { name: "Contrato", href: "/contrato" },
    { name: "Suporte Técnico", href: "/suporte-tecnico" },
    { name: "Planos IP Empresariais", href: "/planos-empresariais" },
    { name: "Produtos para Eventos", href: "/produtos-eventos" }
  ];

  return (
    <footer className="relative w-full bg-blue-900 text-white overflow-hidden">
      {/* Elementos decorativos de internet */}
      <div className="absolute inset-0 bg-network-grid opacity-10"></div>
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFDD00] to-transparent"></div>
      
      {/* Linhas de dados animadas */}
      <div className="absolute left-0 top-1/3 w-full h-8 data-flow opacity-20"></div>
      <div className="absolute right-0 bottom-1/3 w-full h-8 data-flow opacity-20" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 py-10 sm:py-12 lg:py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-6"
          >
            <div className="relative w-28 sm:w-32 h-10 sm:h-12 data-flow">
              <Image
                src="/Ativo-1-2-q6pcokh28i3u0bae6epza1auykycrpibbn01nguonq.png"
                alt="Yellow Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="text-[#FFDD00] shrink-0 mt-0.5" />
                <p>{companyConfig.address.full}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} className="text-[#FFDD00]" />
                <p>{companyConfig.phone}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail size={16} className="text-[#FFDD00]" />
                <p>{companyConfig.email}</p>
              </div>
            </div>
            
            {/* Badges de tecnologia */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <div className="flex items-center gap-1 bg-blue-800/50 rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                <Wifi size={10} className="text-[#FFDD00]" />
                <span className="text-[10px] sm:text-xs text-white">Fibra</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-800/50 rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                <Zap size={10} className="text-[#FFDD00]" />
                <span className="text-[10px] sm:text-xs text-white">Rápida</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-800/50 rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                <Shield size={10} className="text-[#FFDD00]" />
                <span className="text-[10px] sm:text-xs text-white">Segura</span>
              </div>
            </div>
          </motion.div>

          {/* Links Úteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFDD00]">Links Úteis</h3>
            <ul className="space-y-2 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-[#FFDD00] flex items-center group"
                  >
                    <ArrowRight size={12} className="mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mídias Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFDD00]">Mídias Sociais</h3>
            <ul className="space-y-2 sm:space-y-4">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-[#FFDD00] flex items-center group"
                  >
                    <social.icon size={12} className="mr-1 sm:mr-2" />
                    @{social.name.toLowerCase()}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Indicador de velocidade */}
            <div className="w-full pt-3 sm:pt-4">
              <div className="velocity-meter rounded-full bg-white/10"></div>
            </div>
          </motion.div>

          {/* Horário de Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-6"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFDD00]">Atendimento</h3>
            <div className="flex flex-col gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock size={14} className="text-[#FFDD00]" />
                <span>Segunda a Sábado: 08h às 19h</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock size={14} className="text-[#FFDD00]" />
                <span>Domingos e Feriados: 09h às 15h</span>
              </div>
            </div>
            
            {/* Conecte-se conosco */}
            <div className="mt-2 sm:mt-4 w-full">
              <div className="bg-blue-800/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 card-shine">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                  <Globe size={12} className="text-[#FFDD00]" />
                  Conecte-se com a Yellow
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-300 mb-3 sm:mb-4">Navegue sem limites com a melhor internet da região</p>
                <div className="velocity-meter rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-4 sm:py-6 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm md:text-base text-gray-400 text-center order-2 sm:order-1">
              <p>© {currentYear} {companyConfig.name}. Todos os direitos reservados.</p>
              <p className="text-xs text-gray-500 mt-1">CNPJ: {companyConfig.cnpj}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 sm:order-2">
              <Link href="/termos" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#FFDD00] transition-colors">
                Termos
              </Link>
              <Link href="/privacidade" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#FFDD00] transition-colors">
                Privacidade
              </Link>
              <Link href="/cookies" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#FFDD00] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 