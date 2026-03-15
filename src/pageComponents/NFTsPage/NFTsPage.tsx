'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FC } from "react";
import { NFTsGallery } from "@/components/NFTsGallery";
import { collections } from "@/data/collections";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const NFTsPage: FC = () => {
  const { t } = useLanguage();

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
          {t.nfts.label}
        </motion.p>
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          NFTs
        </motion.h1>
      </section>

      <NFTsGallery collections={collections} />

      <Footer />
    </div>
  );
};
