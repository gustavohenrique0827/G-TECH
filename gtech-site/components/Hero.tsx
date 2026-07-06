"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import Button from "./ui/Button";
import GlowOrb from "./ui/GlowOrb";

const roles = ["IA", "Automação", "BPO Tecnológico", "Software House", "Consultoria"];

const floatingStats = [
  { icon: Zap, label: "Projetos entregues", value: "120+", color: "#86EFAC", delay: 0 },
  { icon: Shield, label: "Uptime garantido", value: "99.9%", color: "#5EEAD4", delay: 0.3 },
  { icon: Clock, label: "Suporte ativo", value: "24/7", color: "#A78BFA", delay: 0.6 },
  { icon: TrendingUp, label: "ROI médio", value: "3.4×", color: "#FDE68A", delay: 0.9 },
];

function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setIndex((i) => i + 1);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, index, words]);

  return (
    <span className="text-gradient-primary">
      {displayed}
      <span className="ml-0.5 inline-block w-[3px] animate-blink rounded-sm bg-primary align-middle" aria-hidden="true" />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Seção principal"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-16"
    >
      {/* ── Layered Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Fine grid */}
        <div className="absolute inset-0 bg-circuit opacity-80" />

        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-hero-mesh opacity-100" />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-radial-primary" />
        <div className="absolute inset-0 bg-radial-accent" />

        {/* Ambient orbs */}
        <GlowOrb
          color="primary"
          size={700}
          opacity={0.12}
          blur={140}
          animate
          className="top-[20%] left-[50%]"
        />
        <GlowOrb
          color="accent"
          size={500}
          opacity={0.08}
          blur={120}
          className="top-[60%] left-[80%]"
        />
        <GlowOrb
          color="purple"
          size={400}
          opacity={0.06}
          blur={100}
          className="top-[70%] left-[10%]"
        />

        {/* Scan line */}
        <div className="scan-lines absolute inset-0" />
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-primary/15 bg-bg-elevated/80 px-5 py-2 backdrop-blur-sm">
            <span className="live-dot" aria-hidden="true" />
            <span className="font-mono text-xs text-ink-muted">
              monitorando{" "}
              <span className="text-primary">5 frentes de tecnologia</span>
            </span>
            <span className="font-mono text-xs text-ink-faint animate-blink">_</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            O departamento de
            <br />
            tecnologia que sua{" "}
            <br className="hidden sm:block" />
            empresa nunca{" "}
            <br className="block sm:hidden" />
            conseguiu{" "}
            <br className="hidden sm:block" />
            contratar.
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" aria-hidden="true" />
            <span className="font-mono text-base text-ink-faint">
              especialistas em{" "}
            </span>
            <span className="font-display text-base font-semibold min-w-[140px] text-left">
              <TypewriterText words={roles} />
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" aria-hidden="true" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted"
          >
            Transformamos PMEs com IA, automação e BPO tecnológico.
            Seu negócio ganha um time técnico sênior completo — sem o custo de montar um departamento interno.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contato" size="xl" icon pulse id="hero-cta-primary">
              Falar com Especialista
            </Button>
            <Button href="#solucoes" variant="outline" size="xl" id="hero-cta-secondary">
              Explorar Soluções
            </Button>
          </motion.div>
        </div>

        {/* ── Floating Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {floatingStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay + 0.8, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated/60 px-5 py-4 backdrop-blur-sm transition-all duration-400 hover:border-primary/20 hover:bg-bg-elevated"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{ background: `radial-gradient(120px circle at 50% 0%, ${stat.color}12, transparent)` }}
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-3">
                <stat.icon
                  className="h-4 w-4 shrink-0"
                  style={{ color: stat.color }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="font-display text-xl font-semibold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink-faint">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-ink-faint" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #05070C, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
