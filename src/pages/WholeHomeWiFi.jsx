import { Home, Wifi, Shield, Smartphone, Phone as PhoneIcon, Zap } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';

const features = [
  { icon: Wifi, title: 'Total Coverage', description: 'Minimizes Wi-Fi dead zones with strategic cube locations throughout your home.' },
  { icon: Home, title: 'Smart-Home Friendly', description: 'Accommodates and streamlines Internet-managed smart devices.' },
  { icon: PhoneIcon, title: '24/7 Technical Support', description: 'Access 24/7/365 to our highly trained 100% Canadian-based technical support team.' },
  { icon: Smartphone, title: 'Easy to Manage', description: 'Whole Home Wi-Fi smartphone app makes it easy to manage your network remotely.' },
  { icon: Shield, title: 'Reliability', description: 'Units manage network systems by routing path changes to create the strongest connection.' },
  { icon: Zap, title: 'High Performance', description: 'Enjoy fast, consistent Wi-Fi speeds in every room of your home.' },
];

export default function WholeHomeWiFi() {
  return (
    <div>
      <HeroSection
        title="Whole Home Wi-Fi"
        description="Get complete Wi-Fi coverage throughout your entire home. No more dead zones!"
        size="md"
        bgColor="bg-gradient-to-br from-blue-600 to-indigo-700"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-12 bg-xplore-green-light">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Only $10/month</h2>
          <p className="text-xplore-gray mb-2">No hardware to buy. No additional cost at your end.</p>
          <p className="text-xplore-gray">Whole Home Wi-Fi cubes shipped directly to your home.</p>
        </div>
      </section>
    </div>
  );
}
