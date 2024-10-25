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

  const project = projectsBySlug[slug];

  if (!project) {
    return (
      <div>
        <Header />
        <main className="flex flex-col justify-center items-center h-[80vh] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Proyecto No Encontrado</h1>
          <p className="text-lg text-gray-700 mt-4">Lo sentimos, el proyecto que estás buscando no existe.</p>
          <Link href="/" className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition hover:bg-blue-700">
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

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <section className="text-left space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        </section>

        {/* Hero Image */}
        <section onClick={() => openModal(0)} className="cursor-pointer">
          <img
            src={project.heroImage}
            alt={`${project.title} Hero Image`}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </section>

        <section className="space-y-6">
          {project.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Portfolio Images Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(index + 1)}>
              <img
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </section>
      </main>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
          <div className="relative w-full max-w-5xl h-[90vh] flex flex-col justify-center items-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex justify-center items-center text-2xl font-bold z-50 shadow-lg transition hover:bg-gray-300"
            >
              &times;
            </button>

            <div className="w-full h-[75vh]">
              <Carousel
                selectedItem={currentSlide}
                showArrows={true}
                showThumbs={true}
                infiniteLoop={true}
                useKeyboardArrows={true}
                className="h-full"
                thumbWidth={80} // Adjust thumbnail width
                dynamicHeight={false}
              >
                {allImages.map((image, index) => (
                  <div key={index} className="flex justify-center items-center h-full">
                    <img src={image} alt={`${project.title} Image ${index + 1}`} className="max-h-[75vh] max-w-[95vw] object-contain" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}

      <QuoteBanner />
      <Footer />
    </div>
  );
};