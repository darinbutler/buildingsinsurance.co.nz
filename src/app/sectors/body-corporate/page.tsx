import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { AlertCircle, Check, Building2, FileText, Users, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Body Corporate Insurance NZ | Unit Titles Act Protection',
  description: 'Mandatory body corporate buildings insurance for unit title properties. Shared structure coverage, full replacement, and public liability explained.',
};

const whyBodyCorporate = [
  {
    icon: <FileText size={28} className="text-emerald-600" />,
    title: 'Unit Titles Act Requirement',
    description: 'New Zealand law requires all unit title buildings to have insurance covering the common property. The body corporate must maintain this insurance.',
  },
  {
    icon: <Building2 size={28} className="text-sky-600" />,
    title: 'Shared Structure Protection',
    description: 'Body corporate insurance covers common areas like hallways, external walls, roofs, parking areas, and shared infrastructure that benefit all unit owners.',
  },
  {
    icon: <Users size={28} className="text-amber-600" />,
    title: 'Coordinated Claims',
    description: 'A single policy ensures consistency across all units. Claims are managed centrally, simplifying the process for all unit owners.',
  },
  {
    icon: <Shield size={28} className="text-emerald-600" />,
    title: 'Full Replacement Guarantee',
    description: 'Body corporate insurance typically includes full replacement cover, meaning rebuilding costs are covered even if exceeding the sum insured (agreed value basis).',
  },
];

const unitTitlesCoverage = [
  { item: 'Building structure (walls, roof, foundation)', unitOwner: true, bodyCorp: true },
  { item: 'Common areas (hallways, foyers, lifts)', unitOwner: false, bodyCorp: true },
  { item: 'Shared parking areas and garages', unitOwner: false, bodyCorp: true },
  { item: 'External walls and weathertightness', unitOwner: false, bodyCorp: true },
  { item: 'Roof structure and coverings', unitOwner: false, bodyCorp: true },
  { item: 'Communal gardens and landscaping', unitOwner: false, bodyCorp: true },
  { item: 'Lifts and common service areas', unitOwner: false, bodyCorp: true },
  { item: 'Individual unit interior', unitOwner: true, bodyCorp: false },
  { item: 'Individual unit fixtures and fittings', unitOwner: true, bodyCorp: false },
  { item: 'Individual unit contents and furniture', unitOwner: true, bodyCorp: false },
  { item: 'Damage caused by individual owner negligence', unitOwner: true, bodyCorp: false },
  { item: 'Public liability (third-party injury)', unitOwner: false, bodyCorp: true },
];

const coverageTypes = [
  {
    type: 'Small apartment complex (up to 10 units)',
    coverage: 'Standard buildings + public liability',
    premiumRange: '$2,000–$4,000/yr',
    considerations: 'Often consolidated with landlord policies if owner-occupied. Simpler claims.',
  },
  {
    type: 'Medium apartment building (11–30 units)',
    coverage: 'Buildings + public liability + infrastructure',
    premiumRange: '$4,000–$8,000/yr',
    considerations: 'Requires detailed unit count and building specs. Shared services require consideration.',
  },
  {
    type: 'Large apartment building (30+ units)',
    coverage: 'Comprehensive buildings + public liability + professional claims management',
    premiumRange: '$8,000–$20,000+/yr',
    considerations: 'Specialist policies available. Consider specialist body corporate insurers.',
  },
  {
    type: 'Mixed-use building (retail + residential)',
    coverage: 'Commercial + residential buildings + public liability',
    premiumRange: '$10,000–$25,000+/yr',
    considerations: 'Requires specialist underwriting. Commercial areas may need separate coverage.',
  },
];

const keyResponsibilities = [
  {
    title: 'Unit Owner Responsibility',
    items: [
      'Buildings insurance for their individual unit (walls inward for most policies)',
      'Contents insurance for furniture and personal items',
      'Landlord insurance if renting the unit',
      'Any damage caused by their own negligence within their unit',
    ],
  },
  {
    title: 'Body Corporate Responsibility',
    items: [
      'Common area buildings insurance (walls outward)',
      'Public liability insurance for third-party injury claims',
      'Professional management of insurance and claims',
      'Regular building inspections and maintenance',
      'Weathertightness issues affecting the whole building',
    ],
  },
];

const managingClaims = [
  {
    step: 'Report to Body Corporate',
    desc: 'Notify the body corporate committee or manager immediately of any damage affecting common property.',
  },
  {
    step: 'Body Corporate Lodges Claim',
    desc: 'The body corporate manager contacts the insurer and lodges the claim with supporting documentation.',
  },
  {
    step: 'Insurer Inspection',
    desc: 'Loss assessor inspects damage and prepares a repair cost estimate. Unit owners may need to provide access.',
  },
  {
    step: 'Claim Settlement Decision',
    desc: 'Insurer approves settlement amount. If dispute exists, the body corporate may need to dispute with insurer.',
  },
  {
    step: 'Repairs & Reinstatement',
    desc: 'Body corporate arranges repairs using approved contractors. Timeline depends on damage severity.',
  },
  {
    step: 'Settlement to Body Corporate',
    desc: 'Insurer pays claim settlement. Body corporate distributes costs among affected unit owners if applicable.',
  },
];

const materialAndLiability = [
  {
    title: 'Material Damage Coverage',
    description: 'Protects the building structure from accidental damage, fire, weather events, vandalism, and theft. Essential for all buildings.',
    required: true,
  },
  {
    title: 'Public Liability Coverage',
    description: 'Protects against claims if a visitor or member of public is injured on the common property. Often required by lenders and Unit Titles Act.',
    required: true,
  },
  {
    title: 'Owners Liability',
    description: 'Extends liability cover to individual unit owners for damage they cause to common areas. Recommended addition.',
    required: false,
  },
  {
    title: 'Professional Indemnity',
    description: 'Covers claims against the body corporate for management decisions or professional advice. Recommended for larger buildings.',
    required: false,
  },
];

const claimsExample = [
  {
    scenario: 'Roof leak damages common ceiling',
    responsibility: 'Body Corporate',
    coverage: 'Buildings + public liability',
  },
  {
    scenario: 'Unit owner causes water damage to shared wall',
    responsibility: 'Body Corporate (via Owners Liability if available)',
    coverage: 'Buildings insurance or Owners Liability add-on',
  },
  {
    scenario: 'Fire in common area causes damage',
    responsibility: 'Body Corporate',
    coverage: 'Buildings + public liability',
  },
  {
    scenario: 'Visitor injured in common area',
    responsibility: 'Body Corporate',
    coverage: 'Public Liability',
  },
  {
    scenario: 'Structural issues affecting multiple units',
    responsibility: 'Body Corporate',
    coverage: 'Buildings insurance (may require structural assessment)',
  },
];

export default function BodyCorporatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop"
          alt="Apartment building balconies"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Body Corporate Insurance
          </h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-2xl">
            Mandatory unit title building insurance covering common structures, shared areas, and public liability.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Sidebar with Quick Quote */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* Critical Alert */}
            <section className="mb-16 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-8">
              <div className="flex gap-4">
                <AlertCircle size={28} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-2">Mandatory Under the Unit Titles Act</h2>
                  <p className="text-emerald-800 mb-4">
                    All body corporates must maintain insurance covering the common property including the building structure, shared areas, and public liability. This is a legal requirement, not optional.
                  </p>
                  <p className="text-emerald-800 font-semibold">
                    The body corporate secretary or manager is responsible for arranging and maintaining this insurance.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Body Corporate Insurance Matters */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Body Corporate Insurance Matters</h2>
              <div className="space-y-6">
                {whyBodyCorporate.map((item, idx) => (
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

            {/* Unit Owner vs Body Corporate Responsibilities */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Covers What? Unit Owner vs. Body Corporate</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {keyResponsibilities.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      {idx === 0 ? (
                        <Building2 size={24} className="text-sky-600" />
                      ) : (
                        <Users size={24} className="text-emerald-600" />
                      )}
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3">
                          <Check size={20} className={idx === 0 ? 'text-sky-600' : 'text-emerald-600'} />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Coverage Comparison Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Responsibility Chart</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Coverage Item</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Unit Owner</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Body Corporate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {unitTitlesCoverage.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-slate-900">{item.item}</td>
                        <td className="px-6 py-4 text-center">
                          {item.unitOwner ? (
                            <Check size={20} className="mx-auto text-sky-600" />
                          ) : (
                            <span className="text-slate-400 text-lg">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.bodyCorp ? (
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

            {/* Coverage by Building Type */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage by Building Type</h2>
              <div className="space-y-4">
                {coverageTypes.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{item.type}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.coverage}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Annual Premium (Est.)</p>
                        <p className="text-xl font-bold text-emerald-600">{item.premiumRange}</p>
                      </div>
                      <p className="text-sm text-slate-700"><strong>Note:</strong> {item.considerations}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Material Damage & Public Liability */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Material Damage & Public Liability Requirements</h2>
              <div className="space-y-4">
                {materialAndLiability.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100">
                          {item.required ? (
                            <AlertCircle size={18} className="text-red-600" />
                          ) : (
                            <Check size={18} className="text-emerald-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700 mb-3">{item.description}</p>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            item.required
                              ? 'bg-red-100 text-red-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {item.required ? 'Mandatory' : 'Recommended'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Managing Body Corporate Claims */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Managing Body Corporate Claims</h2>
              <div className="space-y-4">
                {managingClaims.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 p-6 flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">{item.step}</h4>
                      <p className="text-slate-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-2">Important for Body Corporate Managers</h4>
                <p className="text-slate-700">
                  Maintain detailed records of all claims, inspections, and communications with insurers. This protects the body corporate and supports future insurance applications.
                </p>
              </div>
            </section>

            {/* Claims Examples */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Common Claims Examples</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-50 to-sky-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Scenario</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Who's Responsible?</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Coverage Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {claimsExample.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-slate-900">{row.scenario}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.responsibility}</td>
                        <td className="px-6 py-4 text-sm font-medium text-emerald-600">{row.coverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Considerations for Body Corporates</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Regular Building Inspections',
                    desc: 'Conduct annual inspections to identify structural issues early. This helps with claims and ensures adequate insurance coverage.',
                  },
                  {
                    title: 'Unit Count Accuracy',
                    desc: 'Ensure accurate unit count and detailed building specifications when applying for insurance. This prevents coverage gaps.',
                  },
                  {
                    title: 'Weathertightness Issues',
                    desc: 'For older buildings, weathertightness can be a problem. Ensure your policy covers this and consider specialist assessments.',
                  },
                  {
                    title: 'Sum Insured vs Replacement Cost',
                    description: 'Get a professional valuation of replacement cost for your building. Most policies use agreed value, but confirm replacement guarantee clause.',
                  },
                  {
                    title: 'Levy Communications',
                    desc: 'Keep unit owners informed about insurance arrangements. If a claim occurs, explain how insurance will cover costs.',
                  },
                  {
                    title: 'Claims Management Process',
                    desc: 'Develop a clear process for reporting and managing claims. Delegate to a secretary or manager who understands the policy.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.desc || item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg p-12 text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">Ensure Your Body Corporate is Protected</h2>
              <p className="text-lg mb-8 text-emerald-50">
                Get a quote for comprehensive body corporate buildings insurance. Mandatory protection for all unit title buildings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <Phone size={20} />
                Request a Body Corporate Quote
              </Link>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/sectors/residential"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Individual Unit Owner Insurance</h3>
                  <p className="text-sm text-slate-600">Buildings insurance for your individual unit (walls inward).</p>
                </Link>
                <Link
                  href="/sectors/landlords"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Landlord Insurance</h3>
                  <p className="text-sm text-slate-600">Insurance for landlords renting out unit title units.</p>
                </Link>
                <Link
                  href="/compare"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Compare Providers</h3>
                  <p className="text-sm text-slate-600">Compare body corporate insurance providers side-by-side.</p>
                </Link>
                <a
                  href="https://www.justice.govt.nz/pages/unit-titles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">Unit Titles Act Information</h3>
                  <p className="text-sm text-slate-600">Official government guidance on Unit Titles Act requirements.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Quote Form */}
            <div className="sticky top-4 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-lg border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Quote</h3>
              <p className="text-sm text-slate-600 mb-6">Instant quote for body corporate buildings insurance.</p>
              <QuoteForm compact={true} />
            </div>

            {/* Key Facts Card */}
            <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">Key Facts</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <AlertCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mandatory by Unit Titles Act</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Covers common property only</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Public liability included</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Full replacement basis available</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Managed by body corporate</span>
                </li>
              </ul>
            </div>

            {/* Unit Owner Info Card */}
            <div className="mt-8 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4">For Individual Unit Owners</h4>
              <p className="text-sm text-slate-700 mb-4">
                You still need your own buildings insurance for your individual unit (walls inward). Body corporate insurance only covers common areas.
              </p>
              <Link
                href="/sectors/residential"
                className="inline-block text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Learn about unit owner insurance →
              </Link>
            </div>

            {/* Management Info Card */}
            <div className="mt-8 bg-amber-50 rounded-lg border border-amber-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users size={20} className="text-amber-600" />
                Body Corporate Secretary
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                If you manage a body corporate, ensure your insurance meets Unit Titles Act requirements and is reviewed annually.
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold text-amber-600 hover:text-amber-700"
              >
                Get professional advice →
              </Link>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-sky-600" />
                Expert Support
              </h4>
              <p className="text-sm text-slate-700 mb-4">
                Our specialists understand body corporate requirements and Unit Titles Act obligations.
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
