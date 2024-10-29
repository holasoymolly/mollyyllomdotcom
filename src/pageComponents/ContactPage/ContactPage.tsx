'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteBanner } from "@/components/QuoteBanner";
import { MediaSection } from "../HomePage/components/MediaSection";
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
      <main className="px-0 lg:px-0 py-11 space-y-1">
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 pl-6 lg:pl-0">
            <h1 className="text-4xl font-bold text-indigo-950 lg:ml-[1rem]">
              Contáctame
            </h1>
          </div>
          <div className="w-full md:w-1/2 pl-8 space-y-6">
            <p className="text-lg leading-relaxed text-indigo-950 text-justify-left">
              Si tienes alguna pregunta o te gustaría trabajar conmigo, no dudes en contactarme a través del correo o en mis redes sociales.
            </p>

            {/* Email */}
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-indigo-950">Email:</p>
              <p className="text-lg text-violet-900">
                <a href="mailto:hola@mollyyllom.com" className="hover:underline">hola@mollyyllom.com</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6">
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
        <section style={{ marginTop: "3rem", marginBottom: "-0.25rem" }}> {/* Margen inferior negativo para reducir espacio */}
          <QuoteBanner />
        </section>

        {/* Media Section */}
        <section className="mt-[-10px]"> {/* Margen superior negativo para acercarlo más al QuoteBanner */}
          <MediaSection />
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};