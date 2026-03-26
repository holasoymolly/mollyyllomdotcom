export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-12">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-[var(--muted)] sm:px-6 space-y-2">
        <p>© {new Date().getFullYear()} Molly Yllom. All rights reserved.</p>
        <p className="text-xs text-[var(--muted)]/70">
          All trademarks, logos and brand names are the property of their respective owners. Used for identification purposes only.
        </p>
      </div>
    </footer>
  )
}
