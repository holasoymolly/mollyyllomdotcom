'use client';

import { FC, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { projectsBySlug } from '../../projects';
import { QuoteBanner } from '@/components/QuoteBanner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProjectPageProps {
  slug: string;
}

export const ProjectPage: FC<ProjectPageProps> = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false); // Nuevo estado

  const project = projectsBySlug[slug];

  if (!project) {
    return (
      <div>
        <Header />
        <main className="flex flex-col justify-center items-center h-[80vh] text-center">
          <h1 className="text-5xl font-bold text-indigo-950">Proyecto No Encontrado</h1>
          <p className="text-lg text-indigo-950 mt-4">Lo siento, el proyecto que estás buscando no existe.</p>
          <Link href="/" className="mt-6 bg-indigo-950 text-stone-200 font-semibold py-3 px-6 rounded-full transition hover:bg-violet-900">
            Volver a la página principal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const allImages = [project.heroImage, ...project.images];

  const openModal = (index: number) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % allImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prevSlide) => (prevSlide - 1 + allImages.length) % allImages.length);
  };

  return (
    <div>
      <Header />
      <main className="w-full mx-auto px-16 sm:px-16 md:px-16 lg:px-16 xl:px-16 2xl:px-22 py-12 space-y-16">
        <section className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-indigo-950">{project.title}</h1>
        </section>

        {/* Hero Image - Full Width */}
        <section onClick={() => openModal(0)} className="cursor-pointer w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <img
            src={project.heroImage}
            alt={`${project.title} Hero Image`}
            className="w-full h-[600px] object-cover"
          />
        </section>

        {/* Paragraph Section */}
        <section className="space-y-6">
          {project.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-indigo-950 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Full Width Portfolio Images */}
        <section className="space-y-0">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] cursor-pointer"
              onClick={() => openModal(index + 1)}
            >
              <img
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                style={{ marginBottom: index === project.images.length - 1 ? '0' : '' }}
              />
            </div>
          ))}
        </section>
      </main>

      {/* Lightbox Modal */}
      {isModalOpen && (
  <div
    className="fixed inset-0 z-50 bg-indigo-950 bg-opacity-100 flex justify-center items-center"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-5xl flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHoveringImage(true)} // Detectar cuando el cursor está sobre la imagen
      onMouseLeave={() => setIsHoveringImage(false)} // Detectar cuando el cursor sale de la imagen
      onClick={(e) => e.stopPropagation()}
      style={{ minHeight: '600px' }} // Asegura una altura mínima del contenedor
    >
      <Carousel
        selectedItem={currentSlide}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        className="w-full"
        dynamicHeight={false} // Desactiva el ajuste de altura dinámica
        showStatus={false}
        onChange={setCurrentSlide}
        emulateTouch={true}
        swipeable={false}
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center relative h-full" // Centrar verticalmente
          >
            <img src={image} alt={`${project.title} Image ${index + 1}`} className="object-contain max-h-[600px]" />
          </div>
        ))}
      </Carousel>
    </div>

    {/* SVG Flechas personalizadas */}
    {!isHoveringImage && ( // Condicionar la visibilidad con base al estado
      <>
        <button onClick={prevSlide} className="w-[60px] h-[100px] flex items-center justify-center absolute left-8 top-1/2 -translate-y-1/2 transition-transform duration-200 scale-100 hover:scale-110 opacity-100">
          <svg width="50" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={nextSlide} className="w-[60px] h-[100px] flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 transition-transform duration-200 scale-100 hover:scale-110 opacity-100">
          <svg width="50" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Botón de cierre (SVG X) */}
        <button onClick={closeModal} className="bg-none border-none cursor-pointer outline-none w-10 h-10 absolute right-8 top-8 transition-transform duration-200 scale-100 hover:scale-110 opacity-100">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </>
    )}
  </div>
)}

      <div className="-mt-12">
        <QuoteBanner />
      </div>

      <Footer />
    </div>
  );
}