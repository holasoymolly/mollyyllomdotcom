'use client';

import React from 'react';
import { TransitionLink } from '@/components/TransitionLink';
import { useLanguage } from '@/context/LanguageContext';

export const QuoteBanner: React.FC = () => {
  const { t } = useLanguage();
  const lines = t.quoteBanner.heading.split('\n');
  const lead = lines.slice(0, -1);
  const highlight = lines[lines.length - 1];

  return (
    <section className="w-full bg-indigo-950 py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-200 leading-[0.92] tracking-tight">
          {lead.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          <span className="text-violet-400">{highlight}</span>
        </h2>
        <TransitionLink
          href="/contacto"
          className="shrink-0 bg-stone-200 text-indigo-950 font-bold px-8 py-4 rounded-full transition-colors duration-300 hover:bg-violet-500 hover:text-stone-200 whitespace-nowrap"
        >
          {t.quoteBanner.cta}
        </TransitionLink>
      </div>
    </section>
  );
};
