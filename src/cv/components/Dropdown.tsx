'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

interface DropdownItem {
  icon?: ReactNode
  label: string
  description: string
  action: () => void
  external?: boolean
}

interface DropdownProps {
  mainButtonLabel: ReactNode
  mainButtonAction: () => void
  mainButtonAriaLabel: string
  menuItems: DropdownItem[]
}

export function Dropdown({
  mainButtonLabel,
  mainButtonAction,
  mainButtonAriaLabel,
  menuItems,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-stretch rounded-lg border border-white/10 bg-[var(--background)]/80 backdrop-blur-sm shadow-lg overflow-hidden">
        <button
          onClick={mainButtonAction}
          className="px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-white/5 transition flex items-center gap-2"
          aria-label={mainButtonAriaLabel}
        >
          {mainButtonLabel}
        </button>
        <div className="w-px bg-white/10" />
        <button
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}
          className="px-3 py-2 text-[var(--foreground)] hover:bg-white/5 transition flex items-center"
          aria-label="More options"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-20 right-6 z-50 w-72 rounded-lg border border-white/10 bg-[var(--background)]/95 backdrop-blur-md shadow-2xl overflow-hidden">
          <div className="p-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-start gap-3 px-4 py-3 rounded-md hover:bg-white/5 transition text-left group"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--foreground)] group-hover:text-accent transition">
                    {item.label}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
