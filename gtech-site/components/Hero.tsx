"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const stack = ["IA", "Automação", "BPO", "Software House", "Consultoria"];

/**
 * Hero — a tese da página. O eyebrow simula uma linha de status de sistema
 * ("monitorando 5 processos"), reforçando o posicionamento da GTech como
 * o departamento de tecnologia terceirizado que roda em segundo plano.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-16">
      {/* Fundo: grid técnico + glow radial verde */}
      <div className="absolute inset-0 bg-circuit opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-radial-green opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        {/* Status bar — elemento assinatura da marca */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-bg-elevated px-4 py-1.5 font-mono text-xs text-ink-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          monitorando 5 frentes de tecnologia<span className="animate-blink">_</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          O departamento de tecnologia que a sua empresa{" "}
          <span className="text-gradient">nunca conseguiu contratar</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted"
        >
          Transformamos empresas através de IA, automação e BPO tecnológico.
          Eficiência e lucro levados a sério.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contato" size="lg" icon pulse>
            Falar com Especialista
          </Button>
          <Button href="#solucoes" variant="outline" size="lg">
            Conhecer Soluções
          </Button>
        </motion.div>

        {/* Faixa de tecnologias/frentes — reforça os 5 pilares logo no hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-line pt-8"
        >
          {stack.map((item) => (
            <span
              key={item}
              className="font-mono text-xs uppercase tracking-wider text-ink-faint"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
