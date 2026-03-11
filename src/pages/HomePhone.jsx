import { Phone, DollarSign, Shield, Globe } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';

const features = [
  { icon: DollarSign, title: 'Save Money', description: 'Cut the cord from your traditional landline and save with affordable VoIP home phone service.' },
  { icon: Globe, title: 'Unlimited Canada-Wide Calling', description: 'Call anywhere in Canada with unlimited minutes included in your plan.' },
  { icon: Shield, title: 'Reliable Service', description: 'Crystal clear calls powered by your Xplore Internet connection.' },
  { icon: Phone, title: 'Keep Your Number', description: 'Transfer your existing phone number to Xplore Home Phone at no extra cost.' },
];

const faq = [
  { question: 'How does Xplore Home Phone work?', answer: 'Xplore Home Phone uses Voice over Internet Protocol (VoIP) technology. Your voice is converted into digital signals that are transmitted over the Internet.' },
  { question: 'Can I keep my existing phone number?', answer: 'Yes! You can transfer your existing phone number to Xplore Home Phone. Contact us to arrange the transfer.' },
  { question: 'Is VoIP phone easy to set up?', answer: 'Yes, VoIP phones are generally plug-and-play. You can easily set up Xplore Home Phone with the provided equipment.' },
  { question: 'Does it include long distance?', answer: 'Xplore Home Phone plans include unlimited calling within Canada. International calling rates apply for calls outside Canada.' },
];

export default function HomePhone() {
  return (
    <div>
      <HeroSection
        title="Xplore Home Phone"
        description="Save money with affordable VoIP home phone service. Unlimited Canada-wide calling included."
        size="md"
        bgColor="bg-gradient-to-br from-xplore-dark to-xplore-green-dark"
        bgImage="/images/hero-home-phone.svg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Why Choose Xplore Home Phone?
          </h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <FAQAccordion items={faq} />

      <section className="py-12 bg-xplore-green text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Get Xplore Home Phone</h2>
          <p className="text-lg opacity-90 mb-4">Call today to add Home Phone to your Xplore Internet service.</p>
          <a href="tel:18776053106" className="inline-flex items-center gap-2 bg-white text-xplore-green font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors no-underline">
            <Phone size={20} /> 1-877-605-3106
          </a>
        </div>
      </section>
    </div>
  );
}
