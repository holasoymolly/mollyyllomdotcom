// 'use client';

import { Button } from "@/components/Button";

export const MediaSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:py-16 max-h-[600px] overflow-hidden">
      <figure className="w-full lg:w-1/2 h-full overflow-hidden">
        <img
          src="/img/molly/molly1.webp"
          alt="Media Image"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="w-full h-full md:w-1/2 flex flex-col items-center md:items-start justify-between p-6 md:p-12 space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-indigo-950 mobile-padding tablet-padding">
          ¿Listx para llevar tu 
          <span className="block sm:inline"> proyecto al siguiente nivel?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl text-indigo-950 mobile-padding tablet-padding">
          En el mundo del diseño gráfico, cada decisión cuenta. Desde la elección de colores hasta
          la tipografía utilizada, cada detalle comunica un mensaje único sobre tu marca.
        </p>
        <div className="mt-6 md:mt-auto">
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
  );
};