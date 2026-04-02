import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property with our expert guides.',
  metadataBase: new URL('https://buildingsinsurance.co.nz'),
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
        alt: 'Buildings Insurance NZ',
      },
    ],
    type: 'website',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
