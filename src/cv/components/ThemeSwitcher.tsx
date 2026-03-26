'use client'

import { useTheme } from '@/cv/contexts/ThemeContext'
import { useRouter } from 'next/navigation'

export function ThemeSwitcher() {
  const { theme } = useTheme()
  const router = useRouter()

  const handleSwitch = () => {
    if (theme === 'web3') {
      router.push('/cv')
    } else {
      router.push('/cv/web3')
    }
  }

  const currentColor = theme === 'web3' ? 'text-purple-400' : 'text-orange-400'
  const displayText = theme === 'web3' ? 'WEB3' : 'BRAND'

  return (
    <div className="fixed top-6 left-6 z-50">
      <button
        onClick={handleSwitch}
        className={`cursor-pointer font-mono text-sm ${currentColor} hover:opacity-100 opacity-80 transition rounded-lg px-3 py-1.5 bg-[var(--background)]/80 backdrop-blur-md border border-white/10 shadow-lg`}
        aria-label={`Currently in ${theme === 'web3' ? 'web3' : 'brand'} mode, click to switch`}
      >
        {displayText}
      </button>
    </div>
  )
}
