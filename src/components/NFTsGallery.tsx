// 'use client';

import React from "react";

interface Collection {
  name: string;
  link: string;
  images: string[];
}

interface NFTsGalleryProps {
  collections: Collection[];
}

export const NFTsGallery: React.FC<NFTsGalleryProps> = ({ collections }) => {
  if (!collections || collections.length === 0) {
    return (
      <div className="text-center text-indigo-950">
        <p>No hay colecciones disponibles para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {collections.map((collection, index) => (
        // Fondo extendido para cada colección
        <div
          key={index}
          className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 bg-indigo-950 py-12" // Fondo extendido
        >
          {/* Contenedor interno con márgenes ajustados */}
          <div className="space-y-4 px-16 sm:px-19 md:px-20 lg:px-16">
            {/* Contenedor para el título */}
            <h2 className="text-2xl font-bold text-stone-200">{collection.name}</h2>
            {/* Galería de imágenes */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
              {collection.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg group" // Contenedor para el efecto de zoom
                >
                  <img
                    src={image}
                    alt={`${collection.name} - Imagen ${idx + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // Efecto de zoom
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Botón de colección */}
            <div className="text-right">
              <a
                href={collection.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-stone-200 text-indigo-950 font-semibold rounded-full transition hover:bg-violet-900 hover:text-stone-200"
              >
                Ver Colección
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};