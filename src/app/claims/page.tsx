import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, Clock, Mail, FileText, Heart, ShieldCheck, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Making a Claim | BuildingsInsurance.co.nz',
  description: 'How to make a buildings and home insurance claim, our complaints process, and support for vulnerable customers. BuildingsInsurance.co.nz is a referral service — claims are handled directly by your insurer.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/claims/' },
};

export default function ClaimsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildingsinsurance.co.nz' },
      { '@type': 'ListItem', position: 2, name: 'Making a Claim', item: 'https://buildingsinsurance.co.nz/claims/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Making a Claim</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">Making a Claim</h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Guidance on making a buildings and home insurance claim, our complaints process, and support if you need extra help.
          </p>
        </div>
      </section>

      {/* Referral service notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">We are a referral service — not your insurer</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                BuildingsInsurance.co.nz connects you with licensed insurance advisers and brokers — we do not issue insurance policies or handle claims directly. To make a claim, contact your insurer using the details on your policy schedule. Unsure who your insurer is? Email <a href="mailto:hello@cover4you.co.nz" className="underline font-medium">hello@cover4you.co.nz</a> and we will help direct you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Make a Claim</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            If you experience building damage, storm, fire, or accidental loss, follow these steps to ensure your claim is handled as smoothly as possible.
          </p>
          <div className="space-y-5">
            {[
              { step: '1', title: 'Stay Safe', desc: 'Ensure all people involved are safe. In an emergency, call 111. Take any steps needed to prevent injury or further loss.' },
              { step: '2', title: 'Prevent Further Loss', desc: 'Take reasonable steps to prevent further damage — temporary repairs, securing property, or moving items to safety. Keep all receipts for emergency costs.' },
              { step: '3', title: 'Document Everything', desc: 'Photograph all damage thoroughly before any clean-up or repairs. Note the date, time, location, and sequence of events. Get witness details if relevant.' },
              { step: '4', title: 'Notify Your Insurer Promptly', desc: 'Contact your insurer as soon as practicable — most policies require prompt notification. Use the contact details on your policy schedule or certificate of insurance.' },
              { step: '5', title: 'Do Not Admit Liability', desc: 'Do not admit fault to any third party before speaking with your insurer. If you receive legal documents relating to the incident, forward them to your insurer immediately without responding.' },
              { step: '6', title: 'Keep All Records', desc: 'Retain all correspondence, repair quotes, receipts, and documentation. Your insurer will guide you through their claims assessment and settlement process.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0">{item.step}</div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex-1">
                  <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <div className="flex gap-3 items-start">
                <FileText className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sky-900 mb-1.5">Key Claim Tip</h3>
                  <p className="text-sky-800 text-sm leading-relaxed">Do not start permanent repairs until your insurer has assessed the damage. For weather-related events, photograph all damage before any clean-up. Your sum insured must reflect the current rebuild cost — review it annually.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex gap-3 items-start">
                <FileText className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">Read Your Policy Carefully</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Always check your policy renewal schedule to ensure all details are correct — particularly your sum insured, coverage limits, and any exclusions. If anything looks incorrect, contact your insurer or adviser before an incident occurs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complaints */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Making a Complaint</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">We are committed to resolving complaints promptly and fairly. There are two types — complaints about your insurer, and complaints about our referral service.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Complaint About Your Insurer</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Contact your insurer directly in the first instance. Most NZ insurers are members of the <a href="https://icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Insurance Council of NZ (ICNZ)</a> and are bound by the Fair Insurance Code.
              </p>
              <div className="space-y-2 text-sm text-slate-700 mb-4">
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-sky-500 flex-shrink-0" /><span>Acknowledgement within <strong>5 business days</strong></span></div>
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-sky-500 flex-shrink-0" /><span>Full response within <strong>10 business days</strong></span></div>
              </div>
              <p className="text-slate-500 text-xs">If unresolved, escalate to <a href="https://www.fscl.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">FSCL</a> or <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">IFSO</a>.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Mail className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Complaint About Our Service</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">If you have a complaint about BuildingsInsurance.co.nz or the referral service provided by Cover4You, please contact us in writing.</p>
              <a href="mailto:hello@cover4you.co.nz?subject=Complaint" className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors mb-4">
                <Mail className="w-4 h-4" /> Email a Complaint
              </a>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-teal-500 flex-shrink-0" /><span>Acknowledgement within <strong>5 business days</strong></span></div>
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-teal-500 flex-shrink-0" /><span>Full response within <strong>10 business days</strong></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerable customers */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start mb-6">
            <Heart className="w-8 h-8 text-sky-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Support for Vulnerable Customers</h2>
              <p className="text-slate-300 leading-relaxed">We are committed to supporting customers who may be in vulnerable circumstances — including those experiencing financial hardship, health difficulties, bereavement, or other challenges affecting their ability to engage with insurance services.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Extra Time & Care', desc: 'We will take extra time when communicating with customers who need it. Please tell us if you need information presented differently or more time to make decisions.' },
              { title: 'Third-Party Support', desc: 'You can authorise a trusted person — a family member, support worker, or advocate — to communicate with us on your behalf at any time.' },
              { title: 'No Pressure', desc: 'We will never pressure you into making decisions. If you need time to consider your options or seek independent advice, please take the time you need.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-slate-800 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-sm leading-relaxed">
              For support contact us at <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300 font-medium">hello@cover4you.co.nz</a>. For financial hardship guidance, <a href="https://www.moneytalks.co.nz" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium">MoneyTalks</a> (0800 345 123) offers free support. For crisis support, <a href="https://www.lifeline.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium">Lifeline</a> is available on 0800 543 354.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
