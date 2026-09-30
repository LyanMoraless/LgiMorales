import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos | Admin",
};

const events = [
  {
    id: "1",
    title: "Gestão de Redes Sociais - Setembro/2026",
    client: "João Silva",
    type: "Gestão de Redes Sociais",
    stage: "Produção",
    stageColor: "bg-cyan-500",
    value: "R$ 2.500",
    date: "01/09/2026",
  },
  {
    id: "2",
    title: "Ensaio de Branding Pessoal",
    client: "Maria Oliveira",
    type: "Ensaio Fotográfico",
    stage: "Edição",
    stageColor: "bg-yellow-500",
    value: "R$ 1.800",
    date: "15/09/2026",
  },
  {
    id: "3",
    title: "Criação de Identidade Visual",
    client: "Carlos Mendes",
    type: "Identidade Visual",
    stage: "Proposta",
    stageColor: "bg-purple-500",
    value: "R$ 3.500",
    date: "-",
  },
  {
    id: "4",
    title: "Produção de Conteúdo - Agosto/2026",
    client: "João Silva",
    type: "Produção para Redes Sociais",
    stage: "Entregue",
    stageColor: "bg-green-500",
    value: "R$ 2.000",
    date: "01/08/2026",
  },
];

export default function EventosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Eventos / Projetos</h1>
          <p className="mt-1 text-[var(--color-brand-text-muted)]">
            Todos os eventos e projetos cadastrados.
          </p>
        </div>
        <button className="rounded-lg bg-[var(--color-brand-primary)] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[var(--color-brand-accent)] transition-colors">
          + Novo Evento
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-brand-border)]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Evento</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Cliente</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Tipo</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Valor</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-[var(--color-brand-surface-hover)] transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">{event.title}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">
                    {event.client}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">
                    {event.type}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium text-white ${event.stageColor}`}>
                      {event.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">
                    {event.value}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">
                    {event.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
