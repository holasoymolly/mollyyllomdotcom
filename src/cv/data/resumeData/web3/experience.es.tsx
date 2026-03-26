import type { Experience } from "../../../types"
import React from "react"
import { URLS } from "../../constants"

export const experienceES: Experience[] = [
  {
    company: "Aerosol",
    role: "Brand Consultant & Art Director",
    start: "2024",
    end: "Presente",
    current: true,
    featureHighlight: "Definiendo la identidad visual del ecosistema Aerosol en Solana — desde el sistema de marca hasta interfaces de producto.",
    highlights: [
      "Evolución de la marca Aerosol hacia un sistema visual digital-first, escalable y alineado con la cultura Web3.",
      "Diseño para producto, web, redes sociales y campañas de los productos del ecosistema, incluyendo Jobskr y Spotlight.",
      <>Desarrollo de sub-marca para <a href={URLS.BURN_AND_CLAIM} target="_blank" rel="noreferrer" className="text-accent underline hover:opacity-80">Burn & Claim</a>, coherente con el ecosistema principal y con voz visual propia.</>,
    ],
    stack: ["Brand Identity", "Product Design", "Figma", "Landing Pages", "Social Media", "Solana"],
  },
]
