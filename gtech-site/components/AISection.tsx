"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Clock, Users, BarChart3, CheckCircle2 } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import GlowOrb from "./ui/GlowOrb";

const messages = [
  { from: "lead", text: "Oi, vocês fazem orçamento pra automação de atendimento?" },
  { from: "bot", text: "Fazemos! Consigo mostrar 3 planos agora. Sua empresa já usa algum CRM hoje?" },
  { from: "lead", text: "Usamos planilha, na verdade 😅" },
  { from: "bot", text: "Perfeito, isso é bem comum. Vou te conectar com um especialista — prefere hoje às 15h ou 17h?" },
  { from: "lead", text: "15h é ótimo!" },
  { from: "bot", text: "✅ Agendado! Você receberá uma confirmação por email em instantes." },
];

const highlights = [
  {
    icon: Bot,
    title: "Agente SDR 24/7",
    description: "Qualifica leads, responde dúvidas e agenda reuniões sem intervenção humana.",
    color: "#5EEAD4",
  },
  {
    icon: Zap,
    title: "Resposta em segundos",
    description: "Zero tempo de espera. O primeiro contato acontece imediatamente, nunca em horas.",
    color: "#86EFAC",
  },
  {
    icon: Clock,
    title: "Nunca para",
    description: "Enquanto sua equipe descansa, o agente continua qualificando oportunidades.",
    color: "#A78BFA",
  },
  {
    icon: BarChart3,
    title: "Analytics em tempo real",
    description: "Dashboards com métricas de conversão, sentimento e performance do agente.",
    color: "#FDE68A",
  },
];

const pipelineNodes = [
  { label: "Lead entra", sub: "Site, WhatsApp, Instagram", color: "#86EFAC" },
  { label: "IA analisa", sub: "Intenção + qualificação", color: "#5EEAD4" },
  { label: "Responde", sub: "< 3 segundos", color: "#A78BFA" },
  { label: "Agenda", sub: "Reunião qualificada", color: "#FDE68A" },
];

function ChatSimulation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingIndex, setTypingIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;

          const showNext = () => {
            if (i >= messages.length) return;
            setTypingIndex(i);
            const isBot = messages[i].from === "bot";
            setTimeout(() => {
              setVisibleCount(i + 1);
              setTypingIndex(-1);
              i++;
              if (i < messages.length) {
                setTimeout(showNext, isBot ? 600 : 400);
              }
            }, isBot ? 1200 : 400);
          };

          setTimeout(showNext, 600);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-line bg-bg shadow-[0_8px_64px_rgba(0,0,0,0.5)]"
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-line bg-bg-elevated px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/50" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/50" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-green-500/50" aria-hidden="true" />
        <span className="ml-3 flex items-center gap-2 font-mono text-xs text-ink-faint">
          <span className="live-dot" aria-hidden="true" />
          agente-sdr — gtech.chat
        </span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-5 min-h-[320px]">
        {messages.slice(0, visibleCount).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.from === "bot"
                ? "self-start bg-accent/12 text-ink border border-accent/20"
                : "self-end bg-bg-surface text-ink-muted border border-line"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing indicator */}
        {typingIndex >= 0 && messages[typingIndex]?.from === "bot" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 self-start rounded-2xl border border-accent/20 bg-accent/12 px-4 py-3"
          >
            {[0, 0.15, 0.3].map((delay, i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-accent"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center gap-3 rounded-xl border border-line bg-bg-elevated px-4 py-2.5">
          <span className="flex-1 font-mono text-xs text-ink-faint">
            Mensagem para o agente...
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section
      id="ia"
      aria-labelledby="ai-heading"
      className="relative overflow-hidden border-t border-line bg-bg py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-circuit opacity-40" />
      <GlowOrb color="accent" size={600} opacity={0.09} blur={130} className="top-[30%] left-[70%]" />
      <GlowOrb color="purple" size={400} opacity={0.07} blur={100} className="top-[60%] left-[10%]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Inteligência Artificial"
          title={
            <>
              Um vendedor que nunca dorme,
              <br />
              <span className="text-gradient-primary">nunca erra o script</span>
              {" "}e nunca perde um lead
            </>
          }
          description="O Agente SDR da G-TECH conversa com seus visitantes, entende a intenção de compra e entrega reuniões qualificadas direto na agenda do seu time comercial."
        />

        {/* AI Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 mb-16"
        >
          <div className="relative flex flex-col items-center gap-0 sm:flex-row sm:items-stretch sm:justify-center">
            {pipelineNodes.map((node, i) => (
              <div key={node.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="relative flex flex-col items-center rounded-2xl border border-line bg-bg-card px-6 py-5 text-center transition-all duration-400 hover:border-primary/20"
                >
                  {/* Node number */}
                  <span
                    className="mb-2 font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: node.color }}
                  >
                    0{i + 1}
                  </span>

                  {/* Glowing dot */}
                  <div
                    className="mb-3 h-3 w-3 rounded-full"
                    style={{
                      background: node.color,
                      boxShadow: `0 0 12px ${node.color}80`,
                    }}
                    aria-hidden="true"
                  />

                  <p className="font-display text-sm font-semibold text-ink">{node.label}</p>
                  <p className="mt-1 text-xs text-ink-faint">{node.sub}</p>
                </motion.div>

                {/* Connector */}
                {i < pipelineNodes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                    className="hidden w-10 shrink-0 sm:block"
                    style={{ originX: 0 }}
                  >
                    <div className="flex items-center">
                      <div
                        className="h-px flex-1"
                        style={{
                          background: `linear-gradient(90deg, ${pipelineNodes[i].color}60, ${pipelineNodes[i + 1].color}60)`,
                        }}
                      />
                      <div
                        className="h-1.5 w-1.5 rotate-45 border-r border-t border-current"
                        style={{ color: pipelineNodes[i + 1].color }}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main 2-column layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Highlights */}
          <div className="space-y-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex gap-4 rounded-2xl border border-line bg-bg-card p-5 transition-all duration-400 hover:border-primary/15"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: `${item.color}12`,
                    borderColor: `${item.color}25`,
                  }}
                >
                  <item.icon
                    className="h-4.5 w-4.5"
                    style={{ color: item.color }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button href="#contato" size="lg" icon className="mt-2" id="ai-cta">
                Ver o Agente SDR em ação
              </Button>
            </motion.div>
          </div>

          {/* Right: Live chat simulation */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChatSimulation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
