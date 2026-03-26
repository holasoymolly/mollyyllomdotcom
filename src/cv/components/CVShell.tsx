'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from '@/cv/contexts/ThemeContext'
import type { Theme } from '@/cv/types'

function CVRootInner({ children, fonts }: { children: React.ReactNode; fonts: string }) {
  const { theme } = useTheme()
  return (
    <div className={`cv-root ${fonts}`} data-theme={theme}>
      {children}
    </div>
  )
}

export function CVShell({ children, fonts }: { children: React.ReactNode; fonts: string }) {
  const pathname = usePathname()
  const initialTheme: Theme = pathname?.startsWith('/cv/web3') ? 'web3' : 'normie'

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <CVRootInner fonts={fonts}>
        {children}
      </CVRootInner>
    </ThemeProvider>
  )
}
