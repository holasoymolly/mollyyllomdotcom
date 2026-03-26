import type { Experience } from '@/cv/types'

export function calculateYearsOfExperience(experience: Experience[], web3Experience?: Experience[]): number {
  const expToUse = web3Experience && web3Experience.length > 0 ? web3Experience : experience

  if (!expToUse || expToUse.length === 0) return 0

  const startYears = expToUse
    .map(exp => parseInt(exp.start))
    .filter(year => !isNaN(year))

  if (startYears.length === 0) return 0

  const earliestYear = Math.min(...startYears)
  const currentYear = new Date().getFullYear()
  return currentYear - earliestYear
}
