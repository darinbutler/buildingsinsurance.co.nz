import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Buildings Insurance Blog NZ | Guides & Insights',
  description: 'Expert guides and insights on buildings insurance in New Zealand. Learn about coverage, costs, and protection for your property.',
  openGraph: {
    title: 'Buildings Insurance Blog NZ | Guides & Insights',
    description: 'Expert guides and insights on buildings insurance in New Zealand.',
    images: ['https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop'],
  },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Home Insurance': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  'Landlord': { bg: 'bg-sky-100', text: 'text-sky-700' },
  'Claims': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'Coverage': { bg: 'bg-violet-100', text: 'text-violet-700' },
  'NZ Market': { bg: 'bg-slate-100', text: 'text-slate-700' },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?w=1920&h=900&fit=crop"
          alt="New Zealand suburban homes and neighbourhood"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Buildings Insurance Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 text-center max-w-2xl">
            Expert guides, insights, and everything you need to know about protecting your New Zealand property
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const categoryStyle = categoryColors[post.category] || categoryColors['Coverage'];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-100 to-sky-100">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-slate-400">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-4 border-t pt-4">
                        <div className="flex items-center gap-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-NZ', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        {post.readingTime && (
                          <span>{post.readingTime} min read</span>
                        )}
                      </div>

                      {/* Read More Link */}
                      <div className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 flex items-center gap-1">
                        Read More <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* No Posts Message */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated with Insurance Insights
          </h2>
          <p className="text-emerald-50 mb-8">
            Get the latest updates on buildings insurance trends and expert advice delivered to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
