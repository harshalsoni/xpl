import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import { blogPosts, blogCategories } from '../data/blogPosts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <HeroSection
        title="The Xplorer Blog"
        description="Carefully curated, our Xplorer blog celebrates the stories of our customers, how they use their Internet, and the impact Internet has on communities all across Canada."
        size="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-xplore-green text-white'
                    : 'bg-xplore-green-light text-xplore-dark hover:bg-xplore-green/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-xplore-green-light to-xplore-green/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-xplore-green bg-white px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-xplore-dark leading-snug mb-3 line-clamp-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-xplore-gray mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center text-xplore-green text-sm font-medium">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-xplore-gray py-12">
              No blog posts found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Footer info */}
      <section className="py-12 bg-xplore-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xplore-dark mb-2">News</h3>
              <p className="text-sm text-xplore-gray">
                Keep up to date with all the exciting projects happening at Xplore.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xplore-dark mb-2">About Us</h3>
              <p className="text-sm text-xplore-gray">
                Xplore Inc. is Canada's Fibre and 5G broadband company for rural living.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xplore-dark mb-2">Shop</h3>
              <p className="text-sm text-xplore-gray">
                Discover Internet packages and add-ons available in your area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
