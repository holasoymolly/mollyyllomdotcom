// 'use client';

import { Button } from "@/components/Button";

export const MediaSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:py-16 max-h-[600px] overflow-hidden">
      <figure className="w-full md:w-[50%] lg:w-[45%] xl:w-[40%] h-[40rem] overflow-hidden flex items-center"> {/* Ajuste de ancho */}
        <img
          src="/img/molly/molly1.webp"
          alt="Media Image"
          className="object-cover w-full h-full"
          style={{
            objectPosition: 'center 5%', // Posición más hacia la derecha
          }}
        />
      </figure>
      <div className="w-full md:w-[50%] lg:w-[55%] xl:w-[60%] flex flex-col items-center md:items-start justify-between p-6 md:p-12 lg:p-16 space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-950 leading-tight">
          ¿Listx para llevar tu 
          <span className="block sm:inline"> proyecto al siguiente nivel?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-950">
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