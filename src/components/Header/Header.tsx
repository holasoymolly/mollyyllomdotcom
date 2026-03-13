'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppDrawer } from "../AppDrawer";

const navLinks = [
  { href: '/conoceme', label: 'Conóceme' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/descargas', label: 'Descargas' },
  { href: '/nfts', label: 'NFTs' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-stone-200/90 backdrop-blur-md shadow-sm' : 'bg-stone-200'}`}>
      <div className="w-full flex items-center justify-between py-4 px-6 md:px-16 lg:px-24">

        {/* Logo — swap on hover only */}
        <Link href="/" className="flex-shrink-0 group relative block" style={{ width: 110, height: 71 }}>
          <Image
            src="/img/logo/molly-yllom-logo-homepage.webp"
            alt="Molly Yllom"
            width={110}
            height={71}
            priority
            draggable={false}
            className="absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src="/img/logo/molly-yllom-logo-homepage-2.webp"
            alt="Molly Yllom"
            width={110}
            height={71}
            draggable={false}
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden text-indigo-950 hover:text-violet-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <rect x="4" y="7.5" width="16" height="1.5" />
            <rect x="4" y="15" width="16" height="1.5" />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-semibold transition-colors duration-200 group pb-0.5 ${
                  isActive ? 'text-violet-600' : 'text-indigo-950 hover:text-violet-500'
                }`}
              >
                {label}
                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-violet-500 rounded-full transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
        </nav>
      </div>

      <AppDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
