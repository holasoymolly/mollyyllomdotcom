import { DeviconPlainLinkedin } from '@/icons/DeviconPlainLinkedin';
import { IcOutlineTiktok } from '@/icons/IcOutlineTiktok';
import { IcRoundFacebook } from '@/icons/IcRoundFacebook';
import { RiBehanceFill } from '@/icons/RiBehanceFill';
import { RiInstagramLine } from '@/icons/RiInstagramLine';
import { XIcon } from '@/icons/XIcon'; // Importa el nuevo ícono
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-stone-200">
      <div className="flex flex-col items-center px-4 md:px-8 md:flex-row md:justify-between">
        
        {/* Menú de navegación alineado a la izquierda en tablet/desktop, centrado en móvil */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left md:flex-1">
          <Link href="/conoceme/" className="text-indigo-950 font-bold hover:text-violet-900">
            Conóceme
          </Link>
          <Link href="/proyectos" className="text-indigo-950 font-bold hover:text-violet-900">
            Proyectos
          </Link>
          <Link href="/contacto" className="text-indigo-950 font-bold hover:text-violet-900">
            Contacto
          </Link>
          <Link href="/descargas" className="text-indigo-950 font-bold hover:text-violet-900">
            Descargas
          </Link>
        </nav>

        {/* Logo centrado horizontalmente con márgenes controlados */}
        <div className="mt-8 mb-4 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 md:flex-none flex justify-center group">
          <Link href="/" aria-current="page">
            <div className="relative w-[137px] h-[88px]">
              <img
                src="/img/logo/molly-yllom-logo-homepage.webp"
                alt="Molly Yllom"
                className="w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                draggable={false}
              />
              <img
                src="/img/logo/molly-yllom-logo-homepage-2.webp"
                alt="Molly Yllom Hover"
                className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          </Link>
        </div>

        {/* Iconos de redes sociales alineados a la derecha en tablet/desktop, centrados en móvil */}
        <div className="flex space-x-4 mt-6 md:mt-0 md:flex-1 justify-center md:justify-end items-center">
          <a href="https://www.instagram.com/holasoymolly" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
            <RiInstagramLine className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </a>
          <a href="https://www.behance.net/holasoymolly" aria-label="Behance" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
            <RiBehanceFill className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </a>
          <a href="https://www.facebook.com/holasoymolly" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
            <IcRoundFacebook className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </a>
          <a href="https://www.tiktok.com/@soymollyyllom" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
            <IcOutlineTiktok className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </a>
          <a href="https://www.linkedin.com/in/mollyyllom" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110 flex items-center justify-center">
            <DeviconPlainLinkedin className="w-5 h-5 text-indigo-950 hover:text-violet-900" />
          </a>
          <a href="https://x.com/holasoymolly" aria-label="X" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110 flex items-center justify-center">
            <XIcon className="w-5 h-5 text-indigo-950 hover:text-violet-900" />
          </a>
        </div>
      </div>
    </footer>
  );
};