import { Building2, Zap, Shield, Phone } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import Button from '../components/ui/Button';

const features = [
  { icon: Building2, title: 'Custom-built Business Connectivity', description: 'Dedicated Internet designed based on your specific requirements.' },
  { icon: Zap, title: 'Faster Speeds', description: 'Experience 100 Mbps business Internet with our upgraded fixed wireless network!' },
  { icon: Shield, title: 'Protect Your Business', description: 'An unexpected Internet outage can slow your business down. A reliable backup solution keeps you connected.' },
];

export default function Business() {
  return (
    <div>
      <HeroSection
        title="Xplore Business Internet"
        description="Custom-built business connectivity solutions designed based on your specific requirements."
        bgColor="bg-gradient-to-br from-xplore-dark to-xplore-dark-deep"
        bgImage="/images/hero-business.svg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Business Internet Solutions
          </h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-xplore-dark mb-4">
              Connectivity Solutions for Your Business
            </h2>
            <p className="text-xplore-gray mb-6">
              Xplore offers dedicated Internet solutions for businesses of all sizes across rural Canada.
              Our business-grade connectivity ensures your operations run smoothly with reliable, high-speed Internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:18556387381">
                <Phone size={18} className="mr-2" /> Call 1-855-638-7381
              </Button>
              <Button to="/contact-us" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
