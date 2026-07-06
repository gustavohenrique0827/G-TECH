"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle, CheckCircle2, Server, Shield, Clock4, Users2, Phone, Cpu
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import GlowOrb from "./ui/GlowOrb";

const beforeItems = [
  { icon: AlertTriangle, text: "Suporte lento, chamados sem resposta", color: "#F87171" },
  { icon: AlertTriangle, text: "Infraestrutura desatualizada e insegura", color: "#F87171" },
  { icon: AlertTriangle, text: "Time interno sobrecarregado", color: "#F87171" },
  { icon: AlertTriangle, text: "Sem estratégia de dados ou automação", color: "#F87171" },
  { icon: AlertTriangle, text: "Custo imprevisível e alto", color: "#F87171" },
];

const afterItems = [
  { icon: CheckCircle2, text: "SLA garantido com atendimento em minutos", color: "#86EFAC" },
  { icon: CheckCircle2, text: "Infraestrutura segura, monitorada 24/7", color: "#86EFAC" },
  { icon: CheckCircle2, text: "Time G-TECH dedicado ao seu negócio", color: "#86EFAC" },
  { icon: CheckCircle2, text: "IA + automação integradas ao seu processo", color: "#86EFAC" },
  { icon: CheckCircle2, text: "Mensalidade fixa, previsível e escalável", color: "#86EFAC" },
];

const services = [
  { icon: Server, label: "Infraestrutura Cloud" },
  { icon: Shield, label: "Segurança & Backup" },
  { icon: Clock4, label: "Suporte 24/7" },
  { icon: Users2, label: "Time Dedicado" },
  { icon: Phone, label: "Atendimento Rápido" },
  { icon: Cpu, label: "Automação de TI" },
];

export default function BPOSection() {
  return (
    <section
      id="bpo"
      aria-labelledby="bpo-heading"
      className="relative overflow-hidden border-t border-line bg-bg-elevated py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-circuit opacity-30" />
      <GlowOrb color="primary" size={500} opacity={0.08} blur={120} className="top-[20%] left-[85%]" />
      <GlowOrb color="purple" size={400} opacity={0.06} blur={100} className="top-[70%] left-[5%]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="BPO Tecnológico"
          title={
            <>
              TI terceirizada que{" "}
              <span className="text-gradient-primary">realmente funciona</span>
            </>
          }
          description="Assuma o controle da tecnologia sem o caos de montar um departamento interno. A G-TECH opera como seu time de TI — com mais experiência e muito menos custo."
        />

        {/* Before / After Comparison */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-red-500/15 bg-bg-card p-8"
          >
            <div className="absolute inset-0 bg-red-500/3 pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                  Sem a G-TECH
                </span>
              </div>
              <ul className="space-y-3.5">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-snug text-ink-muted">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary/20 bg-bg-card p-8"
          >
            {/* Top gradient border */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(134,239,172,0.7), transparent)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-primary/3 pointer-events-none" aria-hidden="true" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="live-dot" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  Com a G-TECH
                </span>
              </div>
              <ul className="space-y-3.5">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-snug text-ink-muted">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-sm text-ink-muted transition-all duration-300 hover:border-primary/30 hover:text-primary"
            >
              <svc.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {svc.label}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Button href="#contato" size="lg" icon id="bpo-cta">
            Quero o BPO da G-TECH
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
