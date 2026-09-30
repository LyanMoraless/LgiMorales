import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça todos os serviços da LgiMorales: estratégia digital, produção audiovisual, gestão de redes sociais e mais.",
};

const services = [
  {
    icon: "🎯",
    title: "Estratégia Digital",
    description: "Planejamento de conteúdo e consultoria para posicionar sua marca no digital com autoridade.",
    details: [
      "Análise de posicionamento atual",
      "Definição de persona e tom de voz",
      "Calendário editorial estratégico",
      "Planejamento de conteúdo mensal",
      "Consultoria de crescimento digital",
    ],
  },
  {
    icon: "📸",
    title: "Produção de Conteúdo",
    description: "Fotos e vídeos profissionais pensados para engajar e converter nas redes sociais.",
    details: [
      "Fotos para feed e stories",
      "Reels e vídeos curtos",
      "Conteúdo para TikTok",
      "Vídeos institucionais",
      "Motion graphics",
    ],
  },
  {
    icon: "🎬",
    title: "Edição & Pós-Produção",
    description: "Tratamento profissional do seu material bruto, com qualidade cinematográfica.",
    details: [
      "Color grading profissional",
      "Edição de vídeos",
      "Retoque e tratamento de fotos",
      "Montagem de álbuns digitais",
      "Legendagem e motion",
    ],
  },
  {
    icon: "🎙️",
    title: "Cobertura de Eventos",
    description: "Registro completo em foto e vídeo de eventos presenciais — cada momento que importa.",
    details: [
      "Eventos corporativos",
      "Lançamentos de produto",
      "Workshops e palestras",
      "Confraternizações",
      "Aftermovie profissional",
    ],
  },
  {
    icon: "📷",
    title: "Ensaios Fotográficos",
    description: "Ensaios pessoais, corporativos e de marca para fortalecer seu posicionamento visual.",
    details: [
      "Ensaio de branding pessoal",
      "Fotos corporativas",
      "Ensaio de produto",
      "Fotos para LinkedIn",
      "Book profissional",
    ],
  },
  {
    icon: "🎨",
    title: "Identidade Visual",
    description: "Criação de logo, paleta de cores, tipografia e manual de marca completo.",
    details: [
      "Design de logotipo",
      "Paleta de cores",
      "Tipografia",
      "Manual de marca",
      "Aplicações visuais",
    ],
  },
  {
    icon: "📱",
    title: "Gestão de Redes Sociais",
    description: "Gerenciamento completo das suas redes: planejamento, postagens e análise de resultados.",
    details: [
      "Planejamento mensal",
      "Criação de conteúdo",
      "Agendamento de posts",
      "Análise de métricas",
      "Relatório de resultados",
    ],
  },
];

export default function ServicosPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Nossos Serviços
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Soluções completas para sua{" "}
            <span className="gradient-text">presença digital</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--color-brand-text-muted)]">
            Da estratégia à execução, cada serviço é pensado para posicionar
            você como referência no seu mercado.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card group p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <span className="text-4xl">{service.icon}</span>
              <h2 className="mt-4 text-xl font-bold text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-[var(--color-brand-text-muted)]">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-[var(--color-brand-text-muted)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-[var(--color-brand-text-muted)]">
            Não sabe qual serviço é ideal para você?
          </p>
          <a
            href="https://wa.me/5515996982353?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20qual%20servi%C3%A7o%20%C3%A9%20ideal%20para%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-purple-500/25 hover:bg-[var(--color-brand-accent)] transition-all duration-300"
          >
            Fale comigo e descubra
          </a>
        </div>
      </div>
    </section>
  );
}
