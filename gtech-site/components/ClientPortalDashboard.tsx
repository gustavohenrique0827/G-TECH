import Button from "./ui/Button";

export default function ClientPortalDashboard() {
  const logout = () => {
    try {
      localStorage.removeItem("gtech_client_logged");
      window.location.hash = "";
      window.location.reload();
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="portal" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Painel do Cliente</h2>
            <p className="mt-2 text-sm text-ink-muted">Visão geral do projeto, chamados e entregas recentes.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button href="#contato" variant="outline" size="md">Abrir chamado</Button>
            <Button href="#" variant="solid" size="md" onClick={logout}>Sair</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-bg-elevated p-6">
            <h3 className="font-semibold text-ink">Status de entregas</h3>
            <p className="mt-3 text-sm text-ink-muted">3 entregas em andamento • 1 próxima entrega em 7 dias</p>
          </div>

          <div className="rounded-2xl border border-line bg-bg-elevated p-6">
            <h3 className="font-semibold text-ink">Chamados abertos</h3>
            <p className="mt-3 text-sm text-ink-muted">2 chamados com SLA em 8h</p>
          </div>

          <div className="rounded-2xl border border-line bg-bg-elevated p-6">
            <h3 className="font-semibold text-ink">Relatórios</h3>
            <p className="mt-3 text-sm text-ink-muted">Último relatório disponível: 10 dias atrás</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-bg p-6">
          <h4 className="font-medium text-ink">Atividades recentes</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li>• Atualização do processo de onboarding automática — 2 dias atrás</li>
            <li>• Ajuste no fluxo de aprovação do pedido — 4 dias atrás</li>
            <li>• Relatório mensal gerado — 10 dias atrás</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
