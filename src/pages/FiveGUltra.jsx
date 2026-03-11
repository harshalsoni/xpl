import { Zap, Gauge, Shield, Wifi, Download, Gamepad2, Monitor, Users } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import CTABanner from '../components/sections/CTABanner';
import { fiveGUltraFAQ } from '../data/faq/fiveGUltra';

const features = [
  { icon: Zap, title: 'Incredibly Fast!', description: 'Up to 10 times faster download & upload speeds.' },
  { icon: Gauge, title: 'Ultra-low Latency', description: 'Amazing response times in games and browsing.' },
  { icon: Shield, title: 'Higher Capacity', description: 'More reliable coverage in rural & small-town communities.' },
];

const benefits = [
  { icon: Download, title: 'Truly Unlimited Data & Video Streaming', description: 'No data caps, no throttling, ever! Unlike some ISPs, we do not constrain your video viewing experience.' },
  { icon: Gauge, title: 'Incredible Speeds and Latency', description: '5G Ultra uses the most advanced 5G technology, bringing blazing-fast speeds and lower latency for streaming, video calling, and gaming.' },
  { icon: Users, title: 'Professional Installation and Truly Local Support', description: 'Our local professional technicians will install the equipment and our 24/7, Canadian-based support staff will help with troubleshooting.' },
  { icon: Wifi, title: 'Great WiFi - Included', description: 'Our latest Wi-Fi 6 Router is included with our 5G Ultra Plans for a strong, secure wireless connection throughout your entire home.' },
];

export default function FiveGUltra() {
  return (
    <div>
      <HeroSection
        title="The Ultimate 5G Home Internet"
        description="Xplore is bringing 5G Ultra, the fastest wireless Internet technology, to rural and small-town Canada. Enabling incredible speeds up to 500Mbps and unlimited data."
        ctaText="Check Availability"
        ctaHref="#lookup"
        bgColor="bg-gradient-to-br from-xplore-dark to-xplore-dark-deep"
        bgImage="/images/hero-5g-ultra.svg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-4">
            BIG Speeds for Small-Town Canada!
          </h2>
          <p className="text-center text-xplore-gray max-w-3xl mx-auto mb-12">
            Xplore 5G Ultra Internet brings fibre-like speeds to homes in rural & small-town Canada.
            Powered by 5G+, the most advanced & fastest wireless Internet technology, it enables even faster
            upload and download speeds, a more responsive connection, and a better overall online experience.
          </p>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-12">
            Why Choose Xplore 5G Ultra Home Internet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-xplore-green-light flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xplore-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xplore-dark mb-2">{benefit.title}</h3>
                      <p className="text-sm text-xplore-gray">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speed comparison table */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-8">
            Xplore Wireless Technologies Compared
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-xplore-green text-white">
                  <th className="py-3 px-4 text-left">Service</th>
                  <th className="py-3 px-4 text-center">Speed (Up To)</th>
                  <th className="py-3 px-4 text-center">Latency</th>
                  <th className="py-3 px-4 text-center">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">LTE / 4G</td>
                  <td className="py-3 px-4 text-center">25-100 Mbps</td>
                  <td className="py-3 px-4 text-center">Moderate</td>
                  <td className="py-3 px-4 text-center text-sm text-xplore-gray">Entry-level fixed wireless</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">5G</td>
                  <td className="py-3 px-4 text-center">50-100 Mbps</td>
                  <td className="py-3 px-4 text-center">Low</td>
                  <td className="py-3 px-4 text-center text-sm text-xplore-gray">Faster, more consistent</td>
                </tr>
                <tr className="bg-xplore-green-light">
                  <td className="py-3 px-4 font-bold text-xplore-green">5G Ultra</td>
                  <td className="py-3 px-4 text-center font-bold">250-500 Mbps</td>
                  <td className="py-3 px-4 text-center font-bold">Very Low</td>
                  <td className="py-3 px-4 text-center text-sm font-medium text-xplore-green">Fibre-like performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion items={fiveGUltraFAQ} />
      <TestimonialCarousel />

      <CTABanner
        title="Get 5G Ultra Home Internet!"
        ctaText="Check Availability"
        ctaHref="#lookup"
      />
    </div>
  );
}
