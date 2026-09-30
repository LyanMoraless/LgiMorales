import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financeiro | Admin",
};

const installments = [
  {
    id: "1",
    client: "João Silva",
    event: "Gestão de Redes - Set/2026",
    number: "1/1",
    value: "R$ 2.500",
    dueDate: "01/09/2026",
    status: "Pago",
    statusColor: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  {
    id: "2",
    client: "Maria Oliveira",
    event: "Ensaio de Branding",
    number: "1/2",
    value: "R$ 900",
    dueDate: "05/09/2026",
    status: "Pago",
    statusColor: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  {
    id: "3",
    client: "Maria Oliveira",
    event: "Ensaio de Branding",
    number: "2/2",
    value: "R$ 900",
    dueDate: "05/10/2026",
    status: "Pendente",
    statusColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
];

export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Financeiro</h1>
        <p className="mt-1 text-[var(--color-brand-text-muted)]">
          Controle de parcelas e faturamento.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-sm text-[var(--color-brand-text-muted)]">Faturamento do Mês</p>
          <p className="mt-2 text-3xl font-bold text-green-400">R$ 3.400</p>
          <p className="mt-1 text-xs text-[var(--color-brand-text-muted)]">2 parcelas pagas</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm text-[var(--color-brand-text-muted)]">A Receber</p>
          <p className="mt-2 text-3xl font-bold text-yellow-400">R$ 900</p>
          <p className="mt-1 text-xs text-[var(--color-brand-text-muted)]">1 parcela pendente</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm text-[var(--color-brand-text-muted)]">Atrasados</p>
          <p className="mt-2 text-3xl font-bold text-red-400">R$ 0</p>
          <p className="mt-1 text-xs text-[var(--color-brand-text-muted)]">Nenhuma parcela atrasada 🎉</p>
        </div>
      </div>

      {/* Installments table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-brand-border)]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Cliente</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Evento</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Parcela</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Valor</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Vencimento</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {installments.map((inst) => (
                <tr key={inst.id} className="hover:bg-[var(--color-brand-surface-hover)] transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white">{inst.client}</td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">{inst.event}</td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">{inst.number}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">{inst.value}</td>
                  <td className="px-6 py-4 text-sm text-[var(--color-brand-text-muted)]">{inst.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${inst.statusColor}`}>
                      {inst.status}
                    </span>
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
