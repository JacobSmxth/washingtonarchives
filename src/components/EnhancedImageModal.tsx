'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function EnhancedImageModal({ src, alt, onClose }: ImageModalProps) {
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 15,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
        duration: 0.6,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[9999] bg-museum-ink/90 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cd7f32' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-w-7xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Control Bar */}
          <motion.div 
            className="absolute -top-16 left-0 right-0 flex items-center justify-between z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex items-center space-x-4">
              <motion.button
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(src, '_blank')}
              >
                <ZoomIn className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = src;
                  link.download = alt;
                  link.click();
                }}
              >
                <Download className="w-5 h-5" />
              </motion.button>
            </div>
            
            <motion.button
              className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Image Container */}
          <motion.div 
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-museum-deep border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-museum-gold/60 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-museum-gold/60 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-museum-gold/60 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-museum-gold/60 rounded-br-lg" />
            
            <motion.img
              src={src}
              alt={alt}
              className="max-w-full max-h-[70vh] object-contain mx-auto rounded-xl shadow-museum-deep"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          {/* Caption */}
          <motion.div 
            className="text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-white/90 font-body italic text-lg max-w-3xl mx-auto">
              {alt}
            </p>
            <div className="mt-2 w-24 h-px bg-gradient-to-r from-transparent via-museum-gold to-transparent mx-auto" />
          </motion.div>

          {/* Keyboard Hint */}
          <motion.div 
            className="absolute -bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <p className="text-white/60 text-sm font-body">
              Press <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd> to close
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
