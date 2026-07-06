"use client";

import { motion } from "framer-motion";
import {
  Code2, Headset, Boxes, BrainCircuit, Compass,
  ArrowRight, Sparkles,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Agentes SDR, automações inteligentes e workflows de IA que qualificam leads, respondem clientes e eliminam trabalho manual repetitivo — 24 horas por dia.",
    tag: "IA",
    tagColor: "accent" as const,
    accentColor: "#5EEAD4",
    featured: true,
    gridSpan: "lg:col-span-2 lg:row-span-1",
    link: "#ia",
  },
  {
    icon: Code2,
    title: "Software House",
    description:
      "Sistemas sob demanda, construídos sob medida para resolver o gargalo real do seu negócio — não um pacote genérico.",
    tag: "Dev",
    tagColor: "primary" as const,
    accentColor: "#86EFAC",
    featured: false,
    gridSpan: "lg:col-span-1",
    link: "#contato",
  },
  {
    icon: Headset,
    title: "BPO Tecnológico",
    description:
      "Gestão completa de TI terceirizada. Sua empresa ganha um time técnico sênior sem o custo de montar um departamento interno.",
    tag: "BPO",
    tagColor: "purple" as const,
    accentColor: "#A78BFA",
    featured: false,
    gridSpan: "lg:col-span-1",
    link: "#contato",
  },
  {
    icon: Boxes,
    title: "Produtos SaaS",
    description:
      "Sistemas próprios da G-TECH, prontos para uso, que aceleram operações comuns a PMEs de diferentes setores.",
    tag: "SaaS",
    tagColor: "amber" as const,
    accentColor: "#FDE68A",
    featured: false,
    gridSpan: "lg:col-span-1",
    link: "#contato",
  },
  {
    icon: Compass,
    title: "Consultoria",
    description:
      "Diagnóstico e plano de transformação digital com prioridades claras — o que automatizar primeiro e por quê.",
    tag: "Strategy",
    tagColor: "primary" as const,
    accentColor: "#86EFAC",
    featured: false,
    gridSpan: "lg:col-span-1",
    link: "#contato",
  },
];

function ServiceCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { icon: Icon, title, description, tag, tagColor, accentColor, featured, gridSpan, link } = pillar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={gridSpan}
    >
      <a
        href={link}
        className={`
          group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7
          transition-all duration-500
          ${featured
            ? "border-accent/20 bg-bg-card hover:border-accent/35 hover:shadow-glow-accent"
            : "border-line bg-bg-card hover:border-primary/15 hover:shadow-card-hover"
          }
        `}
      >
        {/* Spotlight glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, ${accentColor}18, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Gradient top border for featured */}
        {featured && (
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)` }}
            aria-hidden="true"
          />
        )}

        {/* Top row */}
        <div className="mb-6 flex items-start justify-between">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-400 group-hover:scale-110"
            style={{
              background: `${accentColor}12`,
              borderColor: `${accentColor}25`,
            }}
          >
            <Icon
              className="h-5 w-5"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-2">
            {featured && (
              <span className="flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                Destaque
              </span>
            )}
            <span
              className="font-mono text-[10px] text-ink-faint"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{description}</p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {tag}
          </span>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="solucoes"
      aria-labelledby="services-heading"
className="relative overflow-hidden border-t border-line bg-bg-elevated py-20 lg:py-24"
    >
      {/* Background details */}
      <div className="absolute inset-0 bg-circuit-lg opacity-30" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="05 pilares de atuação"
          title={
            <>
              Um único parceiro para{" "}
              <span className="text-gradient-primary">toda a operação</span>{" "}
              de tecnologia
            </>
          }
          description="Cada pilar resolve uma dor específica de PMEs sem departamento de TI estruturado. Juntos, formam o braço tecnológico completo da sua empresa."
        />

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {pillars.map((pillar, i) => (
            <ServiceCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button href="#contato" size="lg" variant="outline" icon id="services-cta">
            Agendar diagnóstico gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
