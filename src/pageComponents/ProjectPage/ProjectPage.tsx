'use client';

import { FC, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { projectsBySlug, activeProjects } from '../../projects';
import { QuoteBanner } from '@/components/QuoteBanner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

interface ProjectPageProps {
  slug: string;
}

export const ProjectPage: FC<ProjectPageProps> = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const project = projectsBySlug[slug];
  const projectIndex = activeProjects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? activeProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < activeProjects.length - 1 ? activeProjects[projectIndex + 1] : null;

  if (!project) {
    return (
      <div>
        <Header />
        <main className="flex flex-col justify-center items-center h-[80vh] text-center px-6">
          <h1 className="text-5xl font-black text-indigo-950">Proyecto no encontrado</h1>
          <p className="text-indigo-950/60 mt-4">Lo siento, el proyecto que buscas no existe.</p>
          <Link href="/proyectos" className="mt-8 bg-indigo-950 text-stone-200 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-violet-500">
            Ver todos los proyectos →
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

  const closeModal = () => setIsModalOpen(false);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div>
      <Header />

      {/* Hero title */}
      <section className="bg-indigo-950 text-stone-200 px-6 md:px-16 lg:px-24 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-violet-400 transition-colors duration-200 text-xs font-bold tracking-[0.2em] uppercase group"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Proyectos
          </Link>
        </motion.div>
        <motion.p
          className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Proyecto
        </motion.p>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {project.title}
        </motion.h1>
      </section>

      <main>
        {/* Hero image — full bleed */}
        <div
          className="w-full cursor-pointer overflow-hidden"
          onClick={() => openModal(0)}
        >
          <img
            src={project.heroImage}
            alt={`${project.title} Hero`}
            className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* Body text */}
        {project.paragraphs.length > 0 && (
          <section className="bg-stone-200 px-6 md:px-16 lg:px-24 py-20">
            <div className="max-w-3xl flex flex-col gap-6">
              {project.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-indigo-950/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Project images — full bleed */}
        <section>
          {project.images.map((image, index) => (
            <div
              key={index}
              className="w-full cursor-pointer overflow-hidden"
              onClick={() => openModal(index + 1)}
            >
              <img
                src={image}
                alt={`${project.title} — ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          ))}
        </section>
      </main>

      {/* Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-indigo-950 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col justify-center items-center"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            onClick={(e) => e.stopPropagation()}
            style={{ minHeight: '600px' }}
          >
            <Carousel
              selectedItem={currentSlide}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              className="w-full"
              dynamicHeight={false}
              showStatus={false}
              onChange={setCurrentSlide}
              emulateTouch={true}
              swipeable={false}
            >
              {allImages.map((image, index) => (
                <div key={index} className="flex justify-center items-center h-full">
                  <img src={image} alt={`${project.title} — ${index + 1}`} className="object-contain max-h-[600px]" />
                </div>
              ))}
            </Carousel>
          </div>

          {!isHoveringImage && (
            <>
              <button onClick={prevSlide} className="w-[60px] h-[100px] flex items-center justify-center absolute left-8 top-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110">
                <svg width="50" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={nextSlide} className="w-[60px] h-[100px] flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110">
                <svg width="50" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={closeModal} className="absolute right-8 top-8 w-10 h-10 transition-transform duration-200 hover:scale-110">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      {/* Prev / Next navigation */}
      {(prevProject || nextProject) && (
        <section className="bg-stone-200 border-t border-indigo-950/10 grid grid-cols-1 md:grid-cols-2">
          {prevProject?.slug ? (
            <Link
              href={`/proyectos/${prevProject.slug}`}
              className="flex flex-col gap-3 px-6 md:px-16 lg:px-24 py-10 border-b md:border-b-0 md:border-r border-indigo-950/10 group hover:bg-indigo-950/5 transition-colors duration-300"
            >
              <span className="text-violet-500 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 group-hover:-translate-x-1 transition-transform duration-300">
                ← Anterior
              </span>
              <span className="text-xl md:text-2xl font-black text-indigo-950 leading-tight group-hover:text-violet-900 transition-colors duration-300">
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject?.slug ? (
            <Link
              href={`/proyectos/${nextProject.slug}`}
              className="flex flex-col gap-3 px-6 md:px-16 lg:px-24 py-10 text-right items-end group hover:bg-indigo-950/5 transition-colors duration-300"
            >
              <span className="text-violet-500 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                Siguiente →
              </span>
              <span className="text-xl md:text-2xl font-black text-indigo-950 leading-tight group-hover:text-violet-900 transition-colors duration-300">
                {nextProject.title}
              </span>
            </Link>
          ) : <div />}
        </section>
      )}

      <QuoteBanner />
      <Footer />
    </div>
  );
};
