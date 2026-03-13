'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";
import { downloadData } from "./downloadData";
import { motion } from "framer-motion";

export const DownloadsPage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="bg-indigo-950 text-stone-200 px-6 md:px-16 lg:px-24 pt-20 pb-24">
        <motion.p
          className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Recursos gratuitos
        </motion.p>
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Descargas
        </motion.h1>
        <motion.p
          className="text-stone-400 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Plantillas y recursos gratuitos para mejorar tu proceso creativo.
        </motion.p>
      </section>

      {/* Downloads list */}
      <section className="bg-stone-200 border-t border-indigo-950/10">
        {downloadData.map((item, index) => (
          <motion.a
            key={index}
            href={item.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-6 md:px-16 lg:px-24 py-8 border-b border-indigo-950/10 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Number */}
            <span className="text-violet-500 text-xs font-bold tracking-widest shrink-0 w-8">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Thumbnail */}
            <div className="w-full sm:w-32 md:w-40 aspect-video overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="flex-1 text-xl md:text-2xl lg:text-3xl font-black text-indigo-950 leading-tight group-hover:text-violet-900 transition-colors duration-300">
              {item.title}
            </h3>

            {/* CTA */}
            <span className="shrink-0 text-indigo-950 font-bold text-sm tracking-wide flex items-center gap-1 group-hover:text-violet-500 transition-colors duration-300">
              Descargar
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </motion.a>
        ))}
      </section>

      <QuoteBanner />
      <Footer />
    </div>
  );
};
