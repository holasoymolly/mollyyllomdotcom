import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-indigo-950 py-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <h2 className="text-center text-stone-200 text-4xl md:text-5xl font-bold max-w-2xl leading-tight mobile-padding quote-banner-title">
        Diseño que comunica, <br /> marca que impacta
      </h2>
      <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center quote-button">
        <a
          href="https://forms.gle/KjbtdoYvXz4PL1Ek6"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-stone-200 text-indigo-950 font-bold px-8 py-4 rounded-full transition hover:bg-violet-900 hover:text-stone-200"
        >
          Cotiza tu proyecto aquí
        </a>
      </div>
    </section>
  );
};