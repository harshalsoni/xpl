import { Zap, Shield, Users } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/sections/CTABanner';
import { fibreFAQ } from '../data/faq/fibre';

const features = [
  {
    icon: Zap,
    title: 'Blazing-Fast, Both Ways',
    description: 'Blazing-fast Gigabit download & upload speeds. Superior video streaming at 4K resolution. Smooth video calls and online gaming. Download or upload files almost instantly.',
  },
  {
    icon: Shield,
    title: 'Powerful 100% Pure Fibre to Your Door',
    description: 'We bring fibre all the way to your home, so you still get the speed you need, even during peak usage times. Reliable and consistent connection in all weather conditions.',
  },
  {
    icon: Users,
    title: 'Truly Local Service',
    description: 'Your connection is installed and maintained by local technicians living in your community and your calls are answered by 100% Canadian based support.',
  },
];

export default function Fibre() {
  return (
    <div>
      <HeroSection
        title="Xplore 100% Pure Fibre is Here"
        description="We believe Canadians in rural communities deserve better, faster Internet. That's why we are deploying a 100% pure fibre Internet network, offering lightning-fast speeds at affordable prices."
        ctaText="Check Availability"
        ctaHref="#lookup"
        bgColor="bg-gradient-to-br from-xplore-green-dark to-xplore-dark"
        bgImage="/images/hero-fibre.svg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-4">
            Why Xplore Fibre?
          </h2>
          <p className="text-center text-xplore-gray max-w-3xl mx-auto mb-12">
            Fibre is currently the fastest Internet technology in the world. It uses Fibre Optic cables
            to move data at the speed of light giving you consistently fast download and upload speeds.
          </p>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <FAQAccordion items={fibreFAQ} />

      <CTABanner
        title="Get Xplore Fibre Internet"
        description="Check if 100% Pure Fibre is available at your address."
        ctaText="Check Availability"
        ctaHref="#lookup"
      />
    </div>
  );
}
