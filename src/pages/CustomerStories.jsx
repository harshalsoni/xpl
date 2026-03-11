import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';

const stories = [
  {
    title: 'How Xplore Rural Internet Powers this Lacombe, Alberta Miniature Horse Farm',
    excerpt: 'Craig Cline\'s enchanting miniature horse farm on the North Shore of Gull Lake runs on Xplore.',
    slug: 'miniature-horse-farm',
  },
  {
    title: 'This Silicon Valley Executive is Working from His Fibre-Connected Cottage in Rural Quebec',
    excerpt: 'Warren Dumanski has lived and worked across North America, but he always returned to his cottage at Otter Lake.',
    slug: 'silicon-valley-executive-cottage',
  },
  {
    title: "How Xplore's Fixed Wireless Home Internet is Changing One Rural Saskatchewanian's Life",
    excerpt: '"Do you hear that? Thanks to Xplore we can stream TV now!" said Andy Froneman.',
    slug: 'rural-saskatchewanian',
  },
];

const communityItems = [
  {
    title: 'Connect to the Future',
    description: 'Our program in Manitoba gave students a head start by providing them with technology to succeed.',
  },
  {
    title: 'Library Tech Clubs',
    description: 'In Sundre, Alberta, our support for library tech clubs helps students gain valuable skills.',
  },
  {
    title: 'Historic Lighthouse Restoration',
    description: 'From revitalizing historic lighthouses to supporting local sports teams, our commitment is unwavering.',
  },
];

export default function CustomerStories() {
  return (
    <div>
      <HeroSection
        title="What Our Customers Are Saying"
        description="Xplore is supporting rural living with quality Internet connectivity and constant community involvement."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-xplore-dark mb-4">
            Changing Rural Canadians' Lives, One Connection at a Time
          </h2>
          <p className="text-xplore-gray leading-relaxed mb-4">
            By providing quality Internet to underserved areas, we are empowering families to get the most out of
            life in rural Canada. A fast and reliable Xplore Internet connection keeps you close to loved ones,
            enables you to work & innovate from home and enjoy the best of entertainment.
          </p>
          <p className="text-xplore-gray leading-relaxed">
            Xplore is also an active supporter of local community initiatives and charities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-4">Community Involvement</h2>
          <p className="text-center text-xplore-gray mb-10">
            Xplore is an active supporter of local community initiatives and charities across Canada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-xplore-dark mb-2">{item.title}</h3>
                <p className="text-sm text-xplore-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-xplore-dark mb-10">Xplore Community Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xplore-dark mb-3 leading-snug">{story.title}</h3>
                <p className="text-sm text-xplore-gray mb-4">{story.excerpt}</p>
                <Link to="/blog" className="text-xplore-green text-sm font-medium no-underline hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </div>
  );
}
