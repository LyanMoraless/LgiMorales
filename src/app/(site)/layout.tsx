import Link from "next/link";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-brand-border)] bg-[var(--color-brand-dark)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight gradient-text"
          >
            LgiMorales
          </Link>

          {/* Navigation Links (desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/5515996982353?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20LgiMorales%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-5 py-2 text-sm font-semibold text-black hover:bg-[var(--color-brand-accent)] transition-colors duration-200"
          >
            Fale Comigo
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold gradient-text">LgiMorales</h3>
              <p className="mt-2 text-sm text-[var(--color-brand-text-muted)]">
                Produção audiovisual e estratégia digital para quem quer ser
                levado a sério no digital.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Navegação</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-brand-text-muted)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Contato</h4>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-brand-text-muted)]">
                <li>
                  <a
                    href="https://wa.me/5515996982353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: (15) 99698-2353
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/lgimorales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @lgimorales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--color-brand-border)] pt-8 text-center text-xs text-[var(--color-brand-text-muted)]">
            © {new Date().getFullYear()} LgiMorales. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </>
  );
}
