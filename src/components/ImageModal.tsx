'use client';

import { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    document.addEventListener('keydown', handleEscape);
    handleBodyScroll();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4
                 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] animate-in zoom-in duration-500">
        
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 
                     rounded-full flex items-center justify-center text-white text-2xl
                     transition-all duration-300 hover:scale-110 z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain rounded-museum-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        
        <p className="text-white text-center mt-4 font-body italic text-lg">
          {alt}
        </p>
      </div>
    </div>
  );
}
