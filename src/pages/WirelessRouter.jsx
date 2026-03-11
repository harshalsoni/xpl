import { Router, Wifi, Shield, Usb, Users, Zap } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';

const features = [
  { icon: Wifi, title: 'More Reliable Wi-Fi', description: 'An external router antenna improves network range and signal.' },
  { icon: Shield, title: 'Protect Your Family', description: 'Web-blocking and time restriction abilities to keep your kids safe.' },
  { icon: Usb, title: 'USB Ports', description: 'Connect a drive to the router and access its files from any network device.' },
  { icon: Zap, title: 'Wi-Fi Protected Setup', description: 'Instantly connect pre-authorized devices without having to enter a password.' },
  { icon: Users, title: 'Plug and Play', description: 'Devices on the network can communicate with each other to share files or print documents.' },
  { icon: Router, title: '24/7 Technical Support', description: 'Our Technical Support team is available 24/7/365 to answer any questions.' },
];

export default function WirelessRouter() {
  return (
    <div>
      <HeroSection
        title="Wireless Router"
        description="Update your old router and enjoy incredible range and speeds, security features, and ease of use."
        size="md"
        bgColor="bg-gradient-to-br from-gray-700 to-gray-900"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-12 bg-xplore-green-light">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Only $6/month</h2>
          <p className="text-xplore-gray">The perfect addition to your high-speed Internet, shipped directly to your home with no additional cost.</p>
        </div>
      </section>
    </div>
  );
}
