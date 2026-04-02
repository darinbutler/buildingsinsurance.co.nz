'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export default function AnimatedStats() {
  const [animatedStats, setAnimatedStats] = useState<Record<number, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '10,000', label: 'NZ Homes Protected', suffix: '+' },
    { value: '6', label: 'Top NZ Insurers', suffix: '' },
    { value: '$0', label: 'Comparison Fees', suffix: '' },
    { value: '15', label: 'Years Experience', suffix: '+' },
    { value: '$300K', label: 'EQC Cap', suffix: '' },
    { value: '24/7', label: 'Claims Support', suffix: '' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const parseValue = (value: string): number => {
    const num = parseInt(value.replace(/[$,]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const formatValue = (num: number, originalValue: string): string => {
    if (originalValue.includes('$')) {
      return `$${num.toLocaleString()}`;
    }
    return num.toLocaleString();
  };

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const target = parseValue(stat.value);
      const startTime = Date.now();
      const duration = 1000; // 1 second per stat
      const delay = index * 200; // 200ms stagger

      setTimeout(() => {
        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(target * easeProgress);

          setAnimatedStats((prev) => ({
            ...prev,
            [index]: formatValue(current, stat.value),
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedStats((prev) => ({
              ...prev,
              [index]: formatValue(target, stat.value),
            }));
          }
        };

        requestAnimationFrame(animate);
      }, delay);
    });
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-r from-emerald-50 to-sky-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">
                  {animatedStats[index] || '0'}
                </div>
                <span className="text-emerald-600 font-semibold">{stat.suffix}</span>
              </div>
              <p className="text-slate-600 text-sm lg:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
