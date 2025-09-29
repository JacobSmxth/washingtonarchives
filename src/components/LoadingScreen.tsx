'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-gradient-to-br from-museum-brown to-museum-brown-light 
                    flex flex-col items-center justify-center text-white">
      {/* Main Content */}
      <div className="text-center space-y-6 animate-in fade-in duration-1000">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold 
                       drop-shadow-2xl animate-in slide-in-from-bottom duration-1000 delay-300">
          George Washington
        </h1>
        <p className="font-body text-xl md:text-2xl lg:text-3xl italic opacity-90
                      animate-in slide-in-from-bottom duration-1000 delay-500">
          Digital Museum
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-12 w-64 md:w-80 animate-in slide-in-from-bottom duration-1000 delay-700">
        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-sm opacity-75">
          Loading exhibition... {progress}%
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full 
                      animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full 
                      animate-pulse delay-300" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-white/30 rounded-full 
                      animate-bounce delay-500" />
    </div>
  );
}
