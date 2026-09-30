import Link from "next/link";

const services = [
  {
    icon: "🎯",
    title: "Estratégia Digital",
    description:
      "Planejamento de conteúdo e consultoria para posicionar sua marca no digital com autoridade.",
  },
  {
    icon: "📸",
    title: "Produção de Conteúdo",
    description:
      "Fotos e vídeos profissionais pensados para engajar e converter nas redes sociais.",
  },
  {
    icon: "🎬",
    title: "Edição & Pós-Produção",
    description:
      "Tratamento profissional do seu material bruto, com qualidade cinematográfica.",
  },
  {
    icon: "🎤",
    title: "Cobertura de Eventos",
    description:
      "Registro completo em foto e vídeo de eventos presenciais — cada momento que importa.",
  },
  {
    icon: "📷",
    title: "Ensaios Fotográficos",
    description:
      "Ensaios pessoais, corporativos e de marca para fortalecer seu posicionamento visual.",
  },
  {
    icon: "🎨",
    title: "Identidade Visual",
    description:
      "Criação de logo, paleta de cores, tipografia e manual de marca completo.",
  },
  {
    icon: "📱",
    title: "Gestão de Redes Sociais",
    description:
      "Gerenciamento completo das suas redes: planejamento, postagens e análise de resultados.",
  },
];

const stats = [
  { value: "50+", label: "Projetos entregues" },
  { value: "30+", label: "Clientes atendidos" },
  { value: "4+", label: "Anos de experiência" },
  { value: "100%", label: "Comprometimento" },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-neutral-950 to-fuchsia-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            Produção Audiovisual & Estratégia Digital
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme sua presença
            <br />
            <span className="gradient-text">no digital</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-brand-text-muted)] sm:text-xl">
            Produção audiovisual profissional e estratégia digital sob medida
            para empreendedores e profissionais que querem{" "}
            <strong className="text-white">ser levados a sério</strong> e
            atrair os clientes certos.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5515996982353?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20LgiMorales%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-purple-500/25 hover:bg-[var(--color-brand-accent)] hover:shadow-fuchsia-500/25 transition-all duration-300"
            >
              Quero transformar minha marca
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] px-8 py-3.5 text-base font-semibold text-white hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300"
            >
              Ver portfólio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-[var(--color-brand-text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--color-brand-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="servicos" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
              Serviços
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tudo que você precisa para{" "}
              <span className="gradient-text">dominar o digital</span>
            </h2>
            <p className="mt-4 text-[var(--color-brand-text-muted)]">
              Da estratégia à execução, cuidamos de toda a sua presença online
              com qualidade profissional.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card group p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-brand-text-muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="glass-card p-10 sm:p-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pronto para{" "}
              <span className="gradient-text">
                transformar sua presença digital
              </span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-brand-text-muted)]">
              Vamos conversar sobre o seu projeto. Sem compromisso, sem
              enrolação — direto ao ponto.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/5515996982353?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20LgiMorales%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-purple-500/25 hover:bg-[var(--color-brand-accent)] transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] px-8 py-3.5 text-base font-semibold text-white hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300"
              >
                Enviar mensagem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
