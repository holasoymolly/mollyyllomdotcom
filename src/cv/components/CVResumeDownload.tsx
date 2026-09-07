'use client'

import { usePathname } from 'next/navigation'
import { RESUME_PDF } from '@/lib/resume'

interface Props {
  variant?: 'dark' | 'light'
}

/**
 * Sits beside the BRAND / WEB3 and EN / ES toggles and follows them: the PDF it
 * serves is whichever version the reader is currently looking at.
 *
 * Both PDFs are in English. There is no Spanish version yet, so `/cv/es` serves
 * the English file on purpose.
 */
export function CVResumeDownload({ variant = 'dark' }: Props) {
  const pathname = usePathname()
  const isES = pathname.startsWith('/cv/es')
  const isWeb3 = pathname.includes('/web3')

  const href = isWeb3 ? RESUME_PDF.web3 : RESUME_PDF.brand
  const label = isES ? 'Descargar PDF' : 'Download PDF'

  const className = variant === 'light'
    ? 'border-indigo-950/20 text-indigo-950/50 hover:border-violet-500 hover:text-violet-500'
    : 'border-stone-200/20 text-slate-400 hover:border-violet-400 hover:text-violet-400'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center rounded-full border px-5 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${className}`}
    >
      {label}
    </a>
  )
}
