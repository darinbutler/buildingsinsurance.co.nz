import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
}

export default function CTABanner({
  heading = 'Ready to Protect Your Property?',
  subheading = "Get a free quote from NZ's top insurers in just 2 minutes.",
}: CTABannerProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 py-16 lg:py-20">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full opacity-5 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-600 rounded-full opacity-5 -ml-36 -mb-36" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{heading}</h2>

          {/* Subheading */}
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">{subheading}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-emerald-600 font-semibold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
            >
              Compare Insurers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
