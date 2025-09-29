'use client';

import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';
import { Quote } from '@/types';
import { cn } from '@/lib/utils';

interface QuoteBlockProps {
  quote: Quote;
  className?: string;
}

export default function EnhancedQuoteBlock({ quote, className }: QuoteBlockProps) {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="absolute -inset-3 bg-gradient-to-r from-museum-navy/20 to-museum-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
      <div className="absolute -inset-1 bg-gradient-to-r from-museum-navy/10 to-museum-gold/10 rounded-xl" />
      
      
      <blockquote className="relative bg-white/80 backdrop-blur-sm border border-museum-navy/20 rounded-xl p-8 lg:p-10 shadow-museum group-hover:shadow-museum-hover transition-all">
        
        <motion.div 
          className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-museum-navy to-museum-navy-dark rounded-full flex items-center justify-center shadow-museum-glow"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <QuoteIcon className="w-6 h-6 text-white" />
        </motion.div>
        
        
        <motion.p 
          className="font-body text-lg lg:text-xl italic text-museum-ink leading-relaxed mb-6 pl-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          &ldquo;{quote.text}&rdquo;
        </motion.p>
        
        
        <motion.footer 
          className="pl-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <cite className="block font-display font-semibold text-museum-navy text-lg not-italic">
            — {quote.author}
            {quote.year && (
              <span className="text-museum-sepia font-normal ml-2">
                ({quote.year})
              </span>
            )}
          </cite>
        </motion.footer>
        
        
        <motion.div
          className="absolute bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-museum-navy/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </blockquote>
    </motion.div>
  );
}
