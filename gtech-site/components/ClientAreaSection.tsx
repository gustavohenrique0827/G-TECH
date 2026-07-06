import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";

export default function ClientAreaSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setStatus("error");
      setMessage("Preencha e-mail e senha para continuar.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Digite um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setStatus("error");
      setMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // mark a simple client session and navigate to portal
    try {
      localStorage.setItem("gtech_client_logged", "1");
      window.location.hash = "#portal";
    } catch (e) {
      // ignore storage errors
    }

    setStatus("success");
    setMessage("Acesso concedido localmente. Redirecionando para o portal...");
  };

  return (
    <section id="area-cliente" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// área do cliente"
          title="Portal do cliente GTech"
          description="Acompanhe entregas, chamados e atualizações do seu projeto em uma área exclusiva para clientes."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-ink-muted">
            <p>
              O portal do cliente GTech é o centro de controle do seu projeto. Aqui você acompanha entregas, chamados e a evolução das automações.
            </p>
            <p>
              Um só lugar para visibilidade real, suporte direto e o histórico completo das entregas do seu time.
            </p>

            <div className="grid gap-3 rounded-3xl border border-line bg-bg-elevated p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">O que você encontra aqui</p>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-muted">
                <li>• Status do projeto e roadmap atualizado</li>
                <li>• Chamados abertos e respostas rápidas</li>
                <li>• Documentos, relatórios e métricas do projeto</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-bg-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Login seguro</p>
                <p className="mt-4 text-lg font-semibold text-ink">E-mail e senha</p>
              </div>

              <label className="block text-sm font-medium text-ink">
                E-mail do cliente
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="seu@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </label>

              <label className="block text-sm font-medium text-ink">
                Senha
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Senha"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </label>

              {status !== "idle" && (
                <p className={`text-sm ${status === "error" ? "text-red-400" : "text-emerald-300"}`}>
                  {message}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Button type="submit" size="lg" icon>
                  Entrar
                </Button>
                <Button href="#contato" variant="outline" size="lg">
                  Solicitar acesso
                </Button>
              </div>

              <p className="text-sm leading-relaxed text-ink-muted">
                Caso ainda não tenha conta, solicite acesso e nossa equipe liberará o portal para seu time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
