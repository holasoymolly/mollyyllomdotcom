import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DeviconPlainLinkedin } from '@/icons/DeviconPlainLinkedin';
import { IcOutlineTiktok } from '@/icons/IcOutlineTiktok';
import { IcRoundFacebook } from '@/icons/IcRoundFacebook';
import { RiBehanceFill } from '@/icons/RiBehanceFill';
import { RiInstagramLine } from '@/icons/RiInstagramLine';

export const Footer = () => {
  const [logoSrc, setLogoSrc] = useState("/img/logo/molly-yllom-logo-homepage.webp");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setLogoSrc(current =>
          current === "/img/logo/molly-yllom-logo-homepage.webp"
            ? "/img/logo/molly-yllom-logo-homepage-2.webp"
            : "/img/logo/molly-yllom-logo-homepage.webp"
        );
      }, 1000); // Change image every 1 second
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <footer className="w-full py-6 bg-stone-200">
      <div className="flex flex-col items-center px-4 md:px-8 md:flex-row md:justify-between">
        {/* Navigation Menu */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left md:flex-1">
          <Link href="/conoceme/" className="text-indigo-950 font-bold hover:text-violet-900">Conóceme</Link>
          <Link href="/proyectos" className="text-indigo-950 font-bold hover:text-violet-900">Proyectos</Link>
          <Link href="/contacto" className="text-indigo-950 font-bold hover:text-violet-900">Contacto</Link>
          <Link href="/descargas" className="text-indigo-950 font-bold hover:text-violet-900">Descargas</Link>
        </nav>

        {/* Logo that changes automatically */}
        <div className="mt-8 mb-4 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 md:flex-none flex justify-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Molly Yllom"
              width={137}
              height={88}
              priority
              draggable={false}
              className="transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0 md:flex-1 justify-center md:justify-end">
          <Link href="https://www.instagram.com/holasoymolly" aria-label="Instagram" className="transform transition-transform duration-200 hover:scale-110">
            <RiInstagramLine className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.behance.net/holasoymolly" aria-label="Behance" className="transform transition-transform duration-200 hover:scale-110">
            <RiBehanceFill className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.facebook.com/holasoymolly" aria-label="Facebook" className="transform transition-transform duration-200 hover:scale-110">
            <IcRoundFacebook className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.tiktok.com/@soymollyyllom" aria-label="TikTok" className="transform transition-transform duration-200 hover:scale-110">
            <IcOutlineTiktok className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
          <Link href="https://www.linkedin.com/in/mollyyllom" aria-label="LinkedIn" className="transform transition-transform duration-200 hover:scale-110">
            <DeviconPlainLinkedin className="w-6 h-6 text-indigo-950 hover:text-violet-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
};