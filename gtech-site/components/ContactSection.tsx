"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");
  const [urgency, setUrgency] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Contato pelo site - GTech");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nTelefone: ${phone}\nMelhor contato: ${contactMethod}\nUrgência: ${urgency}\nNecessidade: ${need}\n\nMensagem:\n${message}`
    );

    window.location.href = `mailto:contato@gtech.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="border-t border-line bg-bg-elevated py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// fale com a GTech"
          title="Vamos conversar sobre a tecnologia da sua empresa"
          description="Preencha o formulário ou fale direto com nosso time para receber uma análise rápida e sem compromisso."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-ink-muted">
            <div className="rounded-3xl border border-line bg-bg p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Contato direto</p>
              <a href="mailto:contato@gtech.com.br" className="mt-4 block text-lg font-semibold text-ink hover:text-primary">
                contato@gtech.com.br
              </a>
              <a href="tel:+551140001234" className="mt-2 block text-sm leading-relaxed text-ink-muted hover:text-ink">
                Telefone: (11) 4000-1234
              </a>
            </div>
            <div className="rounded-3xl border border-line bg-bg p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Atendimento</p>
              <a
                href="https://wa.me/551140001234"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-lg font-semibold text-ink hover:text-primary"
              >
                WhatsApp
              </a>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Rápido, seguro e com agenda de demonstração em horário comercial.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-bg p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Nome completo
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  />
                </label>

                <label className="block text-sm font-medium text-ink">
                  E-mail
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Telefone
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="tel"
                    placeholder="(11) 9 9999-9999"
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  />
                </label>

                <label className="block text-sm font-medium text-ink">
                  Empresa
                  <input
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    type="text"
                    placeholder="Nome da empresa"
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-ink">
                O que você precisa?
                <select
                  value={need}
                  onChange={(event) => setNeed(event.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                >
                  <option value="">Selecione a solução</option>
                  <option value="Automação de processos">Automação de processos</option>
                  <option value="IA e atendimento">IA e atendimento</option>
                  <option value="Sistema sob medida">Sistema sob medida</option>
                  <option value="BPO Tecnológico">BPO Tecnológico</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-ink">
                Mensagem breve
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Conte em poucas linhas o principal desafio"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Urgência
                  <select
                    value={urgency}
                    onChange={(event) => setUrgency(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  >
                    <option value="">Selecione</option>
                    <option value="Quero começar já">Quero começar já</option>
                    <option value="Nas próximas semanas">Nas próximas semanas</option>
                    <option value="Planejamento a longo prazo">Planejamento a longo prazo</option>
                  </select>
                </label>

                <label className="block text-sm font-medium text-ink">
                  Melhor contato
                  <select
                    value={contactMethod}
                    onChange={(event) => setContactMethod(event.target.value)}
                    required
                    className="mt-2 w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                  >
                    <option value="">Selecione</option>
                    <option value="E-mail">E-mail</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Telefone">Telefone</option>
                  </select>
                </label>
              </div>

              <Button size="lg" icon>
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
