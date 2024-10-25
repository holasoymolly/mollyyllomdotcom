'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FC } from "react";
import { downloadData } from "./downloadData";

export const DownloadsPage: FC = () => {
  return (
    <div>
      <Header />

      {/* Main Section */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-indigo-950">Descargas</h1>
          <p className="text-lg leading-relaxed text-indigo-950">
            Explora nuestras plantillas y recursos gratuitos que puedes descargar para mejorar tu proceso creativo.
          </p>
        </section>

        {/* Downloads Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloadData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold text-indigo-950 text-center">{item.title}</h3>
              <a
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-950 text-stone-200 font-semibold rounded-full transition hover:bg-violet-900"
              >
                Descarga Gratis
              </a>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};