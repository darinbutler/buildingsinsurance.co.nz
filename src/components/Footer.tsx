import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Fair Practice Standard',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Instant Quotes',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Expert Support',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: '100% Secure',
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-emerald-400 mb-3 flex justify-center">{badge.icon}</div>
              <p className="text-sm font-medium text-slate-200">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Simplifying buildings insurance comparison for NZ homeowners and property investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Coverage', href: '/coverage' },
                { label: 'Compare', href: '/compare' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'Making a Claim', href: '/claims' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-white mb-4">Property Types</h3>
            <ul className="space-y-2">
              {[
                { label: 'Residential', href: '/sectors/residential' },
                { label: 'Commercial', href: '/sectors/commercial' },
                { label: 'Landlords', href: '/sectors/landlords' },
                { label: 'Body Corporate', href: '/sectors/body-corporate' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm break-all"
                >
                  hello@cover4you.co.nz
                </a>
              </li>
              <li>
                <a
                  href="tel:09-885-9549"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  09 885 9549
                </a>
                <p className="text-slate-500 text-xs mt-1">Quote BI for best prices</p>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="https://facebook.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">How This Site Works</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              BuildingsInsurance.co.nz is committed to helping New Zealanders find the right buildings insurance through honest, transparent comparison. We may receive compensation from insurers, brokers or underwriters when you enquire about or purchase a product through our site. However, this does not influence our reviews, ratings or recommendations. Our editorial team personally reviews all brokers, underwriters and insurers featured on this website to ensure we provide accurate, impartial information that saves you time and money.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              The information on this website is general in nature and does not constitute financial or insurance advice. We recommend you read the relevant Product Disclosure Statement (PDS) and consider your own circumstances before purchasing any insurance product. All efforts are made to keep information current and accurate, but we do not guarantee completeness or suitability for your individual needs.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Buildings Insurance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
              Terms
            </Link>
            <Link href="/disclaimer" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
