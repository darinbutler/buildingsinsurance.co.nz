import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'
import HowItWorks from '@/components/HowItWorks'
import QuoteForm from '@/components/QuoteForm'
import { faqs } from '@/data/faqs'
import {
  Home,
  Building2,
  Key,
  Building,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description:
    'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/' },
  openGraph: {
    title:
      'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
    description:
      'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
    url: 'https://buildingsinsurance.co.nz/',
  },
}

export default function HomePage() {
  const propertyTypes = [
    {
      id: 'residential',
      title: 'Residential Homes',
      description: 'Coverage for your family home with comprehensive protection',
      icon: Home,
      href: '/sectors/residential',
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings',
      description: 'Specialised cover for retail, offices and business premises',
      icon: Building2,
      href: '/sectors/commercial',
    },
    {
      id: 'landlords',
      title: 'Landlord Properties',
      description: 'Tailored landlord insurance for investment properties',
      icon: Key,
      href: '/sectors/landlords',
    },
    {
      id: 'bodyc',
      title: 'Body Corporate',
      description: 'Building cover for multi-unit residential complexes',
      icon: Building,
      href: '/sectors/body-corporate',
    },
  ]

  const whyFeatures = [
    {
      title: 'Natural Disaster Protection',
      description:
        'Protection against earthquake, flood, storm damage and other natural disasters common in New Zealand',
      items: ['Earthquake cover', 'Flood protection', 'Storm & wind damage'],
    },
    {
      title: 'Financial Security',
      description:
        'Ensure you can rebuild without financial hardship in case of a major incident',
      items: ['Rebuild cost coverage', 'Contents temporary accommodation', 'Mortgage requirements met'],
    },
    {
      title: 'Legal & Mortgage Requirements',
      description:
        'Satisfy banking covenants and body corporate obligations with compliant cover',
      items: ['Bank requirements satisfied', 'Body corporate obligations', 'Legal protection'],
    },
  ]

  const testimonials = [
    {
      name: 'Rachel M.',
      role: 'Homeowner',
      city: 'Auckland',
      quote:
        'After the earthquakes, I realised how important good buildings insurance is. This site helped me find the right cover for peace of mind.',
      stars: 5,
    },
    {
      name: 'David K.',
      role: 'Landlord',
      city: 'Wellington',
      quote:
        'As a landlord with multiple properties, comparing policies here saved me hundreds and ensured I had the right cover for each investment.',
      stars: 5,
    },
    {
      name: 'Sarah T.',
      role: 'Body Corporate Chair',
      city: 'Christchurch',
      quote:
        'Managing insurance for our complex building was difficult until I found this resource. Clear information and easy to compare options.',
      stars: 5,
    },
  ]

  const displayFaqs = faqs.slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Buildings Insurance Co.nz',
            url: 'https://buildingsinsurance.co.nz',
            description:
              'Compare buildings insurance quotes from leading NZ insurers',
            areaServed: 'NZ',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop"
            alt="Beautiful home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Protect Your Home with the Right Buildings Insurance
            </h1>
            <p className="mb-8 text-xl text-slate-200 sm:text-2xl">
              Compare quotes from New Zealand's leading insurers and find the perfect cover for your
              property.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#quote-form" className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg">
                Get a Free Quote
              </Link>
              <Link href="/compare" className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:shadow-lg">
                Compare Insurers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* How It Works */}
      <HowItWorks />

      {/* Property Types Section */}
      <section className="space-y-12 bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Buildings Insurance by Property Type
          </h2>
          <p className="text-lg text-slate-600">
            Find specialised cover tailored to your property and situation
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <Link
                key={type.id}
                href={type.href}
                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 transition-all group-hover:bg-emerald-100">
                  <IconComponent className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {type.title}
                </h3>
                <p className="mb-4 text-slate-600">{type.description}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all group-hover:gap-3">
                  Learn More <span className="text-lg">→</span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Buildings Insurance Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Why Buildings Insurance is Essential
            </h2>
            <p className="text-lg text-slate-600">
              Understand the critical importance of comprehensive buildings cover in New Zealand
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mb-6 text-slate-600">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Fact Callout */}
          <div className="mt-12 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 flex-shrink-0 text-emerald-600" />
              <div>
                <h4 className="mb-2 font-semibold text-slate-900">Key Fact About EQC</h4>
                <p className="text-slate-700">
                  The Earthquake Commission (EQC) covers natural disasters up to $300,000 plus GST for
                  residential properties. Most homeowners also need private insurance to cover amounts
                  above this threshold and additional protections not included in EQC cover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Trusted by NZ Homeowners
            </h2>
            <p className="text-lg text-slate-600">
              See what homeowners, landlords and body corporate chairs say about us
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 p-8 shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-slate-700">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-600">
                    {testimonial.role}, {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about buildings insurance in New Zealand
            </p>
          </div>

          <div className="space-y-4">
            {displayFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-slate-900 transition-all hover:bg-slate-50">
                  <span>{faq.q}</span>
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="border-t border-slate-200 px-6 py-4 text-slate-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all hover:gap-3"
            >
              View all FAQs <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white px-6 py-20 sm:px-12 lg:px-20 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-4xl font-bold text-slate-900">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-slate-600">
              Compare personalised quotes from top insurers in minutes
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
