'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
  children?: ReactNode;
}

const variants = {
  default: "bg-gray-900 text-white hover:bg-gray-800",
  primary: "bg-[#FFDD00] text-blue-900 hover:bg-[#FFE45C]",
  outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50",
  ghost: "text-gray-900 hover:bg-gray-50"
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-6",
  lg: "h-12 px-8 text-lg"
};

export function AnimatedButton({
  children,
  className,
  variant = 'default',
  size = 'md',
  isLoading = false,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-full transition-colors",
        variants[variant],
        sizes[size],
        isLoading && "opacity-70 pointer-events-none",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      <span className={cn(isLoading && "opacity-0")}>
        {children}
      </span>
    </motion.button>
  );
} 