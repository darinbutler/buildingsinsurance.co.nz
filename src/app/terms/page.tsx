import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | BuildingsInsurance.co.nz',
  description: 'Read our terms of service for using BuildingsInsurance.co.nz.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms of Service
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
              Introduction and Acceptance
            </h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service ("Terms") govern your use of the BuildingsInsurance.co.nz website and services
              ("Services"). By accessing and using our website, you accept and agree to be bound by these Terms and
              our Privacy Policy. If you do not agree to these Terms, you are not authorized to use our Services.
            </p>
            <p className="text-slate-700 mb-4">
              BuildingsInsurance.co.nz reserves the right to modify these Terms at any time. Changes are effective
              immediately upon posting to the website. Your continued use of our Services constitutes your
              acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              1. Services Provided
            </h2>
            <p className="text-slate-700 mb-4">
              BuildingsInsurance.co.nz provides a comparison and information service for buildings insurance
              products and services available in New Zealand. Our Services are designed to help you:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Compare buildings insurance quotes from multiple insurers</li>
              <li>Access educational information about insurance coverage</li>
              <li>Receive personalized recommendations based on your needs</li>
              <li>Obtain free quotes without obligation</li>
            </ul>
            <p className="text-slate-700 mb-4">
              <strong>Important Disclaimer:</strong> We provide a comparison and information service only. We do not
              provide personalized financial or insurance advice. We recommend that you seek independent professional
              advice before making any insurance decisions. Any recommendations or suggestions we provide are based
              solely on the information you provide and are not tailored to your specific circumstances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              2. Eligibility
            </h2>
            <p className="text-slate-700 mb-4">
              You must be at least 18 years of age to use our Services. By using our Services, you represent and
              warrant that:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>You are at least 18 years of age</li>
              <li>You have the authority to enter into these Terms</li>
              <li>All information you provide is accurate, complete, and truthful</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>You have authority over the property you are seeking insurance for</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-slate-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your account information</li>
              <li>Providing accurate and complete information</li>
              <li>Reviewing all quotes and policy documents carefully</li>
              <li>Verifying information before making insurance decisions</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Not engaging in fraudulent or illegal activities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-slate-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property
              of BuildingsInsurance.co.nz or our content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-slate-700 mb-4">
              You are granted a limited, non-exclusive, non-transferable license to view and print pages from our
              website for personal, non-commercial use only. You may not:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Reproduce, distribute, or transmit content without permission</li>
              <li>Modify or create derivative works based on our content</li>
              <li>Use content for commercial purposes</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Use automated tools to collect or scrape our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              5. Quote Accuracy and Limitations
            </h2>
            <p className="text-slate-700 mb-4">
              Quotes provided through our Services are estimates based on the information you provide and are
              not binding offers of insurance. Please note:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Quotes are estimates and may differ from final premiums</li>
              <li>Insurers may adjust quotes based on additional information or verification</li>
              <li>Coverage terms and conditions are determined by the insurance provider</li>
              <li>You must review policy documents before purchasing</li>
              <li>We are not responsible for discrepancies between quotes and final policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              6. Third-Party Relationships
            </h2>
            <p className="text-slate-700 mb-4">
              Our Services connect you with insurance providers and other third-party service providers. We are
              not responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>The accuracy of information provided by third parties</li>
              <li>The quality of products or services provided by third parties</li>
              <li>Any disputes between you and third-party providers</li>
              <li>Third-party website content or practices</li>
              <li>Terms and conditions of third-party services</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We are not an agent, representative, or employee of any insurance provider. Our relationship with
              insurers is limited to facilitating quote comparisons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              7. Warranty Disclaimer
            </h2>
            <p className="text-slate-700 mb-4">
              <strong>Disclaimer of Warranties:</strong> Our Services are provided on an "as-is" and "as-available"
              basis without warranties of any kind, either express or implied. We disclaim all warranties, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Accuracy, completeness, or reliability of content</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We do not warrant that our Services will be uninterrupted, timely, secure, or error-free, or that
              any defects will be corrected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-slate-700 mb-4">
              To the maximum extent permitted by law, BuildingsInsurance.co.nz shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Direct, indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Interruption of business</li>
              <li>Any damages arising from your use or inability to use our Services</li>
            </ul>
            <p className="text-slate-700 mb-4">
              This limitation applies even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              9. Indemnification
            </h2>
            <p className="text-slate-700 mb-4">
              You agree to indemnify, defend, and hold harmless BuildingsInsurance.co.nz and its officers,
              directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees)
              arising from:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or third-party rights</li>
              <li>Any content or information you provide</li>
              <li>Your actions or conduct while using our Services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              10. Prohibited Activities
            </h2>
            <p className="text-slate-700 mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Providing false or misleading information</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with or disrupting our Services</li>
              <li>Using automated tools to scrape or collect data</li>
              <li>Engaging in fraudulent or illegal activities</li>
              <li>Harassing, threatening, or abusing others</li>
              <li>Posting offensive or defamatory content</li>
              <li>Violating intellectual property rights</li>
              <li>Circumventing security measures</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              11. Termination of Service
            </h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to terminate or suspend your access to our Services immediately, without notice,
              if we determine that you have violated these Terms or engaged in prohibited activities. Upon
              termination, you must cease all use of our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              12. Governing Law and Jurisdiction
            </h2>
            <p className="text-slate-700 mb-4">
              These Terms are governed by and construed in accordance with the laws of New Zealand, without regard
              to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts
              of New Zealand.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              13. Dispute Resolution
            </h2>
            <p className="text-slate-700 mb-4">
              Any dispute arising out of or relating to these Terms shall first be addressed through good faith
              negotiation between the parties. If negotiation fails, disputes shall be submitted to mediation
              before pursuing litigation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              14. Compliance with Laws
            </h2>
            <p className="text-slate-700 mb-4">
              Our Services comply with applicable New Zealand regulations, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Privacy Act 2020</li>
              <li>Insurance Council of New Zealand Guidelines</li>
              <li>Financial Markets Authority Requirements</li>
              <li>Insurance Intermediaries Act 2011</li>
              <li>Consumer Guarantees Act 1993</li>
            </ul>
            <p className="text-slate-700 mb-4">
              If you have concerns about our compliance or services, you may contact the Insurance and Financial
              Services Ombudsman (IFSO) at <a href="https://www.ifso.nz" className="text-emerald-600 hover:underline">www.ifso.nz</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              15. Severability
            </h2>
            <p className="text-slate-700 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, such provision shall be
              severed, and the remaining provisions shall continue in full force and effect to the maximum extent
              permitted by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              16. Entire Agreement
            </h2>
            <p className="text-slate-700 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              BuildingsInsurance.co.nz regarding your use of our Services and supersede all prior agreements and
              understandings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              17. Contact Information
            </h2>
            <p className="text-slate-700 mb-4">
              If you have questions, concerns, or requests regarding these Terms, please contact us:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-4">
              <p className="text-slate-900 font-semibold mb-2">BuildingsInsurance.co.nz</p>
              <p className="text-slate-700 mb-2">Email: hello@cover4you.co.nz</p>
              <p className="text-slate-700 mb-2">Phone: 0800 COVER 4U (0800 268 37 48)</p>
              <p className="text-slate-700">Address: Auckland, New Zealand</p>
            </div>
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
