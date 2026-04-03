import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Contact BuildingsInsurance.co.nz | Get Your Free Quote',
  description: 'Contact our NZ insurance experts for a free buildings insurance quote. Get expert advice and the best rates today.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/contact/' },
  openGraph: {
    title: 'Contact BuildingsInsurance.co.nz | Get Your Free Quote',
    description: 'Get a free buildings insurance quote from our NZ experts.',
    url: 'https://buildingsinsurance.co.nz/contact/',
    images: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop'],
  },
};

const steps = [
  {
    number: '1',
    title: 'Submit Your Information',
    description: 'Complete our quick form with details about your property and coverage needs.',
  },
  {
    number: '2',
    title: 'Our Adviser Calls',
    description: 'A friendly NZ-based adviser will call you within 2-4 hours to discuss your requirements.',
  },
  {
    number: '3',
    title: 'Compare Quotes',
    description: 'Review personalized quotes from multiple insurers side-by-side with full details and comparisons.',
  },
  {
    number: '4',
    title: 'Get Covered',
    description: 'Choose your policy and get instant confirmation. Coverage starts as soon as you\'re ready.',
  },
];

const contactInfo = [
  {
    icon: '✉️',
    title: 'Email',
    value: 'hello@cover4you.co.nz',
    href: 'mailto:hello@cover4you.co.nz',
  },
  {
    icon: '📞',
    title: 'Phone',
    value: '0800 COVER 4U (0800 268 37 48)',
    href: 'tel:0800268374',
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Auckland, New Zealand',
    href: '#',
  },
];

export default function ContactPage() {
  const displayFaqs = faqs.slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=900&fit=crop"
          alt="Co-working space for insurance consultations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Get Your Free Buildings Insurance Quote
          </h1>
          <p className="text-base sm:text-lg text-slate-200 text-center max-w-2xl">
            Let our NZ experts help you find the perfect coverage at the best rates
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Quote Form - Left Column (3/5) */}
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>

            {/* What Happens Next - Right Column (2/5) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  What Happens Next
                </h2>

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white font-bold">
                          {step.number}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-8 bg-slate-200 ml-5 mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">
                    Need Help Right Away?
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Call our team directly or email us with questions.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:0800268374"
                      className="block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-100 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:hello@cover4you.co.nz"
                      className="block px-4 py-2 bg-sky-50 text-sky-700 rounded-lg font-semibold hover:bg-sky-100 transition-colors text-center"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-emerald-300 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-700 font-semibold">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <FAQAccordion key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#"
              className="text-emerald-600 hover:text-emerald-700 font-bold"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-sky-50 border-t border-slate-200 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Why Trust BuildingsInsurance.co.nz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <p className="text-slate-700 font-semibold">
                Trusted by 10,000+ NZ property owners
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-slate-700 font-semibold">
                Get quotes in minutes, not days
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💰</div>
              <p className="text-slate-700 font-semibold">
                Save up to 40% on premiums
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-lg mb-6">
            Our NZ-based team is dedicated to finding you the perfect buildings insurance coverage at the best possible rates.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't Wait - Get Protected Today
          </h2>
          <p className="text-emerald-50 mb-8 text-lg">
            Our quick quote process takes just 5 minutes. Start your free comparison right now.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors"
          >
            Get Your Quote Now
          </Link>
        </div>
      </section>
    </main>
  );
}

// Accordion Component for FAQs
function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group bg-white rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors">
      <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900 hover:text-emerald-600 transition-colors">
        {question}
        <span className="ml-2 transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="px-6 pb-6 border-t border-slate-200 text-slate-700">
        {answer}
      </div>
    </details>
  );
}
