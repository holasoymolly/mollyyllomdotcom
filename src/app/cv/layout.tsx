import { CVPageTransition } from '@/cv/components/CVPageTransition'

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <CVPageTransition>{children}</CVPageTransition>
}
