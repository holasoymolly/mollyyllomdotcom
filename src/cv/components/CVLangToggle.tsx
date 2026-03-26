'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  variant?: 'dark' | 'light'
}

export function CVLangToggle({ variant = 'dark' }: Props) {
  const pathname = usePathname()
  const router = useRouter()
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

  function navigate(href: string) {
    React.startTransition(() => router.push(href))
  }

  return (
    <div className={`inline-flex items-center rounded-full border p-1 gap-1 ${borderClass}`}>
      <button
        onClick={() => navigate(enHref)}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${
          !isES ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        EN
      </button>
      <button
        onClick={() => navigate(esHref)}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${
          isES ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        ES
      </button>
    </div>
  )
}
