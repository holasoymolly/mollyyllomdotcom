import { DeviconPlainLinkedin } from '@/icons/DeviconPlainLinkedin';
import { IcOutlineTiktok } from '@/icons/IcOutlineTiktok';
import { IcRoundFacebook } from '@/icons/IcRoundFacebook';
import { RiBehanceFill } from '@/icons/RiBehanceFill';
import { RiInstagramLine } from '@/icons/RiInstagramLine';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-stone-200">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
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

        <div className="mt-6 md:mt-0">
          <Link href="/" aria-current="page">
          <img
           src="/img/logo/molly-yllom-logo-homepage.webp"
           alt="Molly Yllom"
           className="footer-logo" // Aplica la clase footer-logo aquí
           draggable={false}
/>
          </Link>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0">
          <Link href="https://www.instagram.com/holasoymolly" aria-label="Instagram">
            <RiInstagramLine className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.behance.net/holasoymolly" aria-label="Behance">
            <RiBehanceFill className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.facebook.com/holasoymolly" aria-label="Facebook">
            <IcRoundFacebook className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.tiktok.com/@soymollyyllom" aria-label="TikTok">
            <IcOutlineTiktok className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.linkedin.com/in/mollyyllom" aria-label="LinkedIn">
            <DeviconPlainLinkedin className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
};