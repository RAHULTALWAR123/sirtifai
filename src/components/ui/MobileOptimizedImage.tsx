"use client";

import { OptimizedImage } from './OptimizedImage';
import { motion } from 'framer-motion';
import React from 'react';

// Create a properly typed motion component
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const MobileOptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  priority = true,
  sizes = "100vw"
}: MobileOptimizedImageProps) => {
  return (
    <MotionDiv
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={85} // Higher quality for LCP images
        className="w-full h-full object-contain"
      />
    </MotionDiv>
  );
};
