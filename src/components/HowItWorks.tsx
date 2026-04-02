'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: Step[] = [
    {
      number: 1,
      title: 'Tell Us About Your Property',
      description: 'Share your property details, location, and the level of cover you need. It takes less than 2 minutes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 3l3 3m0 0l3-3m-3 3V5"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Compare Top NZ Insurers',
      description:
        'We compare quotes from AMI, Tower, State, AA, Vero, and NZI to find you the best deal.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM3 16a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Get Protected Today',
      description:
        'Choose your preferred insurer and get covered. Our advisers handle the paperwork.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get the best buildings insurance cover in just three simple steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Gradient Connector Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`bg-white rounded-lg p-6 lg:p-8 border border-slate-200 transition-all duration-700 ${
                  visibleSteps.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                } ${index === 1 ? 'lg:scale-105' : ''}`}
                style={{
                  transitionDelay: visibleSteps.has(index) ? `${index * 200}ms` : '0ms',
                }}
              >
                {/* Step Number Circle */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-emerald-600 mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 flex justify-center">
                    <svg
                      className="w-6 h-8 text-emerald-400"
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Start Your Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
