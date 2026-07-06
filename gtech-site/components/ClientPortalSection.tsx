import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";

export default function ClientPortalSection() {
  return (
    <section id="portal-cliente" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// portal do cliente"
          title="Área do Cliente GTech"
          description="Acesse entregas, chamados e atualizações do seu projeto em um único lugar." 
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-ink-muted">
            <p>
              Esta é a entrada oficial para clientes GTech. Use o login para acompanhar relatórios, entregas e solicitações de suporte.
            </p>
            <p>
              Caso ainda não tenha acesso, solicite direto pelo botão ao lado. Nosso time libera o portal rapidamente para clientes ativos.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-bg-elevated p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Login</p>
                <p className="mt-4 text-lg font-semibold text-ink">E-mail e senha</p>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="seu@empresa.com"
                  className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-primary/60"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button href="mailto:contato@gtech.com.br?subject=Solicitação de acesso ao portal do cliente" size="lg" icon>
                  Entrar
                </Button>
                <Button href="#contato" variant="outline" size="lg">
                  Preciso de acesso
                </Button>
              </div>

              <p className="text-sm leading-relaxed text-ink-muted">
                Ainda sem conta? Entre em contato e garantimos o cadastro rápido do seu time no portal cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
