import { Shield, DollarSign, Wrench } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';

const features = [
  { icon: Shield, title: 'Stay Protected', description: "You are in safe hands if something were to go wrong. Coverage for expenses associated with service visits that may be required." },
  { icon: DollarSign, title: 'Enjoy Affordability', description: "Get a full year of protection for less than the cost of a single service visit. It's only $7.50/month." },
  { icon: Wrench, title: 'Peace of Mind', description: 'After your standard warranty expires, Xtra Care keeps you covered for equipment issues and service calls.' },
];

export default function XtraCare() {
  return (
    <div>
      <HeroSection
        title="Xtra Care Warranty"
        description="Get peace of mind with Xtra Care warranty coverage. Protection for your Xplore equipment after your standard warranty expires."
        size="md"
        bgColor="bg-gradient-to-br from-amber-600 to-orange-700"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Stay Protected with Xtra Care
          </h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-12 bg-xplore-green-light">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-xplore-dark mb-2">Only $7.50/month</h2>
          <p className="text-xplore-gray">Less than the cost of a single service visit. A full year of protection and peace of mind.</p>
        </div>
      </section>
    </div>
  );
}
