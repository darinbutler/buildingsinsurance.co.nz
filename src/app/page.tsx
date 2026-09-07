import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'
import HowItWorks from '@/components/HowItWorks'
import QuoteForm from '@/components/QuoteForm'
import { faqs } from '@/data/faqs'
import {
  Shield,
  CheckCircle,
  Clock,
  Users,
  TrendingDown,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description:
    'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
  alternates: { canonical: 'https://www.buildingsinsurance.co.nz/' },
  openGraph: {
    title:
      'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
    description:
      'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
    url: 'https://www.buildingsinsurance.co.nz/',
  },
}

export default function HomePage() {
  const propertyTypes = [
    {
      id: 'residential',
      title: 'Residential Homes',
      description: 'Comprehensive cover for your family home — fire, flood, earthquake and more.',
      tag: 'Most Popular',
      tagColor: 'bg-emerald-500',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      href: '/sectors/residential',
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings',
      description: 'Specialist cover for offices, retail, and industrial premises — EQC doesn\'t apply.',
      tag: 'EQC Exempt',
      tagColor: 'bg-sky-600',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      href: '/sectors/commercial',
    },
    {
      id: 'landlords',
      title: 'Landlord Properties',
      description: 'Investment property cover including tenant damage and loss of rental income.',
      tag: 'Investors',
      tagColor: 'bg-violet-600',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      href: '/sectors/landlords',
    },
    {
      id: 'bodyc',
      title: 'Body Corporate',
      description: 'Mandatory building cover for unit title properties under the Unit Titles Act.',
      tag: 'Required by Law',
      tagColor: 'bg-amber-600',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
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

  const brokerBenefits = [
    {
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
      title: 'Matched to the Right Broker',
      body: 'We connect you with a licensed NZ adviser who specialises in your property type — residential, commercial, landlord, or body corporate.',
    },
    {
      icon: TrendingDown,
      color: 'bg-sky-100 text-sky-700',
      title: 'We Compare So You Don\'t Have To',
      body: 'Your adviser shops across the major NZ insurers to find the policy that fits your property and budget — no hours of research required.',
    },
    {
      icon: Clock,
      color: 'bg-violet-100 text-violet-700',
      title: 'Response Within 24 Hours',
      body: 'Submit your details once and hear back the same business day. No chasing, no call centres — a real person who knows NZ insurance.',
    },
    {
      icon: Shield,
      color: 'bg-amber-100 text-amber-700',
      title: 'Brokers We Trust',
      body: 'Every adviser in our network holds a Financial Advice Provider licence and is registered on the Financial Service Providers Register.',
    },
  ]

  const displayFaqs = faqs.slice(0, 6)

  return (
    <>
      {/* FAQPage schema — enables FAQ rich results in SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      {/* WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.buildingsinsurance.co.nz/',
            url: 'https://www.buildingsinsurance.co.nz/',
            name: 'Buildings Insurance NZ | Compare & Save',
            description: 'Compare buildings insurance quotes from NZ leading insurers. Get quotes, save time and money on your home insurance cover.',
            inLanguage: 'en-NZ',
            isPartOf: { '@id': 'https://www.buildingsinsurance.co.nz/#website' },
            about: { '@id': 'https://www.buildingsinsurance.co.nz/#organization' },
            publisher: { '@id': 'https://www.buildingsinsurance.co.nz/#organization' },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '82vh' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop"
            alt="Beautiful NZ home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/20" />
          {/* Fade to dark at the bottom so trust badges sit cleanly */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 pt-24 pb-36 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 text-sm font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NZ&apos;s Buildings Insurance Specialists
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Buildings Insurance<br className="hidden sm:block" /> Without the Fuss
            </h1>
            <p className="mb-8 text-base text-slate-200 sm:text-lg max-w-xl">
              Our hand-picked brokers compare NZ&apos;s top insurers for you — often saving up to 26%.
              No obligation, no hard sell. Just the right cover for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#quote-form" className="rounded-lg bg-emerald-500 px-8 py-3.5 font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:-translate-y-0.5 shadow-lg shadow-emerald-600/30">
                Get a Quote
              </Link>
              <Link href="/compare" className="rounded-lg border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white">
                Compare Insurers
              </Link>
            </div>
          </div>
        </div>

        {/* Trust badges — overlaid just above the page fold */}
        <div className="absolute bottom-0 inset-x-0 z-10 px-6 pb-6 sm:px-12 lg:px-20">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { icon: '✓', text: 'Hand-Picked NZ Brokers' },
              { icon: '✓', text: 'Save Up to 26%' },
              { icon: '✓', text: '$0 Broker Fees' },
              { icon: '✓', text: 'No Obligation' },
              { icon: '✓', text: 'Response Within 24 Hours' },
              { icon: '✓', text: '6 Major NZ Insurers' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white"
              >
                <span className="text-emerald-400 font-bold">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* How It Works */}
      <HowItWorks />

      {/* Property Types Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Buildings Insurance by Property Type
            </h2>
            <p className="text-lg text-slate-600">
              Find specialised cover tailored to your property and situation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((type) => (
              <Link
                key={type.id}
                href={type.href}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                style={{ minHeight: '320px' }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay - heavier at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />
                </div>

                {/* Tag */}
                <div className="relative z-10 p-5">
                  <span className={`inline-flex items-center rounded-full ${type.tagColor} px-3 py-1 text-xs font-bold text-white shadow`}>
                    {type.tag}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="relative z-10 mt-auto p-5">
                  <h3 className="mb-2 text-xl font-bold text-white leading-snug">
                    {type.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm transition-all group-hover:gap-3">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buildings Insurance Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-12 lg:px-20">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
            alt="New Zealand home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Why Buildings Insurance is Essential
            </h2>
            <p className="text-lg text-slate-300">
              New Zealand&apos;s unique natural disaster risk makes proper cover non-negotiable
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-200 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Fact Callout */}
          <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 backdrop-blur-sm p-8">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 flex-shrink-0 text-emerald-400" />
              <div>
                <h4 className="mb-2 font-semibold text-white">Key Fact About EQC</h4>
                <p className="text-slate-300">
                  The Earthquake Commission (EQC) covers natural disasters up to $300,000 plus GST for
                  residential properties. Most homeowners also need private insurance to cover amounts
                  above this threshold and additional protections not included in EQC cover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Value Section */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-20">
        {/* Subtle background tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/40 pointer-events-none" />

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
              <Shield className="h-4 w-4" /> Expert Brokers. Zero Fees.
            </span>
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              We Do the Hard Work —<br className="hidden sm:block" /> You Get the Right Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your property once. Our trusted network of licensed NZ advisers compare policies across the major insurers and come back to you with options matched to your situation.
            </p>
          </div>

          {/* Benefit cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {brokerBenefits.map((b, idx) => {
              const Icon = b.icon
              return (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${b.color}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.body}</p>
                </div>
              )
            })}
          </div>

          {/* CTA strip */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-900/20">
            <div>
              <p className="text-white font-bold text-xl mb-1">Ready to find the right cover?</p>
              <p className="text-emerald-100 text-sm">Submit your details below — your adviser will be in touch within 24 hours.</p>
            </div>
            <a
              href="#quote-form"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow"
            >
              Get My Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20 border-t border-slate-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 text-sm font-semibold text-slate-700 mb-4">
              NZ Expert Resources
            </span>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Popular Guides
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Research your cover before you buy. Our guides cover NZ-specific risks, costs, and everything in between.
            </p>
          </div>

          {/* Featured guide: earthquake */}
          <div className="mb-6">
            <Link
              href="/earthquake-insurance/"
              className="group flex flex-col sm:flex-row gap-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-emerald-500 p-7 transition-all hover:shadow-xl"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-red-500/20 border border-red-500/30 text-3xl">
                🌍
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block">Most Important for NZ Homeowners</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Earthquake Insurance in NZ — The Complete Guide
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  How NHCover (the new EQC) works, what changed in 2024, regional fault risk, and how to close the gap between the $300,000 cap and your actual rebuild cost.
                </p>
                <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* 5 guide cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                emoji: '🧮',
                href: '/rebuild-cost-calculator/',
                badge: 'Tool',
                badgeColor: 'bg-sky-100 text-sky-700',
                title: 'Rebuild Cost Calculator',
                desc: 'With NZ construction costs up 35–45% since 2019, use our estimator to check your sum-insured is still accurate.',
              },
              {
                emoji: '⚠️',
                href: '/underinsurance/',
                badge: 'Must Read',
                badgeColor: 'bg-amber-100 text-amber-700',
                title: 'Are You Underinsured?',
                desc: 'An estimated 45% of NZ homes are underinsured. See exactly what that means at claim time — with real shortfall scenarios.',
              },
              {
                emoji: '🌧️',
                href: '/flood-insurance/',
                badge: 'Risk Guide',
                badgeColor: 'bg-blue-100 text-blue-700',
                title: 'Flood & Storm Insurance NZ',
                desc: 'Post-Gabrielle: what NZ buildings insurance covers for flood and storm damage — and the exclusions to watch for.',
              },
              {
                emoji: '💰',
                href: '/cheap-buildings-insurance/',
                badge: 'Save Money',
                badgeColor: 'bg-emerald-100 text-emerald-700',
                title: 'How to Reduce Your Premium',
                desc: 'The legitimate ways to lower your buildings insurance cost without creating dangerous coverage gaps.',
              },
              {
                emoji: '🏗️',
                href: '/new-build-insurance/',
                badge: 'New Builds',
                badgeColor: 'bg-violet-100 text-violet-700',
                title: 'Insurance for New Builds',
                desc: 'What insurance you need at each stage — from construction through settlement — and why new builds often attract lower premiums.',
              },
              {
                emoji: '📊',
                href: '/compare/',
                badge: 'Compare',
                badgeColor: 'bg-slate-100 text-slate-700',
                title: 'Compare NZ Insurers',
                desc: 'See how IAG, Vero, Tower, AMI, and other major NZ insurers compare on price, claims, and policy features.',
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-400 hover:shadow-lg p-6 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{guide.emoji}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${guide.badgeColor}`}>{guide.badge}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{guide.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{guide.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Read guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              View all resources and articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-white px-6 py-20 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
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
            <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Get Your Quote
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
