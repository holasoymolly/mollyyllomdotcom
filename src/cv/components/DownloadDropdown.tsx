'use client'

import { Dropdown } from './Dropdown'

export function DownloadDropdown() {
  const downloadPDF = (filename: string) => {
    const link = document.createElement('a')
    link.href = `/generated/pdf/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const menuItems = [
    {
      label: 'Complete CV',
      description: 'Brand + Web3 experience',
      action: () => downloadPDF('mollyyllom-cv.pdf'),
    },
    {
      label: 'Brand & Agency CV',
      description: 'Agency and freelance experience',
      action: () => downloadPDF('mollyyllom-cv-agency.pdf'),
    },
    {
      label: 'Web3 CV',
      description: 'Solana & crypto design experience',
      action: () => downloadPDF('mollyyllom-cv-web3.pdf'),
    },
  ]

  return (
    <Dropdown
      mainButtonLabel="Download PDF"
      mainButtonAction={() => downloadPDF('mollyyllom-cv.pdf')}
      mainButtonAriaLabel="Download CV"
      menuItems={menuItems}
    />
  )
}
