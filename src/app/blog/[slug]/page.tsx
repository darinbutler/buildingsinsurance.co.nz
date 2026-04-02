import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Buildings Insurance Blog NZ`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image || ''],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Home Insurance': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  'Landlord': { bg: 'bg-sky-100', text: 'text-sky-700' },
  'Claims': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'Coverage': { bg: 'bg-violet-100', text: 'text-violet-700' },
  'NZ Market': { bg: 'bg-slate-100', text: 'text-slate-700' },
};

const resourceCards = [
  {
    id: 'coverage-guide',
    title: 'Coverage Guide',
    subtitle: 'Understand what\'s covered',
    icon: '📋',
    color: 'from-emerald-500 to-emerald-600',
    href: '#coverage',
  },
  {
    id: 'compare-insurers',
    title: 'Compare Insurers',
    subtitle: 'Find the best rates',
    icon: '⚖️',
    color: 'from-sky-500 to-sky-600',
    href: '#compare',
  },
  {
    id: 'faq',
    title: 'FAQ',
    subtitle: 'Common questions answered',
    icon: '❓',
    color: 'from-amber-500 to-amber-600',
    href: '#faq',
  },
  {
    id: 'about-us',
    title: 'About Us',
    subtitle: 'Our story and mission',
    icon: '🏢',
    color: 'from-violet-500 to-violet-600',
    href: '/about',
  },
];

const regulatoryBodies = [
  { name: 'Insurance Council of NZ', abbr: 'ICNZ', href: 'https://www.icnz.org.nz' },
  { name: 'Earthquake Commission', abbr: 'EQC', href: 'https://www.eqc.govt.nz' },
  { name: 'Building Performance NZ', abbr: 'BPNZ', href: 'https://www.building.govt.nz' },
  { name: 'Insurance & Financial Services Ombudsman', abbr: 'IFSO', href: 'https://www.ifso.nz' },
  { name: 'Financial Markets Authority', abbr: 'FMA', href: 'https://www.fma.govt.nz' },
];

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categoryStyle = categoryColors[post.category] || categoryColors['Coverage'];
  const authorInitial = post.author.charAt(0).toUpperCase();

  // Get related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <img
          src={post.image ? post.image.replace('w=800&h=450', 'w=1920&h=900') : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=900&fit=crop'}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/80" />

        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors w-fit"
          >
            <span>←</span> Back to Blog
          </Link>

          {/* Content */}
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text}`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm sm:text-base">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-white font-bold`}>
                  {authorInitial}
                </div>
                <span>{post.author}</span>
              </div>

              {/* Date */}
              <div>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-NZ', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Reading Time */}
              {post.readingTime && (
                <div>{post.readingTime} min read</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10">
                {/* Content */}
                <div className="prose prose-lg max-w-none prose-a:text-emerald-600 prose-a:font-semibold hover:prose-a:text-emerald-700 [&_a[target='_blank']]:after:content-['_↗']">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Share this article</h3>
                  <div className="flex gap-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span>f</span> Facebook
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span>in</span> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {authorInitial}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{post.author}</h4>
                    <p className="text-slate-700 mb-4">
                      Insurance expert with extensive knowledge of New Zealand property protection and buildings insurance coverage.
                    </p>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                      View More Articles →
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar - 1/3 */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 sticky top-8">
                {/* Quick Quote CTA */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="text-lg font-bold mb-2">Quick Quote</h3>
                  <p className="text-emerald-50 text-sm mb-4">
                    Get an instant quote for your buildings insurance needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Related Posts</h3>
                    <div className="space-y-3">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block p-3 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors group"
                        >
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 line-clamp-2">
                            {relatedPost.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString('en-NZ', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources Cards */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Resources</h3>
                  <div className="space-y-3">
                    {resourceCards.map((resource) => (
                      <Link
                        key={resource.id}
                        href={resource.href}
                        className={`block p-4 rounded-lg bg-gradient-to-br ${resource.color} text-white hover:shadow-lg transition-all hover:-translate-y-1`}
                      >
                        <div className="text-2xl mb-2">{resource.icon}</div>
                        <h4 className="font-bold">{resource.title}</h4>
                        <p className="text-xs opacity-90">{resource.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Regulatory Bodies */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">NZ Regulatory Bodies</h3>
                  <div className="space-y-2">
                    {regulatoryBodies.map((body) => (
                      <a
                        key={body.abbr}
                        href={body.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-emerald-500 rounded text-xs font-bold">
                            {body.abbr}
                          </span>
                          <span className="text-sm font-semibold group-hover:text-emerald-300">{body.name}</span>
                        </div>
                        <span className="text-slate-400 group-hover:text-emerald-300">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-2">
            Ready to Protect Your Property?
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Get a free quote tailored to your buildings insurance needs.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'BuildingsInsurance.co.nz',
              logo: {
                '@type': 'ImageObject',
                url: 'https://buildingsinsurance.co.nz/logo.png',
              },
            },
          }),
        }}
      />
    </main>
  );
}
