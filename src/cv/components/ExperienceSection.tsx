import { Experience } from "@/cv/types"
import { MdiNinjaStar } from "@/cv/icons/MdiNinjaStar"

interface ExperienceSectionProps {
  experience: Experience[]
  web3Mode?: boolean
}

export function ExperienceSection({ experience, web3Mode = false }: ExperienceSectionProps) {
  return (
    <div className="relative">
      {experience.length > 1 && (
        <div
          className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b ${
            web3Mode
              ? 'from-purple-500 via-blue-500/20 to-transparent'
              : 'from-[var(--accent)] via-white/20 to-transparent'
          }`}
        />
      )}

      <div className="relative space-y-8 md:space-y-16">
        {experience.map((role, index) => (
          <article key={`${role.company}-${role.start}`} className="relative">
            <div className={`relative md:flex md:items-start md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex md:w-20 md:shrink-0 md:items-center md:justify-center">
                <div
                  className={`h-5 w-5 rounded-full border-2 bg-[var(--background)] ${
                    role.current
                      ? web3Mode
                        ? "border-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                        : "border-[var(--accent)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.6)]"
                      : web3Mode
                        ? "border-purple-500/50"
                        : "border-[var(--accent)]/50"
                  }`}
                />
              </div>

              <div
                className={`relative flex-1 overflow-hidden rounded-2xl border p-4 md:p-6 transition-all ${
                  web3Mode
                    ? role.current
                      ? "border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-blue-950/20 to-cyan-950/20 shadow-[0_20px_60px_rgba(139,92,246,0.2)] hover:border-purple-500/50"
                      : "border-purple-500/20 bg-gradient-to-br from-purple-950/10 to-blue-950/10 hover:border-purple-500/30"
                    : role.current
                      ? "border-[var(--accent)]/50 bg-[var(--background)] shadow-[0_20px_60px_rgba(var(--accent-rgb),0.2)] hover:border-white/20"
                      : "border-white/10 bg-[var(--background)] hover:border-white/20"
                }`}
              >
                {role.current && web3Mode && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />
                )}
                {role.current && !web3Mode && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent pointer-events-none" />
                )}

                <div className="relative">
                  <div className="mb-4 md:mb-6">
                    <div className="mb-1.5 md:mb-2 flex flex-wrap items-center gap-2">
                      <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                        {role.company}
                      </p>
                      {role.current && (
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          web3Mode
                            ? "border border-purple-500/50 bg-purple-500/10 text-purple-300"
                            : "border border-[var(--accent)]/50 bg-[var(--accent)]/10 text-accent"
                        }`}>
                          Current
                        </span>
                      )}
                    </div>
                    {role.companyNotes && (
                      <p className="mb-1.5 md:mb-2 text-xs italic text-[var(--muted)]">{role.companyNotes}</p>
                    )}
                    <h3 className="mb-1.5 md:mb-2 text-xl md:text-2xl font-bold leading-tight">{role.role}</h3>
                    <p className="text-sm text-[var(--muted)]">{role.start} - {role.end}</p>
                  </div>

                  {role.featureHighlight && (
                    <div className={`mb-4 md:mb-6 relative rounded-lg border p-3 md:p-4 pl-9 md:pl-10 ${
                      web3Mode ? "border-purple-500/20 bg-purple-500/5" : "border-white/10 bg-white/5"
                    }`}>
                      <MdiNinjaStar className={`absolute left-2.5 md:left-3 top-3 md:top-4 h-5 w-5 md:h-6 md:w-6 ${
                        web3Mode ? "text-purple-400" : "text-accent"
                      }`} />
                      <div className="text-sm leading-relaxed text-[var(--foreground)]">
                        {role.featureHighlight}
                      </div>
                    </div>
                  )}

                  <ul className="mb-4 md:mb-6 space-y-2 md:space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                    {role.highlights.map((highlight, i) => (
                      <li key={i} className="relative pl-4 md:pl-5">
                        <span className={`absolute left-0 top-2 h-1.5 w-1.5 rounded-full ${
                          web3Mode ? "bg-purple-500" : "bg-[var(--accent)]"
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {role.stack && role.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {role.stack.map((tech) => (
                        <span
                          key={`${role.company}-${tech}`}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
