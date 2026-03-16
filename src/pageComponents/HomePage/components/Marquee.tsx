'use client';

import { useLanguage } from '@/context/LanguageContext';

export const Marquee = () => {
  const { t } = useLanguage();
  const items = t.home.marqueeItems;
  const doubled = [...items, ...items];

  return (
    <div className="bg-violet-500 py-3 overflow-hidden">
      <div className="animate-marquee inline-flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="text-stone-200 text-xs font-bold tracking-[0.25em] uppercase mx-6 inline-flex items-center gap-6">
            {item}
            <span className="text-stone-200/50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
