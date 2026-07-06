"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import Tag from "./ui/Tag";

const cases = [
  {
    industry: "Varejo",
    industryColor: "accent" as const,
    client: "Rede de Moda Nacional",
    challenge: "Atendimento manual sobrecarregado, leads perdidos fora do horário comercial.",
    solution: "Agente SDR com IA + integração com CRM e WhatsApp Business.",
    results: [
      { metric: "312%", label: "de aumento em conversão" },
      { metric: "94%", label: "de satisfação dos clientes" },
      { metric: "8h → 2min", label: "tempo de 1º resposta" },
    ],
    accentColor: "#5EEAD4",
  },
  {
    industry: "Saúde",
    industryColor: "purple" as const,
    client: "Clínica Médica Multiespecialidade",
    challenge: "Agendamentos manuais e prontuários descentralizados causando erros e perdas.",
    solution: "Sistema SaaS sob medida para gestão clínica + automação de confirmação de consultas.",
    results: [
      { metric: "60%", label: "de redução de faltas" },
      { metric: "3×", label: "mais agendamentos por dia" },
      { metric: "0", label: "erros em prontuários" },
    ],
    accentColor: "#A78BFA",
  },
  {
    industry: "Logística",
    industryColor: "amber" as const,
    client: "Transportadora Regional",
    challenge: "Controle de frotas em planilhas, sem visibilidade em tempo real.",
    solution: "Dashboard de rastreamento + automação de alertas e relatórios operacionais.",
    results: [
      { metric: "40%", label: "de redução de custo operacional" },
      { metric: "100%", label: "de visibilidade da frota" },
      { metric: "15h/sem", label: "economizadas em relatórios" },
    ],
    accentColor: "#FDE68A",
  },
  {
    industry: "Educação",
    industryColor: "primary" as const,
    client: "Escola de Idiomas",
    challenge: "Captação de alunos ineficiente e processo de matrícula manual e demorado.",
    solution: "Funil automatizado com IA + portal de matrículas online integrado ao financeiro.",
    results: [
      { metric: "2.4×", label: "de aumento no número de alunos" },
      { metric: "80%", label: "do processo 100% digital" },
      { metric: "24h", label: "para onboarding completo" },
    ],
    accentColor: "#86EFAC",
  },
];

export default function CasesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  };

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(cases.length - 1, activeIndex + 1));

  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="relative overflow-hidden border-t border-line bg-bg py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-circuit opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Cases de Sucesso"
            title={
              <>
                Resultados reais,{" "}
                <span className="text-gradient-primary">empresas reais</span>
              </>
            }
            align="left"
          />

          {/* Nav buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Case anterior"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink-muted transition-all duration-200 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === cases.length - 1}
              aria-label="Próximo case"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink-muted transition-all duration-200 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="ml-2 flex gap-1.5">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para case ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-line-bright"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x-mandatory scrollbar-none pb-4"
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = el.firstElementChild?.clientWidth ?? 1;
            const index = Math.round(el.scrollLeft / (cardWidth + 20));
            setActiveIndex(index);
          }}
        >
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-line bg-bg-card p-8 snap-start sm:w-[420px]"
            >
              {/* Accent top line */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${c.accentColor}70, transparent)` }}
                aria-hidden="true"
              />

              {/* Industry tag */}
              <div className="mb-5 flex items-center justify-between">
                <Tag color={c.industryColor} dot size="sm">
                  {c.industry}
                </Tag>
                <TrendingUp className="h-4 w-4 text-ink-faint" aria-hidden="true" />
              </div>

              {/* Client */}
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {c.client}
              </h3>

              {/* Challenge */}
              <div className="mt-4 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Desafio</p>
                <p className="text-sm leading-relaxed text-ink-muted">{c.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mt-4 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Solução</p>
                <p className="text-sm leading-relaxed text-ink-muted">{c.solution}</p>
              </div>

              {/* Results */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                {c.results.map((r) => (
                  <div key={r.label} className="flex flex-col gap-1">
                    <span
                      className="font-display text-xl font-semibold"
                      style={{ color: c.accentColor }}
                    >
                      {r.metric}
                    </span>
                    <span className="text-[10px] leading-snug text-ink-faint">{r.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Button href="#contato" size="lg" variant="outline" icon id="cases-cta">
            Quero resultados assim
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
