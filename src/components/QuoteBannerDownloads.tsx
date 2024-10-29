import React from 'react';

export const QuoteBannerDownloads: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-indigo-950 px-4 py-8">
      <h2 className="text-center text-stone-200 text-4xl md:text-5xl font-bold max-w-2xl">
      ¿Quieres llevar tu proyecto al siguiente nivel?
      </h2>
      <div className="mt-8 flex justify-center">
        <a
          href="https://forms.gle/descargaGratis" // Cambia este enlace por el que prefieras
          target="_blank"
          rel="noreferrer noopener"
          className="bg-stone-200 text-indigo-950 font-bold px-8 py-4 rounded-full transition hover:bg-violet-900 hover:text-stone-200"
        >
          Cita una asesoría aquí
        </a>
      </div>
    </section>
  );
};