'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Archive, ChevronRight, ChevronDown, ChevronUp, User, Sword, Scroll, Landmark, Crown, BookOpen, Mountain } from 'lucide-react';
import { Section as SectionType, Highlight } from '@/types';
import { getSourcesBySection } from '@/data/sources';
import { cn } from '@/lib/utils';
import EnhancedImageModal from './EnhancedImageModal';
import EnhancedQuoteBlock from './EnhancedQuoteBlock';
import HighlightDetailModal from './HighlightDetailModal';
import QABox from './QABox';
import SectionNavigationCard from './SectionNavigationCard';
import BattleMap from './BattleMap';

interface SectionProps {
  section: SectionType;
  isActive: boolean;
  sectionIndex: number;
  onNavigate?: (sectionId: string) => void;
}

export default function EnhancedSection({ section, isActive, sectionIndex, onNavigate }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(false);

  const navigationSections = [
    { id: 'youth', title: 'Early Life & Family', icon: User, description: 'Explore Washington\'s childhood, education, and formative years in colonial Virginia.' },
    { id: 'military-early', title: 'Early Military Experience', icon: Sword, description: 'Discover Washington\'s first battles and lessons learned during the French and Indian War.' },
    { id: 'revolutionary-war', title: 'Revolutionary War Leadership', icon: Scroll, description: 'Follow Washington\'s command of the Continental Army through triumph and hardship.' },
    { id: 'constitutional-convention', title: 'Constitutional Convention', icon: Landmark, description: 'Learn about Washington\'s role in creating the framework of American government.' },
    { id: 'presidency', title: 'The Presidency', icon: Crown, description: 'Examine the precedents and principles Washington established as the first president.' },
    { id: 'legacy', title: 'Enduring Legacy', icon: BookOpen, description: 'Understand Washington\'s lasting impact on American democracy and values.' },
    { id: 'slavery', title: 'Washington and Slavery', icon: BookOpen, description: 'Confront the contradiction between liberty and slavery in Washington\'s life.' },
    { id: 'mount-vernon', title: 'Mount Vernon', icon: Mountain, description: 'Visit Washington\'s beloved estate and explore his life as a Virginia planter.' },
  ];

  // slide up and fade in when section becomes active, stagger child animations
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
        ease: [0.25, 0.25, 0, 1] as const,
        staggerChildren: 0.15, // delay between each child animation
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const,
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
        ease: [0.25, 0.25, 0, 1] as const,
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
            
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${section.id === 'home' ? '8b4513' : 'cd7f32'}' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            
            {section.id === 'home' && (
              <motion.div
                variants={itemVariants}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
                  
                  {section.content.images?.[0] && (
                    <motion.div 
                      className="relative order-1 lg:order-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      
                      <div className="absolute -inset-4 bg-gradient-to-r from-museum-navy/20 to-museum-gold/20 rounded-3xl blur-2xl" />
                      <div className="absolute -inset-2 bg-gradient-to-r from-museum-navy/10 to-museum-navy-light/10 rounded-2xl" />
                      
                      
                      <div className="relative bg-white rounded-2xl p-6 shadow-layered">
                        <motion.img
                          src={section.content.images[0].src}
                          alt={section.content.images[0].alt}
                          className="w-full h-auto rounded-xl shadow-museum-deep cursor-pointer enhanced-image"
                          loading="eager"
                          onClick={() => setSelectedImage({
                            src: section.content.images![0].src,
                            alt: section.content.images![0].alt
                          })}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                        
                        
                        <motion.button
                          className="absolute top-8 right-8 p-3 bg-black/70 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedImage({
                            src: section.content.images![0].src,
                            alt: section.content.images![0].alt
                          })}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                  
                  
                  <motion.div 
                    className="order-2 lg:order-2 space-y-8"
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

                {/* Section Navigation Cards */}
                <motion.div
                  className="mt-24 relative"
                  variants={itemVariants}
                >
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '6rem' }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="h-1 bg-gradient-to-r from-museum-navy to-museum-gold rounded-full mx-auto mb-6"
                    />
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-museum-ink mb-4">
                      Explore Washington&apos;s Life
                    </h2>
                    <p className="text-lg text-museum-sepia font-body max-w-2xl mx-auto">
                      Journey through the defining moments and complex legacy of America&apos;s first president
                    </p>
                  </div>

                  <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                  >
                    {navigationSections.map((navSection, index) => (
                      <motion.div
                        key={navSection.id}
                        variants={itemVariants}
                        custom={index}
                      >
                        <SectionNavigationCard
                          title={navSection.title}
                          description={navSection.description}
                          icon={navSection.icon}
                          index={index}
                          onClick={() => onNavigate?.(navSection.id)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            
            {section.id !== 'home' && (
              <motion.div
                variants={containerVariants}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                  
                  <motion.div 
                    className="lg:col-span-2 space-y-12 order-2 lg:order-1"
                    variants={itemVariants}
                  >
                    
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


                    {section.id === 'military-campaigns' && (
                      <motion.div variants={itemVariants} className="w-full">
                        <BattleMap />
                      </motion.div>
                    )}

                    {section.content.subsections && (
                      <div className="space-y-10">
                        {section.content.subsections.map((subsection) => (
                          <motion.div
                            key={subsection.id}
                            variants={itemVariants}
                            className="relative"
                          >
                            <div className="bg-white/90 rounded-2xl p-8 shadow-museum border border-museum-navy/10">
                              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-museum-ink mb-4">
                                {subsection.title}
                              </h2>
                              <p className="text-museum-sepia leading-relaxed font-body text-lg">
                                {subsection.content}
                              </p>
                              
                              
                              {subsection.highlights && (
                                <div className="mt-6 space-y-4">
                                  <h3 className="font-display text-lg font-semibold text-museum-ink">
                                    Battles & Engagements
                                  </h3>
                                  <div className="grid gap-3">
                                    {subsection.highlights.map((battle) => (
                                      <div
                                        key={battle.id}
                                        className="bg-white/40 rounded-lg p-4 border border-museum-navy/10"
                                      >
                                        <div className="flex justify-between items-start mb-2">
                                          <h4 className="font-medium text-museum-ink">
                                            {battle.title}
                                          </h4>
                                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            battle.result === 'American Victory' 
                                              ? 'bg-green-100 text-green-800'
                                              : battle.result === 'British Victory'
                                              ? 'bg-red-100 text-red-800'
                                              : 'bg-gray-100 text-gray-800'
                                          }`}>
                                            {battle.result}
                                          </span>
                                        </div>
                                        <p className="text-sm text-museum-sepia mb-1">
                                          <strong>Location:</strong> {battle.location}
                                        </p>
                                        <p className="text-sm text-museum-sepia">
                                          <strong>Opponent:</strong> {battle.opponent}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    
                    {section.content.quote && (
                      <motion.div variants={itemVariants}>
                        <EnhancedQuoteBlock quote={section.content.quote} />
                      </motion.div>
                    )}
                  </motion.div>

                  
                  <motion.div 
                    className="space-y-8 order-1 lg:order-2"
                    variants={itemVariants}
                  >
                        {section.content.images?.map((image) => (
                      <motion.div
                        key={image.id}
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        
                        <div className="absolute -inset-2 bg-gradient-to-r from-museum-navy/10 to-museum-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        
                        
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
                              e.currentTarget.style.opacity = '1';
                            }}
                          />
                          
                          
                          <p className="text-sm text-museum-sepia italic mt-4 font-body">
                            {image.caption}
                          </p>
                          
                          
                          <motion.div
                            className="absolute inset-4 rounded-lg bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
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

                    
                    {(() => {
                      const sectionSources = getSourcesBySection(section.id);
                      return sectionSources.length > 0 && (
                        <motion.div
                          variants={itemVariants}
                          className="bg-white/90 rounded-2xl shadow-museum border border-museum-navy/10 overflow-hidden"
                        >
                          <button
                            onClick={() => setIsSourcesExpanded(!isSourcesExpanded)}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-colors"
                          >
                            <h3 className="font-display text-lg font-semibold text-museum-ink flex items-center">
                              <Archive className="w-5 h-5 mr-2 text-museum-navy" />
                              Sources Used ({sectionSources.length})
                            </h3>
                            {isSourcesExpanded ? (
                              <ChevronUp className="w-5 h-5 text-museum-navy" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-museum-navy" />
                            )}
                          </button>
                          <AnimatePresence>
                            {isSourcesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 space-y-3">
                                  {sectionSources.map((source) => (
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
                                          <p className="font-medium text-museum-ink text-sm leading-tight group-hover:text-museum-navy break-words">
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
                            )}
                          </AnimatePresence>
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

      
      {selectedImage && (
        <EnhancedImageModal 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      
      <HighlightDetailModal
        highlight={selectedHighlight}
        isOpen={Boolean(selectedHighlight)}
        onClose={() => setSelectedHighlight(null)}
      />
    </>
  );
}
