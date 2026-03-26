import Image from "next/image"
import Marquee from "react-fast-marquee"
import { Technology } from "@/cv/types"

interface TechnologiesMarqueeProps {
  technologyList: string[]
  technologies: Record<string, Technology>
}

export function TechnologiesMarquee({ technologyList, technologies }: TechnologiesMarqueeProps) {
  const uniqueTechnologies = Array.from(new Set(technologyList))

  return (
    <section className="relative border-y border-white/10 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent py-6">
      <Marquee
        gradient={false}
        speed={60}
        delay={2}
        pauseOnHover
        className="text-base text-[var(--muted)]"
      >
        {uniqueTechnologies.map((tech) => {
          const techData = technologies[tech]
          if (!techData || techData.showInMarquee === false) return null

          const imageWidth = techData.width || 24
          const imageHeight = techData.height || 24
          const useInvertFilter = techData.invertFilter !== false

          return (
            <span
              key={`marquee-${tech}`}
              className="mx-12 inline-flex items-center gap-3 text-[var(--foreground)]"
            >
              {techData.logo ? (
                <Image
                  src={`/img/technologies/${techData.logo}`}
                  alt={tech}
                  width={imageWidth}
                  height={imageHeight}
                  style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
                  className={useInvertFilter ? "object-contain brightness-0 invert opacity-80" : "object-contain opacity-80"}
                />
              ) : null}
              {!techData.logoOnly && (
                <span className="text-base font-medium">{tech}</span>
              )}
            </span>
          )
        })}
      </Marquee>
    </section>
  )
}
