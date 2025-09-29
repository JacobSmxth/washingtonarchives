'use client';

import { motion } from 'framer-motion';
import { Sword, Crown, Landmark, BookOpen, ArrowRight } from 'lucide-react';
import { Highlight } from '@/types';
import { cn } from '@/lib/utils';

interface HighlightCardProps {
  highlight: Highlight;
  index: number;
  className?: string;
  isExplored?: boolean;
}

const iconMap = {
  'revolutionary-leadership': Sword,
  'constitutional-vision': Landmark,
  'presidential-precedent': Crown,
  'complex-legacy': BookOpen,
};

export default function EnhancedHighlightCard({ 
  highlight, 
  index, 
  className, 
  isExplored = false 
}: HighlightCardProps) {
  const IconComponent = iconMap[highlight.id as keyof typeof iconMap] || BookOpen;
  
  return (
    <motion.div
      className={cn("relative group h-full", className)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="absolute -inset-1 bg-gradient-to-br from-museum-navy/10 to-museum-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      
      {isExplored && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-2 left-2 w-6 h-6 bg-museum-gold rounded-full flex items-center justify-center text-white text-xs font-bold shadow-museum-glow z-10"
        >
          ✓
        </motion.div>
      )}
      
      
      <div className={cn(
        "relative bg-white/90 backdrop-blur-sm border border-museum-navy/20 rounded-xl p-6 lg:p-8 h-full flex flex-col shadow-museum group-hover:shadow-museum-hover transition-all duration-200",
        isExplored ? "border-museum-gold/30 shadow-museum-glow" : ""
      )}>
        
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-museum-navy to-museum-navy-dark rounded-full flex items-center justify-center text-white text-sm font-bold shadow-museum-glow">
          {index + 1}
        </div>
        
        
        <div className="w-16 h-16 bg-gradient-to-br from-museum-navy to-museum-navy-dark rounded-xl flex items-center justify-center mb-6 shadow-museum-glow group-hover:shadow-museum-deep transition-shadow duration-200">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        
        <div className="flex-1 space-y-4">
          <h3 className="font-display text-xl lg:text-2xl font-bold text-museum-ink group-hover:text-museum-navy transition-colors duration-200">
            {highlight.title}
          </h3>
          
          <p className="text-museum-sepia leading-relaxed font-body text-base">
            {highlight.description}
          </p>
        </div>
        
        
        <div className="flex items-center justify-end mt-6 pt-4 border-t border-museum-navy/10">
          <span className="text-sm font-medium text-museum-navy mr-2 opacity-50 group-hover:opacity-100 transition-opacity duration-200">Explore</span>
          <ArrowRight className="w-4 h-4 text-museum-navy group-hover:translate-x-1 transition-transform duration-200" />
        </div>
        
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-museum-navy to-museum-gold rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
}
