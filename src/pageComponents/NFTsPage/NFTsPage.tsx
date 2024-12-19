// 'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FC } from "react";
import { NFTsGallery } from "@/components/NFTsGallery";
import { collections } from "@/data/collections";

export const NFTsPage: FC = () => {
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-12 py-12 space-y-16">
        <h1 className="text-4xl font-bold text-indigo-950 ml-12 sm:ml-12 md:ml-12 lg:ml-4 mb-4 sm:mb-6">NFTs</h1>
        <NFTsGallery collections={collections} />
      </main>
      <Footer />
    </div>
  );
};