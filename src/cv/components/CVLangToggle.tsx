'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  variant?: 'dark' | 'light'
}

export function CVLangToggle({ variant = 'dark' }: Props) {
  const pathname = usePathname()
  const isES = pathname.startsWith('/cv/es')
  const isWeb3 = pathname.includes('/web3')

  const enHref = isWeb3 ? '/cv/web3' : '/cv'
  const esHref = isWeb3 ? '/cv/es/web3' : '/cv/es'

  const inactiveClass = variant === 'light'
    ? 'text-indigo-950/50 hover:text-indigo-950'
    : 'text-slate-400 hover:text-stone-200'

  const borderClass = variant === 'light'
    ? 'border-indigo-950/20'
    : 'border-stone-200/20'

  return (
    <div className={`inline-flex items-center rounded-full border p-1 gap-1 ${borderClass}`}>
      <Link
        href={enHref}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
          !isES ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        EN
      </Link>
      <Link
        href={esHref}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
          isES ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        ES
      </Link>
    </div>
  )
}
