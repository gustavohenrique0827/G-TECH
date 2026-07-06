"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import GlowOrb from "./ui/GlowOrb";
import Tag from "./ui/Tag";

type FieldState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  need: string;
  message: string;
  urgency: string;
  contactMethod: string;
};

const proofPoints = [
  "120+ empresas atendidas",
  "Resposta em menos de 24h",
  "Sem compromisso inicial",
  "Diagnóstico gratuito",
];

const inputClass =
  "peer w-full rounded-2xl border border-line bg-bg-elevated px-4 pt-6 pb-2.5 text-sm text-ink placeholder-transparent outline-none ring-0 transition-all duration-200 focus:border-primary/50 focus:ring-0 hover:border-line-bright";

const labelClass =
  "absolute left-4 top-2 origin-top-left scale-75 transform text-[10px] font-mono uppercase tracking-widest text-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-xs peer-placeholder-shown:text-ink-faint peer-focus:top-2 peer-focus:scale-75 peer-focus:text-primary pointer-events-none";

function FloatingInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  id,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  id: string;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete="off"
        className={inputClass}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}

function FloatingSelect({
  label,
  value,
  onChange,
  options,
  required = false,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  id: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`${inputClass} appearance-none cursor-pointer`}
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 top-2 font-mono text-[10px] uppercase tracking-widest text-primary pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}

const initialState: FieldState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  need: "",
  message: "",
  urgency: "",
  contactMethod: "",
};

export default function ContactSection() {
  const [fields, setFields] = useState<FieldState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FieldState) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contato pelo site — G-TECH");
    const body = encodeURIComponent(
      [
        `Nome: ${fields.name}`,
        `Empresa: ${fields.company}`,
        `E-mail: ${fields.email}`,
        `Telefone: ${fields.phone}`,
        `Melhor contato: ${fields.contactMethod}`,
        `Urgência: ${fields.urgency}`,
        `Necessidade: ${fields.need}`,
        `\nMensagem:\n${fields.message}`,
      ].join("\n")
    );

    window.location.href = `mailto:contato@gtech.com.br?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-line bg-bg py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-circuit opacity-50" />
      <GlowOrb color="primary" size={600} opacity={0.08} blur={140} className="top-[30%] left-[50%]" />
      <GlowOrb color="accent" size={400} opacity={0.06} blur={100} className="top-[70%] left-[90%]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Fale com a G-TECH"
          title={
            <>
              Vamos conversar sobre
              <br />
              <span className="text-gradient-primary">a tecnologia da sua empresa</span>
            </>
          }
          description="Preencha o formulário ou fale diretamente com nosso time. Diagnóstico gratuito e sem compromisso."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left: Info + Proof */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Proof points */}
            <div className="rounded-3xl border border-line bg-bg-card p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Por que escolher a G-TECH
              </p>
              <ul className="space-y-3">
                {proofPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-ink-muted"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Direct contacts */}
            <div className="rounded-3xl border border-line bg-bg-card p-6 space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Contato direto
              </p>

              <a
                href="mailto:contato@gtech.com.br"
                className="group flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-bg transition-colors group-hover:border-primary/30 group-hover:bg-primary/8">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                contato@gtech.com.br
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-bg transition-colors group-hover:border-primary/30 group-hover:bg-primary/8">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </div>
                WhatsApp — Resposta rápida
              </a>

              <a
                href="tel:+5511988881234"
                className="group flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-bg transition-colors group-hover:border-primary/30 group-hover:bg-primary/8">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                (11) 98888-1234
              </a>
            </div>

            {/* WhatsApp pulse CTA */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp"
              className="group flex items-center justify-between rounded-3xl border border-primary/20 bg-primary/8 px-6 py-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/12 hover:shadow-glow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="live-dot" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">
                  WhatsApp — Disponível agora
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-line bg-bg-card p-8"
          >
            {/* Top accent */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(134,239,172,0.6), transparent)" }}
              aria-hidden="true"
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Retornaremos em menos de 24 horas úteis.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                className="space-y-4"
                aria-label="Formulário de contato"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput
                    id="contact-name"
                    label="Nome completo"
                    placeholder="Seu nome"
                    value={fields.name}
                    onChange={set("name")}
                    required
                  />
                  <FloatingInput
                    id="contact-email"
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    value={fields.email}
                    onChange={set("email")}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput
                    id="contact-phone"
                    label="Telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={fields.phone}
                    onChange={set("phone")}
                  />
                  <FloatingInput
                    id="contact-company"
                    label="Empresa"
                    placeholder="Nome da empresa"
                    value={fields.company}
                    onChange={set("company")}
                  />
                </div>

                <FloatingSelect
                  id="contact-need"
                  label="O que você precisa?"
                  value={fields.need}
                  onChange={set("need")}
                  required
                  options={[
                    { value: "Automação de processos", label: "Automação de processos" },
                    { value: "IA e atendimento", label: "IA e atendimento" },
                    { value: "Sistema sob medida", label: "Sistema sob medida" },
                    { value: "BPO Tecnológico", label: "BPO Tecnológico" },
                    { value: "Consultoria", label: "Consultoria" },
                  ]}
                />

                <div className="relative">
                  <textarea
                    id="contact-message"
                    value={fields.message}
                    onChange={(e) => set("message")(e.target.value)}
                    placeholder=" "
                    rows={4}
                    className="peer w-full rounded-2xl border border-line bg-bg-elevated px-4 pt-6 pb-2.5 text-sm text-ink placeholder-transparent outline-none transition-all duration-200 focus:border-primary/50 resize-none hover:border-line-bright"
                    aria-label="Mensagem"
                  />
                  <label
                    htmlFor="contact-message"
                    className="absolute left-4 top-2 font-mono text-[10px] uppercase tracking-widest text-primary pointer-events-none"
                  >
                    Mensagem breve
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingSelect
                    id="contact-urgency"
                    label="Urgência"
                    value={fields.urgency}
                    onChange={set("urgency")}
                    options={[
                      { value: "Quero começar já", label: "Quero começar já" },
                      { value: "Nas próximas semanas", label: "Nas próximas semanas" },
                      { value: "Planejamento futuro", label: "Planejamento futuro" },
                    ]}
                  />
                  <FloatingSelect
                    id="contact-method"
                    label="Melhor contato"
                    value={fields.contactMethod}
                    onChange={set("contactMethod")}
                    required
                    options={[
                      { value: "E-mail", label: "E-mail" },
                      { value: "WhatsApp", label: "WhatsApp" },
                      { value: "Telefone", label: "Telefone" },
                    ]}
                  />
                </div>

                <Button type="submit" size="lg" icon className="w-full justify-center" id="contact-submit">
                  Enviar mensagem
                </Button>

                <p className="text-center text-[11px] text-ink-faint">
                  Seus dados são protegidos e nunca serão compartilhados.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
