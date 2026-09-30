import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline | Admin",
};

const stages = [
  {
    name: "Lead",
    color: "border-gray-500",
    items: [
      { title: "Pedro Almeida", subtitle: "Nutricionista - Produção de conteúdo", value: "A definir" },
    ],
  },
  {
    name: "Proposta",
    color: "border-purple-500",
    items: [
      { title: "Carlos Mendes", subtitle: "Identidade Visual", value: "R$ 3.500" },
    ],
  },
  {
    name: "Contrato",
    color: "border-blue-500",
    items: [],
  },
  {
    name: "Produção",
    color: "border-cyan-500",
    items: [
      { title: "João Silva", subtitle: "Gestão de Redes - Set/2026", value: "R$ 2.500" },
    ],
  },
  {
    name: "Edição",
    color: "border-yellow-500",
    items: [
      { title: "Maria Oliveira", subtitle: "Ensaio de Branding", value: "R$ 1.800" },
    ],
  },
  {
    name: "Entrega",
    color: "border-orange-500",
    items: [],
  },
  {
    name: "Entregue",
    color: "border-green-500",
    items: [
      { title: "João Silva", subtitle: "Produção - Ago/2026", value: "R$ 2.000" },
    ],
  },
];

export default function PipelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Pipeline</h1>
        <p className="mt-1 text-[var(--color-brand-text-muted)]">
          Acompanhe a jornada dos seus projetos em cada etapa.
        </p>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div
            key={stage.name}
            className={`flex-shrink-0 w-72 rounded-xl border-t-2 ${stage.color} bg-[var(--color-brand-surface)] p-4`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">{stage.name}</h3>
              <span className="rounded-full bg-[var(--color-brand-surface-hover)] px-2 py-0.5 text-xs text-[var(--color-brand-text-muted)]">
                {stage.items.length}
              </span>
            </div>

            <div className="space-y-3">
              {stage.items.map((item) => (
                <div
                  key={item.title + item.subtitle}
                  className="rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-dark)] p-4 hover:border-purple-500/30 transition-colors cursor-pointer"
                >
                  <p className="font-medium text-white text-sm">{item.title}</p>
                  <p className="mt-1 text-xs text-[var(--color-brand-text-muted)]">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[var(--color-brand-primary)]">
                    {item.value}
                  </p>
                </div>
              ))}

              {stage.items.length === 0 && (
                <div className="rounded-lg border border-dashed border-[var(--color-brand-border)] p-4 text-center">
                  <p className="text-xs text-[var(--color-brand-text-muted)]">Nenhum projeto</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
