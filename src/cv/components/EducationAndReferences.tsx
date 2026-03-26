import { Education, Reference } from "@/cv/types"

interface EducationAndReferencesProps {
  education: Education[]
  references: Reference
}

export function EducationAndReferences({ education, references }: EducationAndReferencesProps) {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8">
            <p className="mb-6 text-sm font-semibold text-[var(--muted)]">Education</p>
            <div className="space-y-6">
              {education.map((school) => (
                <div key={`${school.institution}-${school.start}`} className="space-y-1">
                  <p className="text-xs text-[var(--muted)]">{school.start} - {school.end}</p>
                  <h3 className="text-xl font-bold">{school.institution}</h3>
                  <p className="text-sm text-[var(--muted)]">{school.area} · {school.location}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/20 to-white/[0.02] p-8">
            <p className="mb-6 text-sm font-semibold text-[var(--muted)]">References</p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{references.note}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
