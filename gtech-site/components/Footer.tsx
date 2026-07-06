"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Github, ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Soluções",
    links: [
      { label: "Software House", href: "#solucoes" },
      { label: "BPO Tecnológico", href: "#bpo" },
      { label: "Produtos SaaS", href: "#solucoes" },
      { label: "Inteligência Artificial", href: "#ia" },
      { label: "Consultoria", href: "#solucoes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Cases de sucesso", href: "#cases" },
      { label: "Blog / Insights", href: "#blog" },
      { label: "Área do Cliente", href: "#area-cliente" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Falar com Especialista", href: "#contato" },
      { label: "WhatsApp", href: "https://wa.me/5511999999999" },
      { label: "contato@gtech.com.br", href: "mailto:contato@gtech.com.br" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

const techMarquee = [
  "React", "Node.js", "Python", "OpenAI", "n8n", "AWS", "PostgreSQL",
  "TypeScript", "Docker", "LangChain", "Supabase", "Vercel", "Redis",
  "Kubernetes", "GraphQL", "FastAPI", "TailwindCSS", "Prisma",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-line bg-bg-elevated"
      aria-label="Rodapé"
    >
      {/* Tech marquee strip */}
      <div className="border-b border-line py-4">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-widest text-ink-faint"
              >
                {tech}
                <span className="ml-8 text-primary/40" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Noise texture */}
        <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo-white.png"
                alt="G-TECH logo"
                className="h-9 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-display text-base font-semibold text-white">
                G-TECH
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              O departamento de tecnologia que sua empresa nunca conseguiu contratar.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-line text-ink-faint transition-all duration-200 hover:border-primary/30 hover:bg-primary/8 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-2">
              <span className="live-dot" aria-hidden="true" />
              <span className="font-mono text-xs text-ink-faint">
                Todos os sistemas operacionais
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/15 bg-primary/5 px-8 py-6 sm:flex-row"
        >
          <div>
            <p className="font-display text-base font-semibold text-ink">
              Pronto para transformar a tecnologia da sua empresa?
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Diagnóstico gratuito, sem compromisso.
            </p>
          </div>
          <a
            href="#contato"
            id="footer-cta"
            className="group flex shrink-0 items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/20"
          >
            Falar com a G-TECH
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © {year} G-TECH Technology. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-ink-faint">
            CNPJ 00.000.000/0001-00 — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
