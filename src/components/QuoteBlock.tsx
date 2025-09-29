import { Quote } from '@/types';

interface QuoteBlockProps {
  quote: Quote;
}

export default function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <blockquote className="
      relative bg-gradient-to-br from-museum-quote-bg to-museum-quote-border
      p-6 lg:p-8 rounded-museum-md border-l-4 border-museum-brown
      shadow-[--shadow-museum] hover:shadow-[--shadow-museum-hover]
      transition-all duration-300 group
    ">
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-museum-brown rounded-full 
                      flex items-center justify-center text-white text-sm font-bold
                      group-hover:scale-110 transition-transform duration-300">
        &ldquo;
      </div>
      
      <p className="font-body text-lg lg:text-xl italic text-gray-800 leading-relaxed mb-4">
        {quote.text}
      </p>
      
      <cite className="block font-display font-semibold text-museum-brown text-base lg:text-lg not-italic">
        — {quote.author}
        {quote.year && <span className="text-gray-600 font-normal">, {quote.year}</span>}
      </cite>
    </blockquote>
  );
}
