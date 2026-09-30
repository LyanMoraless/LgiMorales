import type { Metadata } from "next";
import { db } from "@/lib/db";
import { getClientTemperature } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Clientes | Admin",
};

// Força a página a ser dinâmica (sempre buscar do banco ao acessar)
export const dynamic = "force-dynamic";

export default async function ClientesPage() {
  // Busca os clientes no banco de dados real, incluindo os eventos para calcular a temperatura
  const clients = await db.client.findMany({
    include: {
      events: {
        orderBy: { eventDate: "desc" },
        take: 1, // Pega apenas o último evento
      },
      _count: {
        select: { events: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Clientes</h1>
          <p className="mt-1 text-[var(--color-brand-text-muted)]">
            Gerencie seus clientes e acompanhe a jornada de cada um.
          </p>
        </div>
        <button className="rounded-lg bg-[var(--color-brand-primary)] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[var(--color-brand-accent)] transition-colors">
          + Novo Cliente
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-purple-500/50 bg-purple-500/10 px-4 py-1.5 text-sm text-white">Todos</button>
        <button className="rounded-full border border-[var(--color-brand-border)] px-4 py-1.5 text-sm text-[var(--color-brand-text-muted)] hover:border-purple-500/30 transition-colors">Mensais</button>
        <button className="rounded-full border border-[var(--color-brand-border)] px-4 py-1.5 text-sm text-[var(--color-brand-text-muted)] hover:border-purple-500/30 transition-colors">Avulsos</button>
      </div>

      {/* Tabela de Clientes Real */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-brand-border)]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Cliente</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Tipo</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Temp.</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Eventos</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-text-muted)]">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {clients.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-[var(--color-brand-text-muted)]">
                    Nenhum cliente cadastrado ainda.
                  </td>
                </tr>
              )}
              {clients.map((client) => {
                const lastEvent = client.events[0]?.eventDate || null;
                const temp = getClientTemperature(lastEvent);
                
                return (
                  <tr key={client.id} className="hover:bg-[var(--color-brand-surface-hover)] transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-white">{client.name}</p>
                        <p className="text-sm text-[var(--color-brand-text-muted)]">{client.company || client.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${client.type === 'MONTHLY' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'bg-green-500/10 text-green-400 border border-green-500/30'}`}>
                        {client.type === 'MONTHLY' ? 'Mensal' : 'Avulso'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-brand-text-muted)]">
                        <span className="text-lg">{temp.emoji}</span>
                        <span>{temp.label}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white">
                      {client._count.events}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-accent)] transition-colors">
                        Ver detalhes
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
