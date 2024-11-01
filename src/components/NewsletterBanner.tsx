import React from "react";

export const NewsletterBanner: React.FC = () => {
  return (
    <div className="w-full">
      <section className="flex justify-center bg-stone-200 py-8 px-4 sm:px-8 md:px-10 lg:px-10 xl:px-10 rounded-md">
        <a
          href="https://forms.gle/dh6ZN4NztWXkp1jE8"
          target="_blank"
          rel="noreferrer noopener"
          className="text-lg md:text-xl font-bold text-stone-200 bg-indigo-950 px-8 py-4 rounded-full transition hover:bg-violet-900 hover:text-stone-200 text-center"
        >
          Suscríbete a mi newsletter
        </a>
      </section>
      
      {/* Línea divisoria */}
      <div className="border-t border-indigo-900"></div>
    </div>
  );
};