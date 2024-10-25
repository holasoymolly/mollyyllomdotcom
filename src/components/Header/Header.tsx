'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppDrawer } from "../AppDrawer";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/img/logo/molly-yllom-logo-homepage.png"
              alt="Molly Yllom"
              width={137}
              height={88}
              priority
              draggable={false}
            />
          </Link>
        </div>

        <button
          className="lg:hidden block text-gray-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M13.06 12l6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <rect x="4" y="7.5" width="16" height="1.5" />
              <rect x="4" y="15" width="16" height="1.5" />
            </svg>
          )}
        </button>

        {/* Navigation links for desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/conoceme" className="text-indigo-950 font-semibold hover:text-violet-900">
            Conóceme
          </Link>
          <Link href="/proyectos" className="text-indigo-950 font-semibold hover:text-violet-900">
            Proyectos
          </Link>
          <Link href="/contacto" className="text-indigo-950 font-semibold hover:text-violet-900">
            Contacto
          </Link>
          <Link href="/descargas" className="text-indigo-950 font-semibold hover:text-violet-900">
            Descargas
          </Link>
        </nav>
      </div>

      <AppDrawer isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};