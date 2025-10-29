'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Highlight } from '@/types';
import { cn } from '@/lib/utils';

interface HighlightDetailModalProps {
  highlight: Highlight | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons = {
  Military: '⚔️',
  Government: '🏛️',
  Leadership: '👑',
  'Social Issues': '⚖️',
};

const categoryColors = {
  Military: 'from-red-500 to-red-700',
  Government: 'from-blue-500 to-blue-700',
  Leadership: 'from-purple-500 to-purple-700',
  'Social Issues': 'from-amber-500 to-amber-700',
};

export default function HighlightDetailModal({ highlight, isOpen, onClose }: HighlightDetailModalProps) {
  if (!highlight) return null;

  // spring animation looks nice
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 30,
      transition: {
        duration: 0.3,
        ease: 'easeIn' as const,
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const categoryColor = categoryColors[highlight.category as keyof typeof categoryColors] || 'from-museum-navy to-museum-navy-dark';
  const categoryIcon = categoryIcons[highlight.category as keyof typeof categoryIcons] || '📚';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 pb-8 overflow-y-auto"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          
          <motion.div
            className="absolute inset-0 bg-museum-ink/80"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          
          <motion.div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl my-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className={cn(
              "relative px-8 py-6 bg-gradient-to-r text-white",
              categoryColor
            )}>
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{categoryIcon}</div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {highlight.category}
                    </span>
                    {highlight.year && (
                      <span className="flex items-center space-x-1 text-sm opacity-90">
                        <Clock className="w-4 h-4" />
                        <span>{highlight.year}</span>
                      </span>
                    )}
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-display font-bold"
                  >
                    {highlight.title}
                  </motion.h2>
                </div>
              </div>
            </div>

            
            <div className="overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="p-8 space-y-8">
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-display font-semibold text-museum-ink mb-4">
                    Overview
                  </h3>
                  <p className="text-lg text-museum-sepia leading-relaxed font-body">
                    {highlight.detailedDescription || highlight.description}
                  </p>
                </motion.div>

                
                {highlight.keyPoints && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-display font-semibold text-museum-ink mb-4">
                      Key Achievements
                    </h3>
                    <div className="grid gap-3">
                      {highlight.keyPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start space-x-3 p-4 bg-museum-parchment rounded-lg"
                        >
                          <ChevronRight className="w-5 h-5 text-museum-navy mt-0.5 flex-shrink-0" />
                          <span className="text-museum-ink font-body">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                
                {highlight.historicalContext && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-museum-cream to-museum-cream-dark p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-display font-semibold text-museum-ink mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-museum-navy" />
                      Historical Context
                    </h3>
                    <p className="text-museum-sepia font-body leading-relaxed">
                      {highlight.historicalContext}
                    </p>
                  </motion.div>
                )}

              </div>
            </div>

            
            <div className="px-8 py-4 bg-museum-parchment border-t border-museum-navy/10">
              <div className="flex justify-between items-center">
                <p className="text-sm text-museum-sepia font-body">
                  Part of the George Washington Digital Museum Experience
                </p>
                <motion.button
                  onClick={onClose}
                  className="px-6 py-2 bg-museum-navy text-white rounded-lg hover:bg-museum-navy-light transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
