import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thank You | BuildingsInsurance.co.nz',
  description: 'Thank you for your interest in buildings insurance. An adviser will contact you shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
          {/* Checkmark Animation */}
          <div className="mb-8 flex justify-center">
            <svg
              className="w-24 h-24 sm:w-32 sm:h-32 text-emerald-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Thank You!
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-8">
            Your quote request has been submitted
          </h2>

          {/* Main Message */}
          <div className="mb-10 space-y-6">
            <p className="text-lg text-slate-700">
              We've received your buildings insurance quote request. An adviser from our team will contact you
              within <strong>24 hours</strong> to discuss your insurance needs and provide you with personalized quotes
              from multiple insurers.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">What happens next:</h3>
              <ol className="text-left space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Our adviser will call you to verify your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0">
                    2
                  </span>
                  <span>We'll gather details about your property and coverage requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0">
                    3
                  </span>
                  <span>You'll receive quotes from multiple insurers tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Choose the policy that best suits your requirements and budget</span>
                </li>
              </ol>
            </div>

            <p className="text-slate-600">
              Check your email for a confirmation. If you don't see our confirmation email, please check your spam
              folder.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-10 p-6 bg-slate-50 rounded-xl">
            <p className="text-slate-700 mb-4">
              Need to reach us before your adviser calls? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0800268374"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
              >
                <span>📞</span> Call Us
              </a>
              <a
                href="mailto:hello@cover4you.co.nz"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors"
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all"
            >
              Return to Home
            </Link>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Read Our Blog
            </Link>
          </div>

          {/* Trust Message */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-4">
              Rest assured, your information is secure and will only be used to provide you with the best insurance
              quotes.
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-emerald-600">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-emerald-600">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/about" className="hover:text-emerald-600">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-slate-700">Fast Response</p>
            <p className="text-xs text-slate-600">Within 24 hours</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-sm font-semibold text-slate-700">100% Secure</p>
            <p className="text-xs text-slate-600">Your data is safe</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm font-semibold text-slate-700">Best Rates</p>
            <p className="text-xs text-slate-600">Compare multiple quotes</p>
          </div>
        </div>
      </div>
    </main>
  );
}
