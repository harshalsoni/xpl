import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function HeroCarousel({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className={`relative ${slide.bgColor || 'bg-gradient-to-br from-xplore-green to-xplore-green-dark'} text-white py-20 md:py-28 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">{slide.description}</p>
        {slide.ctaText && (
          <Button
            to={slide.ctaTo}
            href={slide.ctaHref}
            variant="secondary"
            size="lg"
            className="bg-white text-xplore-green border-white hover:bg-gray-100 hover:text-xplore-green-dark"
          >
            {slide.ctaText}
          </Button>
        )}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
