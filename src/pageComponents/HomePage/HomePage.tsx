'use client'

import { Header } from "@/components/Header";
import { FC } from "react";
import { Main } from "./components/Main";
import { Footer } from "@/components/Footer";
import { NewsletterBanner } from "@/components/NewsletterBanner";

export const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* Agregar el NewsletterBanner debajo del Main */}
      <NewsletterBanner />
      <Footer />
    </div>
  );
}