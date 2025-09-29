'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface QABoxProps {
  question: string;
  answer: string;
  delay?: number;
}

export default function QABox({ question, answer, delay = 0 }: QABoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl border border-museum-navy/20 p-6 shadow-museum hover:shadow-museum-hover transition-all hover:-translate-y-1"
    >
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-museum-navy to-museum-navy-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <HelpCircle className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-display text-lg font-semibold text-museum-navy mb-3 leading-tight">
            {question}
          </h4>
          <p className="font-body text-museum-ink leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
