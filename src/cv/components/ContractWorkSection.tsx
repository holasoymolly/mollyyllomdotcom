import { Experience } from "@/cv/types"
import { MdiNinjaStar } from "@/cv/icons/MdiNinjaStar"

interface ContractWorkSectionProps {
  contractWork: Experience[]
}

export function ContractWorkSection({ contractWork }: ContractWorkSectionProps) {
  return (
    <section id="selected-projects" className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-medium text-[var(--muted)]">Selected Projects</p>
        <h2 className="text-4xl font-bold sm:text-5xl">Featured work</h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Selected client projects and personal work
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
          <MdiNinjaStar className="h-4 w-4 text-accent" />
          <span>Indicates a key highlight for each project</span>
        </div>
      </div>
      <div className="space-y-8">
        {contractWork.map((role) => (
          <article
            key={`${role.company}-${role.start}`}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--background)]/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition hover:border-white/10 hover:shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-1 flex items-center gap-3">
                  <p className="text-xs font-medium text-[var(--muted)]">{role.company}</p>
                </div>
                <h3 className="text-2xl font-bold">{role.role}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{role.start} - {role.end}</p>
              </div>
            </div>
            {role.featureHighlight && (
              <div className="mb-4 flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4">
                <MdiNinjaStar className="mt-0.5 h-7 w-7 shrink-0 text-accent" />
                <div className="text-sm leading-relaxed text-[var(--foreground)]">{role.featureHighlight}</div>
              </div>
            )}
            <ul className="mb-4 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
              {role.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/50" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {role.stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={`${role.company}-${tech}`}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
