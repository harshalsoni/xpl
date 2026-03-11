import { Zap, Infinity as InfinityIcon, Wifi, Smartphone, Settings, MapPin, Battery } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/sections/CTABanner';
import { fiveGGoFAQ } from '../data/faq/fiveGGo';

const features = [
  { icon: Zap, title: 'Fast Internet', description: 'Speeds up to 100 Mbps' },
  { icon: InfinityIcon, title: 'Truly Unlimited Data', description: 'No throttling' },
  { icon: Wifi, title: 'Fast WiFi', description: 'Using Wi-Fi 6' },
  { icon: Smartphone, title: 'Connect Many Devices', description: 'Up to 10 devices' },
  { icon: Settings, title: 'Easy to Install', description: 'Instant self-setup, plug & play' },
  { icon: MapPin, title: 'Portable', description: 'Take it with you to your cottage or travelling' },
  { icon: Battery, title: 'Battery Charging', description: '8000 mAh battery for powering on the go' },
];

export default function FiveGGo() {
  return (
    <div>
      <HeroSection
        title="Xplore 5G GO Hub"
        description="Get powerful 5G Internet that moves with you. Speeds up to 100 Mbps available."
        ctaText="Order Now"
        ctaHref="https://www.myxplore.ca/customers/s/xplore-5g-go-purchase?language=en_US"
        bgColor="bg-gradient-to-br from-cyan-600 to-blue-800"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-xplore-dark mb-4">
            A Flexible Solution for Your Internet Needs
          </h2>
          <p className="text-xplore-gray mb-12">
            5G GO Hub is a portable modem & router that connects to Xplore's 5G Internet network
            and provides powerful Wi-Fi for your devices.
          </p>
        </div>
      </section>

      <section className="py-12 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Xplore 5G GO Hub Features
          </h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-8">
            5G GO Hub Unlimited Internet Plan
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-xplore-green text-white text-center py-4">
              <h3 className="text-xl font-bold">Xplore 5G GO Hub</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-xplore-gray">Monthly Service Fee</span>
                <span className="font-bold text-xplore-dark text-xl">$119.99</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-xplore-gray">Download Speed (up to)</span>
                <span className="font-bold text-xplore-dark">100 Mbps</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-xplore-gray">Upload Speed (up to)</span>
                <span className="font-bold text-xplore-dark">10 Mbps</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-xplore-gray">Data</span>
                <span className="font-bold text-xplore-green">Truly Unlimited</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-xplore-gray">Device Fee</span>
                <span className="font-bold text-xplore-dark">$179</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={fiveGGoFAQ} />

      <CTABanner
        title="Get Flexible Internet on the Go"
        ctaText="Order Now"
        ctaHref="https://www.myxplore.ca/customers/s/xplore-5g-go-purchase?language=en_US"
      />
    </div>
  );
}
