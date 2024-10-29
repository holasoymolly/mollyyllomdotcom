'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBannerDownloads } from "@/components/QuoteBannerDownloads";
import { downloadData } from "./downloadData";

export const DownloadsPage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Main Section */}
      <main className="px-0 lg:px-0 py-12 space-y-16">
        {/* Introduction */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 pl-6 lg:pl-0">
            <h1 className="text-4xl font-bold text-indigo-950 lg:ml-[1rem]"> {/* Ajustado con margen izquierdo */}
              Descargas
            </h1>
          </div>
          <div className="w-full md:w-1/2 pl-8">
            <p className="text-lg leading-relaxed text-indigo-950">
              Explora mis plantillas y recursos gratuitos que puedes descargar para mejorar tu proceso creativo.
            </p>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
          {downloadData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-stone-200 rounded-lg">
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

        {/* Quote Banner Section */}
        <section style={{ marginTop: "3rem", marginBottom: "-0.25rem" }}>
          <QuoteBannerDownloads />
        </section>
      </main>

      <Footer />
    </div>
  );
};