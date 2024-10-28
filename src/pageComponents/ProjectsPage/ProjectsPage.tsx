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
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16"> {/* No background color */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-indigo-950">Proyectos</h1>
          <p className="text-lg leading-relaxed text-indigo-950">
            ¡Bienvenidx a la galería de proyectos! Aquí encontrarás algunos de los trabajos en los que he dejado mi huella creativa. Cada proyecto cuenta una historia única que espero te inspire y te motive.
          </p>
        </section>

        <section className="space-y-12">
          <div className="bg-stone-200"> {/* Stronger border */}
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <QuoteBanner />
      <Footer />
    </div>
  );
};