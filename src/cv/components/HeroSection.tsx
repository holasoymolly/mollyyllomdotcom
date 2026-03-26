'use client'

import Image from "next/image"
import { ContactInfo, Experience } from "@/cv/types"
import { MdiLinkedin } from "@/cv/icons/MdiLinkedin"
import { MdiX } from "@/cv/icons/MdiX"
import { useTheme } from "@/cv/contexts/ThemeContext"
import { calculateYearsOfExperience } from "@/cv/utils/experience"
import { URLS } from "@/cv/data/constants"
import { DownloadDropdown } from "@/cv/components/DownloadDropdown"

interface HeroSectionProps {
  contact: ContactInfo
  profilePicture?: string
  experience?: Experience[]
  web3Experience?: Experience[]
}

export function HeroSection({
  contact,
  profilePicture = "/img/molly/molly1.webp",
  experience = [],
  web3Experience,
}: HeroSectionProps) {
  const { theme } = useTheme()
  const yearsOfExperience = calculateYearsOfExperience(experience, theme === 'web3' ? web3Experience : undefined)

  const links = contact.links

  const normieBio = (
    <>
      <p>
        Brand and Product Designer with{' '}
        <span className="font-semibold text-[var(--foreground)]">{yearsOfExperience}+ years</span> building scalable visual systems across agencies, freelance work, and Web3 products.
      </p>
      <p>
        Translating brand strategy into <span className="font-semibold text-accent">identity systems</span>, <span className="font-semibold text-accent">digital products</span>, and <span className="font-semibold text-accent">marketing experiences</span> that resonate.
      </p>
    </>
  )

  const web3Bio = (
    <>
      <p>
        Brand Consultant and Art Director in the{' '}
        <span className="font-semibold text-[var(--foreground)]">Solana ecosystem</span>.
      </p>
      <p>
        Designing visual identities and digital experiences for{' '}
        <a href={URLS.AEROSOL} target="_blank" rel="noreferrer" className="font-semibold text-accent underline hover:opacity-80">Aerosol</a>{' '}
        and crypto-native products.
      </p>
    </>
  )

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-accent-radial" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-accent-20 shadow-accent-30">
          <Image
            src={profilePicture}
            alt="Portrait of Molly Yllom"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--muted)]">{contact.title}</p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">{contact.name}</h1>
          <div className="flex sm:hidden items-center justify-center gap-2 scale-90">
            <DownloadDropdown />
          </div>
          <div className="mx-auto max-w-2xl space-y-3 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {theme === 'web3' ? web3Bio : normieBio}
          </div>
        </div>
        <div className="flex gap-4">
          {links.map((link) => {
            const IconComponent =
              link.label === "LinkedIn" ? MdiLinkedin
              : link.label === "X" ? MdiX
              : null
            return (
              <a
                key={link.href}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-[var(--muted)] backdrop-blur transition hover:border-[var(--accent)] hover:bg-white/10 hover:text-accent"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                {IconComponent ? <IconComponent className="h-6 w-6" /> : link.label}
              </a>
            )
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-[var(--foreground)] px-8 py-3 font-semibold text-[var(--background)] transition hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href="#design-approach"
            className="rounded-full border border-white/30 px-8 py-3 font-semibold transition hover:border-[var(--accent)] hover:text-accent"
          >
            Get to know me
          </a>
        </div>
      </div>
    </section>
  )
}
