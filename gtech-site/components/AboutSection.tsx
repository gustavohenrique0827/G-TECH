"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import Button from "./ui/Button";
import Tag from "./ui/Tag";

const stats = [
  { value: 120, suffix: "+", label: "Projetos entregues", color: "primary" as const },
  { value: 98, suffix: "%", label: "Clientes satisfeitos", color: "accent" as const },
  { value: 3.4, suffix: "×", label: "ROI médio gerado", decimals: 1, color: "purple" as const },
  { value: 5, suffix: " anos", label: "De mercado e experiência", color: "amber" as const },
];

const pillars = [
  "React", "Node.js", "Python", "OpenAI", "n8n", "AWS", "PostgreSQL",
  "TypeScript", "Docker", "LangChain", "Supabase", "Vercel",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-line bg-bg py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-50" />
      <div className="pointer-events-none absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ── Top: Manifesto layout ── */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          {/* Left: Large statement */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Tag color="primary" dot className="mb-6">
              Sobre a G-TECH
            </Tag>

            <h2
              id="about-heading"
              className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl"
            >
              Somos o braço de tecnologia que empresas usam para{" "}
              <span className="text-gradient-primary">crescer rápido</span>
            </h2>

            <div className="mt-8 space-y-4 text-ink-muted">
              <p className="text-base leading-relaxed">
                Nossa missão é substituir a complexidade de montar um departamento de tecnologia por uma operação ágil, segura e totalmente alinhada ao resultado do seu negócio.
              </p>
              <p className="text-base leading-relaxed">
                Cada cliente recebe um roadmap personalizado: IA para leads, automação para processos, BPO para operações e desenvolvimento sob medida sempre que a estratégia exige.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#contato" size="lg" icon id="about-cta-primary">
                Quero um diagnóstico
              </Button>
              <Button href="#solucoes" variant="outline" size="lg" id="about-cta-secondary">
                Ver soluções
              </Button>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-line bg-bg-card p-6 transition-all duration-400 hover:border-primary/20 hover:shadow-card-hover"
              >
                {/* Subtle corner glow */}
                <div
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, currentColor 0%, transparent 70%)` }}
                  aria-hidden="true"
                />

                <div className="font-display text-4xl font-semibold text-ink">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2000}
                  />
                </div>
                <p className="mt-2 text-sm leading-snug text-ink-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Tech Stack Pill Cloud ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border-t border-line pt-12"
        >
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-ink-faint">
            Stack tecnológico utilizado
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {pillars.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="rounded-full border border-line bg-bg-elevated px-4 py-1.5 font-mono text-xs text-ink-muted transition-colors duration-200 hover:border-primary/30 hover:text-primary"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
