import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import {
  Check,
  X,
  AlertCircle,
  Shield,
  Zap,
  TrendingUp,
  Home,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buildings Insurance Coverage NZ | What\'s Covered',
  description:
    'Understand buildings insurance coverage options in New Zealand. Compare coverage tiers, learn what is and isn\'t covered, and find the right protection for your property.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/coverage/' },
  openGraph: {
    title: 'Buildings Insurance Coverage NZ | What\'s Covered',
    description:
      'Understand buildings insurance coverage options in New Zealand. Compare coverage tiers, learn what is and isn\'t covered, and find the right protection for your property.',
    url: 'https://buildingsinsurance.co.nz/coverage/',
  },
}

export default function CoveragePage() {
  const coverageTiers = [
    {
      amount: '$300K',
      name: 'Starter',
      range: '$150–$300/yr',
      description: 'Entry-level cover aligned with EQC threshold',
      suitableFor: ['Small apartments', 'Studio homes', 'First-time buyers'],
      example: 'One-bedroom apartment in Auckland',
    },
    {
      amount: '$500K',
      name: 'Standard',
      range: '$250–$500/yr',
      description: 'Average New Zealand home protection',
      suitableFor: ['3–4 bedroom homes', 'Moderate value properties', 'Typical NZ families'],
      example: 'Average 3-bed suburban home',
    },
    {
      amount: '$750K',
      name: 'Popular',
      range: '$400–$700/yr',
      description: 'Most popular coverage level for mid-range homes',
      suitableFor: ['Renovated properties', 'Family homes', 'Good value security'],
      example: 'Modern 4-bed family home',
      popular: true,
    },
    {
      amount: '$1M',
      name: 'Enhanced',
      range: '$600–$900/yr',
      description: 'Comprehensive protection for larger homes',
      suitableFor: ['Large properties', 'Higher rebuild costs', 'Valuable constructions'],
      example: 'Large 5+ bed executive home',
    },
    {
      amount: '$2M+',
      name: 'Premium',
      range: '$1,200–$2,000+/yr',
      description: 'Full protection for high-value properties',
      suitableFor: ['Luxury homes', 'Historic properties', 'High-end investments'],
      example: 'Multi-million dollar waterfront property',
    },
  ]

  const coverageCategories = [
    {
      name: 'Natural Disaster',
      items: ['Earthquake damage', 'Flood damage', 'Storm & wind damage', 'Volcanic activity'],
      description:
        'Protection against natural disasters common in New Zealand, typically the most critical cover for NZ homeowners.',
      example: 'Your home sustains significant damage during an earthquake or severe storm.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Fire & Explosion',
      items: ['Fire damage', 'Explosion damage', 'Lightning strike', 'Smoke damage'],
      description:
        'Comprehensive cover for fire-related damage and explosions, including associated smoke and water damage.',
      example:
        'A fire breaks out in your kitchen and spreads to other rooms; cover includes rebuilding and repairs.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Theft & Vandalism',
      items: ['Break-ins and theft', 'Vandalism damage', 'Malicious damage', 'Forced entry damage'],
      description:
        'Protection against criminal damage to your building, including break-ins and vandalism repairs.',
      example: 'Vandals damage your property or thieves break in; costs are covered for repairs.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Water Damage',
      items: ['Burst pipes', 'Overflowing gutters', 'Blocked drains', 'Water leaks'],
      description:
        'Cover for unintentional water damage from burst pipes, leaking roofs, and drainage issues.',
      example: 'A burst water pipe causes ceiling damage; repair costs are covered.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Temporary Accommodation',
      items: ['Temporary housing costs', 'Accommodation expenses', 'Related living costs'],
      description:
        'While your home is being repaired, temporary accommodation and living costs are covered.',
      example:
        'Your home requires 3 months of repairs; accommodation in a rental property is covered.',
      limit: 'Typically 10–20% of sum insured',
    },
    {
      name: 'Landlord-Specific Cover',
      items: ['Loss of rental income', 'Tenant default', 'Legal liability', 'Landlord protection'],
      description:
        'Specialised coverage for landlords including loss of rental income if the property becomes uninhabitable.',
      example: 'Property is damaged and unrentable for 2 months; lost rental income is covered.',
      limit: 'Typically 12 months rent',
    },
    {
      name: 'Legal Costs',
      items: ['Legal defence costs', 'Recovery costs', 'Dispute resolution', 'Professional fees'],
      description:
        'Cover for legal costs associated with claims, disputes, and building-related legal matters.',
      example: 'You need legal representation regarding a damage claim; legal fees are covered.',
      limit: 'Typically $10K–$25K',
    },
    {
      name: 'Gradual Damage (Optional)',
      items: ['Wear and tear', 'Weathering', 'Gradual subsidence', 'Slow deterioration'],
      description:
        'Optional add-on cover for gradual damage (not usually covered in standard policies).',
      example: 'Your building slowly subsides; this optional cover would apply.',
      limit: 'Depends on add-on selected',
    },
  ]

  const notCovered = [
    {
      title: 'General Wear and Tear',
      description:
        'Damage from everyday use, aging, and normal deterioration is not covered.',
      icon: AlertCircle,
    },
    {
      title: 'Deliberate Damage',
      description:
        'Intentional damage caused by you or someone acting with your permission is excluded.',
      icon: X,
    },
    {
      title: 'Pre-Existing Damage',
      description:
        'Damage that existed before the policy was issued or known at the time of application.',
      icon: FileText,
    },
    {
      title: 'Unoccupied Property (60+ days)',
      description:
        'Extended unoccupancy (typically 60+ days) may void or limit coverage unless declared.',
      icon: Home,
    },
    {
      title: 'Illegal Activity',
      description:
        'Damage resulting from criminal activity you\'re involved in or that occurs on your property illegally.',
      icon: Shield,
    },
    {
      title: 'Certain Natural Land Movement',
      description:
        'Gradual subsidence, landslide, or ground movement (unless specifically added) is excluded.',
      icon: TrendingUp,
    },
  ]

  const premiumFactors = [
    {
      factor: 'Location / Earthquake Zone',
      impact: 'Highest',
      colour: 'red',
      description: 'High-risk areas (e.g., Wellington, Christchurch) have higher premiums',
    },
    {
      factor: 'Building Age & Materials',
      impact: 'Very High',
      colour: 'red',
      description: 'Older buildings or certain materials (unreinforced masonry) cost more',
    },
    {
      factor: 'Sum Insured / Rebuild Cost',
      impact: 'High',
      colour: 'orange',
      description: 'Higher coverage amounts naturally result in higher premiums',
    },
    {
      factor: 'Claims History',
      impact: 'High',
      colour: 'orange',
      description: 'Multiple claims increase risk and premiums; clean history reduces cost',
    },
    {
      factor: 'Security Features',
      impact: 'Moderate',
      colour: 'yellow',
      description: 'Alarms, locks, and security systems can reduce your premium by 5–15%',
    },
    {
      factor: 'Excess Level Chosen',
      impact: 'Moderate',
      colour: 'emerald',
      description: 'Higher excess (your contribution) lowers the annual premium significantly',
    },
  ]

  const eqcInfo = [
    {
      title: 'What EQC Covers',
      description: 'The Earthquake Commission covers natural disasters up to $300,000 plus GST.',
      points: [
        'Natural disasters: earthquake, volcanic eruption, landslide, hydrothermal activity',
        'Covers residential land and buildings',
        '$300K + GST cap per event',
        'Applies to homeowners and some landlords',
      ],
    },
    {
      title: 'How EQC Works with Private Insurance',
      description: 'EQC and private insurance work together to provide comprehensive protection.',
      points: [
        'EQC covers up to $300K + GST; private insurance covers the amount above',
        'EQC is the first responder; private insurer handles excess',
        'You claim on both policies separately',
        'No gap in cover if policies are correctly aligned',
      ],
    },
    {
      title: 'Recent EQC Changes',
      description: 'EQC has undergone significant reforms in recent years.',
      points: [
        'EQC now covers all-natural-hazard events (previously only earthquake)',
        'Increased focus on insurable interest and residential-only cover',
        'Changes to claim processes and timelines',
        'New opt-out arrangements for some property owners',
      ],
    },
    {
      title: 'Filing an EQC Claim',
      description: 'Process for lodging a claim with the Earthquake Commission.',
      points: [
        'Report damage within 3 months of the event',
        'Gather documentation and photos of damage',
        'Complete EQC claim form (available online or by phone)',
        'EQC will assess and respond within set timeframes',
      ],
    },
  ]

  const getImpactColour = (colour: string) => {
    const colours: Record<string, string> = {
      red: 'bg-red-100 text-red-800',
      orange: 'bg-orange-100 text-orange-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      emerald: 'bg-emerald-100 text-emerald-800',
    }
    return colours[colour] || 'bg-slate-100 text-slate-800'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[380px] w-full overflow-hidden sm:min-h-[450px] lg:min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
            alt="Modern office building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Buildings Insurance Coverage Explained
            </h1>
            <p className="text-base text-slate-200 sm:text-xl">
              Understand your coverage options and what's protected under a buildings insurance policy
              in New Zealand.
            </p>
          </div>
        </div>

        {/* Trust Indicators - overlaid on hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-slate-900/60 backdrop-blur-sm px-6 py-4 sm:px-12 lg:px-20">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-400" />
              Licensed Insurers
            </div>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-400" />
              No Broker Fees
            </div>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-400" />
              Updated April 2026
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Tiers Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Choose Your Coverage Level
            </h2>
            <p className="text-lg text-slate-600">
              Select the sum insured that matches your home's rebuild cost
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {coverageTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 transition-all ${
                  tier.popular
                    ? 'order-first bg-emerald-50 ring-2 ring-emerald-500 lg:col-span-1 lg:order-none'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-slate-900">{tier.amount}</h3>
                  <p className="text-sm font-semibold text-emerald-600">{tier.name}</p>
                </div>
                <p className="mb-3 text-sm text-slate-600">{tier.range}</p>
                <p className="mb-4 text-sm text-slate-700">{tier.description}</p>
                <div className="mb-4 space-y-2 border-y border-slate-200 py-4">
                  <p className="text-xs font-semibold uppercase text-slate-600">
                    Suitable For
                  </p>
                  {tier.suitableFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mb-4 rounded-lg bg-slate-50 p-3 text-sm italic text-slate-700">
                  Example: {tier.example}
                </p>
                {tier.popular && (
                  <button className="w-full rounded-lg bg-emerald-600 py-2 font-semibold text-white transition-all hover:bg-emerald-700">
                    View Quote
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered - Detailed Table */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What's Covered in Your Policy
            </h2>
            <p className="text-lg text-slate-600">
              Detailed breakdown of coverage categories and protection limits
            </p>
          </div>

          <div className="space-y-8">
            {coverageCategories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 p-8 transition-all hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {category.name}
                </h3>

                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-slate-900">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-slate-900">
                        What It Covers:
                      </h4>
                      <p className="text-slate-700">{category.description}</p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-4">
                      <h4 className="mb-2 font-semibold text-slate-900">
                        Example:
                      </h4>
                      <p className="text-sm text-slate-700">{category.example}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">Limit:</span>{' '}
                    <span className="text-slate-700">{category.limit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Covered */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What's NOT Covered
            </h2>
            <p className="text-lg text-slate-600">
              Important exclusions to understand before purchasing
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notCovered.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Factors */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What Affects Your Premium
            </h2>
            <p className="text-lg text-slate-600">
              Understand the key factors that influence your insurance cost
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">
                    Factor
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">
                    Impact
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {premiumFactors.map((factor, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {factor.factor}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getImpactColour(
                          factor.colour
                        )}`}
                      >
                        {factor.impact}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {factor.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EQC Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Understanding EQC Cover
            </h2>
            <p className="text-lg text-slate-600">
              How the Earthquake Commission works with your private insurance
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {eqcInfo.map((section, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {section.title}
                </h3>
                <p className="mb-6 text-slate-600">{section.description}</p>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-amber-200 bg-amber-50 p-8">
            <div className="flex gap-4">
              <AlertCircle className="h-8 w-8 flex-shrink-0 text-amber-600" />
              <div>
                <h4 className="mb-2 font-semibold text-slate-900">
                  Important: Check Your EQC Eligibility
                </h4>
                <p className="text-slate-700">
                  EQC cover is automatic for residential properties but has changed significantly
                  in recent years. Some property owners may be able to opt out. Check your property's
                  eligibility and coverage details at eqc.govt.nz or discuss with your insurer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Ready to Get Covered?
            </h2>
            <p className="text-lg text-slate-600">
              Compare quotes from multiple insurers and find the right coverage for your property
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Additional Resources */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">More Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Insurance Guides
                  </Link>
                </li>
                <li>
                  <a
                    href="https://eqc.govt.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    EQC Website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">Property Types</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/sectors/residential"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Residential Homes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/commercial"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Commercial Buildings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/body-corporate"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Body Corporate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-emerald-600 transition-all hover:text-emerald-700 hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
