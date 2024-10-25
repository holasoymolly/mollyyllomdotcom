'use client';

import { Header } from "@/components/Header";
import { FC } from "react";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";

export const ConocemePage: FC = () => {
  return (
    <div>
      <Header />

      {/* Main Bio Section */}
      <main className="bg-stone-200 max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Artist Bio Section */}
        <section className= " bg-stone-200 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <img
              src="/img/molly/molly2.jpg"
              alt="Molly Yllom"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-indigo-950">Conóceme</h1>
            <p className="text-lg leading-relaxed text-indigo-950">
              Con más de 15 años de experiencia en diseño gráfico y dirección de arte, mi pasión es
              crear historias visuales que conecten con las audiencias y dejen una impresión duradera.
            </p>
            <p className="text-lg leading-relaxed text-indigo-950">
              He liderado y colaborado con equipos talentosos, estrechamente con clientes y socios
              externos para garantizar la ejecución exitosa de estrategias creativas y campañas
              publicitarias.
            </p>
            <p className="text-lg leading-relaxed text-indigo-950">
              Mi enfoque es desarrollar soluciones creativas que impactan, con un ojo siempre puesto
              en los detalles que hacen la diferencia.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-stone-200 text-indigo-950 rounded-lg p-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">¿Listx para llevar tu marca al siguiente nivel?</h2>
            <p className="text-lg leading-relaxed">
              En el mundo del diseño gráfico, cada decisión cuenta. Desde la elección de colores hasta la
              tipografía utilizada, cada detalle comunica un mensaje único sobre tu marca. Con mi{" "}
              <strong>asesoría personalizada</strong>, te guiaré en cada paso del proceso para que el diseño
              de tu marca sea inolvidable.
            </p>
            <div className="mt-6">
              <QuoteBanner />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};