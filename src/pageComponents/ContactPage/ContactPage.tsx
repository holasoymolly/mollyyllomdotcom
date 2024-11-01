// 'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";
import { NewsletterBanner } from "@/components/NewsletterBanner"; // Importar el NewsletterBanner
import { FC } from "react";
import { DeviconPlainLinkedin } from '@/icons/DeviconPlainLinkedin';
import { IcOutlineTiktok } from "@/icons/IcOutlineTiktok";
import { IcRoundFacebook } from "@/icons/IcRoundFacebook";
import { RiBehanceFill } from "@/icons/RiBehanceFill";
import { RiInstagramLine } from "@/icons/RiInstagramLine";

export const ContactPage: FC = () => {
  return (
    <div>
      <Header />

      {/* Contact Section */}
      <main className="px-4 lg:px-12 py-11 space-y-1">
        <section className="max-w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-950 ml-12 sm:ml-12 md:ml-12 lg:ml-4 mb-4 sm:mb-6">
              Contáctame
            </h1>
          </div>
          <div className="w-full md:w-1/2 space-y-6 pl-4 md:pl-8">
            <p className="text-lg leading-relaxed text-indigo-950 ml-9 sm:ml-8 md:ml-0 mb-4 sm:mb-6 pr-4 sm:pr-6">
              Si tienes alguna pregunta o te gustaría trabajar conmigo, no dudes en contactarme a través del correo o en mis redes sociales.
            </p>

            {/* Email */}
            <div className="text-left mobile-contact-padding">
              <p className="text-lg font-semibold text-indigo-950">Email:</p>
              <p className="text-lg text-violet-900">
                <a href="mailto:hola@mollyyllom.com" className="hover:underline">hola@mollyyllom.com</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-start space-x-6 mobile-contact-padding">
              <a href="https://www.instagram.com/holasoymolly" aria-label="Instagram" className="text-indigo-950 hover:text-violet-900">
                <RiInstagramLine className="w-8 h-8" />
              </a>
              <a href="https://www.behance.net/holasoymolly" aria-label="Behance" className="text-indigo-950 hover:text-violet-900">
                <RiBehanceFill className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/holasoymolly" aria-label="Facebook" className="text-indigo-950 hover:text-violet-900">
                <IcRoundFacebook className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@soymollyyllom" aria-label="TikTok" className="text-indigo-950 hover:text-violet-900">
                <IcOutlineTiktok className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/mollyyllom" aria-label="LinkedIn" className="text-indigo-950 hover:text-violet-900">
                <DeviconPlainLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>

        {/* Quote Banner Section */}
        <section className="-mx-4 lg:-mx-12" style={{ marginTop: "2rem" }}>
          <QuoteBanner />
        </section>
        
      </main>

      {/* Newsletter Banner */}
      <div className="-mt-11"> {/* Eliminar el margen superior */}
        <NewsletterBanner />
      </div>

      <Footer />
    </div>
  );
};