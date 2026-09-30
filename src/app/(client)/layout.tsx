import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)]">
      {/* Client Portal Header */}
      <header className="border-b border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/portal"
            className="text-xl font-bold gradient-text"
          >
            LgiMorales
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/portal"
              className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors"
            >
              Meus Projetos
            </Link>
            <Link
              href="/portal/galerias"
              className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors"
            >
              Galerias
            </Link>
            <Link
              href="/portal/downloads"
              className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors"
            >
              Downloads
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
