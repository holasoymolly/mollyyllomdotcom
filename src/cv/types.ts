import type { ReactNode } from "react"

export type Theme = 'normie' | 'web3'

export interface Link {
  label: string
  href: string
}

export interface ContactInfo {
  name: string
  title: string
  location: string
  /** Spanish rendering of `location`, used by the ES CV pages. */
  locationES?: string
  phone: string
  email: string
  summary: string | string[]
  links: Link[]
}

export interface Technology {
  logo?: string
  logoOnly: boolean
  width?: number
  height?: number
  showInMarquee?: boolean
  invertFilter?: boolean
}

export interface SkillCategory {
  title: string
  items: string[]
}

/**
 * One role inside a single tenure at a company.
 *
 * A promotion is one continuous stay, not two short jobs. Split into separate
 * `Experience` entries, "Head of Design, 2026 - Present" reads as eight months
 * of leadership to anyone looking in 2026, which understates the tenure and
 * matches neither LinkedIn nor the PDF résumé.
 */
export interface ExperienceStage {
  role: string
  start: string
  end: string
  highlights: ReactNode[]
  featureHighlight?: string | ReactNode
}

export interface Experience {
  company: string
  role: string
  start: string
  end: string
  highlights: ReactNode[]
  stack?: string[]
  current?: boolean
  featureHighlight?: string | ReactNode
  companyNotes?: string | ReactNode
  /**
   * Roles held at the same company, newest first. When present, the card header
   * carries the company and the full date range, and each stage carries its own
   * title, dates and bullets.
   */
  stages?: ExperienceStage[]
}

export interface Education {
  institution: string
  location: string
  area: string
  start: string
  end: string
}

export interface Reference {
  note: string
}

export interface ResumeData {
  contact: ContactInfo
  skills: SkillCategory[]
  experience: Experience[]
  contractWork?: Experience[]
  education: Education[]
  references: Reference
  technologies: Record<string, Technology>
}
