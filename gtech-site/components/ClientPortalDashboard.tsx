 "use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, MessageSquareText } from "lucide-react";
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

  const [activeTicketId, setActiveTicketId] = useState<string>(() => "CH-2187");

  const nextSteps = useMemo(() => {
    const urgent = tickets.some((t) => t.slaHoursLeft <= 8);
    const inReview = deliveries.some((d) => d.stage === "Em revisão");

    const base = [
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
        when: inReview ? "Ainda esta semana" : "Nesta semana",
      },
      {
        icon: ShieldCheck,
        title: "Revisar segurança e permissões",
        desc: "Checagem de acessos, trilhas de auditoria e políticas de retenção.",
        when: urgent ? "Antes de encerrar a SLA" : "Antes da entrega DEL-1038",
      },
    ];

    return base;
  }, [deliveries, tickets]);


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
    <section id="portal" className="relative border-t border-line bg-bg py-24 overflow-hidden">
      {/* Decorative fade (must not cover content) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, rgb(5, 7, 12), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

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
            <p className="mt-2 text-sm text-ink-muted">SLA, prioridade e status do ciclo atual.</p>

            <div className="mt-5 space-y-3">
              {tickets.map((t) => {
                const slaLabel =
                  t.slaHoursLeft <= 8
                    ? "text-primary"
                    : t.slaHoursLeft <= 16
                      ? "text-accent"
                      : "text-ink-faint";

                const isActive = t.id === activeTicketId;

                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl border border-line bg-bg-elevated p-4"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveTicketId(t.id)}
                      className="w-full text-left"
                      aria-expanded={isActive}
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

                      {isActive && (
                        <div className="mt-3 rounded-lg border border-line bg-bg p-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                                <MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />
                                Detalhe do chamado
                              </p>
                              <p className="mt-1 text-xs text-ink-faint">Status: {t.status}</p>
                              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                                Próxima ação (demo): alinhar critérios de qualificação e atualizar playbook para reduzir retrabalho e aumentar consistência.
                              </p>
                            </div>
                            <div className="shrink-0 text-right">
                              {t.slaHoursLeft <= 8 ? (
                                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-primary">
                                  Prioritário
                                </span>
                              ) : (
                                <span className="inline-flex items-center rounded-full border border-line bg-bg-elevated px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                                  Em ciclo
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <p className="text-xs text-ink-faint">Última atualização: agora (demo)</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-ink-muted">Ver histórico</span>
                              {isActive ? (
                                <ChevronUp className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
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
              {(() => {
                const deliveryActivities = deliveries
                  .map((d, idx) => ({
                    key: `del-${d.id}`,
                    label: `Entrega ${d.id}: ${d.title}`,
                    daysAgo: 2 + idx * 2,
                  }))
                  .slice(0, 3);

                const ticketActivities = tickets
                  .map((t, idx) => ({
                    key: `tkt-${t.id}`,
                    label: `Chamado ${t.id}: ${t.title}`,
                    daysAgo: 3 + idx * 2,
                  }))
                  .slice(0, 2);

                const combined = [
                  ...deliveryActivities,
                  ...ticketActivities,
                  {
                    key: "report",
                    label: "Relatório quinzenal gerado",
                    daysAgo: 6,
                  },
                ]
                  .sort((a, b) => a.daysAgo - b.daysAgo)
                  .slice(0, 4);

                return combined.map((a) => (
                  <li key={a.key}>
                    • {a.label} — {a.daysAgo} dia(s) atrás
                  </li>
                ));
              })()}
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

