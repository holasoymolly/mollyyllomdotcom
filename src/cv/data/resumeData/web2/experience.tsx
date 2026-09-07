import type { Experience } from "../../../types"
import React from "react"
import { URLS } from "../../constants"

export const experience: Experience[] = [
  {
    company: "Aerosol",
    role: "Head of Design",
    start: "2024",
    end: "Present",
    current: true,
    featureHighlight: "Leading design across a digital products company: brand, product and front-end.",
    highlights: [],
    stages: [
      {
        role: "Head of Design",
        start: "2026",
        end: "Present",
        highlights: [
          "Lead all design across the company: brand identity, product UX, marketing surfaces, and web.",
          "Led the end-to-end redesign of a transactional web application. Consumer app, dashboard and marketing site, designed and built in Next.js, React and Tailwind.",
          "Built a brand system with sub-brand architecture and an organized asset library, so product, marketing and partner teams find what they need without design becoming a bottleneck.",
        ],
      },
      {
        role: "Brand Consultant & Art Director",
        start: "2024",
        end: "2026",
        highlights: [
          "Partnered with Aerosol as brand consultant and art director before stepping into the Head of Design role.",
          "Shaped early brand direction and visual systems, and designed product and marketing touchpoints across the ecosystem.",
        ],
      },
    ],
    stack: ["Brand Systems", "Brand Identity", "Art Direction", "Product Design", "Next.js", "React", "Tailwind CSS"],
  },
  {
    company: "Mollyverse, Independent Product Venture",
    role: "Designer & Front-end Developer",
    start: "2026",
    end: "Present",
    current: true,
    featureHighlight: "Designed and built a consumer web platform end to end, from brand to a live product.",
    highlights: [
      <>Conceived, designed, built, and shipped <a href={URLS.MOLLYVERSE} target="_blank" rel="noreferrer" className="text-accent underline hover:opacity-80">mollyverse.art</a> end to end, a consumer web platform for an original hand-drawn illustrated universe of 420 pieces across four series, built in Next.js, React, and Tailwind.</>,
      "Owned the full journey from concept and identity to launch; first collection of 111 pieces sold out.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Brand Identity", "Product Design", "Solana"],
  },
  {
    company: "Freelance",
    role: "Art Director & Brand Designer",
    start: "2008",
    end: "Present",
    current: true,
    featureHighlight: "Independent practice since 2008, serving clients in the United States and the Dominican Republic. US clients include Alliance Legal Group in New York, Advanced Therapy of South Florida and Mater Design. Dominican clients include INTEC, JMMB Bank and FAMA Collective.",
    highlights: [
      "Designed scalable brand identity systems and visual guidelines across industries.",
      "Led creative direction for campaigns, editorial, and digital assets from brief to delivery.",
    ],
    stack: ["Brand Identity", "Visual Systems", "Campaign Design", "Print & Digital"],
  },
  {
    company: "Marketing of Minds (MoM)",
    role: "Art Director",
    start: "2019",
    end: "2023",
    highlights: [
      "Led branding and campaign development for multiple clients across digital and print.",
      "Oversaw creative execution from concept to final delivery.",
    ],
    stack: ["Art Direction", "Campaign Design", "Brand Strategy"],
  },
  {
    company: "McCann-Erickson",
    role: "Art Director",
    start: "2016",
    end: "2018",
    highlights: [
      "Created advertising campaigns for major brands at one of the world's top creative agencies.",
      "Led concept development and visual storytelling across TV, digital, and print.",
    ],
    stack: ["Advertising", "Creative Direction", "Brand Campaigns"],
  },
  {
    company: "Room Grupo Creativo",
    role: "Art Director",
    start: "2014",
    end: "2016",
    highlights: [
      "Art directed client campaigns across brand, digital, and print at a full-service agency.",
    ],
    stack: ["Art Direction", "Brand Design", "Creative Direction"],
  },
  {
    company: "Banco del Progreso",
    role: "Graphic Designer",
    start: "2012",
    end: "2013",
    highlights: [
      "Designed marketing and communications materials for one of the Dominican Republic's leading banks.",
    ],
    stack: ["Graphic Design", "Brand Assets", "Print Design"],
  },
  {
    company: "Room Grupo Creativo",
    role: "Graphic Designer",
    start: "2010",
    end: "2012",
    highlights: [
      "Started career at a full-service agency, building foundations in visual design and art direction.",
    ],
    stack: ["Graphic Design", "Visual Communication"],
  },
]
