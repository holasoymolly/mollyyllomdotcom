'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { Theme } from '@/cv/types'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  initialTheme = 'normie',
}: {
  children: ReactNode
  initialTheme?: Theme
}) {
  const pathname = usePathname()
  const currentTheme: Theme = pathname?.startsWith('/cv/web3') ? 'web3' : 'normie'
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    setTheme(currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
