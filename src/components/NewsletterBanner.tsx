import React from "react";

export const NewsletterBanner: React.FC = () => {
  return (
    <div className="border-t border-indigo-950/10">
      <section className="flex items-center justify-center bg-stone-200 py-10 px-6">
        <a
          href="https://forms.gle/dh6ZN4NztWXkp1jE8"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-indigo-950 text-stone-200 font-bold px-8 py-4 rounded-full transition-colors duration-300 hover:bg-violet-500 hover:text-stone-200 text-sm whitespace-nowrap"
        >
          Suscríbete al newsletter →
        </a>
      </section>
    </div>
  );
};
