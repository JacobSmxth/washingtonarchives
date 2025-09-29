import { Highlight } from '@/types';

interface HighlightCardProps {
  highlight: Highlight;
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    <div className="
      bg-white p-6 rounded-museum-md shadow-museum
      hover:shadow-museum-hover hover:-translate-y-2
      transition-all duration-500 ease-out group cursor-pointer
      border border-gray-100 hover:border-[--color-museum-brown]/20
      hover-lift glow-border
    ">
      <div className="space-y-4">
        {/* Icon placeholder - you can add actual icons here */}
        <div className="w-12 h-12 bg-gradient-to-br from-museum-brown to-museum-brown-light 
                        rounded-full flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-lg">
            {highlight.title.charAt(0)}
          </span>
        </div>
        
        <h4 className="font-display text-xl font-semibold text-museum-brown 
                       group-hover:text-museum-brown-light transition-colors duration-300">
          {highlight.title}
        </h4>
        
        <p className="text-gray-700 leading-relaxed">
          {highlight.description}
        </p>
      </div>
      
      {/* Decorative element */}
      <div className="mt-4 w-full h-1 bg-gradient-to-r from-museum-brown/20 to-transparent 
                      group-hover:from-museum-brown/40 transition-all duration-300 rounded-full">
      </div>
    </div>
  );
}
