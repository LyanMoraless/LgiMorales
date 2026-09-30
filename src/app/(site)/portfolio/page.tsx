import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Confira alguns dos nossos trabalhos em estratégia digital, produção audiovisual, branding e mais.",
};

const categories = [
  { key: "all", label: "Todos" },
  { key: "strategy", label: "Estratégia" },
  { key: "social", label: "Redes Sociais" },
  { key: "event", label: "Eventos" },
  { key: "photo", label: "Ensaios" },
  { key: "branding", label: "Branding" },
];

const portfolioItems = [
  {
    title: "Branding — Studio Fitness",
    category: "branding",
    description: "Identidade visual completa para academia boutique",
  },
  {
    title: "Ensaio Corporativo — Tech Solutions",
    category: "photo",
    description: "Ensaio fotográfico da equipe para LinkedIn e site institucional",
  },
  {
    title: "Conteúdo para Redes — Café Artesanal",
    category: "social",
    description: "Produção mensal de fotos e vídeos para Instagram",
  },
  {
    title: "Estratégia Digital — Coach de Carreira",
    category: "strategy",
    description: "Planejamento de conteúdo e posicionamento para profissional liberal",
  },
  {
    title: "Cobertura — Lançamento de Produto",
    category: "event",
    description: "Registro completo do lançamento da nova coleção",
  },
  {
    title: "Gestão de Instagram — Clínica Estética",
    category: "social",
    description: "Crescimento de 0 a 5k seguidores em 3 meses",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Portfólio
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Nossos <span className="gradient-text">trabalhos</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--color-brand-text-muted)]">
            Cada projeto é único. Confira alguns dos resultados que entregamos
            para nossos clientes.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className="rounded-full border border-[var(--color-brand-border)] px-5 py-2 text-sm font-medium text-[var(--color-brand-text-muted)] hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-200 first:bg-purple-500/10 first:border-purple-500/50 first:text-white"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="glass-card group overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className="aspect-video w-full bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 flex items-center justify-center">
                <span className="text-4xl opacity-50">🖼️</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-brand-text-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
