import { Zap, Infinity, Globe, Users } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import CTABanner from '../components/sections/CTABanner';

const features = [
  { icon: Zap, title: 'Up to 100 Mbps Speeds', description: 'Stream 4K videos, work, play and connect all your devices.' },
  { icon: Infinity, title: 'Unlimited Usage', description: "500 GB/month at max speeds and unlimited access thereafter. No overage charges, ever." },
  { icon: Globe, title: 'Enhanced Coverage', description: 'Great Internet, wherever you live across Canada.' },
  { icon: Users, title: 'Professional Install & Local Support', description: 'An Xplore technician from your community will install your service and make sure everything is set up correctly.' },
];

export default function Satellite() {
  return (
    <div>
      <HeroSection
        title="Next-Generation Satellite Internet"
        description="Powered by the JUPITER™3 satellite, the largest commercial satellite in the world, we're bringing next-generation satellite Internet services to more remote locations across Canada."
        ctaText="Check Availability"
        ctaHref="#lookup"
        bgColor="bg-gradient-to-br from-violet-700 to-purple-900"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-4">
            Satellite Internet Features
          </h2>
          <p className="text-center text-xplore-gray max-w-3xl mx-auto mb-12">
            With speeds up to 100 Mbps and the biggest high-speed data packages we've ever offered,
            this new technology is upgrading the way Canadians in rural communities connect to the world.
          </p>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-8">
            Why Choose Xplore Satellite?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xplore-dark mb-2">Coverage Everywhere</h3>
              <p className="text-xplore-gray text-sm">
                Satellite internet is available almost everywhere across Canada, making it perfect for remote
                locations where other technologies can't reach.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xplore-dark mb-2">Next-Generation Technology</h3>
              <p className="text-xplore-gray text-sm">
                Powered by the JUPITER™3 satellite, the largest commercial communications satellite ever built,
                delivering unprecedented capacity and coverage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xplore-dark mb-2">24/7 Canadian Support</h3>
              <p className="text-xplore-gray text-sm">
                Once you're set up, you'll have access to our 100% Canadian-based 24/7 technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Next-Generation Satellite Internet"
        description="Check if satellite internet is available at your address."
        ctaText="Check Availability"
        ctaHref="#lookup"
      />
    </div>
  );
}
