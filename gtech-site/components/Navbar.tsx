"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./ui/Button";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "IA & Automação", href: "#ia" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrolled(scrollTop > 24);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-gradient-to-r from-primary via-accent to-primary transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="G-TECH Technology — Página inicial"
          >
            <img
              src="/logo-white.png"
              alt="G-TECH logo"
              className="h-9 w-auto"
              onError={(e) => {
                // Fallback if logo not found
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="font-display text-base font-semibold text-white">
              G-TECH
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden items-center gap-1 md:flex" role="navigation">
            {links.map((link, i) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                    className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive ? "text-primary" : "text-ink-muted hover:text-ink"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-primary/8"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* CTAs desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <Button href="#area-cliente" variant="ghost" size="sm">
              Área do Cliente
            </Button>
            <Button href="#contato" variant="solid" size="sm" icon>
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-primary/30 hover:text-ink md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
            >
              <div className="px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink-muted transition-colors hover:bg-ink-ghost/30 hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                  <Button href="#area-cliente" variant="outline" className="w-full justify-center">
                    Área do Cliente
                  </Button>
                  <Button href="#contato" variant="solid" className="w-full justify-center" icon>
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
