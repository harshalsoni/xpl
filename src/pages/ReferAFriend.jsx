import { Gift, Heart, MapPin, Shield, Infinity as InfinityIcon, Users } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import FeatureGrid from '../components/ui/FeatureGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';

const reasons = [
  { icon: Heart, title: 'You\'re Happy with Our Service', description: 'If not, get in touch and we\'ll make it right. If yes, spread that good Internet and get the bill credit.' },
  { icon: MapPin, title: 'Built for Canadians, by Canadians', description: 'We have proudly provided Internet in rural communities for over 20 years through 100% Canadian-based employees.' },
  { icon: Users, title: 'Expertise Beyond the Big Cities', description: 'Xplore has offered service outside urban areas for more than 20 years. We\'re expanding Fibre and 5G networks.' },
  { icon: Shield, title: '30-Day Satisfaction Guarantee', description: 'Try Xplore worry-free. If you aren\'t completely satisfied, you will get your money back.' },
  { icon: InfinityIcon, title: 'Truly Unlimited Data', description: 'Our Wireless Home Internet plans offer truly unlimited data - no data cap, and your speed stays at maximum.' },
];

const faq = [
  { question: 'What do I need to refer a friend?', answer: 'You will need to use the email associated with your Xplore account and your account number.' },
  { question: 'Where can I find my account information?', answer: 'Check your invoices/billing communications from Xplore, your contract or printed bills, by logging into MyXplore, or call 1-888-514-3675.' },
];

export default function ReferAFriend() {
  return (
    <div>
      <HeroSection
        title="Refer a Friend with 2X Rewards This Spring"
        description="Share the joy of amazing home Internet and get a $100 bill credit for you and $100 for your friend for a limited time!"
        ctaText="Start Referring"
        ctaHref="https://refer.xplore.ca"
        bgColor="bg-gradient-to-br from-amber-500 to-orange-600"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-xplore-dark mb-4">
            Earn $100 for Each Friend You Refer!
          </h2>
          <p className="text-xplore-gray mb-6">
            Double rewards until April 30, 2026! Invite your friends to try Xplore Internet and for every friend
            that signs up you get a $100 bill credit and they get a $100 bill credit too.
            Refer more, get more, there's no limit!
          </p>

          <div className="bg-xplore-green-light rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xplore-dark mb-4">How it Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-xplore-green text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
                <p className="text-sm text-xplore-gray">Get your unique referral link</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-xplore-green text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
                <p className="text-sm text-xplore-gray">Share through email or social media</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-xplore-green text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
                <p className="text-sm text-xplore-gray">Get $100 credit when they sign up!</p>
              </div>
            </div>
          </div>
          <Button href="https://refer.xplore.ca">Start Referring</Button>
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">
            Why Your Friends Would Love Xplore
          </h2>
          <FeatureGrid features={reasons} columns={3} />
        </div>
      </section>

      <FAQAccordion items={faq} />
    </div>
  );
}
