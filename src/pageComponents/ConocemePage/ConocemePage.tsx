// 'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Button } from "@/components/Button";
import { NewsletterBanner } from "@/components/NewsletterBanner"; // Importar el NewsletterBanner
import { FC } from "react";

export const ConocemePage: FC = () => {
  return (
    <div>
      <Header />

      <main className="py-11">
        {/* Introductory Bio Section */}
        <section className="max-w-full flex flex-col md:flex-row md:space-x-8 px-4 lg:px-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-950 ml-12 sm:ml-12 md:ml-12 lg:ml-4 mb-4 sm:mb-6">
              Conóceme
            </h1>
          </div>
          <div className="w-full md:w-1/2 pl-4 md:pl-8">
            <p className="text-lg leading-relaxed text-indigo-950 ml-9 sm:ml-8 md:ml-0 mb-4 sm:mb-6 pr-4 sm:pr-6">
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
        <section className="flex flex-col md:flex-row items-center md:items-center md:py-10 mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <div className="w-full md:w-1/2 h-[30rem] sm:h-[35rem] md:h-[35rem] lg:h-[35rem] xl:h-[40rem] overflow-hidden flex items-center">
            <img
              src="/img/molly/molly2.webp"
              alt="Molly Yllom"
              className="object-cover w-full h-full"
              style={{
                objectPosition: 'center 20%',
              }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 bg-stone-200 space-y-4 md:space-y-6 text-left mobile-call-to-action-padding lg:px-11 xl:px-11">
            <div className="mx-auto md:mx-0">
              <h2
                className="text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-indigo-950 mb-4 sm:mb-6"
                style={{ lineHeight: '1.1' }}
              >
                ¿Listx para llevar tu proyecto al siguiente nivel?
              </h2>
              <p className="text-lg leading-relaxed text-indigo-950">
                En el mundo del diseño gráfico, cada decisión cuenta. Desde la elección de colores hasta
                la tipografía utilizada, cada detalle comunica un mensaje único sobre tu marca. Con mi{" "}
                <strong>asesoría personalizada</strong>, te guiaré en cada paso del proceso para que el diseño
                de tu marca sea inolvidable.
              </p>
              <div className="mt-4 md:mt-6">
                <Button
                  href="https://calendly.com/hola-msny/30min"
                  text="Haz tu cita aquí"
                  size="large"
                  className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg"
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quote Banner Section */}
      <section className="-mt-6 md:-mt-21 lg:-mt-21 xl:-mt-21 2xl:-mt-21">
        <QuoteBanner />
      </section>

      {/* Newsletter Banner */}
      <NewsletterBanner /> {/* Agregar el NewsletterBanner aquí */}

      <Footer />
    </div>
  );
};