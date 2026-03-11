import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDE_DURATION = 6000;

export default function HeroCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current);
      clearInterval(progressRef.current);
      return;
    }

    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, 50);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [current, paused, slides.length]);

  const slide = slides[current];

  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-xplore-dark-deep overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px] md:min-h-[480px] py-12 md:py-16">
            {/* Left side - text content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-white/80 mb-8 max-w-lg">
                {slide.description}
              </p>
              {slide.ctaText && (
                <div className="flex items-center gap-1">
                  <Link
                    to={slide.ctaTo || '#'}
                    className="inline-flex items-center gap-2 bg-xplore-green hover:bg-xplore-green-dark text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors text-base"
                  >
                    {slide.ctaText}
                    <ArrowRight size={18} />
                  </Link>
                  <span className="inline-flex items-center text-xplore-green">
                    <ChevronRight size={24} strokeWidth={3} />
                    <ChevronRight size={24} strokeWidth={3} className="-ml-3.5" />
                  </span>
                </div>
              )}
            </div>

            {/* Right side - hero image */}
            <div className="relative hidden md:flex items-center justify-center">
              {slide.bgImage && (
                <img
                  src={slide.bgImage}
                  alt=""
                  className="w-full max-w-lg h-auto object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tab navigation with progress bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6 py-4 overflow-x-auto">
            {/* Pause/Play button */}
            <button
              onClick={() => setPaused(!paused)}
              className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-xplore-green text-xplore-green flex items-center justify-center hover:bg-xplore-green hover:text-white transition-colors"
              aria-label={paused ? 'Play' : 'Pause'}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>

            {/* Slide tabs */}
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`flex-shrink-0 text-sm md:text-base font-semibold pb-1 transition-colors whitespace-nowrap ${
                  i === current
                    ? 'text-xplore-dark border-b-3 border-xplore-green'
                    : 'text-xplore-gray hover:text-xplore-dark'
                }`}
              >
                {s.tabLabel || s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-xplore-green transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
