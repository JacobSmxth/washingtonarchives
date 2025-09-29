'use client';

import { useState, useEffect } from 'react';
import { navigationItems } from '@/data/sections';
import { NavigationItem } from '@/types';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavigationItem) => {
    onSectionChange(item.id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`
      sticky top-0 z-50 transition-all duration-500 ease-in-out
      ${isScrolled 
        ? 'bg-gradient-to-r from-museum-brown to-museum-brown-light shadow-2xl backdrop-blur-md' 
        : 'bg-gradient-to-r from-museum-brown to-museum-brown-light'
      }
    `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          
          <div className="text-center flex-1 lg:flex-none">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              George Washington
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 italic mt-1">
              Life, Leadership & Legacy
            </p>
          </div>

          
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  px-3 xl:px-4 py-2 rounded-full font-medium text-sm xl:text-base
                  transition-all duration-300 ease-in-out
                  border-2 border-transparent hover:border-white/30
                  ${activeSection === item.id
                    ? 'bg-white/20 text-white border-white/30 transform scale-105'
                    : 'text-white/90 hover:bg-white/10 hover:text-white hover:-translate-y-1'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        
        <div className={`
          lg:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'}
        `}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  text-left px-4 py-3 rounded-lg font-medium text-sm
                  transition-all duration-300 ease-in-out
                  ${activeSection === item.id
                    ? 'bg-white/20 text-white'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
