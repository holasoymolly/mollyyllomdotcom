'use client';

export const Services = () => {
  const services = [
    {
      title: "Logos e Identidad visual",
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
    <section className="py-10 px-6 md:px-12">
      <h2 className="text-4xl font-bold">Servicios</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};