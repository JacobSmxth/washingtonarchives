'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '@/data/sections';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import EnhancedSection from '@/components/EnhancedSection';
import EnhancedLoadingScreen from '@/components/EnhancedLoadingScreen';
import AttributionButton from '@/components/AttributionButton';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = sections.findIndex(section => section.id === activeSection);
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          setActiveSection(sections[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          setActiveSection(sections[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, mounted]);

  useEffect(() => {
    if (!mounted) return;
    window.scrollTo(0, 0);
  }, [mounted]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo(0, 0);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (!mounted) {
    return null;
  }

  if (isLoading) {
    return <EnhancedLoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-museum-parchment via-white to-warm-50">
      <EnhancedNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="relative overflow-hidden pt-20">
        {sections.map((section, index) => (
          <EnhancedSection
            key={section.id}
            section={section}
            isActive={activeSection === section.id}
            sectionIndex={index}
          />
        ))}
      </main>

      <motion.footer 
        className="relative bg-gradient-to-r from-museum-ink via-museum-ink-light to-museum-ink text-white py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-museum-gold">
              Thank You for Visiting WashingtonArchive.org
            </h3>
            <p className="font-body text-lg max-w-2xl mx-auto opacity-90">
              © 2025 WashingtonArchive.org • HIST 2111 Academic Research Project
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="font-body text-base opacity-80 italic leading-relaxed">
              Created for HIST 2111 to show off George Washington. I did so much research because I thought if I was making a website, I should make it portfolio worthy.
            </p>
          </motion.div>
          
          <motion.div 
            className="pt-8 border-t border-museum-gold/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-museum-gold rounded-full"></span>
                Navigate with arrow keys
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-museum-gold rounded-full"></span>
                Click images to enlarge
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-museum-gold rounded-full"></span>
                Experience history interactively
              </span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
      
      <AttributionButton />
    </div>
  );
}