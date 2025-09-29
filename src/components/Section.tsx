'use client';

import { useRef, useEffect, useState } from 'react';
import { Section as SectionType } from '@/types';
import ImageModal from './ImageModal';
import QuoteBlock from './QuoteBlock';
import HighlightCard from './HighlightCard';

interface SectionProps {
  section: SectionType;
  isActive: boolean;
}

export default function Section({ section, isActive }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id={section.id}
        className={`
          min-h-screen transition-all duration-1000 ease-out
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'}
          ${isActive ? 'block' : 'hidden'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-museum-lg shadow-museum overflow-hidden">
            
            {/* Home Section - Special Layout */}
            {section.id === 'home' && (
              <>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 items-center">
                  {/* Image */}
                  {section.content.images && section.content.images[0] && (
                    <div className="order-2 lg:order-1 text-center">
                      <img
                        src={section.content.images[0].src}
                        alt={section.content.images[0].alt}
                        className="max-w-full h-auto rounded-museum-md shadow-museum-hover 
                                 hover:scale-105 transition-all duration-500 cursor-pointer"
                        onClick={() => setSelectedImage({
                          src: section.content.images![0].src,
                          alt: section.content.images![0].alt
                        })}
                      />
                    </div>
                  )}
                  
                  {/* Text Content */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-museum-brown leading-tight">
                      {section.title}
                    </h2>
                    {section.content.intro && (
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        {section.content.intro}
                      </p>
                    )}
                    {section.content.quote && (
                      <QuoteBlock quote={section.content.quote} />
                    )}
                  </div>
                </div>

                {/* Highlights Grid */}
                {section.content.highlights && (
                  <div className="bg-gradient-to-br from-museum-quote-bg to-museum-quote-border p-8 lg:p-12">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-museum-brown text-center mb-8">
                      Exhibition Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                      {section.content.highlights.map((highlight) => (
                        <HighlightCard key={highlight.id} highlight={highlight} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Other Sections - Standard Layout */}
            {section.id !== 'home' && (
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 p-8 lg:p-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-museum-brown leading-tight">
                    {section.title}
                  </h2>
                  
                  {section.content.intro && (
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.content.intro}
                    </p>
                  )}

                  {/* Subsections */}
                  {section.content.subsections && (
                    <div className="space-y-6">
                      {section.content.subsections.map((subsection) => (
                        <div key={subsection.id} className="space-y-3">
                          <h3 className="font-display text-xl lg:text-2xl font-semibold text-museum-brown">
                            {subsection.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  {section.content.quote && (
                    <QuoteBlock quote={section.content.quote} />
                  )}
                </div>

                {/* Sidebar with Images */}
                <div className="space-y-6">
                  {section.content.images?.map((image) => (
                    <div key={image.id} className="text-center space-y-4">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-museum-md shadow-museum 
                                 hover:scale-105 hover:shadow-museum-hover 
                                 transition-all duration-500 cursor-pointer image-zoom-hover"
                        onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                      />
                      <p className="text-sm text-gray-600 italic">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
