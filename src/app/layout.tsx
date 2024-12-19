import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import Script from "next/script"; // Importar Script de Next.js
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOLLY YLLOM | Estudio de Diseño Gráfico",
  description: "Estudio de Diseño Gráfico especializado en Branding",
  robots: "max-image-preview:large",
  openGraph: {
    type: "website",
    title: "MOLLY YLLOM | Estudio de Diseño Gráfico",
    description: "Estudio de Diseño Gráfico especializado en Branding",
    url: "https://mollyyllom.com/",
    images: [
      {
        url: "/img/logo/molly-yllom-icon.webp",
        width: 200,
        height: 200,
        alt: "Molly Yllom Logo",
      },
    ],
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Meta tags and other head elements */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="max-image-preview:large" />
      </head>
      <body className={`${font.className} antialiased`}>
        {/* Google Analytics utilizando el componente Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3TSX67D2J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3TSX67D2J');
          `}
        </Script>

        {/* LaunchMyNFT Scripts */}
        <Script id="launchmynft-init" strategy="lazyOnload">
          {`
            window.ownerId = "EWT8c32rdczQ9c4b3Aegd5oxLyRjiQA3e14DuGML5Scw";
            window.collectionId = "l2zxaR8Cfc8kjYzXsPdk";
          `}
        </Script>
        <Script
          src="https://storage.googleapis.com/scriptslmt/0.1.3/solana.js"
          type="module"
          strategy="lazyOnload"
        />
        <link
          rel="stylesheet"
          href="https://storage.googleapis.com/scriptslmt/0.1.3/solana.css"
        />
        <GoogleTagManager gtmId="G-Q3TSX67D2J" />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}