import type { Experience } from "../../../types"
import React from "react"
import { URLS } from "../../constants"

export const experience: Experience[] = [
  {
    company: "Aerosol",
    role: "Brand Consultant & Art Director",
    start: "2024",
    end: "Present",
    current: true,
    featureHighlight: "Shaping the visual identity of the Aerosol ecosystem on Solana — from brand system to product interfaces.",
    highlights: [
      "Evolved Aerosol's brand into a scalable, digital-first visual system aligned with Web3 culture.",
      "Designed across product, web, social, and campaigns for ecosystem products including Jobskr and Spotlight.",
      <>Developed sub-brand identity for <a href={URLS.BURN_AND_CLAIM} target="_blank" rel="noreferrer" className="text-accent underline hover:opacity-80">Burn & Claim</a>, cohesive with the parent ecosystem while maintaining its own visual voice.</>,
    ],
    stack: ["Brand Identity", "Product Design", "Figma", "Landing Pages", "Social Media", "Solana"],
  },
]
