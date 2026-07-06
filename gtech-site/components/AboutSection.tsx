import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

export default function AboutSection() {
  return (
    <section id="sobre" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// sobre a GTech"
          title="Somos o braço de tecnologia que as empresas usam para crescer rápido"
          description="A GTech entrega TI como serviço, com time sênior, automação inteligente e operação pronta para se adaptar a qualquer desafio." 
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-ink-muted">
            <p>
              A nossa missão é substituir a complexidade de montar um departamento de tecnologia por uma operação ágil,
              segura e totalmente alinhada ao resultado do seu negócio.
            </p>
            <p>
              Cada cliente tem um road map personalizado: IA para leads, automação para processos, BPO para operações e
              desenvolvimento sob medida sempre que a estratégia exige.
            </p>
            <p>
              Trabalhamos com empresas que precisam de entrega rápida e governança clara, sem perder a flexibilidade de um
              time especialista.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-line bg-bg-elevated p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Velocidade</p>
              <p className="mt-4 text-2xl font-semibold text-ink">Seu projeto no ar em semanas.</p>
            </div>
            <div className="rounded-3xl border border-line bg-bg-elevated p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Escopo</p>
              <p className="mt-4 text-2xl font-semibold text-ink">Do atendimento ao SaaS, tudo em um único parceiro.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button href="#contato" size="lg" icon>
            Quero um diagnóstico
          </Button>
          <Button href="#solucoes" variant="outline" size="lg">
            Veja as soluções
          </Button>
        </div>
      </div>
    </section>
  );
}
