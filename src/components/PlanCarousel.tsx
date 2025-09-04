import React from 'react';
import { useState, useEffect } from 'react';
import { PlanCard, PlanFeature } from '@/components/ui/plan-card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Plan = {
  id: string;
  title: string;
  speed: string;
  price?: number;
  nextPrice?: number;
  features: PlanFeature[];
  variant: 'default' | 'highlight' | 'dark';
};

interface PlanCarouselProps {
  plans: Plan[];
}

export function PlanCarousel({ plans }: PlanCarouselProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reset currentPage when plans change
  useEffect(() => {
    setCurrentPage(0);
  }, [plans]);

  // Detecta se é mobile baseado no tamanho da tela
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(plans.length / itemsPerPage);
  const shouldShowCarousel = isMobile || plans.length > 3;

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!shouldShowCarousel) return;
    setIsDragging(true);
    setStartX(
      'touches' in e 
        ? e.touches[0].pageX 
        : e.pageX
    );
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !shouldShowCarousel) return;
    
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
    if (!shouldShowCarousel) return;
    if (direction === 'left') {
      setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    } else {
      setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    }
  };

  const visiblePlans = shouldShowCarousel 
    ? plans.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : plans;

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative px-4 md:px-8">
      {/* Navigation Buttons - Only show if carousel is needed */}
      {shouldShowCarousel && (
        <>
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Plans Container */}
      <div 
        className={`${shouldShowCarousel ? 'overflow-hidden touch-pan-y' : ''}`}
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
            className={`grid ${
              isMobile 
                ? 'grid-cols-1 gap-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
            }`}
            initial={shouldShowCarousel ? { opacity: 0, x: 100 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={shouldShowCarousel ? { opacity: 0, x: -100 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {visiblePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <PlanCard {...plan} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots - Only show if carousel is needed */}
      {shouldShowCarousel && (
        <div className="mt-6 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-[#FFDD00] w-6' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 