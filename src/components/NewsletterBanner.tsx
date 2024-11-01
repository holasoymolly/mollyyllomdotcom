import React from "react";

export const NewsletterBanner: React.FC = () => {
  return (
    <div className="w-full">
      <section className="flex flex-col md:flex-row items-center justify-between bg-stone-200 py-8 px-4 sm:px-8 md:px-10 lg:px-10 xl:px-10 rounded-md">
        {/* Título */}
        <h2 className="text-4xl md:text-4xl font-bold text-indigo-950 mb-4 md:mb-0 leading-none text-center md:text-left">
          Suscríbete a <span className="block sm:inline">mi newsletter</span>
        </h2>

        {/* Botón */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <a
            href="https://forms.gle/dh6ZN4NztWXkp1jE8"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-indigo-950 text-stone-200 font-bold px-8 py-4 rounded-full transition hover:bg-violet-900 hover:text-stone-200"
          >
            Suscribirme
          </a>
        </div>
      </section>
      
      {/* Línea divisoria */}
      <div className="border-t border-indigo-900"></div>
    </div>
  );
};