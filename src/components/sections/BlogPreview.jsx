import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 4);

  return (
    <section className="py-16 bg-xplore-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-10">
          The latest Xplore Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-xplore-green-light to-xplore-green/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-xplore-green bg-white px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xplore-dark text-sm leading-snug mb-2 line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-xs text-xplore-gray line-clamp-2">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xplore-green text-sm font-medium mt-3 no-underline hover:underline"
                >
                  Read More <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
