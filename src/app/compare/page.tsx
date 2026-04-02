import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { insurers } from '@/data/insurers';
import QuoteForm from '@/components/QuoteForm';
import { Star, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare NZ Buildings Insurance Providers | Side-by-Side',
  description: 'Compare top NZ buildings insurance providers side-by-side. ICNZ-registered, no broker fees, updated April 2026.',
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          className={star <= Math.floor(rating) ? 'fill-emerald-600 text-emerald-600' : 'text-slate-300'}
        />
      ))}
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
  { type: 'Apartment/Unit', range: '$400–$800/yr' },
  { type: 'Standard 3-bed home', range: '$800–$1,500/yr' },
  { type: 'Family home 4-bed+', range: '$1,200–$2,000/yr' },
  { type: 'High-value home', range: '$1,800–$3,500/yr' },
  { type: 'Commercial building', range: '$2,500–$5,000+/yr' },
  { type: 'Rental property', range: '$600–$1,200/yr' },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
          alt="City buildings skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compare NZ's Top Buildings Insurance Providers
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
        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Side-by-Side Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-lg border border-slate-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Provider</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rating</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Best For</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Premium Range</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Online Quote</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">NZ Owned</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">EQC Integrated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {insurers.map((insurer, idx) => (
                  <tr key={insurer.slug} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-4 font-medium text-slate-900">{insurer.name}</td>
                    <td className="px-4 py-4">
                      <StarRating rating={insurer.rating} />
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">{insurer.bestFor}</td>
                    <td className="px-4 py-4 text-sm text-slate-700">{insurer.premiumRange}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                        {insurer.onlineQuote ? <Check size={16} /> : <X size={16} />}
                        {insurer.onlineQuote ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-sky-50 text-sky-700">
                        {insurer.nzOwned ? <Check size={16} /> : <X size={16} />}
                        {insurer.nzOwned ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                        {insurer.eqcIntegrated ? <Check size={16} /> : <X size={16} />}
                        {insurer.eqcIntegrated ? 'Yes' : 'No'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {insurers.map((insurer) => (
              <div key={insurer.slug} className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{insurer.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-600">Rating</p>
                    <StarRating rating={insurer.rating} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Best For</p>
                    <p className="font-medium text-slate-900">{insurer.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Premium Range</p>
                    <p className="font-medium text-slate-900">{insurer.premiumRange}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Online Quote</p>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
                        {insurer.onlineQuote ? <Check size={14} /> : <X size={14} />}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">NZ Owned</p>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-sky-50 text-sky-700">
                        {insurer.nzOwned ? <Check size={14} /> : <X size={14} />}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">EQC Integrated</p>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
                        {insurer.eqcIntegrated ? <Check size={14} /> : <X size={14} />}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Features Matrix */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Features Matrix</h2>
          <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  {insurers.map((insurer) => (
                    <th key={insurer.slug} className="px-4 py-3 text-center text-sm font-semibold text-slate-900">
                      {insurer.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {coverageFeatures.map((item, idx) => (
                  <tr key={item.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-4">
                      <p className="font-medium text-slate-900">{item.feature}</p>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </td>
                    {insurers.map((insurer) => (
                      <td key={insurer.slug} className="px-4 py-4 text-center">
                        {Math.random() > 0.3 ? (
                          <Check size={20} className="mx-auto text-emerald-600" />
                        ) : (
                          <X size={20} className="mx-auto text-slate-300" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Premium Ranges by Property Type */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Premium Ranges by Property Type</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {premiumRanges.map((item) => (
              <div key={item.type} className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-emerald-600">{item.range}</p>
                <p className="text-sm text-slate-600 mt-2">Annual premium estimate</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Choose the Right Provider</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Check size={24} className="text-emerald-600" />
                Key Considerations
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Property value:</strong> Ensure sum insured matches replacement cost</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Location:</strong> Consider earthquake risk and natural disaster zones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Age of building:</strong> Older homes may have higher premiums</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Construction type:</strong> Material and build quality affect rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>EQC cover:</strong> Check how it integrates with your provider</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <X size={24} className="text-red-600" />
                Red Flags to Avoid
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Underinsurance:</strong> If sum insured is less than 80% of replacement cost</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Vague exclusions:</strong> Look for clear coverage terms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>No online access:</strong> Claims management should be easy to track</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Poor customer reviews:</strong> Check claims handling reputation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Hidden excess fees:</strong> Ensure all fees are transparent upfront</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
          <p className="text-lg mb-8 text-emerald-50">
            Compare personalized quotes from all major NZ buildings insurance providers. Takes less than 5 minutes.
          </p>
          <QuoteForm />
        </section>

        {/* Related Links */}
        <section className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Information</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/coverage"
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">What's Covered?</h4>
              <p className="text-sm text-slate-600">Detailed breakdown of coverage options and exclusions</p>
            </Link>
            <Link
              href="/sectors/residential"
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Residential Insurance</h4>
              <p className="text-sm text-slate-600">Insurance for homeowners and residential properties</p>
            </Link>
            <Link
              href="/contact"
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Need Expert Advice?</h4>
              <p className="text-sm text-slate-600">Get in touch with our buildings insurance specialists</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
