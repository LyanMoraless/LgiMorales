import Link from "next/link";

const adminNav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/admin/pipeline", label: "Pipeline", icon: "📋" },
  { href: "/admin/clientes", label: "Clientes", icon: "👥" },
  { href: "/admin/eventos", label: "Eventos", icon: "🎬" },
  { href: "/admin/financeiro", label: "Financeiro", icon: "💰" },
  { href: "/admin/portfolio", label: "Portfólio", icon: "🖼️" },
  { href: "/admin/depoimentos", label: "Depoimentos", icon: "⭐" },
  { href: "/admin/leads", label: "Leads", icon: "📩" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--color-brand-dark)]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-[var(--color-brand-border)] px-6">
          <Link href="/admin/dashboard" className="text-xl font-bold gradient-text">
            LgiMorales
          </Link>
          <span className="ml-2 rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-300">
            Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-brand-text-muted)] hover:bg-[var(--color-brand-surface-hover)] hover:text-white transition-all duration-200"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[var(--color-brand-border)] p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm">
              👤
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-white">Admin</p>
              <p className="truncate text-xs text-[var(--color-brand-text-muted)]">
                admin@lgimorales.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-[var(--color-brand-border)] bg-[var(--color-brand-dark)]/80 backdrop-blur-xl px-6">
          <div className="flex flex-1 items-center justify-between">
            <div />
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-sm text-[var(--color-brand-text-muted)] hover:text-white transition-colors"
              >
                Ver site →
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
