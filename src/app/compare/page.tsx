import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { insurers } from '@/data/insurers';
import QuoteForm from '@/components/QuoteForm';
import { Star, Check, X, ArrowRight, Shield, Phone, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare NZ Buildings Insurance Providers | Side-by-Side',
  description: 'Compare top NZ buildings insurance providers side-by-side. ICNZ-registered, no broker fees, updated April 2026.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/compare/' },
  openGraph: {
    title: 'Compare NZ Buildings Insurance Providers | Side-by-Side',
    description: 'Compare top NZ buildings insurance providers side-by-side. AMI, State, Tower, AA, Vero, NZI rated and compared.',
    url: 'https://buildingsinsurance.co.nz/compare/',
  },
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          className={star <= Math.floor(rating) ? 'fill-amber-400 text-amber-400' : star <= rating ? 'fill-amber-400/50 text-amber-400' : 'text-slate-200'}
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-slate-700">{rating}</span>
    </div>
  );
};

const coverageFeatures = [
  { feature: 'Full Replacement', description: 'New for old replacement cover' },
  { feature: 'Agreed Value', description: 'Fixed sum insured' },
  { feature: 'Natural Disaster', description: 'Earthquake, flood, landslide cover' },
  { feature: 'EQC Integration', description: 'Works with EQC claims' },
  { feature: 'Temporary Accommodation', description: 'Living expenses if uninhabitable' },
  { feature: 'Landlord Protection', description: 'Tenant damage & loss of rent' },
  { feature: 'Body Corporate', description: 'Unit title building cover' },
  { feature: 'Gradual Damage', description: 'Gradual deterioration cover' },
  { feature: 'Retaining Walls', description: 'Retaining wall damage' },
  { feature: 'Swimming Pools', description: 'Pool structure cover' },
  { feature: 'Legal Costs', description: 'Legal liability included' },
];

const premiumRanges = [
  { type: 'Apartment/Unit', range: '$400–$800/yr', icon: '🏢' },
  { type: 'Standard 3-bed home', range: '$800–$1,500/yr', icon: '🏡' },
  { type: 'Family home 4-bed+', range: '$1,200–$2,000/yr', icon: '🏠' },
  { type: 'High-value home', range: '$1,800–$3,500/yr', icon: '🏰' },
  { type: 'Commercial building', range: '$2,500–$5,000+/yr', icon: '🏗️' },
  { type: 'Rental property', range: '$600–$1,200/yr', icon: '🔑' },
];

const CTABlock = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' | 'dark' }) => {
  if (variant === 'dark') {
    return (
      <div className="mt-10 rounded-2xl bg-slate-900 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex w-14 h-14 rounded-full bg-emerald-500/20 items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Need help choosing?</h3>
            <p className="text-slate-400 mt-1">Our NZ-based advisers are ready to find the right cover for your property.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="tel:09-885-9549" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all border border-white/20">
            Call 09 885 9549
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className="mt-10 rounded-2xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex w-14 h-14 rounded-full bg-emerald-100 items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Want a personalised comparison?</h3>
            <p className="text-slate-600 mt-1">Tell us about your property and we'll match you with the best provider for your situation.</p>
          </div>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg whitespace-nowrap">
          Compare My Options <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-600/10">
      <div className="flex items-center gap-4">
        <div className="hidden md:flex w-14 h-14 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Ready to save on your buildings insurance?</h3>
          <p className="text-emerald-100 mt-1">Get free, no-obligation quotes from all 6 NZ insurers in under 2 minutes.</p>
        </div>
      </div>
      <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg whitespace-nowrap">
        Get My Free Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
          alt="City buildings skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Compare NZ&apos;s Top Buildings Insurance Providers
          </h1>
          <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base text-sky-100">
            <div className="flex items-center gap-2">
              <Check size={20} className="text-emerald-400" />
              <span>ICNZ-registered providers</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-emerald-400" />
              <span>No broker fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-emerald-400" />
              <span>Updated April 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">

        {/* ───── SECTION 1: Provider Comparison ───── */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Provider Overview</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Side-by-Side Comparison</h2>
            <p className="text-lg text-slate-600 mt-2">All 6 major NZ buildings insurance providers compared on the metrics that matter.</p>
          </div>

          {/* Desktop Table — Enhanced */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Provider</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Best For</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Premium Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Excess From</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Online Quote</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">NZ Owned</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">EQC</th>
                </tr>
              </thead>
              <tbody>
                {insurers.map((insurer, idx) => (
                  <tr
                    key={insurer.slug}
                    className={`border-b border-slate-100 transition-colors hover:bg-emerald-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-900 text-base">{insurer.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{insurer.customerService} service</div>
                    </td>
                    <td className="px-6 py-5">
                      <StarRating rating={insurer.rating} />
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-50 text-sky-700 border border-sky-100">
                        {insurer.bestFor}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-semibold text-slate-900">{insurer.premiumRange}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-slate-700">{insurer.excessFrom}</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      {insurer.onlineQuote ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                          <Check size={18} className="text-emerald-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
                          <X size={18} className="text-red-400" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {insurer.nzOwned ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                          <Check size={18} className="text-emerald-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
                          <X size={18} className="text-red-400" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {insurer.eqcIntegrated ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                          <Check size={18} className="text-emerald-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
                          <X size={18} className="text-red-400" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards — Enhanced */}
          <div className="lg:hidden space-y-4">
            {insurers.map((insurer) => (
              <div key={insurer.slug} className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{insurer.name}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    {insurer.bestFor}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Rating</span>
                    <StarRating rating={insurer.rating} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Premium Range</span>
                    <span className="font-semibold text-slate-900">{insurer.premiumRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Excess From</span>
                    <span className="font-semibold text-slate-900">{insurer.excessFrom}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Service</span>
                    <span className="font-medium text-slate-700">{insurer.customerService}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 mb-2">Online Quote</p>
                      {insurer.onlineQuote ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100"><Check size={16} className="text-emerald-600" /></span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50"><X size={16} className="text-red-400" /></span>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 mb-2">NZ Owned</p>
                      {insurer.nzOwned ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100"><Check size={16} className="text-emerald-600" /></span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50"><X size={16} className="text-red-400" /></span>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 mb-2">EQC</p>
                      {insurer.eqcIntegrated ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100"><Check size={16} className="text-emerald-600" /></span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50"><X size={16} className="text-red-400" /></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after Provider Table */}
          <CTABlock variant="primary" />
        </section>

        {/* ───── SECTION 2: Coverage Features Matrix ───── */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Feature Breakdown</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Coverage Features Matrix</h2>
            <p className="text-lg text-slate-600 mt-2">See exactly what each provider covers — so you can make an informed choice.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white min-w-[200px]">Feature</th>
                  {insurers.map((insurer) => (
                    <th key={insurer.slug} className="px-4 py-4 text-center text-sm font-semibold text-white min-w-[100px]">
                      <div>{insurer.name.replace(' Insurance', '')}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {coverageFeatures.map((item, idx) => (
                  <tr key={item.feature} className={`border-b border-slate-100 transition-colors hover:bg-emerald-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{item.feature}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                    </td>
                    {insurers.map((insurer) => {
                      const hasFeature = insurer.coverageFeatures[item.feature];
                      return (
                        <td key={insurer.slug} className="px-4 py-4 text-center">
                          {hasFeature ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                              <Check size={18} className="text-emerald-600" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
                              <X size={18} className="text-red-400" />
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Coverage count row */}
                <tr className="bg-gradient-to-r from-emerald-50 to-sky-50 border-t-2 border-emerald-200">
                  <td className="px-6 py-4 font-bold text-slate-900">Features Covered</td>
                  {insurers.map((insurer) => {
                    const count = coverageFeatures.filter(f => insurer.coverageFeatures[f.feature]).length;
                    return (
                      <td key={insurer.slug} className="px-4 py-4 text-center">
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${count >= 10 ? 'bg-emerald-600 text-white' : count >= 8 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {count}/{coverageFeatures.length}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA after Coverage Matrix */}
          <CTABlock variant="secondary" />
        </section>

        {/* ───── SECTION 3: Premium Ranges ───── */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Pricing Guide</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Premium Ranges by Property Type</h2>
            <p className="text-lg text-slate-600 mt-2">Indicative annual premiums based on property type. Actual quotes may vary.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {premiumRanges.map((item) => (
              <div key={item.type} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.type}</h3>
                <p className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">{item.range}</p>
                <p className="text-sm text-slate-500 mt-2">Annual premium estimate</p>
              </div>
            ))}
          </div>

          {/* CTA after Premium Ranges */}
          <CTABlock variant="dark" />
        </section>

        {/* ───── SECTION 4: How to Choose ───── */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Expert Guidance</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">How to Choose the Right Provider</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100">
                  <Check size={22} className="text-emerald-600" />
                </span>
                Key Considerations
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span><strong>Property value:</strong> Ensure sum insured matches replacement cost</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span><strong>Location:</strong> Consider earthquake risk and natural disaster zones</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span><strong>Age of building:</strong> Older homes may have higher premiums</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span><strong>Construction type:</strong> Material and build quality affect rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span><strong>EQC cover:</strong> Check how it integrates with your provider</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-red-200 p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <X size={22} className="text-red-600" />
                </span>
                Red Flags to Avoid
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span><strong>Underinsurance:</strong> If sum insured is less than 80% of replacement cost</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span><strong>Vague exclusions:</strong> Look for clear coverage terms</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span><strong>No online access:</strong> Claims management should be easy to track</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span><strong>Poor customer reviews:</strong> Check claims handling reputation</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span><strong>Hidden excess fees:</strong> Ensure all fees are transparent upfront</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───── SECTION 5: Final Quote Form ───── */}
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-700 rounded-2xl p-10 md:p-14 text-white mb-20 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Get Your Free Quote Today</h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Compare personalised quotes from all major NZ buildings insurance providers. Takes less than 2 minutes.
            </p>
          </div>
          <QuoteForm />
        </section>

        {/* ───── SECTION 6: Related Links ───── */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Information</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/coverage"
              className="group p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">What&apos;s Covered?</h4>
              <p className="text-sm text-slate-600">Detailed breakdown of coverage options and exclusions</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 mt-3 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/sectors/residential"
              className="group p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Residential Insurance</h4>
              <p className="text-sm text-slate-600">Insurance for homeowners and residential properties</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 mt-3 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Need Expert Advice?</h4>
              <p className="text-sm text-slate-600">Get in touch with our buildings insurance specialists</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 mt-3 group-hover:gap-2 transition-all">
                Get in touch <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Compare NZ Buildings Insurance Providers',
          description: 'Side-by-side comparison of top NZ buildings insurance providers including AMI, State, Tower, AA Insurance, Vero, and NZI.',
          url: 'https://buildingsinsurance.co.nz/compare/',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'AMI Insurance', url: 'https://www.ami.co.nz' },
              { '@type': 'ListItem', position: 2, name: 'State Insurance', url: 'https://www.state.co.nz' },
              { '@type': 'ListItem', position: 3, name: 'Tower Insurance', url: 'https://www.tower.co.nz' },
              { '@type': 'ListItem', position: 4, name: 'AA Insurance', url: 'https://www.aainsurance.co.nz' },
              { '@type': 'ListItem', position: 5, name: 'Vero Insurance', url: 'https://www.vero.co.nz' },
              { '@type': 'ListItem', position: 6, name: 'NZI Insurance', url: 'https://www.nzi.co.nz' },
            ],
          },
        }) }}
      />
    </main>
  );
}
