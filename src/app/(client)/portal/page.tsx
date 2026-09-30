import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Projetos | Portal do Cliente",
};

const projects = [
  {
    id: "1",
    title: "Ensaio de Branding Pessoal",
    type: "Ensaio Fotográfico",
    stage: "Edição",
    stageColor: "bg-yellow-500",
    date: "15/09/2026",
    deliveries: 1,
    description: "Ensaio fotográfico para posicionamento digital: 40 fotos editadas + vídeo de 30s",
  },
];

const deliveries = [
  {
    id: "1",
    title: "Fotos do Ensaio - Prévia",
    type: "Fotos",
    fileCount: 10,
    date: "20/09/2026",
    status: "Disponível",
  },
];

export default function PortalPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Olá, <span className="gradient-text">Maria</span> 👋
        </h1>
        <p className="mt-1 text-[var(--color-brand-text-muted)]">
          Acompanhe seus projetos e acesse seus materiais.
        </p>
      </div>

      {/* Active Projects */}
      <div>
        <h2 className="text-lg font-semibold text-white">Projetos em Andamento</h2>
        <div className="mt-4 grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="glass-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-brand-text-muted)]">
                    {project.description}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium text-white ${project.stageColor}`}
                >
                  {project.stage}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-[var(--color-brand-text-muted)]">
                  <span>Progresso</span>
                  <span>Edição (4 de 7 etapas)</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-[var(--color-brand-border)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]"
                    style={{ width: "57%" }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-brand-text-muted)]">
                <span>📅 {project.date}</span>
                <span>📷 {project.type}</span>
                <span>📦 {project.deliveries} entrega(s)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Deliveries */}
      <div>
        <h2 className="text-lg font-semibold text-white">Entregas Recentes</h2>
        <div className="mt-4 grid gap-4">
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="glass-card flex items-center justify-between p-6"
            >
              <div>
                <h3 className="font-semibold text-white">{delivery.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-brand-text-muted)]">
                  {delivery.type} · {delivery.fileCount} arquivos · {delivery.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs font-medium text-green-400">
                  {delivery.status}
                </span>
                <button className="rounded-lg bg-[var(--color-brand-primary)] px-4 py-2 text-sm font-semibold text-black hover:bg-[var(--color-brand-accent)] transition-colors">
                  Acessar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
