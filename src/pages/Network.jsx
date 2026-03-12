import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import Button from '../components/ui/Button';

const technologies = [
  {
    title: '100% Pure Fibre Internet',
    description: 'The fastest Internet technology in the world, giving you lightning fast Gigabit speeds, unlimited data for unparalleled experience in video streaming, gaming and communications.',
    to: '/fibre',
    gradient: 'from-xplore-green to-xplore-green-dark',
  },
  {
    title: 'NEW - 5G Ultra Home Internet',
    description: 'Powered by the latest 5G+ technology, the Xplore 5G Ultra plans bring fibre-like speeds up to 500 Mbps and truly unlimited data to rural & small-town Canada.',
    to: '/5gultra',
    gradient: 'from-xplore-dark to-xplore-green-dark',
  },
  {
    title: 'Fast & Unlimited Wireless Home Internet up to 100 Mbps',
    description: 'Through our advanced fixed wireless home Internet network, we offer plans with speeds up to 100 Mbps in more rural and small-town communities across Canada.',
    to: '/shop/internet-packages',
    gradient: 'from-xplore-green-dark to-xplore-dark',
  },
  {
    title: 'Next Gen Satellite Home Internet',
    description: 'Powered by the JUPITER™3 satellite, the largest commercial satellite in the world, bringing next-generation satellite Internet services to more remote locations across Canada.',
    to: '/satellite-internet-canada',
    gradient: 'from-xplore-dark-deep to-xplore-dark',
  },
];

export default function Network() {
  return (
    <div>
      <HeroSection
        title="The Xplore Network"
        description="Xplore is building a world-class fibre, wireless and next-generation satellite network, to bring the best possible Internet experience to rural Canadians."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-xplore-dark mb-4">
            Decades of Rural Internet Expertise
          </h2>
          <p className="text-xplore-gray leading-relaxed mb-4">
            Rural Internet is not an afterthought for us, it's our main focus! Xplore was founded 20 years ago,
            with the goal of providing Internet connectivity to Canadians in small towns, rural and remote communities.
          </p>
          <p className="text-xplore-gray leading-relaxed">
            Since then, we have grown to become the country's largest independent rural Internet provider.
            We are rapidly expanding our gigabit Fibre and ultra-fast 5G & 5G Ultra Wireless Home Internet
            coverage to more areas every day.
          </p>
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${tech.gradient}`} />
              <div className="p-8">
                <h3 className="text-xl font-bold text-xplore-dark mb-3">{tech.title}</h3>
                <p className="text-xplore-gray mb-4">{tech.description}</p>
                <Button to={tech.to} variant="secondary" size="sm">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
