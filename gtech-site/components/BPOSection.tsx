"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

const rows = [
  {
    label: "Custo mensal fixo",
    internal: { ok: false, text: "Salários, encargos e benefícios de time completo" },
    gtech: { ok: true, text: "Um único contrato, escalável conforme a demanda" },
  },
  {
    label: "Tempo de contratação",
    internal: { ok: false, text: "Semanas ou meses para montar o time ideal" },
    gtech: { ok: true, text: "Operação técnica ativa em dias" },
  },
  {
    label: "Cobertura de especialidades",
    internal: { ok: false, text: "Limitada aos profissionais contratados" },
    gtech: { ok: true, text: "Acesso a um time multidisciplinar sênior" },
  },
  {
    label: "Continuidade em férias/saída",
    internal: { ok: false, text: "Risco de operação parada sem substituto" },
    gtech: { ok: true, text: "Operação nunca depende de uma única pessoa" },
  },
  {
    label: "Foco da liderança",
    internal: { ok: false, text: "Gestão de pessoas de TI consome tempo do gestor" },
    gtech: { ok: true, text: "Liderança livre para focar no core do negócio" },
  },
];

export default function BPOSection() {
  return (
    <section className="relative border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          align="center"
          eyebrow="// TI interno vs. BPO GTech"
          title="O mesmo resultado, sem montar um departamento do zero"
          description="Compare o que muda na prática ao trocar uma equipe interna de TI pela operação terceirizada da GTech."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-2xl border border-line"
        >
          {/* Cabeçalho — visível apenas em telas médias/grandes (tabela real) */}
          <div className="hidden grid-cols-3 border-b border-line bg-bg-elevated text-sm font-medium sm:grid">
            <div className="px-5 py-4 text-ink-muted">Critério</div>
            <div className="px-5 py-4 text-ink-muted">TI Interno</div>
            <div className="px-5 py-4 text-accent">BPO GTech</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 gap-3 border-b border-line p-5 text-sm last:border-b-0 sm:grid-cols-3 sm:gap-0 sm:border-b sm:p-0 ${
                i % 2 === 0 ? "bg-bg" : "bg-bg-elevated/40"
              }`}
            >
              <div className="font-medium text-ink sm:px-5 sm:py-5">{row.label}</div>

              <div className="flex items-start gap-2 text-ink-muted sm:px-5 sm:py-5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
                <span>
                  <span className="mr-1 font-mono text-xs text-ink-faint sm:hidden">TI Interno:</span>
                  {row.internal.text}
                </span>
              </div>

              <div className="flex items-start gap-2 text-ink sm:px-5 sm:py-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="mr-1 font-mono text-xs text-accent sm:hidden">BPO GTech:</span>
                  {row.gtech.text}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="#contato" size="lg" icon>
            Simular minha operação de BPO
          </Button>
        </div>
      </div>
    </section>
  );
}
