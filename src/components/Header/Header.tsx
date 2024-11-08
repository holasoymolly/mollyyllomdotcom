'use client';

import { useState, useEffect } from "react"; // Asegúrate de incluir useState y useEffect
import Image from "next/image";
import Link from "next/link";
import { AppDrawer } from "../AppDrawer";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoImage, setLogoImage] = useState("/img/logo/molly-yllom-logo-homepage.webp"); // Estado inicial del logo

  useEffect(() => {
    const timerId = setInterval(() => {
      // Cambia la imagen del logo cada segundo
      setLogoImage((currentImage) =>
        currentImage === "/img/logo/molly-yllom-logo-homepage.webp"
          ? "/img/logo/molly-yllom-logo-homepage-2.webp"
          : "/img/logo/molly-yllom-logo-homepage.webp"
      );
    }, 1000); // Intervalo de 1 segundo

    return () => clearInterval(timerId); // Limpiar el intervalo al desmontar el componente
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-stone-200 w-full">
      <div className="w-full flex items-center justify-between py-5 px-4" style={{ paddingLeft: "65px", paddingRight: "65px" }}>
        <div className="flex-shrink-0 group">
          <Link href="/">
            <div className="relative">
              {/* Imagen que cambia automáticamente */}
              <Image
                src={logoImage}
                alt="Molly Yllom"
                width={137}
                height={88}
                priority
                draggable={false}
                className="transition-opacity duration-300"
              />
            </div>
          </Link>
        </div>

        <button
          className={`lg:hidden block ${
            isMenuOpen ? "text-violet-600" : "text-indigo-950"
          } hover:text-violet-800 transition-colors duration-300`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path d="M13.06 12l6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <rect x="4" y="7.5" width="16" height="1.5" />
              <rect x="4" y="15" width="16" height="1.5" />
            </svg>
          )}
        </button>

        {/* Navigation links for desktop */}
        <nav className="hidden lg:flex items-center space-x-6 ml-auto">
          <Link href="/conoceme" className="text-indigo-950 font-semibold hover:text-violet-900">Conóceme</Link>
          <Link href="/proyectos" className="text-indigo-950 font-semibold hover:text-violet-900">Proyectos</Link>
          <Link href="/contacto" className="text-indigo-950 font-semibold hover:text-violet-900">Contacto</Link>
          <Link href="/descargas" className="text-indigo-950 font-semibold hover:text-violet-900">Descargas</Link>
        </nav>
      </div>

      <AppDrawer isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};