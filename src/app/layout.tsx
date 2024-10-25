import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOLLY YLLOM | Estudio de Diseño Gráfico especializado en Branding",
  description: "MOLLY YLLOM | Estudio de Diseño Gráfico especializado en Branding",
  viewport: "width=device-width, initial-scale=1",
  robots: "max-image-preview:large",
  openGraph: {
    type: "website",
    title: "(sin título)",
    description: "MOLLY YLLOM | Estudio de Diseño Gráfico especializado en Branding",
    url: "https://mollyyllom.com/",
    images: [
      {
        url: "/img/logo/molly-yllom-logo-site-icon.png",
        width: 200,
        height: 200,
        alt: "Molly Yllom Logo",
      },
    ],
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="G-Q3TSX67D2J" />
      <head>
        <meta name="robots" content="max-image-preview:large" />
      </head>
      <body className={`${font.className} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}