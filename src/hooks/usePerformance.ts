'use client';

import { useEffect } from 'react';

export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance monitoring initialized');
      }
    }
    const preloadCriticalImages = () => {
      // preload the main hero image to avoid loading delay on home page
      const criticalImages = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalImages();
  }, []);
}

export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(callback);
      },
      {
        threshold: 0.1, // trigger when a sliver of element is visible
        rootMargin: '50px', // start observing right before element enters viewport
        ...options,
      }
    );

    return () => observer.disconnect();
  }, [callback, options]);
}

