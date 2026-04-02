import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BuildingsInsurance.co.nz | NZ Property Insurance Experts',
  description: 'Learn about our mission to help New Zealand property owners find the right buildings insurance coverage at competitive rates.',
  openGraph: {
    title: 'About BuildingsInsurance.co.nz | NZ Property Insurance Experts',
    description: 'Learn about our mission to help NZ property owners find the right buildings insurance.',
    images: ['https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop'],
  },
};

const stats = [
  { label: '20+ Years', value: 'Industry Experience' },
  { label: '30+ Products', value: 'Compared' },
  { label: '4 Markets', value: 'Covered' },
  { label: '10,000+', value: 'Properties Insured' },
  { label: '$0 Fees', value: 'Always Free' },
  { label: '6 NZ Insurers', value: 'Represented' },
];

const timelineEvents = [
  {
    year: '2005',
    title: 'Founded in UK',
    description: 'Insurance comparison service established in the United Kingdom with a focus on consumer empowerment.',
  },
  {
    year: '2010',
    title: 'Expanded to Europe',
    description: 'Successfully expanded operations across multiple European markets, building expertise in diverse insurance landscapes.',
  },
  {
    year: '2015',
    title: 'First Asian Market',
    description: 'Entered the Asian market, establishing presence in key regional economies and gaining international recognition.',
  },
  {
    year: '2019',
    title: 'New Zealand Launch',
    description: 'Launched in New Zealand with a commitment to simplifying property insurance for Kiwi homeowners and investors.',
  },
  {
    year: '2020',
    title: 'COVID-19 Support',
    description: 'Provided critical support to property owners during unprecedented times, helping thousands find coverage solutions.',
  },
  {
    year: '2021',
    title: 'NZ Compliance',
    description: 'Achieved full compliance with ICNZ standards and became registered with all major NZ insurance regulators.',
  },
  {
    year: '2022',
    title: 'Product Innovation',
    description: 'Introduced advanced comparison tools and AI-powered quote matching for more accurate recommendations.',
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Became the leading independent insurance comparison platform in New Zealand with over 50,000+ active users.',
  },
  {
    year: '2025',
    title: 'Buildings Insurance Focus',
    description: 'Specialized division launched with expert focus on residential and commercial buildings insurance across New Zealand.',
  },
];

const productTags = [
  'Buildings', 'Contents', 'Landlord', 'Commercial', 'Earthquake', 'Flood',
  'Fire', 'Storm', 'Burglary', 'Accidental Damage', 'Loss of Rent',
  'Legal Liability', 'Home Emergency', 'New Build', 'Renovation', 'Heritage',
  'Investment Property', 'Multi-Unit', 'Strata', 'Holiday Home', 'Farm',
  'Rural Property', 'Beach Property', 'Bush Clad', 'Flat Roof', 'Listed Building',
  'Earthquake Prone', 'High Value', 'Business Contents', 'Professional Indemnity',
  'Combined Cover',
];

const values = [
  {
    title: 'Trust',
    description: 'Honest comparison and transparent advice without hidden agendas or commissions that influence recommendations.',
    icon: '🛡️',
  },
  {
    title: 'Transparency',
    description: 'Clear pricing, complete information, and no surprises in the comparison process or final quotes.',
    icon: '📋',
  },
  {
    title: 'Expertise',
    description: 'Deep knowledge of NZ insurance market, regulations, and property-specific coverage requirements.',
    icon: '🎓',
  },
  {
    title: 'Service',
    description: 'Dedicated support to help you find the right coverage at the best possible rates tailored to your needs.',
    icon: '🤝',
  },
];

const whyChooseUs = [
  {
    title: 'Free Comparison',
    description: 'No hidden fees, no charges. Compare quotes from multiple insurers completely free.',
  },
  {
    title: 'Expert Advisers',
    description: 'Our NZ-based insurance experts are available to answer your questions and guide you through the process.',
  },
  {
    title: 'Fast Process',
    description: 'Get quotes in minutes, not days. Our streamlined process saves you time and effort.',
  },
  {
    title: 'Best Rates',
    description: 'Access exclusive deals and rates not available directly from insurers. Save up to 40% on premiums.',
  },
  {
    title: 'Tailored Coverage',
    description: 'We help you find coverage that matches your specific property needs, not one-size-fits-all policies.',
  },
  {
    title: 'Peace of Mind',
    description: 'Know you\'re protected with comprehensive coverage from reputable NZ insurers.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    city: 'Auckland',
    rating: 5,
    text: 'Fantastic service! Found a policy that was $800 cheaper per year. The adviser was knowledgeable and patient.',
  },
  {
    name: 'James K.',
    city: 'Wellington',
    rating: 5,
    text: 'Simple process, great rates. Saved me a lot of money on my investment property insurance.',
  },
  {
    name: 'Maria T.',
    city: 'Christchurch',
    rating: 5,
    text: 'Excellent support through the whole process. Highly recommend to anyone looking for buildings insurance.',
  },
  {
    name: 'David L.',
    city: 'Tauranga',
    rating: 5,
    text: 'Professional team, competitive quotes, and excellent customer service. Very happy with the outcome.',
  },
];

const partnerships = [
  {
    name: 'Insurance Council of New Zealand',
    abbr: 'ICNZ',
    description: 'Industry-leading standards and compliance',
    href: 'https://www.icnz.org.nz',
  },
  {
    name: 'NZ Broker Network',
    abbr: 'NBN',
    description: 'Connected with top local brokers nationwide',
    href: '#',
  },
  {
    name: 'International Experience',
    abbr: 'INTL',
    description: '20+ years serving markets globally',
    href: '#',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-emerald-600 to-emerald-700 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=900&fit=crop"
          alt="Team meeting about insurance"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90" />
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            About BuildingsInsurance.co.nz
          </h1>
          <p className="text-lg sm:text-xl text-emerald-50 text-center max-w-2xl">
            Helping New Zealand property owners find the right insurance coverage at the best rates
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600">
              From a UK startup to New Zealand's trusted insurance comparison platform
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-sky-500 to-slate-400 transform -translate-x-1/2 hidden md:block" />

            {/* Events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:text-left`}>
                    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="flex justify-center my-6 md:my-0 md:w-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Spacer on Desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products We Cover */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Insurance Products We Compare
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive coverage options for every property owner
            </p>
          </div>

          {/* Tag Cloud */}
          <div className="flex flex-wrap gap-3 justify-center">
            {productTags.map((product, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600">
              Experience the BuildingsInsurance.co.nz difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Real feedback from real New Zealand property owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-8 border border-emerald-200"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Partnerships & Credentials
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by industry leaders and regulatory bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                  {partner.abbr}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {partner.description}
                </p>
                <span className="text-emerald-600 font-semibold text-sm">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find the Right Coverage?
          </h2>
          <p className="text-emerald-50 mb-8 text-lg">
            Get started with your free buildings insurance quote today and save up to 40% on premiums.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
