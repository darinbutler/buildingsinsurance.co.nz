'use client';

import { useState } from 'react';

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Form will naturally submit to formsubmit.co
    // No need to prevent default
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400';
  const labelClass = 'block text-sm font-semibold text-slate-700 mb-1.5';

  if (compact) {
    return (
      <form
        action="https://formsubmit.co/hello@cover4you.co.nz"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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

        <div>
          <label htmlFor="details" className={labelClass}>
            Additional Details
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Tell us more about your property (optional)..."
            rows={2}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Hidden Fields */}
        <input type="hidden" name="_subject" value="New Quote Request - BuildingsInsurance.co.nz" />
        <input type="hidden" name="_next" value="https://buildingsinsurance.co.nz/thank-you" />
        <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
          >
            {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
            {!isSubmitting && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-3">
          Your data is secure and encrypted. We never share your information.
        </p>
      </form>
    );
  }

  // Full (non-compact) form with card wrapper
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden max-w-2xl mx-auto">
      {/* Form Header Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">Free, No-Obligation Quote</h3>
        <p className="text-emerald-100 text-sm">Takes less than 2 minutes</p>
      </div>

      {/* Form Body */}
      <form
        action="https://formsubmit.co/hello@cover4you.co.nz"
        method="POST"
        onSubmit={handleSubmit}
        className="p-8"
      >
        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="full-name"
                name="name"
                required
                placeholder="John Smith"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`${inputClass} pl-12`}
              />
            </div>
          </div>

          {/* Email and Phone - 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="09 123 4567"
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>
          </div>

          {/* Property Type and Estimated Value - 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="property-type" className={labelClass}>
                Property Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-4 7 4M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <select
                  id="property-type"
                  name="property_type"
                  required
                  className={`${inputClass} pl-12 appearance-none`}
                >
                  <option value="">Select property type</option>
                  <option value="residential">Residential Home</option>
                  <option value="investment">Investment Property</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="body-corporate">Body Corporate/Apartment</option>
                  <option value="holiday">Holiday Home</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="property-value" className={labelClass}>
                Estimated Value <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <select
                  id="property-value"
                  name="property_value"
                  required
                  className={`${inputClass} pl-12 appearance-none`}
                >
                  <option value="">Select range</option>
                  <option value="under-300k">Under $300K</option>
                  <option value="300k-500k">$300K–$500K</option>
                  <option value="500k-750k">$500K–$750K</option>
                  <option value="750k-1m">$750K–$1M</option>
                  <option value="1m-2m">$1M–$2M</option>
                  <option value="over-2m">Over $2M</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
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
              rows={4}
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
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
          >
            {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
            {!isSubmitting && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            256-bit SSL Encrypted
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            No Spam Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Response Within 24hrs
          </span>
        </div>
      </form>
    </div>
  );
}
