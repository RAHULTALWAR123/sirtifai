"use client";

import { useEffect } from 'react';
import { initPerformanceMonitoring, initPerformanceObserver, analyzeResourceTiming } from '../lib/analytics';

export function PerformanceMonitor() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    initPerformanceObserver();
    
    // Analyze resources after page load
    const timer = setTimeout(() => {
      analyzeResourceTiming();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything visible
  return null;
}
