import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDrawer: React.FC<AppDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-stone-200 z-50"
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : "100%",
        scale: isOpen ? 1 : 0.95,
      }}
      exit={{ opacity: 0, x: "100%", scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
      }}
    >
      <div className="flex flex-col h-full">
        {/* Botón de cierre */}
        <button
          className="self-end p-4 text-[#1e1b4b] hover:text-violet-900"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            className="fill-current text-[#1e1b4b] hover:text-violet-900"
          >
            <path d="M13.06 12l6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex justify-center py-4">
          <Link href="/" onClick={onClose}>
            <Image
              src="/img/logo/molly-yllom-logo-homepage.webp"
              alt="Molly Yllom"
              width={120}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Enlaces de navegación */}
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <Link
            href="/conoceme"
            onClick={onClose}
            className="text-[#1e1b4b] font-semibold text-lg hover:text-violet-900"
          >
            Conóceme
          </Link>
          <Link
            href="/proyectos"
            onClick={onClose}
            className="text-[#1e1b4b] font-semibold text-lg hover:text-violet-900"
          >
            Proyectos
          </Link>
          <Link
            href="/contacto"
            onClick={onClose}
            className="text-[#1e1b4b] font-semibold text-lg hover:text-violet-900"
          >
            Contacto
          </Link>
          <Link
            href="/descargas"
            onClick={onClose}
            className="text-[#1e1b4b] font-semibold text-lg hover:text-violet-900"
          >
            Descargas
          </Link>
          <Link
            href="/nfts"
            onClick={onClose}
            className="text-[#1e1b4b] font-semibold text-lg hover:text-violet-900"
          >
            NFTs
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};