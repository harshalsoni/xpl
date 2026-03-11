import { Users, Heart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';

const dealerStories = [
  {
    title: "From Dial-Up Dreams to Ultra-Fast Internet Reality: Derek's Story",
    excerpt: 'A world where you\'re greeted with a wave, where days roll a bit slower, and everyone supports each other. This is everyday life in Cobourg, Ontario.',
    slug: 'from-dial-up-dreams',
  },
  {
    title: 'This Xplore Dealer is Keeping Kawartha Lakes Safe and Connected',
    excerpt: 'Volunteer firefighter and DOT Communications Owner, Ingo says people have been really excited about Xplore\'s new Wireless Home Internet.',
    slug: 'kawartha-lakes',
  },
  {
    title: 'High-Speed Rural Internet: The Synergy of Xplore and Integrated Solutions',
    excerpt: 'Integrated isn\'t just about delivering top-notch internet services; they\'re a cornerstone in their communities.',
    slug: 'integrated-solutions',
  },
];

export default function Experts() {
  return (
    <div>
      <HeroSection
        title="Your Experts in Rural Connectivity"
        description="A wide network of technicians and small businesses operating in your community, ready to serve your communication needs."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Truly Local. At Your Service.</h2>
          <p className="text-xplore-gray leading-relaxed mb-6">
            With Xplore there's always someone nearby, ready to pick up the phone or visit your home to help keep
            you connected. We are proud of our wide and growing network of dealers and technicians across rural Canada.
            It means no matter where you live, there's an Xplore support expert near you.
          </p>
          <p className="text-xplore-gray leading-relaxed">
            Xplore dealers are people and small businesses living and operating in your community — they are your
            friends and neighbors. Your Xplore Home Internet subscription helps your local economy, and you can rely
            on support from people you trust.
          </p>
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-xplore-green-light flex items-center justify-center">
                  <Heart className="text-xplore-green" size={20} />
                </div>
                <h3 className="font-bold text-xplore-dark">Community Impact</h3>
              </div>
              <p className="text-xplore-gray text-sm">
                Our dealers are local heroes bringing faster internet to their communities. In Northern Manitoba,
                reliable internet from Xplore has transformed lives, enabling better access to education and healthcare.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-xplore-green-light flex items-center justify-center">
                  <Briefcase className="text-xplore-green" size={20} />
                </div>
                <h3 className="font-bold text-xplore-dark">Supporting Local Businesses</h3>
              </div>
              <p className="text-xplore-gray text-sm">
                By choosing Xplore, you're supporting local businesses and helping to create jobs in your community.
                Our dealers are dedicated to providing excellent service while giving back through sponsorships and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">Dealer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dealerStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xplore-dark mb-3">{story.title}</h3>
                <p className="text-sm text-xplore-gray mb-4">{story.excerpt}</p>
                <Link to="/blog" className="text-xplore-green text-sm font-medium no-underline hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
