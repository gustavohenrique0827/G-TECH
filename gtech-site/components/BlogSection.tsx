"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Tag from "./ui/Tag";

const posts = [
  {
    category: "IA",
    categoryColor: "accent" as const,
    readTime: "5 min",
    title: "Como a automação reduz o tempo do ciclo comercial",
    summary:
      "Use bots e workflows inteligentes para diminuir o ciclo de vendas e aumentar o volume de propostas qualificadas.",
    accentColor: "#5EEAD4",
  },
  {
    category: "BPO",
    categoryColor: "purple" as const,
    readTime: "7 min",
    title: "TI terceirizada: mais resultado com menos risco",
    summary:
      "Por que terceirizar TI pode reduzir custos, aumentar governança e liberar seu time para focar no negócio.",
    accentColor: "#A78BFA",
  },
  {
    category: "Estratégia",
    categoryColor: "amber" as const,
    readTime: "4 min",
    title: "Quando vale a pena usar IA no atendimento",
    summary:
      "Quais processos de atendimento geram retorno imediato com IA e onde manter o toque humano faz diferença.",
    accentColor: "#FDE68A",
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
          description="Insights, cases e orientações práticas para líderes que usam TI como vantagem competitiva."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-card p-7 transition-all duration-400 hover:border-primary/15 hover:shadow-card-hover cursor-pointer"
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
                <BookOpen
                  className="h-3.5 w-3.5 text-ink-faint"
                  aria-hidden="true"
                />
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
