import { Pause, Infinity, Users, MapPin, Wifi, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import { cottageFAQ } from '../data/faq/cottage';

const benefits = [
  { icon: Pause, title: 'Seasonal Service Pause', description: 'Pause your Internet for up to 6 months when you don\'t use your cottage.' },
  { icon: Infinity, title: 'Unlimited Usage', description: 'Our Wireless and Fibre plans have truly unlimited usage with no data caps.' },
  { icon: Users, title: 'Truly Local Service', description: 'There is always a technician near you for installation and support.' },
  { icon: MapPin, title: 'Rural Internet Expertise', description: 'We specialize in connecting locations off the beaten path. Our focus is on rural and remote areas.' },
  { icon: Wifi, title: 'Whole Home Wi-Fi', description: 'Get extra Wi-Fi pods for a strong secure connection across your property.' },
];

const techOptions = [
  {
    title: '100% Pure Fibre Internet',
    description: 'Xplore Fibre is now available in select regions. Get up to Gigabit speeds and an ultra-reliable connection!',
    to: '/fibre',
  },
  {
    title: 'Ultra-fast Wireless Home Internet',
    description: 'Ultra-fast wireless home Internet with speeds up to 500 Mbps and truly unlimited usage.',
    to: '/5gultra',
  },
  {
    title: 'Next-Generation Satellite Internet',
    description: 'Get ultra-fast speeds up to 100Mbps with Unlimited Usage (500 GB at max speed).',
    to: '/satellite-internet-canada',
  },
];

export default function Cottage() {
  return (
    <div>
      <HeroSection
        title="Ultra-fast Internet at the Cottage"
        description="With our upgraded networks, Xplore is the perfect choice for your cottage connection. Up to 500 Mbps 5G Ultra and up to 1 Gbps pure fibre Internet available."
        ctaText="Check Availability"
        ctaHref="#lookup"
        bgColor="bg-gradient-to-br from-emerald-600 to-cyan-700"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-xplore-dark mb-4">
            Stay Connected at the Cottage
          </h2>
          <p className="text-xplore-gray mb-4">
            With our upgraded networks, you no longer have to worry about beating cottage traffic to get home
            for your Monday morning meeting. Ultra-fast Internet from Xplore gives you the speed you need to
            work, stream and everything in between.
          </p>
          <p className="text-xplore-green font-medium">
            Already an Xplore customer? Activate Internet at your cottage and receive a $100 bill credit!
          </p>
        </div>
      </section>

      <section className="py-12 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Why Xplore at the Cottage?
          </h2>
          <FeatureGrid features={benefits} columns={3} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Upgraded Networks in Cottage Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xplore-dark mb-3">{option.title}</h3>
                <p className="text-sm text-xplore-gray mb-4">{option.description}</p>
                <Button to={option.to} variant="secondary" size="sm">Check Availability</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={cottageFAQ} title="Frequently Asked Questions (FAQs) for Cottage Internet" />
    </div>
  );
}
