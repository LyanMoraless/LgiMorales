import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a LgiMorales: produção audiovisual e estratégia digital para empreendedores que querem ser referência.",
};

export default function SobrePage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Sobre Nós
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Quem é a <span className="gradient-text">LgiMorales</span>
          </h1>
        </div>

        <div className="mt-12 space-y-8">
          {/* Photo placeholder */}
          <div className="mx-auto h-64 w-full max-w-2xl rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-[var(--color-brand-border)] flex items-center justify-center">
            <span className="text-6xl opacity-30">📷</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-brand-text-muted)]">
            <p>
              A <strong className="text-white">LgiMorales</strong> nasceu da paixão por contar histórias através de imagens e estratégias que transformam negócios. Somos uma produtora audiovisual especializada em <strong className="text-white">posicionamento digital para empreendedores e profissionais liberais</strong>.
            </p>
            <p>
              Acreditamos que cada marca tem uma história única para contar — e nosso trabalho é garantir que essa história chegue às pessoas certas, da forma certa. Da estratégia à produção, da identidade visual à gestão de redes sociais, cuidamos de tudo para que você possa focar no que faz de melhor.
            </p>
            <p>
              Nosso diferencial? <strong className="text-white">Entendemos o seu negócio antes de ligar qualquer câmera.</strong> Cada projeto começa com estratégia, entendendo seus objetivos, seu público e o que faz você ser diferente.
            </p>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Estratégia Primeiro",
                text: "Cada projeto começa com planejamento e entendimento profundo do seu negócio.",
              },
              {
                icon: "✨",
                title: "Qualidade Premium",
                text: "Equipamentos profissionais e edição impecável em cada entrega.",
              },
              {
                icon: "🤝",
                title: "Parceria Real",
                text: "Não somos apenas fornecedores — somos parceiros do seu crescimento.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center"
              >
                <span className="text-3xl">{value.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-brand-text-muted)]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
