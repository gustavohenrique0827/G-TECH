"use client";

import { Code2, Headset, Boxes, BrainCircuit, Compass } from "lucide-react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const pillars = [
  {
    icon: Code2,
    title: "Software House",
    description:
      "Sistemas sob demanda, construídos sob medida para resolver o gargalo real do seu negócio — não um pacote genérico.",
  },
  {
    icon: Headset,
    title: "BPO Tecnológico",
    description:
      "Gestão completa de TI terceirizada. Sua empresa ganha um time técnico sênior sem o custo de montar um departamento interno.",
  },
  {
    icon: Boxes,
    title: "Produtos SaaS",
    description:
      "Sistemas próprios da GTech, prontos para uso, que aceleram operações comuns a PMEs de diferentes setores.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Agentes SDR e automações que qualificam leads, respondem clientes e eliminam trabalho manual repetitivo, 24 horas por dia.",
  },
  {
    icon: Compass,
    title: "Consultoria",
    description:
      "Diagnóstico e plano de transformação digital com prioridades claras — o que automatizar primeiro e por quê.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="solucoes" className="relative border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="// 05 pilares de atuação"
          title="Um único parceiro para toda a operação de tecnologia"
          description="Cada pilar resolve uma dor específica de PMEs sem departamento de TI estruturado. Juntos, formam o braço tecnológico completo da sua empresa."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Card
              key={pillar.title}
              index={String(i + 1).padStart(2, "0")}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
