"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Home, Gamepad, Briefcase, Building2, Wifi, Monitor, School } from "lucide-react";
import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  icon: LucideIcon;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Cliente Residencial",
    content: "Atendimento excelente e rápido. A internet nunca cai e a velocidade é ótima. Recomendo a todos!",
    rating: 5,
    icon: Home
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Desde que mudei para a Yellow, minha empresa não teve mais problemas com internet. Suporte técnico muito eficiente.",
    rating: 5,
    icon: Briefcase
  },
  {
    name: "Ana Costa",
    role: "Profissional Home Office",
    content: "Trabalho de casa e preciso de uma conexão estável. A Yellow oferece exatamente isso, além de um ótimo custo-benefício.",
    rating: 5,
    icon: Monitor
  },
  {
    name: "Pedro Oliveira",
    role: "Gamer",
    content: "Ping baixo e estabilidade perfeita para jogos online. O suporte é rápido quando preciso.",
    rating: 5,
    icon: Gamepad
  },
  {
    name: "Carla Mendes",
    role: "Empresária",
    content: "Link dedicado de altíssima qualidade. Fundamental para o crescimento da minha empresa.",
    rating: 5,
    icon: Building2
  },
  {
    name: "Roberto Almeida",
    role: "Cliente Residencial",
    content: "Melhor custo-benefício da região. Instalação rápida e profissional.",
    rating: 5,
    icon: Home
  },
  {
    name: "Fernanda Lima",
    role: "Professora",
    content: "Aulas online sem interrupções. A qualidade da internet é essencial para meu trabalho.",
    rating: 5,
    icon: School
  },
  {
    name: "Lucas Martins",
    role: "Técnico de TI",
    content: "Como profissional da área, posso dizer que a infraestrutura é de primeira linha.",
    rating: 5,
    icon: Wifi
  },
  {
    name: "Patricia Santos",
    role: "Cliente Residencial",
    content: "Suporte técnico sempre disponível e resolutivo. Muito satisfeita com o serviço.",
    rating: 5,
    icon: Home
  },
  {
    name: "Ricardo Oliveira",
    role: "Empresário",
    content: "O plano corporativo atende perfeitamente às necessidades da minha empresa. Excelente serviço!",
    rating: 5,
    icon: Building2
  }
];

export function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonialsList.length / itemsPerPage);

  useEffect(() => {
    setIsClient(true);
    setTestimonials(testimonialsList);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX(
      'touches' in e 
        ? e.touches[0].pageX 
        : e.pageX
    );
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleScroll('right');
      } else {
        handleScroll('left');
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    } else {
      setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (!isClient) {
    return null;
  }

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja a experiência real de quem já escolheu a Yellow como seu provedor de internet.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradient Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Testimonials Container */}
          <div 
            className="overflow-hidden px-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-3xl p-8 relative group hover:shadow-xl transition-all duration-300"
                  >
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFDD00]/20 group-hover:text-[#FFDD00]/40 transition-colors" />
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#FFDD00] text-[#FFDD00]" />
                        ))}
                      </div>
                      <p className="text-gray-600 relative z-10">{testimonial.content}</p>
                      <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-[#FFDD00] transition-colors duration-300">
                          <testimonial.icon className="w-6 h-6 text-white group-hover:text-blue-900 transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-blue-900 w-6' 
                  : 'bg-blue-900/20 hover:bg-blue-900/40'
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 