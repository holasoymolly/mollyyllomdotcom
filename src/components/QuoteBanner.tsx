import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-purple-700 bg-cover bg-center px-4 py-8" style={{ backgroundImage: "url('/img/backgrounds/purple-gradient-bg.jpg')" }}>
      <h2 className="text-center text-white text-4xl md:text-5xl font-bold max-w-2xl">
        Diseño que comunica, marca que impacta
      </h2>
      <div className="mt-8 flex justify-center">
        <a
          href="https://forms.gle/KjbtdoYvXz4PL1Ek6"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white  font-bold px-8 py-4 rounded-full transition"
        >
          Cotiza tu proyecto aquí
        </a>
      </div>
    </section>
  );
};