'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Archive, ChevronRight } from 'lucide-react';
import { Section as SectionType, Highlight } from '@/types';
import { getSourcesBySection } from '@/data/sources';
import { cn } from '@/lib/utils';
import EnhancedImageModal from './EnhancedImageModal';
import EnhancedQuoteBlock from './EnhancedQuoteBlock';
import EnhancedHighlightCard from './EnhancedHighlightCard';
import HighlightDetailModal from './HighlightDetailModal';
import QABox from './QABox';

interface SectionProps {
  section: SectionType;
  isActive: boolean;
  sectionIndex: number;
}

export default function EnhancedSection({ section, isActive, sectionIndex }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [exploredHighlights, setExploredHighlights] = useState<Set<string>>(new Set());
  
  // Simplified without scroll-based transforms to prevent visibility issues

  // Helper functions for highlights functionality
  const handleHighlightClick = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
    setExploredHighlights(prev => new Set([...prev, highlight.id]));
  };

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <>
      <motion.section
        ref={sectionRef}
        id={section.id}
        className={cn(
          "min-h-screen py-8",
          isActive ? "block" : "hidden",
          sectionIndex % 2 === 0 
            ? "bg-gradient-to-br from-museum-parchment via-white to-museum-parchment-dark" 
            : "bg-gradient-to-bl from-white via-museum-parchment to-warm-50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            exit="exit"
            className="relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${section.id === 'home' ? '8b4513' : 'cd7f32'}' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Home Section - Hero Layout */}
            {section.id === 'home' && (
              <motion.div
                variants={itemVariants}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
                  {/* Hero Image with Layered Effects */}
                  {section.content.images && section.content.images[0] && (
                    <motion.div 
                      className="relative order-2 lg:order-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Layers */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-museum-navy/20 to-museum-gold/20 rounded-3xl blur-2xl" />
                      <div className="absolute -inset-2 bg-gradient-to-r from-museum-navy/10 to-museum-navy-light/10 rounded-2xl" />
                      
                      {/* Main Image Container */}
                      <div className="relative bg-white rounded-2xl p-6 shadow-layered">
                        <motion.img
                          src={section.content.images[0].src}
                          alt={section.content.images[0].alt}
                          className="w-full h-auto rounded-xl shadow-museum-deep cursor-pointer enhanced-image"
                          loading="eager"
                          onClick={() => setSelectedImage({
                            src: section.content.images[0].src,
                            alt: section.content.images[0].alt
                          })}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          onLoad={(e) => {
                            // Ensure image is visible immediately
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                        
                        {/* Image Overlay Button */}
                        <motion.button
                          className="absolute top-8 right-8 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedImage({
                            src: section.content.images[0].src,
                            alt: section.content.images[0].alt
                          })}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Hero Text */}
                  <motion.div 
                    className="order-1 lg:order-2 space-y-8"
                    variants={itemVariants}
                  >
                    <div className="space-y-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '4rem' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-museum-navy to-museum-gold rounded-full"
                      />
                      
                      <motion.h1 
                        className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold text-museum-ink leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        {section.title}
                      </motion.h1>
                      
                      {section.content.intro && (
                        <motion.p 
                          className="text-xl lg:text-2xl text-museum-sepia leading-relaxed font-body"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          {section.content.intro}
                        </motion.p>
                      )}
                    </div>
                    
                    {section.content.quote && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                      >
                        <EnhancedQuoteBlock quote={section.content.quote} />
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Enhanced Highlights Section */}
                {section.content.highlights && (
                  <motion.div
                    className="mt-24 relative"
                    variants={itemVariants}
                  >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '6rem' }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-museum-navy to-museum-gold rounded-full mx-auto mb-6"
                      />
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-museum-ink mb-4">
                        Exhibition Highlights
                      </h2>
                      <p className="text-lg text-museum-sepia font-body max-w-2xl mx-auto mb-8">
                        Discover the remarkable journey of America&apos;s first president through interactive exhibits
                      </p>
                      
                      {/* Progress Indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="flex items-center justify-center space-x-2 mb-8"
                      >
                        <Award className="w-5 h-5 text-museum-gold" />
                        <span className="text-museum-ink font-medium">
                          {exploredHighlights.size} of {section.content.highlights.length} exhibits explored
                        </span>
                        <div className="w-32 h-2 bg-museum-parchment-dark rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-museum-navy to-museum-gold"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${(exploredHighlights.size / section.content.highlights.length) * 100}%` 
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    </div>


                    {/* Highlights Display */}
                    <motion.div 
                      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                      variants={containerVariants}
                    >
                      {section.content.highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight.id}
                          variants={itemVariants}
                          custom={index}
                          className="cursor-pointer"
                          onClick={() => handleHighlightClick(highlight)}
                        >
                          <EnhancedHighlightCard 
                            highlight={highlight} 
                            index={index}
                            isExplored={exploredHighlights.has(highlight.id)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Other Sections - Enhanced Layout */}
            {section.id !== 'home' && (
              <motion.div
                variants={containerVariants}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                  {/* Main Content */}
                  <motion.div 
                    className="lg:col-span-2 space-y-12"
                    variants={itemVariants}
                  >
                    {/* Section Header */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '4rem' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-museum-navy to-museum-gold rounded-full"
                      />
                      
                      <h1 className="font-display text-4xl lg:text-5xl font-bold text-museum-ink leading-tight">
                        {section.title}
                      </h1>
                      
                      {section.content.intro && (
                        <p className="text-xl text-museum-sepia leading-relaxed font-body">
                          {section.content.intro}
                        </p>
                      )}
                    </div>

                    {/* Main Content Paragraphs */}
                    {section.content.paragraphs && (
                      <div className="space-y-6">
                        {section.content.paragraphs.map((paragraph, index) => (
                          <motion.p
                            key={index}
                            variants={itemVariants}
                            className="text-museum-sepia leading-relaxed font-body text-lg"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    )}

                    {/* Q&A Boxes */}
                    {section.content.qaItems && (
                      <div className="grid gap-6 lg:grid-cols-2">
                        {section.content.qaItems.map((qaItem, index) => (
                          <QABox
                            key={index}
                            question={qaItem.question}
                            answer={qaItem.answer}
                            delay={index * 0.1}
                          />
                        ))}
                      </div>
                    )}

                    {/* Legacy Subsections (for sections not yet converted) */}
                    {section.content.subsections && !section.content.paragraphs && (
                      <div className="space-y-10">
                        {section.content.subsections.map((subsection, index) => (
                          <motion.div
                            key={subsection.id}
                            variants={itemVariants}
                            className="relative"
                          >
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-museum border border-museum-navy/10">
                              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-museum-ink mb-4">
                                {subsection.title}
                              </h2>
                              <p className="text-museum-sepia leading-relaxed font-body text-lg">
                                {subsection.content}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Quote */}
                    {section.content.quote && (
                      <motion.div variants={itemVariants}>
                        <EnhancedQuoteBlock quote={section.content.quote} />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Sidebar with Images */}
                  <motion.div 
                    className="space-y-8"
                    variants={itemVariants}
                  >
                        {section.content.images?.map((image) => (
                      <motion.div
                        key={image.id}
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Background Layer */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-museum-navy/10 to-museum-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        
                        {/* Image Container */}
                        <div className="relative bg-white rounded-xl p-4 shadow-museum group-hover:shadow-museum-hover transition-all">
                          <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-lg cursor-pointer enhanced-image"
                            loading="eager"
                            onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            onLoad={(e) => {
                              // Ensure image is visible immediately
                              e.currentTarget.style.opacity = '1';
                            }}
                          />
                          
                          {/* Image Caption */}
                          <p className="text-sm text-museum-sepia italic mt-4 font-body">
                            {image.caption}
                          </p>
                          
                          {/* Hover Overlay */}
                          <motion.div
                            className="absolute inset-4 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                          >
                            <motion.button
                              className="p-3 bg-white/20 rounded-full text-white"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Sources Sidebar */}
                    {(() => {
                      const sectionSources = getSourcesBySection(section.id);
                      return sectionSources.length > 0 && (
                        <motion.div
                          variants={itemVariants}
                          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-museum border border-museum-navy/10"
                        >
                          <h3 className="font-display text-lg font-semibold text-museum-ink mb-4 flex items-center">
                            <Archive className="w-5 h-5 mr-2 text-museum-navy" />
                            Sources Used
                          </h3>
                          <div className="space-y-3">
                            {sectionSources.map((source, index) => (
                              <motion.a
                                key={source.id}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors group"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="font-medium text-museum-ink text-sm leading-tight group-hover:text-museum-navy">
                                      {source.title}
                                    </p>
                                    <p className="text-xs text-museum-sepia mt-1">
                                      {source.type}
                                    </p>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-museum-sepia group-hover:text-museum-navy ml-2 flex-shrink-0" />
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })()}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <EnhancedImageModal 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      {/* Highlight Detail Modal */}
      <HighlightDetailModal
        highlight={selectedHighlight}
        isOpen={Boolean(selectedHighlight)}
        onClose={() => setSelectedHighlight(null)}
      />
    </>
  );
}
