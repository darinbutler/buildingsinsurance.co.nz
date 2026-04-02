'use client';

import { useState } from 'react';

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Form will naturally submit to formsubmit.co
    // No need to prevent default
  };

  const inputClass =
    'w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors';
  const labelClass = 'block text-sm font-medium text-slate-700 mb-2';

  return (
    <form
      action="https://formsubmit.co/hello@cover4you.co.nz"
      method="POST"
      onSubmit={handleSubmit}
      className={compact ? '' : ''}
    >
      {/* Header */}
      {!compact && (
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-3">
            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Free, No-Obligation Quote</h3>
          <p className="text-slate-600">Takes less than 2 minutes</p>
        </div>
      )}

      {/* Form Fields */}
      <div className={compact ? 'space-y-4' : 'space-y-6'}>
        {/* Full Name */}
        <div>
          <label htmlFor="full-name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full-name"
            name="name"
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>

        {/* Email and Phone - 2 column grid for non-compact */}
        <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="09 123 4567"
              className={inputClass}
            />
          </div>
        </div>

        {/* Property Type and Estimated Value - 2 column grid for non-compact */}
        <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
          <div>
            <label htmlFor="property-type" className={labelClass}>
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              id="property-type"
              name="property_type"
              required
              className={inputClass}
            >
              <option value="">Select property type</option>
              <option value="residential">Residential Home</option>
              <option value="investment">Investment Property</option>
              <option value="commercial">Commercial Building</option>
              <option value="body-corporate">Body Corporate/Apartment</option>
              <option value="holiday">Holiday Home</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="property-value" className={labelClass}>
              Estimated Value <span className="text-red-500">*</span>
            </label>
            <select
              id="property-value"
              name="property_value"
              required
              className={inputClass}
            >
              <option value="">Select range</option>
              <option value="under-300k">Under $300K</option>
              <option value="300k-500k">$300K–$500K</option>
              <option value="500k-750k">$500K–$750K</option>
              <option value="750k-1m">$750K–$1M</option>
              <option value="1m-2m">$1M–$2M</option>
              <option value="over-2m">Over $2M</option>
            </select>
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <label htmlFor="details" className={labelClass}>
            Additional Details
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Tell us more about your property (optional)..."
            rows={compact ? 2 : 4}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Hidden Fields */}
      <input type="hidden" name="_subject" value="New Quote Request - BuildingsInsurance.co.nz" />
      <input type="hidden" name="_next" value="https://buildingsinsurance.co.nz/thank-you" />
      <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
      <input type="hidden" name="_captcha" value="false" />

      {/* Submit Button */}
      <div className={compact ? 'mt-6' : 'mt-8'}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Get My Free Quote
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Security Note */}
      <p className={`text-center text-slate-500 text-xs mt-4 ${compact ? '' : 'text-sm'}`}>
        Your data is secure and encrypted. We never share your information.
      </p>
    </form>
  );
}
