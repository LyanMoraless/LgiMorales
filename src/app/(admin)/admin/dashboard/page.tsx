import type { Metadata } from "next";
import { db } from "@/lib/db";
import { getClientTemperature, formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard | Admin",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // 1. Busca Clientes Ativos
  const totalClients = await db.client.count();

  // 2. Busca Projetos (Eventos) em andamento
  const activeEventsCount = await db.event.count({
    where: {
      stage: {
        notIn: ["DELIVERED", "ARCHIVED"],
      },
    },
  });

  // 3. Faturamento Total (Eventos que não estão cancelados/arquivados)
  const allEvents = await db.event.findMany({
    where: {
      stage: { not: "ARCHIVED" },
    },
    select: { totalValue: true },
  });
  const totalRevenue = allEvents.reduce((acc, event) => acc + event.totalValue, 0);

  // 4. Novos Leads
  const newLeads = await db.contactLead.count({
    where: { status: "NEW" },
  });

  // 5. Projetos Recentes (Últimos 5)
  const recentEvents = await db.event.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { client: true },
  });

  // 6. Temperaturas (Últimos 5 clientes)
  const recentClients = await db.client.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      events: {
        orderBy: { eventDate: "desc" },
        take: 1,
      },
    },
  });

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-[var(--color-brand-text-muted)]">
          Visão geral do seu negócio
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-brand-text-muted)]">Total de Clientes</p>
            <span className="text-2xl">👥</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{totalClients}</p>
        </div>
        
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-brand-text-muted)]">Projetos Ativos</p>
            <span className="text-2xl">🎬</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{activeEventsCount}</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-brand-text-muted)]">Vendas (Pipeline)</p>
            <span className="text-2xl">💰</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{formatCurrency(totalRevenue)}</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-brand-text-muted)]">Novos Leads</p>
            <span className="text-2xl">📩</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{newLeads}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent events */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">Projetos Recentes</h2>
          <div className="mt-4 space-y-3">
            {recentEvents.length === 0 ? (
              <p className="text-sm text-[var(--color-brand-text-muted)]">Nenhum projeto cadastrado.</p>
            ) : (
              recentEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between rounded-lg border border-[var(--color-brand-border)] p-4"
                >
                  <div>
                    <p className="font-medium text-white">{event.title}</p>
                    <p className="text-sm text-[var(--color-brand-text-muted)]">{event.client.name}</p>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 border border-purple-500/30">
                    {event.stage}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Client temperatures */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">Últimos Clientes</h2>
          <p className="mt-1 text-xs text-[var(--color-brand-text-muted)]">Baseado no último evento/projeto</p>
          <div className="mt-4 space-y-3">
            {recentClients.length === 0 ? (
              <p className="text-sm text-[var(--color-brand-text-muted)]">Nenhum cliente cadastrado.</p>
            ) : (
              recentClients.map((client) => {
                const temp = getClientTemperature(client.events[0]?.eventDate || null);
                return (
                  <div
                    key={client.id}
                    className="flex items-center justify-between rounded-lg border border-[var(--color-brand-border)] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{temp.emoji}</span>
                      <div>
                        <p className="font-medium text-white">{client.name}</p>
                        <p className="text-sm text-[var(--color-brand-text-muted)]">
                          {client.company || "Sem empresa"}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-[var(--color-brand-text-muted)]">{temp.label}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
