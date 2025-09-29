'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AttributionButton() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-4 right-4 z-50 group"
    >
      <div className="relative">
        
        <div className="absolute -inset-1 bg-gradient-to-r from-museum-navy/20 to-museum-gold/20 rounded-2xl blur-lg group-hover:blur-xl transition-all sm:-inset-2 sm:blur-xl sm:group-hover:blur-2xl" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-museum-navy/10 to-museum-gold/10 rounded-xl sm:-inset-1" />
        
        
        <div className="relative bg-white/95 backdrop-blur-sm border border-museum-navy/20 rounded-xl shadow-museum group-hover:shadow-museum-hover transition-all">
          
          <div className="sm:hidden">
            <AnimatePresence mode="wait">
              {isCollapsed ? (
                <motion.button
                  key="collapsed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setIsCollapsed(false)}
                  className="p-2 rounded-xl bg-museum-navy/10 hover:bg-museum-navy/20 text-museum-navy transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronUp className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-museum-sepia uppercase tracking-wide font-medium">
                      Made by
                    </p>
                    <motion.button
                      onClick={() => setIsCollapsed(true)}
                      className="p-1 rounded hover:bg-museum-navy/10 text-museum-sepia"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronDown className="w-3 h-3" />
                    </motion.button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.a
                      href="https://jsmitty.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xs font-semibold text-museum-navy hover:text-museum-navy-light transition-colors flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      Jacob Smith
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/jacobsmxth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-museum-navy/10 hover:bg-museum-navy/20 text-museum-navy transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-3 h-3" />
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
          <div className="hidden sm:block p-4">
            <div className="flex items-center space-x-3">
              
              <div className="text-right">
                <p className="text-xs text-museum-sepia uppercase tracking-wide font-medium">
                  Made by
                </p>
                <motion.a
                  href="https://jsmitty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold text-museum-navy hover:text-museum-navy-light transition-colors flex items-center gap-1"
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Jacob Smith
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </motion.a>
              </div>
              
              
              <div className="w-px h-8 bg-museum-navy/20" />
              
              
              <motion.a
                href="https://github.com/jacobsmxth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-museum-navy/10 hover:bg-museum-navy/20 text-museum-navy hover:text-museum-navy-dark transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
            
            
            <motion.div
              className="absolute -top-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-museum-navy/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
