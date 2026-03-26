'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  variant?: 'dark' | 'light'
}

export function CVVersionToggle({ variant = 'dark' }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const isES = pathname.startsWith('/cv/es')
  const isWeb3 = pathname.includes('/web3')

  const brandHref = isES ? '/cv/es' : '/cv'
  const web3Href = isES ? '/cv/es/web3' : '/cv/web3'

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
        onClick={() => navigate(brandHref)}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${
          !isWeb3 ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        Brand
      </button>
      <button
        onClick={() => navigate(web3Href)}
        className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${
          isWeb3 ? 'bg-violet-500 text-stone-200' : inactiveClass
        }`}
      >
        Web3
      </button>
    </div>
  )
}
