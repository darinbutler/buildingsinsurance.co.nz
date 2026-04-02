import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Check, AlertCircle, Home, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Buildings Insurance NZ | Home Owner Protection',
  description: 'Comprehensive buildings insurance for NZ residential homes. EQC integration, weathertightness protection, and earthquake cover explained.',
};

const whyCovered = [
  {
    title: 'Structural Protection',
    description: 'Your home\'s structure is your largest investment. Buildings insurance protects the foundation, walls, roof, and frame from damage.',
  },
  {
    title: 'Fixture & Fitting Coverage',
    description: 'Covers permanently attached items like fitted kitchens, bathrooms, heating systems, and flooring that aren\'t covered by contents insurance.',
  },
  {
    title: 'Natural Disaster Protection',
    description: 'Protects against earthquakes, flooding, landslides, storms, and other natural events that can cause significant structural damage.',
  },
  {
    title: 'Legal Compliance',
    description: 'If you have a mortgage, your lender requires buildings insurance. For rental properties, it\'s a statutory requirement.',
  },
];

const coverageItems = [
  { item: 'Building structure (walls, roof, foundation)', covered: true },
  { item: 'Fitted kitchens and bathrooms', covered: true },
  { item: 'Flooring and floor coverings', covered: true },
  { item: 'Fixed heating and cooling systems', covered: true },
  { item: 'Outbuildings (sheds, garages, pergolas)', covered: true },
  { item: 'Driveways and pathways', covered: true },
  { item: 'Fences and gates', covered: true },
  { item: 'Retaining walls', covered: true },
  { item: 'Swimming pools and spas', covered: false },
  { item: 'Contents (furniture, appliances)', covered: false },
];

const homeValueTable = [
  { value: '$300,000–$400,000', recommendation: '$350,000–$450,000 sum insured', premium: '$850–$1,200/yr' },
  { value: '$400,000–$600,000', recommendation: '$450,000–$700,000 sum insured', premium: '$1,100–$1,600/yr' },
  { value: '$600,000–$800,000', recommendation: '$700,000–$950,000 sum insured', premium: '$1,400–$2,000/yr' },
  { value: '$800,000–$1,000,000', recommendation: '$950,000–$1,150,000 sum insured', premium: '$1,800–$2,500/yr' },
  { value: '$1,000,000+', recommendation: 'Valuation assessment recommended', premium: '$2,500+/yr' },
];

const nzConsiderations = [
  {
    icon: <AlertCircle size={24} className="text-amber-600" />,
    title: 'Earthquake Zones',
    description: 'NZ has high seismic activity. Ensure your policy includes earthquake cover and integrates properly with EQC, which covers natural disaster damage up to $20,000 per claim.',
  },
  {
    icon: <Home size={24} className="text-emerald-600" />,
    title: 'Weathertightness Issues',
    description: 'Common in older NZ homes, especially those with monolithic cladding. Some policies exclude weathertightness claims, so check coverage carefully.',
  },
  {
    icon: <Shield size={24} className="text-sky-600" />,
    title: 'Building Age & Material',
    description: 'Older homes and those with non-standard construction may have higher premiums or limitations. Get a building condition assessment if over 40 years old.',
  },
];

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=600&fit=crop"
          alt="New Zealand residential home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Residential Buildings Insurance
          </h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-2xl">
            Protect your home and family from structural damage with comprehensive NZ buildings insurance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Sidebar with Quick Quote */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* Why Homeowners Need Buildings Insurance */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Homeowners Need Buildings Insurance</h2>
              <div className="space-y-6">
                {whyCovered.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100">
                        <Check size={24} className="text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Covered */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Covered in Residential Insurance</h2>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                {coverageItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-6 py-4 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    } border-b border-slate-200 last:border-b-0`}
                  >
                    <span className="text-slate-900">{item.item}</span>
                    {item.covered ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                        <Check size={16} />
                        Covered
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                        Not Covered
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Note:</strong> Coverage varies by policy. Always check your policy document for specific inclusions and exclusions. Contents insurance covers furniture and household items.
              </p>
            </section>

            {/* EQC Integration */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-lg border border-sky-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding EQC Integration</h3>
                <p className="text-slate-700 mb-6">
                  The Earthquake Commission (EQC) covers natural disaster damage including earthquakes, landslides, flooding, and volcanic damage. Your buildings insurance should work alongside EQC:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700"><strong>EQC covers first $20,000</strong> of each natural disaster claim (for residential properties)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700"><strong>Your insurance covers the excess</strong> up to your sum insured</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700"><strong>You're fully protected</strong> if both policies are properly integrated</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-600">
                  <strong>Important:</strong> You must be registered with EQC to receive their benefits. Check your registration at{' '}
                  <a
                    href="https://www.eqc.govt.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-semibold"
                  >
                    eqc.govt.nz
                  </a>
                </p>
              </div>
            </section>

            {/* Coverage Recommendations Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Recommendations by Home Value</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Home Market Value</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Recommended Sum Insured</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Estimated Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {homeValueTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-slate-900 font-medium">{row.value}</td>
                        <td className="px-6 py-4 text-slate-700">{row.recommendation}</td>
                        <td className="px-6 py-4 text-slate-700 font-medium">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Pro Tip:</strong> Get a professional building valuation to determine the replacement cost. Underinsurance could leave you significantly out of pocket during a claim.
              </p>
            </section>

            {/* Key Considerations for NZ Homes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Considerations for NZ Residential Homes</h2>
              <div className="space-y-6">
                {nzConsiderations.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-8">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-700 ml-10">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Claims Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">The Claims Process</h2>
              <div className="space-y-4">
                {[
                  { num: 1, title: 'Report the Damage', desc: 'Contact your insurer within 3 days of discovery. Document damage with photos/video.' },
                  { num: 2, title: 'Lodge Your Claim', desc: 'Provide claim form, evidence of ownership, and damage documentation.' },
                  { num: 3, title: 'Assessor Inspection', desc: 'Insurer may send a loss assessor to inspect and estimate repair costs.' },
                  { num: 4, title: 'Claim Settlement', desc: 'Once approved, your claim is settled by direct repair, rebuilding, or cash settlement.' },
                  { num: 5, title: 'Follow-up', desc: 'Most claims are resolved within 4–8 weeks. Track progress through online portals.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-700">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg p-12 text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">Protect Your Home Today</h2>
              <p className="text-lg mb-8 text-emerald-50">
                Get a personalised quote for your residential property in under 5 minutes. No obligations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <Phone size={20} />
                Get a Free Quote
              </Link>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/sectors/landlords"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Landlord Insurance</h3>
                  <p className="text-sm text-slate-600">Insurance for rental residential properties with additional protections.</p>
                </Link>
                <Link
                  href="/compare"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Compare Providers</h3>
                  <p className="text-sm text-slate-600">Side-by-side comparison of all major NZ buildings insurance providers.</p>
                </Link>
                <Link
                  href="/sectors/commercial"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Commercial Buildings</h3>
                  <p className="text-sm text-slate-600">Insurance solutions for commercial and investment properties.</p>
                </Link>
                <a
                  href="https://www.building.govt.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Building Performance NZ</h3>
                  <p className="text-sm text-slate-600">Government resources on building standards and compliance.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Quote Form */}
            <div className="sticky top-4 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Quote</h3>
              <p className="text-sm text-slate-600 mb-6">Get an instant quote tailored to your home in minutes.</p>
              <QuoteForm compact={true} />
            </div>

            {/* Key Facts Card */}
            <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">Key Facts</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mandatory if you have a mortgage</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Works alongside EQC cover</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Average premium $1,100–$1,600/yr</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Covers structural damage from most events</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Excesses typically $300–$500</span>
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-sky-600" />
                Need Expert Advice?
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                Our NZ buildings insurance specialists can help you understand your coverage options.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center px-4 py-2 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
