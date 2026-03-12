import { Wifi, Zap, Satellite } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Button from '../components/ui/Button';
import AddressLookup from '../components/ui/AddressLookup';

const packageTypes = [
  {
    icon: Zap,
    title: 'Fibre Internet',
    speed: 'Up to 1 Gbps',
    description: 'The fastest Internet technology available. 100% pure fibre optic connection all the way to your home.',
    features: ['Gigabit speeds', 'Truly unlimited data', 'Ultra-low latency', 'Future-proof technology'],
    to: '/fibre',
    gradient: 'from-xplore-green to-xplore-green-dark',
  },
  {
    icon: Wifi,
    title: '5G Ultra / 5G / LTE Wireless',
    speed: 'Up to 500 Mbps',
    description: 'Fast and stable Internet using radio signals, suitable for many rural locations. Now with 5G Ultra!',
    features: ['Speeds up to 500 Mbps', 'Truly unlimited data', 'No throttling', 'Professional installation'],
    to: '/5gultra',
    gradient: 'from-xplore-dark to-xplore-green-dark',
  },
  {
    icon: Satellite,
    title: 'Satellite Internet',
    speed: 'Up to 100 Mbps',
    description: "Works by transmitting data between a satellite in space and a dish at your home. Available almost everywhere.",
    features: ['Up to 100 Mbps', '500 GB at max speeds', 'Canada-wide coverage', 'Professional installation'],
    to: '/satellite-internet-canada',
    gradient: 'from-xplore-dark-deep to-xplore-dark',
  },
];

export default function InternetPackages() {
  return (
    <div>
      <HeroSection
        title="Internet Packages"
        description="Find the best Internet plan available at your home. Our combination of fibre, 5G Ultra and satellite networks deliver coverage across rural Canada."
        size="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-4">
            Check What's Available at Your Address
          </h2>
          <p className="text-center text-xplore-gray mb-8">
            Enter your address below to see which Internet packages are available in your area.
          </p>
          <AddressLookup />
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Our Internet Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageTypes.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${pkg.gradient}`} />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-xplore-green-light flex items-center justify-center mb-4">
                      <Icon className="text-xplore-green" size={24} />
                    </div>
                    <h3 className="font-bold text-xplore-dark text-lg mb-1">{pkg.title}</h3>
                    <p className="text-xplore-green font-bold text-sm mb-3">{pkg.speed}</p>
                    <p className="text-xplore-gray text-sm mb-4">{pkg.description}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-xplore-gray">
                          <span className="w-1.5 h-1.5 bg-xplore-green rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button to={pkg.to} variant="secondary" size="sm">Learn More</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
