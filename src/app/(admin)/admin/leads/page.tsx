import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads | Admin",
};

const leads = [
  {
    id: "1",
    name: "Pedro Almeida",
    email: "pedro@nutricionista.com",
    phone: "(15) 96666-6666",
    service: "Produção de conteúdo para redes sociais",
    message: "Olá! Sou nutricionista e gostaria de saber sobre produção de conteúdo para Instagram.",
    status: "Novo",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    date: "30/09/2026",
  },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Leads</h1>
        <p className="mt-1 text-[var(--color-brand-text-muted)]">
          Contatos recebidos pelo formulário do site.
        </p>
      </div>

      <div className="space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="glass-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${lead.statusColor}`}>
                    {lead.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-brand-text-muted)]">
                  {lead.email} · {lead.phone}
                </p>
                <p className="mt-1 text-sm text-[var(--color-brand-primary)]">
                  Interesse: {lead.service}
                </p>
              </div>
              <p className="text-xs text-[var(--color-brand-text-muted)]">{lead.date}</p>
            </div>
            <div className="mt-4 rounded-lg bg-[var(--color-brand-dark)] p-4">
              <p className="text-sm text-[var(--color-brand-text-muted)] italic">
                &ldquo;{lead.message}&rdquo;
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors">
                Contatar via WhatsApp
              </button>
              <button className="rounded-lg border border-[var(--color-brand-border)] px-4 py-2 text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white hover:border-purple-500/30 transition-colors">
                Converter em Cliente
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
