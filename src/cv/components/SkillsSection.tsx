import { SkillCategory } from "@/cv/types"

interface SkillsSectionProps {
  skills: SkillCategory[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium text-[var(--muted)]">Capabilities</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Design expertise</h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Disciplines, tools, and collaboration skills
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, index) => (
            <article
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_20px_60px_rgba(var(--accent-rgb),0.15)] ${
                index % 4 === 0
                  ? 'from-white/[0.05] to-transparent'
                  : index % 4 === 1
                    ? 'from-black/30 to-white/[0.02]'
                    : index % 4 === 2
                      ? 'from-white/[0.03] to-black/20'
                      : 'from-black/25 to-transparent'
              }`}
            >
              <h3 className="mb-4 text-sm font-semibold text-[var(--foreground)]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--foreground)] transition group-hover:border-white/20 group-hover:bg-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
