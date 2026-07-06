"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Clock } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

const chatMessages = [
  { from: "lead", text: "Oi, vocês fazem orçamento pra automação de atendimento?" },
  {
    from: "bot",
    text: "Fazemos! Consigo te mostrar 3 planos agora. Sua empresa já usa algum CRM hoje?",
  },
  { from: "lead", text: "Usamos uma planilha, na verdade 😅" },
  {
    from: "bot",
    text: "Perfeito, isso é bem comum. Vou te conectar com um especialista — prefere hoje às 15h ou 17h?",
  },
];

const highlights = [
  {
    icon: Bot,
    title: "Agente SDR 24/7",
    description: "Qualifica leads, responde dúvidas e agenda reuniões sem intervenção humana.",
  },
  {
    icon: Zap,
    title: "Resposta instantânea",
    description: "Zero tempo de espera. O primeiro contato acontece em segundos, não em horas.",
  },
  {
    icon: Clock,
    title: "Nunca fora do ar",
    description: "Enquanto sua equipe dorme, o agente continua qualificando oportunidades.",
  },
];

export default function AISection() {
  return (
    <section id="ia" className="relative overflow-hidden border-t border-line bg-bg-elevated py-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Coluna de texto */}
        <div>
          <SectionTitle
            eyebrow="// inteligência artificial"
            title="Um vendedor que nunca dorme, nunca erra o script e nunca perde um lead"
            description="O Agente SDR da GTech conversa com seus visitantes, entende a intenção de compra e entrega reuniões qualificadas direto na agenda do seu time comercial."
          />

          <div className="mt-8 space-y-5">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex gap-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button href="#contato" size="lg" icon className="mt-10">
            Ver o Agente SDR em ação
          </Button>
        </div>

        {/* Mock-up de chat */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-md rounded-2xl border border-line bg-bg shadow-2xl shadow-black/40"
        >
          {/* Barra superior do "app" */}
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="ml-2 font-mono text-xs text-ink-faint">
              agente-sdr — gtech.chat
            </span>
          </div>

          <div className="flex flex-col gap-3 p-5">
            {chatMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.from === "bot"
                    ? "self-start bg-primary/15 text-ink"
                    : "self-end bg-bg-surface text-ink-muted"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}

            {/* Indicador "digitando" */}
            <div className="flex items-center gap-1 self-start px-4 py-1 font-mono text-xs text-accent">
              <span>agente digitando</span>
              <span className="animate-blink">...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
