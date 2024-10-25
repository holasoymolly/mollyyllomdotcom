'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Contact Card Section */}
        <section className="bg-gray-100 text-gray-900 rounded-lg p-8 shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
            {/* Artist Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/img/molly/molly2.jpg"
                alt="Molly Yllom"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-2/3 space-y-6">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900">Contáctame</h1>
                <p className="text-lg text-gray-700 mt-4">
                  Si tienes alguna pregunta o te gustaría trabajar conmigo, no dudes en contactarme a través del correo o en mis redes sociales.
                </p>
              </div>

              {/* Email and Socials */}
              <div className="space-y-6">
                {/* Email */}
                <div className="text-center md:text-left">
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-lg text-blue-600">
                    <a href="mailto:hola@mollyyllom.com" className="hover:underline">hola@mollyyllom.com</a>
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-6">
                  <a href="https://www.instagram.com/holasoymolly" aria-label="Instagram" className="text-gray-800 hover:text-blue-600">
                    <RiInstagramLine className="w-8 h-8" />
                  </a>
                  <a href="https://www.behance.net/holasoymolly" aria-label="Behance" className="text-gray-800 hover:text-blue-600">
                    <RiBehanceFill className="w-8 h-8" />
                  </a>
                  <a href="https://www.facebook.com/holasoymolly" aria-label="Facebook" className="text-gray-800 hover:text-blue-600">
                    <IcRoundFacebook className="w-8 h-8" />
                  </a>
                  <a href="https://www.tiktok.com/@soymollyyllom" aria-label="TikTok" className="text-gray-800 hover:text-blue-600">
                    <IcOutlineTiktok className="w-8 h-8" />
                  </a>
                  <a href="https://www.linkedin.com/in/mollyyllom" aria-label="LinkedIn" className="text-gray-800 hover:text-blue-600">
                    <DeviconPlainLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};