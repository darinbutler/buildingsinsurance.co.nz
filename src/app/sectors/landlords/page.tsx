import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Check, AlertCircle, DollarSign, Home, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Landlord Buildings Insurance NZ | Rental Property Protection',
  description: 'Complete buildings insurance for NZ landlords. Tenant damage, loss of rent, meth contamination, and tax deductibility explained.',
  openGraph: {
    title: 'Landlord Buildings Insurance NZ | Rental Property Protection',
    description: 'Complete buildings insurance for NZ landlords. Tenant damage, loss of rent, meth contamination, and tax deductibility explained.',
    url: 'https://buildingsinsurance.co.nz/sectors/landlords/',
  },
  alternates: {
    canonical: 'https://buildingsinsurance.co.nz/sectors/landlords/',
  },
};

const whyLandlords = [
  {
    icon: <Shield size={28} className="text-emerald-600" />,
    title: 'Tenant Damage Protection',
    description: 'Your tenants may cause accidental or intentional damage. Landlord buildings insurance covers structural damage that tenants are liable for, protecting your investment.',
  },
  {
    icon: <DollarSign size={28} className="text-sky-600" />,
    title: 'Loss of Rent Coverage',
    description: 'If your property becomes uninhabitable due to insured damage, loss of rent cover reimburses your lost rental income during repairs.',
  },
  {
    icon: <Home size={28} className="text-emerald-600" />,
    title: 'Landlord Fixtures & Fittings',
    description: "Coverage includes fixtures you've installed like fitted kitchens, bathrooms, flooring, and heating systems that are your responsibility to maintain.",
  },
  {
    icon: <AlertCircle size={28} className="text-amber-600" />,
    title: 'Meth Contamination Cover',
    description: 'Optional add-on covers methamphetamine contamination remediation costs, which can be significant in NZ rental properties.',
  },
];

const coverageComparison = [
  { feature: 'Building structure', residential: true, landlord: true },
  { feature: 'Landlord fixtures & fittings', residential: false, landlord: true },
  { feature: 'Tenant damage (accidental)', residential: false, landlord: true },
  { feature: 'Tenant damage (intentional)', residential: false, landlord: false },
  { feature: 'Loss of rent', residential: false, landlord: true },
  { feature: 'Legal liability', residential: false, landlord: true },
  { feature: 'Meth contamination (optional)', residential: false, landlord: true },
  { feature: 'EQC integration', residential: true, landlord: true },
];

const rentalTypes = [
  {
    type: 'Single dwelling (standalone house)',
    features: 'House, garage, outbuildings',
    premiumEstimate: '$900–$1,400/yr',
    keyConsiderations: 'Age, location, and building condition affect premiums. Single tenant reduces complexity.',
  },
  {
    type: 'Multi-unit (duplex, townhouse)',
    features: 'Multiple separate dwellings',
    premiumEstimate: '$1,200–$2,000/yr',
    keyConsiderations: 'Multiple tenants increase risk. Ensure shared structure coverage is adequate.',
  },
  {
    type: 'Holiday rental (bach/apartment)',
    features: 'High turnover, furnished, public access',
    premiumEstimate: '$1,500–$2,500/yr',
    keyConsiderations: 'Higher risk due to frequent guests. May require separate holiday rental policy.',
  },
  {
    type: 'Residential investment (multi-property portfolio)',
    features: 'Managing 3+ properties',
    premiumEstimate: 'Portfolio discounts available',
    keyConsiderations: 'Multi-property policies offer better rates. Centralised claims management.',
  },
];

const taxDeductibility = [
  {
    item: 'Buildings insurance premiums',
    deductible: true,
    note: 'Fully deductible as rental property expense',
  },
  {
    item: 'Loss of rent coverage premiums',
    deductible: true,
    note: 'Deductible as rental income protection',
  },
  {
    item: 'Optional add-ons (meth cover, etc)',
    deductible: true,
    note: 'Generally deductible if rental-related',
  },
  {
    item: 'Claim payouts',
    deductible: false,
    note: 'Not deductible, but may reduce taxable loss',
  },
  {
    item: 'Excesses paid on claims',
    deductible: false,
    note: 'Not deductible as a separate expense',
  },
];

const tenantResponsibilities = [
  {
    title: 'Landlord vs Tenant Responsibilities',
    items: [
      {
        landlordResponsible: true,
        desc: 'Structural damage from natural disasters (earthquakes, floods, storms)',
      },
      {
        landlordResponsible: true,
        desc: 'Wear and tear on permanent fixtures (roof, walls, permanent fittings)',
      },
      {
        landlordResponsible: true,
        desc: 'Major system failures (plumbing, electrical, heating infrastructure)',
      },
      {
        landlordResponsible: false,
        desc: 'Accidental damage caused by tenant negligence (may claim against bond)',
      },
      {
        landlordResponsible: false,
        desc: 'Damage to minor items like blinds, light bulbs, minor fixtures',
      },
      {
        landlordResponsible: false,
        desc: 'Normal wear and tear from ordinary use of the property',
      },
    ],
  },
];

const methContamination = [
  {
    title: 'What is Meth Contamination?',
    content: 'Methamphetamine residue from illegal drug manufacturing can contaminate a property, making it unsafe for occupants and significantly reducing property value.',
  },
  {
    title: 'Health & Legal Risks',
    content: 'Contaminated properties pose health risks and may breach healthy homes standards. Landlords have legal obligations to provide safe rental housing.',
  },
  {
    title: 'Remediation Costs',
    content: 'Professional decontamination can cost $10,000–$50,000+ depending on contamination level and property size.',
  },
  {
    title: 'Insurance Solution',
    content: 'Optional meth contamination cover reimburses testing, remediation, and lost rent during the decontamination period.',
  },
];

export default function LandlordsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop"
          alt="Rental property apartment building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Landlord Buildings Insurance
          </h1>
          <p className="text-base sm:text-lg text-sky-100 max-w-2xl">
            Specialised insurance for rental properties. Protect against tenant damage, loss of rent, and more.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Sidebar with Quick Quote */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* Why Landlords Need Specific Cover */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Why Landlords Need Specific Insurance</h2>
              <p className="text-slate-700 mb-8">
                Landlord buildings insurance differs from standard homeowner insurance. It covers unique risks landlords face, including tenant damage, loss of rent, and landlord liability.
              </p>
              <div className="space-y-6">
                {whyLandlords.map((item, idx) => (
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

            {/* Landlord vs Residential Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Landlord vs. Residential Insurance</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Coverage Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Residential Owner</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Landlord</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {coverageComparison.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-slate-900 font-medium">{item.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {item.residential ? (
                            <Check size={20} className="mx-auto text-emerald-600" />
                          ) : (
                            <span className="text-slate-400 text-lg">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.landlord ? (
                            <Check size={20} className="mx-auto text-emerald-600" />
                          ) : (
                            <span className="text-slate-400 text-lg">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Coverage by Rental Type */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Coverage by Rental Type</h2>
              <div className="space-y-4">
                {rentalTypes.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{item.type}</h3>
                      <p className="text-sm text-slate-600">{item.features}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Annual Premium (Est.)</p>
                        <p className="text-xl font-bold text-emerald-600">{item.premiumEstimate}</p>
                      </div>
                      <p className="text-sm text-slate-700"><strong>Note:</strong> {item.keyConsiderations}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Landlord vs Tenant Responsibilities */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Landlord vs. Tenant Responsibilities</h2>
              <div className="space-y-4">
                {tenantResponsibilities[0].items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 px-6 py-4 rounded-lg ${
                      item.landlordResponsible
                        ? 'bg-emerald-50 border border-emerald-200'
                        : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <div className="flex-shrink-0 pt-0.5">
                      {item.landlordResponsible ? (
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-600">
                          <span className="text-white text-sm font-bold">L</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-400">
                          <span className="text-white text-sm font-bold">T</span>
                        </div>
                      )}
                    </div>
                    <p className="text-slate-700 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <strong>L = Landlord responsible (covered by buildings insurance)</strong><br />
                <strong>T = Tenant responsible</strong> (may claim against bond, or pursue legal action)
              </p>
            </section>

            {/* Meth Contamination */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Methamphetamine Contamination Cover</h2>
              <p className="text-slate-700 mb-8">
                Meth contamination is a serious issue affecting many NZ rental properties. Optional cover is available for testing, remediation, and lost rent.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {methContamination.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200 p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-700">{item.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
                <h4 className="font-bold text-slate-900 mb-2">Why It Matters</h4>
                <p className="text-slate-700 mb-3">
                  A meth contamination claim can devastate a landlord's finances if not insured. Professional testing and remediation are expensive, and you'll lose rental income during the process.
                </p>
                <p className="text-slate-700 font-semibold">
                  Premium cost: typically $200–$500/year for this add-on, but claims can save you $20,000+.
                </p>
              </div>
            </section>

            {/* Tax Deductibility */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Tax Deductibility of Premiums</h2>
              <p className="text-slate-700 mb-6">
                Most landlord insurance premiums are tax-deductible as a rental property expense. Keep records of all policies and premium payments for your accountant.
              </p>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                {taxDeductibility.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start justify-between px-6 py-4 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    } border-b border-slate-200 last:border-b-0`}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 mb-1">{item.item}</p>
                      <p className="text-sm text-slate-600">{item.note}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {item.deductible ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                          <Check size={16} />
                          Deductible
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                          Not Deductible
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <strong>Disclaimer:</strong> Tax treatment may vary based on individual circumstances. Consult your accountant or tax adviser for specific guidance on your rental property expenses.
              </p>
            </section>

            {/* Key Considerations */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Key Landlord Considerations</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Tenant Bond Requirements',
                    desc: 'Ensure your insurance covers damage beyond what bond money can cover. Bonds are capped and may not be sufficient for major damage.',
                  },
                  {
                    title: 'Legal Liability',
                    desc: 'Your landlord insurance includes liability coverage if a tenant or visitor is injured and sues you for damages.',
                  },
                  {
                    title: 'Regular Property Inspections',
                    desc: 'Document property condition regularly. This helps with claims if damage occurs and protects against unfair bond deductions.',
                  },
                  {
                    title: 'Adequate Sum Insured',
                    desc: 'Get a professional valuation. Underinsurance means you\'ll pay out of pocket for the shortfall.',
                  },
                  {
                    title: 'Loss of Rent Coverage Limits',
                    desc: 'Ensure the sum insured covers your full monthly rent for the expected repair period (typically 6–12 months).',
                  },
                  {
                    title: 'Rental Management',
                    desc: 'Consider whether your insurer offers different rates for owner-occupied vs. professionally managed properties.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg p-12 text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">Secure Your Investment</h2>
              <p className="text-lg mb-8 text-emerald-50">
                Get a quote for landlord buildings insurance tailored to your rental property. Protect yourself from tenant damage and loss of rent.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <Phone size={20} />
                Request a Landlord Quote
              </Link>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/sectors/residential"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Residential Insurance</h3>
                  <p className="text-sm text-slate-600">For owner-occupied residential homes and primary residences.</p>
                </Link>
                <Link
                  href="/sectors/body-corporate"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Body Corporate Insurance</h3>
                  <p className="text-sm text-slate-600">For landlords of unit title rental properties.</p>
                </Link>
                <Link
                  href="/compare"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Compare Providers</h3>
                  <p className="text-sm text-slate-600">Compare all major NZ landlord insurance providers side-by-side.</p>
                </Link>
                <a
                  href="https://www.tenancy.govt.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Tenancy Services NZ</h3>
                  <p className="text-sm text-slate-600">Government resources on landlord rights and responsibilities.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Quote Form */}
            <div className="sticky top-4 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Quote</h3>
              <p className="text-sm text-slate-600 mb-6">Instant landlord insurance quote for your rental property.</p>
              <QuoteForm compact={true} />
            </div>

            {/* Key Facts Card */}
            <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">Key Facts</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Covers tenant damage claims</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Loss of rent protection</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Meth contamination add-on</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Premiums are tax-deductible</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Average $1,000–$1,600/yr</span>
                </li>
              </ul>
            </div>

            {/* Coverage Add-ons Card */}
            <div className="mt-8 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">Popular Add-ons</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-sky-600" />
                  <span>Loss of Rent Coverage</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-sky-600" />
                  <span>Meth Contamination</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-sky-600" />
                  <span>Legal Liability</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-sky-600" />
                  <span>Accidental Damage</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-sky-600" />
                  <span>Landlord's Contents</span>
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-sky-600" />
                Expert Landlord Advice
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                Our landlord insurance specialists understand NZ rental property unique risks.
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Landlord Buildings Insurance NZ',
          description: 'Complete buildings insurance for NZ landlords. Tenant damage, loss of rent, meth contamination, and tax deductibility explained.',
          provider: {
            '@type': 'Organization',
            name: 'BuildingsInsurance.co.nz',
            url: 'https://buildingsinsurance.co.nz'
          },
          areaServed: { '@type': 'Country', name: 'New Zealand' },
          serviceType: 'Insurance Comparison',
          url: 'https://buildingsinsurance.co.nz/sectors/landlords/'
        }) }}
      />
    </main>
  );
}
