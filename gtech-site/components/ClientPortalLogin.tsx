import { useState } from "react";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";

export default function ClientPortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="area-cliente" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// área do cliente"
          title="Área do Cliente GTech"
          description="Login seguro para clientes acompanharem suas entregas, chamados e atualizações de projeto." 
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5 text-ink-muted">
            <p>
              O portal do cliente GTech reúne informações de projeto, histórico de entregas e suporte em um só lugar.
            </p>
            <p>
              Se você já é cliente, faça login com seu e-mail para acessar o painel. Caso ainda não tenha acesso, solicite pelo botão abaixo.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-bg-elevated p-8">
            <form className="space-y-5">
              <label className="block text-sm font-medium text-ink">
                E-mail do cliente
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="seu@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </label>

              <label className="block text-sm font-medium text-ink">
                Senha
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Senha"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button href="#contato" size="lg" icon>
                  Entrar
                </Button>
                <Button href="#contato" variant="outline" size="lg">
                  Solicitar acesso
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
