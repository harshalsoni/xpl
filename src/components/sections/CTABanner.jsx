import Button from '../ui/Button';

export default function CTABanner({
  title,
  description,
  ctaText,
  ctaTo,
  ctaHref,
  bgColor = 'bg-xplore-green',
}) {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-lg opacity-90 mb-6">{description}</p>}
        {ctaText && (
          <Button
            to={ctaTo}
            href={ctaHref}
            variant="secondary"
            className="bg-white text-xplore-green border-white hover:bg-gray-100 hover:text-xplore-green-dark"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
}
