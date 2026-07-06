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

function FloatingCard({
  title,
  subtitle,
  icon,
  tone = "primary",
  className = "",
  style,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tone?: "primary" | "accent" | "purple" | "amber";
  className?: string;
  style?: React.CSSProperties;
}) {
  const toneColor =
    tone === "primary"
      ? "#86EFAC"
      : tone === "accent"
        ? "#5EEAD4"
        : tone === "purple"
          ? "#A78BFA"
          : "#FDE68A";

  return (
    <motion.div
      className={
        "absolute glass border-glow card-base px-5 py-4 " + className
      }
      style={style}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div
              className="rounded-xl"
              style={{ background: `${toneColor}12`, borderColor: `${toneColor}33` }}
              aria-hidden="true"
            >
              {icon}
            </div>
            <p className="text-sm font-semibold text-ink">{title}</p>
          </div>
          <p className="mt-1 text-xs text-ink-muted leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="h-2 w-2 rounded-full"
          style={{ background: toneColor, boxShadow: `0 0 0 6px ${toneColor}18` }}
        />
      </div>

      {/* mini telemetry */}
      <div className="mt-3 h-9 w-full overflow-hidden rounded-2xl border border-line bg-bg-elevated/50">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(134,239,172,0) 0%, rgba(134,239,172,0.25) 50%, rgba(134,239,172,0) 100%)",
          }}
          initial={{ x: "-60%" }}
          animate={{ x: "60%" }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const x = (py - 0.5) * 8; // rotateX
    const y = (px - 0.5) * -10; // rotateY
    setTilt({ x, y });
  }

  function onLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div className="relative h-[520px] w-full" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* base */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-bg-elevated/40 border border-line-glow" />

        {/* grid glow */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-grid-fine opacity-60" />
        <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-[360px] w-[360px] rounded-full bg-gradient-to-r from-purple/20 to-accent/10 blur-3xl" />

        {/* overlapping cards depth */}
        <FloatingCard
          tone="primary"
          title="Active Projects"
          subtitle="Pipeline em execução • SLA controlado"
          icon={<div className="flex h-10 w-10 items-center justify-center text-primary" aria-hidden="true"><Zap className="h-5 w-5" /></div>}
          className="left-4 top-10 w-[240px]"
          style={{ background: "rgba(12,18,37,0.55)" }}
        />

        <FloatingCard
          tone="accent"
          title="AI Agent Running"
          subtitle="Tradução, automação e orquestração em tempo real"
          icon={<div className="flex h-10 w-10 items-center justify-center text-accent" aria-hidden="true"><Shield className="h-5 w-5" /></div>}
          className="right-6 top-24 w-[260px]"
          style={{ background: "rgba(12,18,37,0.50)" }}
        />

        <FloatingCard
          tone="purple"
          title="API Integrations"
          subtitle="Conectores + webhooks + monitoramento de eventos"
          icon={<div className="flex h-10 w-10 items-center justify-center text-purple" aria-hidden="true"><Clock className="h-5 w-5" /></div>}
          className="left-6 top-[240px] w-[260px]"
          style={{ background: "rgba(12,18,37,0.48)" }}
        />

        <FloatingCard
          tone="amber"
          title="Live Analytics"
          subtitle="Sinais operacionais • previsões • auditoria"
          icon={<div className="flex h-10 w-10 items-center justify-center text-amber" aria-hidden="true"><TrendingUp className="h-5 w-5" /></div>}
          className="right-10 top-[300px] w-[250px]"
          style={{ background: "rgba(12,18,37,0.44)" }}
        />

        {/* central glass frame */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-line-glow/70"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: "linear-gradient(135deg, rgba(134,239,172,0.08), rgba(94,234,212,0.04), rgba(167,139,250,0.03))" }}
        >
          {/* moving nodes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-primary"
              animate={{ y: [0, 22, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[22%] top-[18%] h-3 w-3 rounded-full bg-accent"
              animate={{ x: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-[26%] bottom-[20%] h-3 w-3 rounded-full bg-purple"
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[18%] bottom-[26%] h-3 w-3 rounded-full bg-amber"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
            />

            {/* connecting lines */}
            <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="rgba(134,239,172,0.65)" />
                  <stop offset="1" stopColor="rgba(94,234,212,0.2)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M22 25 C 35 40, 55 20, 72 30"
                stroke="url(#g)"
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.path
                d="M28 75 C 40 60, 60 85, 78 70"
                stroke="rgba(167,139,250,0.35)"
                strokeWidth="0.7"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
              />
            </svg>
          </div>
        </motion.div>

        {/* bottom strip */}
        <div className="absolute bottom-6 left-10 right-10 rounded-3xl border border-line bg-bg-elevated/40 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-xs text-ink-faint">orquestrador online</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-ink-muted">Latency</p>
              <p className="font-display text-lg font-semibold text-primary">28ms</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Seção principal"
      className="relative flex min-h-[85vh] items-stretch overflow-hidden bg-bg pt-16"
    >
      {/* ── Layered Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-circuit opacity-80" />
        <div className="absolute inset-0 bg-hero-mesh opacity-100" />
        <div className="absolute inset-0 bg-radial-primary" />
        <div className="absolute inset-0 bg-radial-accent" />

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

        <div className="scan-lines absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-6 pt-6"
      >
<div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-20">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-bg-elevated/80 px-5 py-2 backdrop-blur-sm">
              <span className="live-dot" aria-hidden="true" />
              <span className="font-mono text-xs text-ink-muted">
                AI Powered Software House
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
            >
              Transformamos
              <span className="text-gradient-primary"> operações</span> com IA,
              automação e BPO tecnológico.
            </motion.h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Entrega com governança: integrações, automações e expertise técnico
              sênior — para reduzir tempo, risco e custo de construir um time
              interno.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contato" size="xl" icon pulse id="hero-cta-primary">
                Falar com Especialista
              </Button>
              <Button href="#solucoes" variant="outline" size="xl" id="hero-cta-secondary">
                Ver Soluções
              </Button>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {floatingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated/50 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-2">
                    <stat.icon
                      className="h-4 w-4"
                      style={{ color: stat.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-display text-base font-semibold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-ink-faint">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { label: "IA & ML", tone: "#A78BFA" },
                { label: "Automação", tone: "#5EEAD4" },
                { label: "Integrações", tone: "#86EFAC" },
                { label: "Segurança", tone: "#FDE68A" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="rounded-full border border-line bg-bg-elevated/40 px-3 py-1 text-xs text-ink-muted backdrop-blur-sm"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: b.tone, boxShadow: `0 0 0 6px ${b.tone}12` }}
                    aria-hidden="true"
                  />
                  {b.label}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-ink-muted">
              {[
                { k: "+120", v: "projetos entregues" },
                { k: "99.9%", v: "uptime" },
                { k: "24/7", v: "suporte" },
                { k: "3.4×", v: "ROI médio" },
              ].map((s) => (
                <div key={s.v} className="min-w-[140px]">
                  <p className="font-display text-lg font-semibold text-ink">{s.k}</p>
                  <p className="text-xs text-ink-faint">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #05070C, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}


