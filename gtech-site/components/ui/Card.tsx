"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardProps = {
  index: string; // ex: "01"
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Card interativo usado no grid de pilares/serviços.
 * O índice numérico faz sentido aqui: os 5 pilares são uma lista real
 * de frentes de atuação, então a numeração comunica "isto é um conjunto fechado".
 */
export default function Card({ index, icon: Icon, title, description }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated p-6 transition-colors duration-300 hover:border-primary/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-mono text-xs text-ink-faint">{index}</span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>

      {/* Linha de destaque inferior — acende no hover, reforça o tema "sinal ativo" */}
      <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  );
}
