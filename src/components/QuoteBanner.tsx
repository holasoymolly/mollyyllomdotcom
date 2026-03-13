import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="w-full bg-indigo-950 py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-200 leading-[0.92] tracking-tight">
          ¿Listx para<br />
          llevar tu marca<br />
          <span className="text-violet-400">al siguiente nivel?</span>
        </h2>
        <a
          href="https://forms.gle/KjbtdoYvXz4PL1Ek6"
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 bg-stone-200 text-indigo-950 font-bold px-8 py-4 rounded-full transition-colors duration-300 hover:bg-violet-500 hover:text-stone-200 whitespace-nowrap"
        >
          Cotiza tu proyecto →
        </a>
      </div>
    </section>
  );
};
