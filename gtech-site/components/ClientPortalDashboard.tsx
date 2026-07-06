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

  return null;
}


