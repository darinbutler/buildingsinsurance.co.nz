import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { AlertTriangle, Check, Building2, Zap, DollarSign, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Buildings Insurance NZ | Business Protection',
  description: 'Comprehensive buildings insurance for NZ commercial properties. NOT covered by EQC. Protect your business investment now.',
};

const whyCommercial = [
  {
    title: 'No EQC Coverage for Commercial',
    icon: <AlertTriangle size={28} className="text-red-600" />,
    description: 'EQC only covers residential and farm buildings. Commercial properties are entirely dependent on private insurance for natural disaster protection.',
  },
  {
    title: 'High Asset Protection',
    icon: <DollarSign size={28} className="text-emerald-600" />,
    description: 'Commercial buildings often house expensive equipment, stock, and fixtures. Insurance protects against structural damage and business interruption.',
  },
  {
    title: 'Liability & Legal Compliance',
    icon: <Zap size={28} className="text-sky-600" />,
    description: 'Public liability risks are significant. Comprehensive insurance protects against third-party claims and meet legal requirements.',
  },
  {
    title: 'Business Continuity',
    icon: <Building2 size={28} className="text-slate-600" />,
    description: 'Add business interruption cover to protect your income if your premises becomes uninhabitable due to insured damage.',
  },
];

const coverageItems = [
  { item: 'Building structure (walls, roof, foundation)', covered: true },
  { item: 'Permanent fixtures and fittings', covered: true },
  { item: 'Landlord\'s fit-out and improvements', covered: true },
  { item: 'Shop fronts and signage', covered: true },
  { item: 'Interior decorations and finishes', covered: true },
  { item: 'Glass and glazing', covered: true },
  { item: 'Air conditioning and HVAC systems', covered: true },
  { item: 'Security and alarm systems', covered: true },
  { item: 'Tenant\'s stock and merchandise', covered: false },
  { item: 'Business interruption (optional add-on)', covered: true },
  { item: 'Material damage and loss', covered: true },
  { item: 'Permanent structures (carparks, outbuildings)', covered: true },
];

const buildingTypes = [
  { type: 'Office Building', features: 'Standard construction, open plan, multi-level', premiumFactor: 'Moderate–High', notes: 'Location and security features affect premium' },
  { type: 'Retail Shop', features: 'Shop front, customer access, display windows', premiumFactor: 'Moderate–High', notes: 'Busy locations and night security are key' },
  { type: 'Warehouse/Storage', features: 'Large open space, racking systems, climate control', premiumFactor: 'High', notes: 'Stock value and contents affect rates significantly' },
  { type: 'Industrial Building', features: 'Heavy machinery, manufacturing, hazardous materials', premiumFactor: 'Very High', notes: 'Specialised cover required; machinery may need separate policy' },
  { type: 'Hospitality (Cafe/Bar)', features: 'Kitchen, customer seating, licensed area', premiumFactor: 'High', notes: 'Commercial kitchen requires specialist cover' },
  { type: 'Medical/Professional', features: 'Medical equipment, specialist fit-out', premiumFactor: 'High', notes: 'Equipment insurance separate from buildings' },
];

const keyConsiderations = [
  {
    title: 'Building Valuation',
    description: 'Get a professional valuation of replacement cost including structure, permanent fixtures, and any fit-out improvements. Undervaluation leaves you exposed.',
  },
  {
    title: 'Business Interruption Insurance',
    description: 'If your business depends on operating from this location, consider business interruption cover to protect your income during repairs.',
  },
  {
    title: 'Stock and Contents Insurance',
    description: 'Buildings insurance covers the structure and permanent fixtures, not your stock, merchandise, or equipment. Get separate contents cover.',
  },
  {
    title: 'Material Damage & Loss',
    description: 'Ensure your policy covers all types of material damage including fire, theft, weather damage, and vandalism.',
  },
  {
    title: 'Public Liability',
    description: 'Separate public liability cover protects against third-party injury claims. Often required by landlords and regulatory bodies.',
  },
  {
    title: 'Natural Disaster Risk',
    description: 'Commercial buildings are NOT covered by EQC. Your buildings insurance must include comprehensive earthquake, flood, and landslide protection.',
  },
];

const claimsInfo = [
  { step: 'Report immediately', desc: 'Contact your insurer within 48 hours of discovering damage.' },
  { step: 'Document everything', desc: 'Photograph all damage, secure the premises, and prevent further loss.' },
  { step: 'Mitigating actions', desc: 'Take reasonable steps to prevent further damage (e.g., tarps, temporary repairs).' },
  { step: 'Loss assessor', desc: 'Your insurer appoints a loss assessor to evaluate damage and estimate repair costs.' },
  { step: 'Claim settlement', desc: 'Settlement by direct repair, rebuilding, or cash payment (less excess and agreed limits).' },
  { step: 'Ongoing support', desc: 'Track claim progress through online portal; complex claims may take 8–12 weeks.' },
];

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
          alt="Commercial city buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Commercial Buildings Insurance
          </h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-2xl">
            Comprehensive protection for your business property. NOT covered by EQC.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Sidebar with Quick Quote */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* Critical Alert */}
            <section className="mb-16 bg-red-50 border-l-4 border-red-600 rounded-r-lg p-8">
              <div className="flex gap-4">
                <AlertTriangle size={28} className="text-red-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-2">Critical: Commercial Buildings Are NOT Covered by EQC</h2>
                  <p className="text-red-800 mb-4">
                    The Earthquake Commission (EQC) only provides cover for residential and farm buildings. Commercial buildings must rely entirely on private insurance for protection against earthquakes, floods, and other natural disasters.
                  </p>
                  <p className="text-red-800 font-semibold">
                    This makes buildings insurance not just recommended—it's essential for any commercial property owner.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Commercial Insurance Matters */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Commercial Buildings Insurance Matters</h2>
              <div className="space-y-6">
                {whyCommercial.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0">
                    <div className="flex-shrink-0 pt-1">{item.icon}</div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Covered in Commercial Insurance</h2>
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
                        Not Standard
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Note:</strong> Most policies offer optional add-ons for items like glass breakage, signage, and business interruption. Review your policy for specific inclusions, exclusions, and limits.
              </p>
            </section>

            {/* Coverage by Building Type */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage by Commercial Building Type</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Building Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Features</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Premium Factor</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Key Considerations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {buildingTypes.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.type}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.features}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.premiumFactor}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Considerations for Commercial Buildings</h2>
              <div className="space-y-4">
                {keyConsiderations.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Claims Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Commercial Claims Process</h2>
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-8">
                <div className="space-y-4">
                  {claimsInfo.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.step}</h4>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Commercial claims can be complex due to stock assessments and business interruption calculations. Choose an insurer with a strong commercial claims team.
              </p>
            </section>

            {/* Premium Estimates */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Premium Estimates (Annual)</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { type: 'Small office (up to $500k)', range: '$1,500–$2,500' },
                  { type: 'Retail shop ($500k–$1M)', range: '$2,000–$3,500' },
                  { type: 'Warehouse ($1M–$2M)', range: '$3,000–$5,000' },
                  { type: 'Large industrial building (2M+)', range: '$5,000–$10,000+' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.type}</h3>
                    <p className="text-2xl font-bold text-emerald-600">{item.range}/yr</p>
                    <p className="text-sm text-slate-600 mt-2">Estimate based on standard construction</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Note:</strong> Premiums vary significantly based on building age, construction, location, security features, claims history, and occupancy type. Get a professional valuation and quotes from multiple providers.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg p-12 text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">Protect Your Commercial Property</h2>
              <p className="text-lg mb-8 text-emerald-50">
                Get a customised quote for your commercial building. Our specialists understand the unique risks facing NZ businesses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <Phone size={20} />
                Request a Quote
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
                  <p className="text-sm text-slate-600">Buildings insurance for landlords with rental properties and loss of rent protection.</p>
                </Link>
                <Link
                  href="/sectors/body-corporate"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Body Corporate Insurance</h3>
                  <p className="text-sm text-slate-600">Insurance for unit title buildings and shared structures under the Unit Titles Act.</p>
                </Link>
                <Link
                  href="/compare"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Compare Providers</h3>
                  <p className="text-sm text-slate-600">Compare all major NZ commercial buildings insurance providers side-by-side.</p>
                </Link>
                <a
                  href="https://www.icnz.org.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Insurance Council NZ</h3>
                  <p className="text-sm text-slate-600">Industry body for insurance companies. Check provider credentials.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Quote Form */}
            <div className="sticky top-4 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Quote</h3>
              <p className="text-sm text-slate-600 mb-6">Receive a customised commercial buildings insurance quote.</p>
              <QuoteForm compact={true} />
            </div>

            {/* Key Facts Card */}
            <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">Key Facts</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <AlertTriangle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>NOT covered by EQC</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Essential for business continuity</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Often required by landlords</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Premium depends on building type</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Business interruption add-on available</span>
                </li>
              </ul>
            </div>

            {/* Warning Card */}
            <div className="mt-8 bg-amber-50 rounded-lg border border-amber-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-600" />
                Don't Underinsure
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                Many commercial property owners underestimate replacement costs. Get a professional valuation to ensure adequate cover.
              </p>
              <p className="text-xs text-slate-600 italic">
                Underinsurance can leave you significantly out of pocket during a major claim.
              </p>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-sky-600" />
                Expert Guidance
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                Our commercial specialists can help you understand complex coverage options.
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
