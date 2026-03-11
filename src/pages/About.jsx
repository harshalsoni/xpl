import { Newspaper, Briefcase, TrendingUp } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Card from '../components/ui/Card';

export default function About() {
  return (
    <div>
      <HeroSection
        title="About Us"
        description="Founded in small-town Canada, Xplore is dedicated to bringing fast, reliable Internet to Canadians in rural communities."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xplore-gray leading-relaxed mb-6">
            With our world-class fibre, wireless, and next-generation satellite infrastructure, combined with a
            network of local dealers and around-the-clock Canadian-based tech support, you get the Internet connection
            you need and the peace of mind knowing you're supported.
          </p>
          <p className="text-xplore-gray leading-relaxed mb-8">
            We are proud of our 100% Canadian-based operations, including our call centres, which are located in
            Woodstock and Fredericton, New Brunswick and Cornwall, Ontario. We also have offices in Markham, Ontario,
            Calgary and Edmonton, Alberta and Brandon, Manitoba.
          </p>

          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Our Mission & Values</h2>
          <p className="text-xplore-gray leading-relaxed mb-8">
            Xplore is committed to the relentless pursuit of an improved broadband experience for Canadians. In addition
            to providing next-generation satellite services, Xplore is building a world-class fibre and 5G wireless
            networks to enable innovative broadband services for better every day rural living, for today and future generations.
          </p>

          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Our History</h2>
          <p className="text-xplore-gray leading-relaxed mb-8">
            Xplore Inc. has proudly provided internet services to communities across Canada for over 20 years.
            Founded in Woodstock, New Brunswick, Xplore has become one of the country's largest telecommunications
            providers for residential and business customers in rural Canada.
          </p>

          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Our Workplace</h2>
          <p className="text-xplore-gray leading-relaxed">
            At Xplore we recognize that diversity in the workplace is essential to the success of connecting Canadians
            to what matters most. This has been woven into our values and core beliefs that integrity, trust, diversity
            and inclusion are essential to our success. We are committed to promoting a workplace where a person from
            any walk of life can bring their full self to the workplace and succeed.
          </p>
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Newspaper}
              title="News"
              description="Find out how Xplore is contributing to the future of broadband infrastructure in rural Canada."
              to="/about"
            />
            <Card
              icon={Briefcase}
              title="Careers"
              description="We are growing and always in search of top talent and passionate minds to join our team."
              to="/about"
            />
            <Card
              icon={TrendingUp}
              title="Investor Relations"
              description="Xplore is a private company that believes in investing in broadband solutions to serve rural Canadians."
              to="/about"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
