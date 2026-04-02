import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property with our expert guides.',
  metadataBase: new URL('https://buildingsinsurance.co.nz'),
  keywords: ['buildings insurance nz', 'house insurance new zealand', 'home insurance comparison', 'buildings insurance quotes', 'eqc cover', 'earthquake insurance nz', 'property insurance nz', 'landlord insurance nz', 'commercial buildings insurance', 'body corporate insurance'],
  alternates: {
    canonical: 'https://buildingsinsurance.co.nz',
  },
  openGraph: {
    title: 'Buildings Insurance NZ | Compare & Save',
    description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property.',
    url: 'https://buildingsinsurance.co.nz',
    siteName: 'BuildingsInsurance.co.nz',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buildings Insurance NZ - Compare & Save on Home Insurance',
      },
    ],
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildings Insurance NZ | Compare & Save',
    description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pending-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BuildingsInsurance.co.nz',
  url: 'https://buildingsinsurance.co.nz',
  logo: 'https://buildingsinsurance.co.nz/logo.png',
  description: 'New Zealand\'s independent buildings insurance comparison and advisory service.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+64-800-268-374',
    contactType: 'customer service',
    email: 'hello@cover4you.co.nz',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BuildingsInsurance.co.nz',
  url: 'https://buildingsinsurance.co.nz',
  description: 'Compare buildings insurance quotes from leading NZ insurers. Free, no-obligation quotes for residential, commercial, landlord, and body corporate properties.',
  publisher: {
    '@type': 'Organization',
    name: 'BuildingsInsurance.co.nz',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://buildingsinsurance.co.nz/blog/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
