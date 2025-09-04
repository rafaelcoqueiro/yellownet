import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Definição dos recursos
interface Resource {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const resources: Resource[] = [
  {
    title: "Wi-Fi de Alta Potência",
    description: "Sinal forte em todos os cômodos com equipamentos de última geração.",
    href: "/recursos/wifi",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12" y2="20"></line>
      </svg>
    )
  },
  {
    title: "Conexão Redundante",
    description: "Múltiplos links garantem que você nunca fique sem internet.",
    href: "/recursos/redundancia",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        <path d="M12 12v9"></path>
        <path d="m8 17 4 4 4-4"></path>
      </svg>
    )
  },
  {
    title: "Monitoramento 24/7",
    description: "Equipe técnica acompanha a qualidade da sua conexão em tempo real.",
    href: "/recursos/monitoramento",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12Z"></path>
        <path d="M9 10h6"></path>
        <path d="M17 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1"></path>
        <path d="M7 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
      </svg>
    )
  },
  {
    title: "Suporte Especializado",
    description: "Especialistas prontos para resolver qualquer problema técnico rapidamente.",
    href: "/recursos/suporte",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9.09 9 .92 1.6a.8.8 0 0 0 1.38 0l1.92-3.32"></path>
        <path d="m10.55 15-1.72 1.71a.8.8 0 0 0 .55 1.38l5.42-.81"></path>
        <path d="m13.73 9.96 5.2 1.63a.8.8 0 0 1-.25 1.56l-4.02.43"></path>
      </svg>
    )
  },
  {
    title: "Velocidade Garantida",
    description: "Entregamos exatamente a velocidade que você contrata, sem flutuações.",
    href: "/recursos/velocidade",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
        <line x1="4" y1="12" x2="4" y2="12"></line>
        <line x1="20" y1="12" x2="20" y2="12"></line>
        <line x1="12" y1="4" x2="12" y2="4"></line>
        <polyline points="16 8 12 4 8 8"></polyline>
      </svg>
    )
  },
  {
    title: "Instalação Premium",
    description: "Cabeamento de qualidade e configuração otimizada para seu ambiente.",
    href: "/recursos/instalacao",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  }
];

export function ResourcesSection() {
  return (
    <section id="recursos" className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Elementos decorativos */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      <div className="absolute inset-0 bg-network-grid opacity-5"></div>
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-blue-900">
            Recursos que você vai adorar
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Nossa internet vem completa com recursos que tornam sua experiência online excepcional. Confira o que preparamos para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex flex-col max-w-sm mx-auto w-full"
            >
              <div className="mb-4 sm:mb-5 relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <resource.icon size={16} className="sm:h-6 sm:w-6" />
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 absolute top-0 right-0"></div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-blue-900">{resource.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-4 sm:mb-5 flex-grow">{resource.description}</p>
              <div className="mt-auto">
                <Link
                  href={resource.href}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <Link
            href="/contato"
            className="inline-flex items-center bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-blue-800 transition-colors"
          >
            <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Fale com nossos especialistas
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 