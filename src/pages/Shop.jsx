import { Wifi, Phone, Router, Shield, Gift } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Card from '../components/ui/Card';

const products = [
  { icon: Wifi, title: 'Internet Packages', description: 'Our combined network of fixed-wireless towers, fibre optics and satellite provides coverage across rural Canada.', to: '/shop/internet-packages' },
  { icon: Phone, title: 'Home Phone', description: 'Discover why more Canadians are cutting the cord to their traditional landline services to save with Xplore Home Phone.', to: '/shop/new-xplore-home-phone' },
  { icon: Router, title: 'Wi-Fi Solutions', description: 'Update your router or get Whole Home Wi-Fi for incredible range, speeds, and security.', to: '/shop/wifi-solutions' },
  { icon: Shield, title: 'Xtra Care Warranty', description: 'Get peace of mind with Xtra Care warranty coverage for your Xplore equipment.', to: '/shop/xtra-care' },
  { icon: Gift, title: 'Refer a Friend', description: 'Invite your friends to try Xplore Internet and get bill credits for both of you!', to: '/shop/refer-a-friend' },
];

export default function Shop() {
  return (
    <div>
      <HeroSection
        title="Do More with Fast, Reliable Internet from Xplore"
        description="Whatever your passions are, Xplore gives your whole household Internet service with the speed and reliability they need to do more."
        size="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Shop Our Products and Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-xplore-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-xplore-dark mb-4">Our Customer Values</h2>
          <p className="text-xplore-gray leading-relaxed">
            We value the connectivity needs of our customers above all else which is why we are reachable at any time,
            any day of the year by phone or email for support. Our customers need the best online experience possible
            so we never stop innovating and improving on our network's capabilities. Our entire customer support team
            is Canadian-based, includes fully bilingual agents and are highly trained to find the broadband solutions
            you are looking for.
          </p>
        </div>
      </section>
    </div>
  );
}
