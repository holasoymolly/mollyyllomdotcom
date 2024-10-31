'use client';

import { Button } from "@/components/Button";

export const Banner = () => {
  return (
    <section className="bg-cover bg-center py-10 text-center bg-indigo-950 text-stone-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Diseño que comunica,<br /> marca que impacta
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed mx-4 sm:mx-8 md:mx-12 lg:mx-20">
          En mi estudio de diseño, convierto la esencia de tu marca en piezas visuales memorables.
          Desde logotipos con narrativa hasta sitios web cautivadores.
        </p>
        <div className="mt-6">
          <Button href="https://forms.gle/KjbtdoYvXz4PL1Ek6" text="Cotiza tu proyecto aquí" size="large" />
        </div>
      </div>
    </section>
  );
};