"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Tag from "./ui/Tag";

const posts = [
  {
    category: "IA",
    categoryColor: "accent" as const,
    readTime: "5 min",
    title: "Como a automação reduz o tempo do ciclo comercial",
    summary:
      "Aprenda como agentes e workflows encurtam etapas do funil, qualificam leads automaticamente e elevam a conversão com dados acionáveis — sem perder governança.",
    accentColor: "#5EEAD4",
  },
  {
    category: "BPO",
    categoryColor: "purple" as const,
    readTime: "7 min",
    title: "TI terceirizada: mais resultado com menos risco",
    summary:
      "Entenda como governança, SLA e equipe dedicada reduzem custos, aumentam previsibilidade e liberam seu time para focar no core do negócio.",
    accentColor: "#A78BFA",
  },
  {
    category: "Estratégia",
    categoryColor: "amber" as const,
    readTime: "4 min",
    title: "Quando vale a pena usar IA no atendimento",
    summary:
      "Veja quais processos geram retorno imediato com IA (e onde o toque humano continua indispensável) para manter experiência consistente em cada etapa.",
    accentColor: "#FDE68A",
  },
  {
    category: "IA",
    categoryColor: "accent" as const,
    readTime: "6 min",
    title: "SDR com agentes: do lead ao agendamento sem fricção",
    summary:
      "Um passo a passo prático de como estruturar perguntas, critérios de qualificação e integrações para agendar reuniões com consistência e menor churn de pipeline.",
    accentColor: "#86EFAC",
  },
  {
    category: "Dados",
    categoryColor: "primary" as const,
    readTime: "5 min",
    title: "Métricas que realmente importam para aumentar ROI",
    summary:
      "Quais números acompanhar no funil, na qualidade do atendimento e na performance dos agentes — e como transformar métricas em rotinas de melhoria contínua.",
    accentColor: "#93C5FD",
  },
  {
    category: "SaaS",
    categoryColor: "amber" as const,
    readTime: "8 min",
    title: "Integrações CRM → WhatsApp: do “disparo” à conversa",
    summary:
      "Como evitar respostas genéricas e construir fluxos que respeitam contexto, histórico e regras de negócio (com automação e segurança).",
    accentColor: "#FBBF24",
  },
  {
    category: "Automação",
    categoryColor: "accent" as const,
    readTime: "6 min",
    title: "Playbooks de automação: o que documentar para escalar",
    summary:
      "Guia rápido do que registrar (gatilhos, regras, exceções e auditoria) para que sua automação cresça sem virar “caixa-preta” para o time.",
    accentColor: "#34D399",
  },
  {
    category: "Segurança",
    categoryColor: "purple" as const,
    readTime: "5 min",
    title: "Trilhas de auditoria e LGPD: automação com segurança por padrão",
    summary:
      "Boas práticas para retenção, logs e tratamento de dados pessoais em fluxos automatizados — reduzindo risco e retrabalho em auditorias.",
    accentColor: "#C4B5FD",
  },
  {
    category: "BPO",
    categoryColor: "amber" as const,
    readTime: "7 min",
    title: "Como estruturar SLA operacional (de verdade) em times híbridos",
    summary:
      "Como definir SLAs por fila/criticidade, medir conformidade e ajustar capacidade ao longo do tempo com foco em resultado.",
    accentColor: "#FBBF24",
  },
  {
    category: "IA",
    categoryColor: "primary" as const,
    readTime: "4 min",
    title: "Prompting pragmático: menos texto, mais precisão",
    summary:
      "Técnicas para melhorar resposta do modelo: contexto mínimo, exemplos, formato de saída e validações para reduzir alucinações.",
    accentColor: "#60A5FA",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative overflow-hidden border-t border-line bg-bg py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-circuit opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Blog & Insights"
          title={
            <>
              Conteúdo estratégico para quem quer{" "}
              <span className="text-gradient-primary">crescer com tecnologia</span>
            </>
          }
          description="Insights e orientações práticas para líderes que querem usar IA, automação e BPO tecnológico com foco em resultado."
        />

        <div className="mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-ink-muted">
            Novos conteúdos toda semana: do diagnóstico à implementação.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              atualizado regularmente
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-line bg-bg-card p-7 transition-all duration-400 hover:border-primary/15 hover:shadow-card-hover"
            >
              {/* Accent top line */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${post.accentColor}70, transparent)`,
                }}
                aria-hidden="true"
              />

              {/* Meta */}
              <div className="mb-5 flex items-center justify-between">
                <Tag color={post.categoryColor} size="sm">
                  {post.category}
                </Tag>
                <div className="flex items-center gap-1.5 text-xs text-ink-faint">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-base font-semibold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {post.summary}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                <BookOpen className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
                <span className="text-xs text-ink-faint transition-colors duration-200 group-hover:text-primary">
                  Ler artigo completo
                </span>
                <ArrowRight
                  className="ml-auto h-3.5 w-3.5 text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

