import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Web Vitals reporting function
export function reportWebVitals(metric: Metric) {
  console.log('Web Vital:', metric.name, metric.value);
  
  // Send to analytics service (you can replace this with your preferred analytics)
  if (typeof window !== 'undefined') {
    // Example: Send to Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
    
    // Example: Send to custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        url: window.location.href,
        timestamp: Date.now(),
      }),
    }).catch(console.error);
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }
}

// Performance observer for additional metrics
export function initPerformanceObserver() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint'] });
  }
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const analysis = {
      totalResources: resources.length,
      totalSize: resources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0),
      slowestResources: resources
        .filter(resource => resource.duration > 1000)
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 5)
        .map(resource => ({
          name: resource.name,
          duration: resource.duration,
          size: resource.transferSize || 0,
        })),
    };
    
    console.log('Resource Analysis:', analysis);
    return analysis;
  }
  return null;
}
