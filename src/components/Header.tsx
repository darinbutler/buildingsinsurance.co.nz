'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Coverage', href: '/coverage' },
    { label: 'Compare', href: '/compare' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const sectors = [
    { label: 'Residential', href: '/sectors/residential' },
    { label: 'Commercial', href: '/sectors/commercial' },
    { label: 'Landlords', href: '/sectors/landlords' },
    { label: 'Body Corporate', href: '/sectors/body-corporate' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="hidden sm:block">
              <Logo variant="default" />
            </div>
            <div className="sm:hidden">
              <Logo variant="compact" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Sectors Dropdown */}
            <div className="relative group">
              <button className="text-slate-700 hover:text-emerald-600 transition-colors font-medium flex items-center gap-2">
                Sectors
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {sectors.map((sector) => (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    className="block px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    {sector.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-3">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Sectors Accordion */}
            <div>
              <button
                onClick={() => setSectorsOpen(!sectorsOpen)}
                className="w-full text-left text-slate-700 hover:text-emerald-600 transition-colors font-medium px-2 py-1 flex items-center justify-between"
              >
                Sectors
                <svg
                  className={`w-4 h-4 transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              {sectorsOpen && (
                <div className="pl-4 py-2 space-y-2">
                  {sectors.map((sector) => (
                    <Link
                      key={sector.href}
                      href={sector.href}
                      className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSectorsOpen(false);
                      }}
                    >
                      {sector.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-slate-200">
              <Link
                href="/contact"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
