'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  onClick?: () => void;
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = '', 
  speed = 0.5,
  onClick 
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={imageRef}
      className={`overflow-hidden ${className}`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-out cursor-pointer"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />
    </div>
  );
}
