'use client';

import { Header } from "@/components/Header";
import { FC } from "react";
import { Footer } from "@/components/Footer";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { QuoteBanner } from "@/components/QuoteBanner";

export const ProjectsPage: FC = () => {
  return (
    <div>
      <Header />
      <main className="px-0 py-12 space-y-16">
        <section className="max-w-full flex flex-col md:flex-row md:space-x-8 items-start px-4 lg:px-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-950 ml-4">Proyectos</h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed text-indigo-950">
              ¡Bienvenidx a la galería de proyectos! Aquí encontrarás algunos de los trabajos en los que he dejado mi huella creativa. Cada proyecto cuenta una historia única que espero te inspire y te motive.
            </p>
          </div>
        </section>

        <section className="pb-0 mb-0">
          <div className="bg-stone-200">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <div className="mt-[-50px]">
        <QuoteBanner />
      </div>
      <Footer />
    </div>
  );
};