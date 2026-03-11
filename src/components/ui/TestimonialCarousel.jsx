import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials as defaultTestimonials } from '../../data/testimonials';

export default function TestimonialCarousel({ items = defaultTestimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[current];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-10">
          What our customers are saying
        </h2>
        <div className="relative bg-xplore-green-light rounded-2xl p-8 md:p-12">
          <Quote className="text-xplore-green opacity-20 absolute top-6 left-6" size={48} />
          <div className="text-center relative z-10">
            <p className="text-lg md:text-xl text-xplore-dark leading-relaxed mb-6 italic">
              "{item.quote}"
            </p>
            <p className="font-bold text-xplore-dark">{item.name}</p>
            <p className="text-sm text-xplore-gray">
              {item.service}, <strong>{item.location}</strong>
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-xplore-green"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-xplore-green' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % items.length)}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-xplore-green"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
