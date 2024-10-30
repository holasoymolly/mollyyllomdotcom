'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Button } from "@/components/Button";
import { FC } from "react";

export const ConocemePage: FC = () => {
  return (
    <div>
      <Header />

      <main className="py-11 space-y-1">
        {/* Introductory Bio Section */}
        <section className="max-w-full flex flex-col md:flex-row md:space-x-8 px-4 lg:px-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-950 ">
              Conóceme
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed text-indigo-950">
              Con más de 15 años de experiencia en diseño gráfico y dirección de arte, mi pasión es
              crear historias visuales que conecten con las audiencias y dejen una impresión duradera.
              He liderado y colaborado con equipos talentosos, estrechamente con clientes y socios
              externos para garantizar la ejecución exitosa de estrategias creativas y campañas
              publicitarias. Mi enfoque es desarrollar soluciones creativas que impactan, con un ojo
              siempre puesto en los detalles que hacen la diferencia.
            </p>
          </div>
        </section>

        {/* Image and Call to Action Section */}
        <section className="flex flex-col md:flex-row items-center md:items-stretch md:py-16 mb-0">
          <div className="w-screen md:w-1/2 h-[41.47rem] overflow-hidden">
            <img
              src="/img/molly/molly2.webp"
              alt="Molly Yllom"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-stone-200 space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-indigo-950">
              ¿Listx para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="text-lg leading-relaxed text-indigo-950">
              En el mundo del diseño gráfico, cada decisión cuenta. Desde la elección de colores hasta
              la tipografía utilizada, cada detalle comunica un mensaje único sobre tu marca. Con mi{" "}
              <strong>asesoría personalizada</strong>, te guiaré en cada paso del proceso para que el diseño
              de tu marca sea inolvidable.
            </p>
            <div className="mt-6">
              <Button
                href="https://calendly.com/hola-msny/30min"
                text="Haz tu cita aquí"
                size="large"
                className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg"
                variant="dark"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Quote Banner Section */}
      <section style={{ marginTop: "-110px" }}>
        <QuoteBanner />
      </section>

      <Footer />
    </div>
  );
};