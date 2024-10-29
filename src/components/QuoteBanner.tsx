import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-indigo-950 px-4 py-8">
      <h2 className="text-center text-stone-200 text-4xl md:text-5xl font-bold max-w-2xl">
        Diseño que comunica, marca que impacta
      </h2>
      <div className="mt-8 flex justify-center">
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