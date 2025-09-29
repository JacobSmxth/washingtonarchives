'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Scroll, User, Landmark, Archive, Smile } from 'lucide-react';
import { navigationItems } from '@/data/sections';
import { cn } from '@/lib/utils';
import SourcesPage from './SourcesPage';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const navigationGroups = [
  {
    title: "Early Life",
    icon: User,
    items: navigationItems.slice(0, 3),
  },
  {
    title: "Revolutionary Leader", 
    icon: Scroll,
    items: navigationItems.slice(3, 5),
  },
  {
    title: "Presidential Legacy",
    icon: Landmark,
    items: navigationItems.slice(5, 8),
  },
  {
    title: "Complex History",
    icon: Scroll,
    items: navigationItems.slice(8, 10),
  },
      {
        title: "Fun Facts",
        icon: Smile,
        items: navigationItems.slice(10),
      }
];

export default function EnhancedNavigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-museum-parchment/95 backdrop-blur-xl shadow-layered border-b border-museum-navy/20"
            : "bg-gradient-to-r from-museum-navy via-museum-navy-light to-museum-navy text-white"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <motion.button 
              className="flex items-center space-x-4 text-left"
              onClick={() => onSectionChange("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                isScrolled 
                  ? "bg-gradient-to-br from-museum-navy to-museum-navy-dark shadow-museum-glow" 
                  : "bg-white/20 backdrop-blur-sm"
              )}>
                <img 
                  src="/quarter.png" 
                  alt="Washington Quarter" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className={cn(
                  "font-display text-xl lg:text-2xl font-bold transition-colors",
                  isScrolled ? "text-museum-ink" : "text-white"
                )}>
                  George Washington
                </h1>
                <p className={cn(
                  "font-body text-sm italic transition-colors",
                  isScrolled ? "text-museum-sepia" : "text-white/90"
                )}>
                  WashingtonArchive.org
                </p>
              </div>
            </motion.button>

            
            <div className="hidden lg:flex items-center space-x-1">
              {navigationGroups.map((group) => (
                <div
                  key={group.title}
                  className="relative"
                  onMouseEnter={() => setHoveredGroup(group.title)}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <motion.button
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all",
                      isScrolled
                        ? "text-museum-ink hover:bg-museum-navy/10 hover:text-museum-navy"
                        : "text-white hover:bg-white/10"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <group.icon className="w-4 h-4" />
                    <span>{group.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </motion.button>

                  
                  <AnimatePresence>
                    {hoveredGroup === group.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-museum-deep border border-museum-navy/20 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {group.items.map((item, index) => (
                            <motion.button
                              key={item.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleNavClick(item.id)}
                              className={cn(
                                "w-full text-left px-4 py-3 rounded-lg transition-all text-sm",
                                activeSection === item.id
                                  ? "bg-museum-navy text-white shadow-museum-glow"
                                  : "text-museum-ink hover:bg-museum-parchment-dark"
                              )}
                            >
                              {item.label}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              
              <motion.button
                onClick={() => setIsSourcesOpen(true)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ml-4",
                  isScrolled
                    ? "text-museum-ink hover:bg-museum-navy/10 hover:text-museum-navy border border-museum-navy/20"
                    : "text-white hover:bg-white/10 border border-white/20"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Archive className="w-4 h-4" />
                <span>Sources</span>
              </motion.button>
            </div>

            
            <motion.button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-museum-ink hover:bg-museum-navy/10"
                  : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-museum-parchment shadow-museum-deep z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-museum-navy to-museum-navy-dark flex items-center justify-center shadow-museum-glow">
                      <img 
                        src="/quarter.png" 
                        alt="Washington Quarter" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-bold text-museum-ink">Navigation</h2>
                      <p className="font-body text-xs text-museum-sepia">WashingtonArchive.org</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-museum-ink hover:bg-museum-navy/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                
                <div className="space-y-6">
                  {navigationGroups.map((group, groupIndex) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: groupIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2 px-2 py-1">
                        <group.icon className="w-4 h-4 text-museum-navy" />
                        <h3 className="font-display text-sm font-semibold text-museum-sepia uppercase tracking-wide">
                          {group.title}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {group.items.map((item, itemIndex) => (
                          <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (groupIndex * 0.1) + (itemIndex * 0.05) }}
                            onClick={() => handleNavClick(item.id)}
                            className={cn(
                              "w-full text-left px-4 py-3 rounded-lg transition-all text-sm",
                              activeSection === item.id
                                ? "bg-museum-navy text-white shadow-museum-glow"
                                : "text-museum-ink hover:bg-museum-parchment-dark"
                            )}
                          >
                            {item.label}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                  
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigationGroups.length * 0.1 }}
                    className="pt-4 border-t border-museum-navy/10"
                  >
                    <motion.button
                      onClick={() => {
                        setIsSourcesOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg transition-all text-sm bg-museum-navy/5 border border-museum-navy/20 text-museum-navy hover:bg-museum-navy/10 flex items-center space-x-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Archive className="w-4 h-4" />
                      <span className="font-medium">Sources & References</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      
      <SourcesPage 
        isOpen={isSourcesOpen} 
        onClose={() => setIsSourcesOpen(false)} 
      />
    </>
  );
}
