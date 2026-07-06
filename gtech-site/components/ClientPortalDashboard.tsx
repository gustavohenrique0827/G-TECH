"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  FileText,
  RefreshCcw,
  ShieldCheck,
  Timer,
} from "lucide-react";
import Button from "./ui/Button";

type Delivery = {
  id: string;
  title: string;
  stage: "Em andamento" | "Em revisão" | "Concluída";
  etaDays: number;
  owner: string;
};

type Ticket = {
  id: string;
  title: string;
  status: "Aberto" | "Em andamento" | "Aguardando aprovação" | "Resolvido";
  slaHoursLeft: number;
  createdAt: string;
  priority: "Baixa" | "Média" | "Alta";
};

export default function ClientPortalDashboard() {
  const [now] = useState(() => new Date());

  const deliveries: Delivery[] = useMemo(
    () => [
      {
        id: "DEL-1042",
        title: "Onboarding automático (fluxo + validações)",
        stage: "Em andamento",
        etaDays: 2,
        owner: "Time IA & Automação",
      },
      {
        id: "DEL-1038",
        title: "Integração CRM → WhatsApp Business",
        stage: "Em revisão",
        etaDays: 1,
        owner: "Engenharia Back-end",
      },
      {
        id: "DEL-1032",
        title: "Portal do cliente: relatórios e histórico",
        stage: "Concluída",
        etaDays: 0,
        owner: "Produto SaaS",
      },
      {
        id: "DEL-1029",
        title: "Analytics do agente (conversão e sentimento)",
        stage: "Em andamento",
        etaDays: 5,
        owner: "Dados & Analytics",
      },
    ],
    []
  );

  const tickets: Ticket[] = useMemo(
    () => [
      {
        id: "CH-2187",
        title: "Ajustar script de qualificação (segmentação por porte)",
        status: "Em andamento",
        slaHoursLeft: 6,
        createdAt: "há 2 dias",
        priority: "Alta",
      },
      {
        id: "CH-2174",
        title: "Correção no fluxo de aprovação do pedido",
        status: "Aguardando aprovação",
        slaHoursLeft: 14,
        createdAt: "há 5 dias",
        priority: "Média",
      },
      {
        id: "CH-2141",
        title: "Melhoria: relatório mensal com filtros por canal",
        status: "Aberto",
        slaHoursLeft: 20,
        createdAt: "há 1 semana",
        priority: "Baixa",
      },
    ],
    []
  );

  const completedCount = deliveries.filter((d) => d.stage === "Concluída").length;
  const inProgressCount = deliveries.filter((d) => d.stage !== "Concluída").length;

  const overallProgress = useMemo(() => {
    const total = deliveries.length;
    const done = deliveries.reduce((acc, d) => acc + (d.stage === "Concluída" ? 1 : 0), 0);
    const pct = total ? Math.round((done / total) * 100) : 0;
    // Mantém visualmente mais realista para não parecer “pouco” quando há itens em revisão/anda.
    return Math.max(pct, Math.round((1 - inProgressCount / Math.max(total, 1)) * 90));
  }, [deliveries, inProgressCount]);

  const nextSteps = useMemo(
    () => [
      {
        icon: RefreshCcw,
        title: "Rodar iteração do agente SDR",
        desc: "Atualizar respostas e aprendizados com base nas reuniões do último ciclo.",
        when: "Próximos 3 dias",
      },
      {
        icon: Calendar,
        title: "Agendar validação de integração",
        desc: "Confirmar mapeamentos CRM → WhatsApp e ajustar rotas de mensagens.",
        when: "Nesta semana",
      },
      {
        icon: ShieldCheck,
        title: "Revisar segurança e permissões",
        desc: "Checagem de acessos, trilhas de auditoria e políticas de retenção.",
        when: "Antes da entrega DEL-1038",
      },
    ],
    []
  );

  const lastReport = useMemo(() => {
    const dd = now.getDate();
    const mm = now.toLocaleString("pt-BR", { month: "short" });
    return `Relatório quinzenal — ${dd} ${mm}`;
  }, [now]);

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
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Painel do Cliente</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Visão geral do projeto, chamados e entregas recentes (dados demonstrativos).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="#contato" variant="outline" size="md">
              Abrir chamado
            </Button>
            <Button href="#" variant="solid" size="md" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>

        {/* Top metrics */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-line bg-bg-elevated p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">Progresso</h3>
              <Clock3 className="h-4 w-4 text-ink-faint" aria-hidden="true" />
            </div>
            <div className="mt-3 flex items-end gap-3">
              <div className="font-display text-4xl font-semibold text-ink">{overallProgress}%</div>
              <div className="text-sm text-ink-muted pb-1">concluído</div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-purple"
                style={{ width: `${overallProgress}%` }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.03 }}
            className="rounded-2xl border border-line bg-bg-elevated p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">Entregas</h3>
              <CheckCircle2 className="h-4 w-4 text-ink-faint" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              {completedCount} concluída{completedCount === 1 ? "" : "s"} • {inProgressCount} em andamento
            </p>
            <p className="mt-2 text-xs text-ink-faint">Última atualização: agora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="rounded-2xl border border-line bg-bg-elevated p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">Chamados</h3>
              <Timer className="h-4 w-4 text-ink-faint" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm text-ink-muted">{tickets.length} abertos/ativos • SLA ativo</p>
            <p className="mt-2 text-xs text-ink-faint">Prioridades distribuídas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.09 }}
            className="rounded-2xl border border-line bg-bg-elevated p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">Relatórios</h3>
              <FileText className="h-4 w-4 text-ink-faint" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm text-ink-muted">{lastReport}</p>
            <p className="mt-2 text-xs text-ink-faint">Ações e métricas do ciclo</p>
          </motion.div>
        </div>

        {/* Deliveries & tickets */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-2xl border border-line bg-bg p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-ink">Entregas recentes</h3>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Solicitar atualização
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-5 space-y-3">
              {deliveries.map((d) => {
                const accent =
                  d.stage === "Concluída"
                    ? "text-primary"
                    : d.stage === "Em revisão"
                      ? "text-accent"
                      : "text-ink";

                return (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl border border-line bg-bg-elevated p-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">{d.id}</p>
                        <p className="mt-1 font-display text-sm font-semibold text-ink">{d.title}</p>
                        <p className="mt-1 text-xs text-ink-faint">Responsável: {d.owner}</p>
                      </div>

                      <div className="sm:text-right">
                        <p className={`text-xs font-medium ${accent}`}>{d.stage}</p>
                        {d.stage !== "Concluída" ? (
                          <p className="mt-1 text-xs text-ink-faint">ETA: ~{d.etaDays} dia(s)</p>
                        ) : (
                          <p className="mt-1 text-xs text-ink-faint">Disponível para validação</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-bg p-6">
            <h3 className="font-semibold text-ink">Chamados abertos</h3>
            <p className="mt-2 text-sm text-ink-muted">SLA e prioridade do ciclo atual.</p>

            <div className="mt-5 space-y-3">
              {tickets.map((t) => {
                const slaLabel = t.slaHoursLeft <= 8 ? "text-primary" : t.slaHoursLeft <= 16 ? "text-accent" : "text-ink-faint";

                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl border border-line bg-bg-elevated p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">{t.id}</p>
                        <p className="mt-1 text-sm font-semibold text-ink">{t.title}</p>
                        <p className="mt-1 text-xs text-ink-faint">Criado: {t.createdAt}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-ink-muted">{t.priority}</p>
                        <p className={`mt-1 text-xs font-medium ${slaLabel}`}>SLA: {t.slaHoursLeft}h</p>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-accent to-purple"
                        style={{ width: `${Math.max(8, Math.min(100, (t.slaHoursLeft / 24) * 100))}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Activity + Next steps */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-bg p-6">
            <h4 className="font-medium text-ink">Atividades recentes</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>• Atualização do processo de onboarding automática — 2 dias atrás</li>
              <li>• Ajuste no fluxo de aprovação do pedido — 4 dias atrás</li>
              <li>• Relatório quinzenal gerado — 6 dias atrás</li>
              <li>• Auditoria de permissões e trilha de auditoria — 9 dias atrás</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-bg p-6">
            <h4 className="font-medium text-ink">Próximos passos</h4>
            <div className="mt-4 space-y-3">
              {nextSteps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  className="rounded-xl border border-line bg-bg-elevated p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-bg">
                      <s.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-ink">{s.title}</p>
                        <p className="text-xs text-ink-faint">{s.when}</p>
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

