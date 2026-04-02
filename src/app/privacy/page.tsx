import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | BuildingsInsurance.co.nz',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-emerald-50 text-lg">
            Last updated: April 2, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Introduction
            </h2>
            <p className="text-slate-700 mb-4">
              BuildingsInsurance.co.nz ("we," "us," "our," or "Company") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
            <p className="text-slate-700 mb-4">
              Please read this privacy policy carefully. If you do not agree with our policies and practices,
              please do not use our Services. By accessing and using BuildingsInsurance.co.nz, you acknowledge that
              you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-slate-700 mb-4">
              We collect information in various ways, including information you provide directly, information
              collected automatically, and information from third parties.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              1.1 Information You Provide Directly
            </h3>
            <p className="text-slate-700 mb-4">
              When you use our Services, we may collect personal information such as:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Property address and location information</li>
              <li>Property type, age, construction details, and features</li>
              <li>Insurance coverage preferences and requirements</li>
              <li>Financial information for quote comparisons</li>
              <li>Communication history and correspondence</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              1.2 Information Collected Automatically
            </h3>
            <p className="text-slate-700 mb-4">
              When you access our website, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website and clickstream data</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              1.3 Information from Third Parties
            </h3>
            <p className="text-slate-700 mb-4">
              We may receive information about you from insurance providers, credit reporting agencies, and
              publicly available sources to enhance our Services and provide accurate comparisons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing and fulfilling your insurance quote requests</li>
              <li>Communicating with you about our Services and offers</li>
              <li>Personalizing your experience on our website</li>
              <li>Conducting analytics and research</li>
              <li>Complying with legal obligations and regulations</li>
              <li>Protecting against fraud and ensuring security</li>
              <li>Managing customer relationships and providing support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              3. Legal Basis for Processing
            </h2>
            <p className="text-slate-700 mb-4">
              We process your personal information on the following legal bases:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Your explicit consent</li>
              <li>Performance of a contract with you</li>
              <li>Compliance with legal obligations</li>
              <li>Protection of vital interests</li>
              <li>Our legitimate business interests</li>
              <li>Public interest</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-slate-700 mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              4.1 With Insurance Providers
            </h3>
            <p className="text-slate-700 mb-4">
              To provide you with insurance quotes and comparisons, we share relevant information with
              participating insurance providers. They use this information to generate personalized quotes.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              4.2 With Service Providers
            </h3>
            <p className="text-slate-700 mb-4">
              We may share information with third-party service providers who assist us in operating our
              website and conducting our business, subject to strict data protection agreements.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              4.3 For Legal Reasons
            </h3>
            <p className="text-slate-700 mb-4">
              We may disclose information when required by law or when we believe in good faith that such
              disclosure is necessary to comply with legal obligations or protect our rights.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              4.4 Business Transfers
            </h3>
            <p className="text-slate-700 mb-4">
              If we are involved in a merger, acquisition, bankruptcy, or asset sale, your information may
              be transferred as part of that transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure.
            </p>
            <p className="text-slate-700 mb-4">
              We use SSL/TLS encryption for all data transmitted between your browser and our servers. Access to
              personal information is restricted to employees and contractors who need to know this information
              to provide our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-slate-700 mb-4">
              You have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              6.1 Access
            </h3>
            <p className="text-slate-700 mb-4">
              You have the right to request access to the personal information we hold about you.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              6.2 Correction
            </h3>
            <p className="text-slate-700 mb-4">
              You have the right to request correction of inaccurate or incomplete information.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              6.3 Deletion
            </h3>
            <p className="text-slate-700 mb-4">
              You have the right to request deletion of your personal information, subject to certain exceptions
              required by law or for legitimate business purposes.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              6.4 Marketing Communications
            </h3>
            <p className="text-slate-700 mb-4">
              You may opt out of receiving promotional emails and marketing communications from us at any time
              by clicking the "unsubscribe" link in our emails or contacting us directly.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              6.5 Cookies
            </h3>
            <p className="text-slate-700 mb-4">
              You can control cookie preferences through your browser settings. Most web browsers allow you to
              refuse cookies or alert you when cookies are being sent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar technologies to enhance your experience on our website. These include:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how you use our site</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing cookies:</strong> Used to deliver targeted advertising</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              8. Retention of Information
            </h2>
            <p className="text-slate-700 mb-4">
              We retain your personal information for as long as necessary to provide our Services, comply with
              legal obligations, and resolve disputes. The retention period may vary depending on the context of
              the processing and our legal obligations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-slate-700 mb-4">
              Your information may be transferred to, stored in, and processed in New Zealand and other countries
              that may not have the same data protection laws as your country of residence. By using our Services,
              you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-slate-700 mb-4">
              Our Services are not intended for children under the age of 18. We do not knowingly collect personal
              information from children under 18. If we become aware that we have collected personal information from
              a child under 18, we will delete such information immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              11. Third-Party Links
            </h2>
            <p className="text-slate-700 mb-4">
              Our website may contain links to third-party websites. This Privacy Policy applies only to our website.
              We are not responsible for the privacy practices of third-party websites. We encourage you to review
              the privacy policies of any third-party websites before providing your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of
              our Services following the posting of revised Privacy Policy means you accept and agree to the changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              13. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-4">
              <p className="text-slate-900 font-semibold mb-2">BuildingsInsurance.co.nz</p>
              <p className="text-slate-700 mb-2">Email: hello@cover4you.co.nz</p>
              <p className="text-slate-700 mb-2">Phone: 0800 COVER 4U (0800 268 37 48)</p>
              <p className="text-slate-700">Address: Auckland, New Zealand</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              14. Regulatory Compliance
            </h2>
            <p className="text-slate-700 mb-4">
              This Privacy Policy is designed to comply with:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Privacy Act 2020 (New Zealand)</li>
              <li>Insurance Council of New Zealand (ICNZ) Guidelines</li>
              <li>Financial Markets Authority (FMA) requirements</li>
              <li>Insurance Intermediaries Act 2011</li>
            </ul>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
