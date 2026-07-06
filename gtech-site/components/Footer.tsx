import { Cpu, Linkedin, Instagram, Youtube } from "lucide-react";

const columns = [
  {
    title: "Soluções",
    links: [
      { label: "Software House", href: "#solucoes" },
      { label: "BPO Tecnológico", href: "#solucoes" },
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
      { label: "WhatsApp", href: "https://wa.me/551140001234" },
      { label: "Agendar diagnóstico gratuito", href: "#contato" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna da marca */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-white.png" alt="GTech logo" className="h-10 w-auto" />
              <span className="font-display text-lg font-semibold text-white">
                GTech
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              O departamento de tecnologia que sua empresa nunca conseguiu contratar.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} GTech Technology. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-ink-faint">
            CNPJ 00.000.000/0001-00 — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
