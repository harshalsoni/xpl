import { Globe, Users, Wifi, Package } from 'lucide-react';
import HeroCarousel from '../components/ui/HeroCarousel';
import Card from '../components/ui/Card';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import BlogPreview from '../components/sections/BlogPreview';
import Button from '../components/ui/Button';

const heroSlides = [
  {
    title: 'Spring Into Savings',
    description: 'Get FREE professional install when you sign up for any Fixed Wireless or Fibre Internet plan.',
    ctaText: 'Learn More',
    ctaTo: '/shop/internet-packages',
    bgColor: 'bg-gradient-to-br from-xplore-green to-emerald-700',
  },
  {
    title: '5G Ultra is here!',
    description: 'BIG Internet speeds for rural & small-town Canada. Get up to 10 times faster speeds with the latest fixed wireless Internet technology.',
    ctaText: 'Learn More',
    ctaTo: '/5gultra',
    bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-800',
  },
  {
    title: '100% Pure Fibre Internet is Now Available',
    description: 'Xplore Fibre is now available in select regions. Get Gigabit speeds and an ultra-reliable connection!',
    ctaText: 'Learn More',
    ctaTo: '/fibre',
    bgColor: 'bg-gradient-to-br from-xplore-green-dark to-teal-700',
  },
  {
    title: 'Ultra-fast Internet at the Cottage',
    description: 'Work, stream and everything in between, from your favourite place in the world. 5G Ultra & Pure Fibre gigabit plans now available.',
    ctaText: 'Cottage Internet',
    ctaTo: '/cottage',
    bgColor: 'bg-gradient-to-br from-emerald-600 to-cyan-700',
  },
  {
    title: 'Refer a Friend - Get Rewarded!',
    description: 'Double rewards this spring! Get a $100 bill credit for you and $100 for a friend you refer for a limited time.',
    ctaText: 'Start Referring',
    ctaTo: '/shop/refer-a-friend',
    bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
];

export default function Home() {
  return (
    <div>
      <HeroCarousel slides={heroSlides} />

      {/* Better, Faster Rural Internet */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-12">
            Better, Faster Rural Internet is Here!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Globe}
              title="Our Network"
              description="Bringing better, faster Internet beyond the big cities."
              to="/network"
            />
            <Card
              icon={Users}
              title="Experts in Rural Connectivity"
              description="Our network of local Xplore dealers and technicians are here to keep you connected."
              to="/experts-in-rural-connectivity"
            />
            <Card
              icon={Wifi}
              title="Our Customers"
              description="Read how Xplore Internet is improving day-to-day lives in Canadian communities."
              to="/connecting-rural-canadians"
            />
          </div>
        </div>
      </section>

      {/* Internet Packages CTA */}
      <section className="py-12 bg-xplore-green-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-xplore-green/10 flex items-center justify-center">
              <Package className="text-xplore-green" size={28} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-xplore-dark mb-3">Internet Packages</h2>
          <p className="text-xplore-gray mb-6">
            Get your household connected. Explore a variety of Internet packages and other services, like home phone, available in your area.
          </p>
          <Button to="/shop/internet-packages">Browse our packages</Button>
        </div>
      </section>

      {/* About section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-xplore-dark mb-4">
              Better, Faster Internet for Rural Canadians
            </h2>
            <p className="text-xplore-gray leading-relaxed mb-6">
              Through our investments in 100% pure fibre Internet, Wireless Home Internet with speeds up to 100 Mbps,
              and our Next-Generation Satellite Internet, we're proud to offer the connectivity you need to work, learn and play.
              But that's just the start — we're expanding and improving our network every day.
            </p>
            <h3 className="text-xl font-bold text-xplore-dark mb-3">About Us</h3>
            <p className="text-xplore-gray leading-relaxed mb-6">
              Founded in small-town Canada, Xplore is dedicated to bringing fast, reliable Internet to Canadians in rural communities.
              With our world-class fibre, wireless, and next-generation satellite infrastructure, combined with a network of local dealers
              and around-the-clock Canadian-based tech support, you get the Internet connection you need and the peace of mind knowing you're supported.
            </p>
            <p className="text-xplore-gray leading-relaxed mb-6">
              You can still find our head office in Woodstock, New Brunswick, where our agents are waiting for your call.
            </p>
            <Button to="/about" variant="secondary">Learn more</Button>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <BlogPreview />
    </div>
  );
}
