'use client';

import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      title: "Branding",
      description:
        "Diseño logos únicos que capturan la esencia de tu marca y desarrollo una identidad visual coherente y atractiva, incluyendo colores y tipografías, para destacar en tu mercado.",
    },
    {
      title: "Editorial",
      description:
        "Desarrollo diseños atractivos y profesionales para materiales impresos como folletos, revistas y memorias, que comunican eficazmente tu mensaje y fortalecen la imagen de tu marca.",
    },
    {
      title: "Redes Sociales",
      description:
        "Ofrezco diseño para plataformas digitales, incluyendo redes sociales y otros elementos digitales, para aumentar la visibilidad y el compromiso en línea de tu marca.",
    },
    {
      title: "Web",
      description:
        "Creo sitios web visualmente impactantes y completamente funcionales que brindan una experiencia de usuario excepcional y ayudan a convertir visitantes en clientes.",
    },
    {
      title: "Gran formato",
      description:
        "Elaboro elementos de gran formato como vallas publicitarias, bajantes y mini vallas que captan la atención del público en entornos físicos y amplifican el impacto de tu marca.",
    },
    {
      title: "Banners y más…",
      description:
        "Construyo diseños dinámicos y llamativos para banners y otros elementos publicitarios que destacan tu marca en diferentes plataformas y eventos.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-stone-200">
      <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-2">Servicios</h2>

      <div className="mt-10 border-t border-indigo-950/15">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-2 md:gap-12 py-8 border-b border-indigo-950/15 group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-violet-500 text-xs font-bold tracking-widest w-10 shrink-0 pt-1 md:pt-2">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-950 md:w-72 shrink-0 group-hover:text-violet-900 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-indigo-950/60 text-base md:text-lg leading-relaxed md:pt-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
