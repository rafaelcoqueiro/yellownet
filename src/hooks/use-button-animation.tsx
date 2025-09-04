'use client';

import { HTMLMotionProps, motion, Variants } from 'framer-motion';

type ButtonAnimationProps = Omit<HTMLMotionProps<"button">, "variants"> & {
  scale?: number;
  duration?: number;
};

export function useButtonAnimation() {
  const getButtonVariants = (scale: number = 1.02, duration: number = 0.2) => ({
    hover: {
      scale,
      y: -2,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
        duration
      }
    },
    tap: {
      scale: 0.98,
      y: 1
    },
    initial: {
      scale: 1,
      y: 0
    }
  });

  const AnimatedButton = ({ 
    children, 
    className = "", 
    scale = 1.02,
    duration = 0.2,
    ...props 
  }: ButtonAnimationProps) => {
    const buttonVariants = getButtonVariants(scale, duration);
    
    return (
      <motion.button
        className={className}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  const linkVariants: Variants = {
    hover: {
      scale: 1.05,
      color: "rgb(37, 99, 235)", // blue-600
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const AnimatedLink = ({ 
    children, 
    className = "", 
    ...props 
  }: Omit<HTMLMotionProps<"a">, "variants">) => {
    return (
      <motion.a
        className={className}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={linkVariants}
        {...props}
      >
        {children}
      </motion.a>
    );
  };

  return {
    AnimatedButton,
    AnimatedLink,
    buttonVariants: getButtonVariants(),
    linkVariants
  };
} 