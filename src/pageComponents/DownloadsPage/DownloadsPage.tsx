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
      <main className="px-4 lg:px-12 py-12 space-y-16">
        {/* Introduction */}
        <section className="max-w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-950 ml-12 sm:ml-12 md:ml-12 lg:ml-4 mb-4 sm:mb-6">
              Descargas
            </h1>
          </div>
          <div className="w-full md:w-1/2 pl-4 md:pl-8">
            <p className="text-lg leading-relaxed text-indigo-950 ml-9 sm:ml-8 md:ml-0 mb-4 sm:mb-6 pr-4 sm:pr-6">
              Explora mis plantillas y recursos gratuitos que puedes descargar para mejorar tu proceso creativo.
            </p>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full px-6">
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
      </main>

      {/* Full-width Quote Banner */}
      <section className="-mx-4 lg:-mx-12 mt-12">
        <QuoteBannerDownloads />
      </section>

      <Footer />
    </div>
  );
};