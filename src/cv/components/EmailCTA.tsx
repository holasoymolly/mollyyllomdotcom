import { ContactInfo } from "@/cv/types"

interface EmailCTAProps {
  contact: ContactInfo
}

export function EmailCTA({ contact }: EmailCTAProps) {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Let&apos;s work together</h2>
        <p className="mb-8 text-lg text-[var(--muted)] sm:text-xl">
          Have a project in mind? I&apos;d love to hear from you.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90 hover:shadow-[0_20px_60px_rgba(var(--accent-rgb),0.3)]"
        >
          Email Me
        </a>
      </div>
    </section>
  )
}
