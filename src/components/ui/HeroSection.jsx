import Button from './Button';

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaTo,
  ctaHref,
  bgColor = 'bg-gradient-to-br from-xplore-green to-xplore-green-dark',
  bgImage,
  textColor = 'text-white',
  align = 'center',
  size = 'lg',
}) {
  const heights = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24 md:py-32',
  };

  return (
    <section
      className={`relative ${bgColor} ${textColor} ${heights[size]}`}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-xplore-dark/60" />
        </div>
      )}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-3">{subtitle}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">{description}</p>
        )}
        {(ctaText && (ctaTo || ctaHref)) && (
          <Button
            to={ctaTo}
            href={ctaHref}
            variant="secondary"
            size="lg"
            className="bg-white text-xplore-green border-white hover:bg-gray-100 hover:text-xplore-green-dark"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
}
