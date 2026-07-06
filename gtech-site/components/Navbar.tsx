"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import Button from "./ui/Button";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-white.png" alt="GTech logo" className="h-10 w-auto" />
          <span className="font-display text-lg font-semibold text-white">
            GTech
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Button href="#area-cliente" variant="outline" size="md">
            Área do Cliente
          </Button>
          <Button href="#contato" variant="solid" size="md">
            Falar com Especialista
          </Button>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-line bg-bg px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="#area-cliente" variant="outline" className="w-full">
              Área do Cliente
            </Button>
            <Button href="#contato" variant="solid" className="w-full">
              Falar com Especialista
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
