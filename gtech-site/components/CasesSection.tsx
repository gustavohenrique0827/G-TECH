import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const cases = [
  {
    title: "Automação de vendas B2B",
    description: "Redução de 35% no ciclo comercial com workflows e qualificação automática de leads.",
  },
  {
    title: "Central de atendimento inteligente",
    description: "Atendimento omnichannel e SLA automático com agentes de IA integrados ao WhatsApp e CRM.",
  },
  {
    title: "Plataforma de gestão interna",
    description: "Uma única plataforma para processos, ordens de serviço e indicadores de performance.",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="border-t border-line bg-bg-elevated py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="// cases de sucesso"
          title="Resultados reais para empresas que decidiram acelerar com a GTech"
          description="Estes são exemplos de como nossa operação técnica melhora eficiência, retorno e governança em menos de 90 dias."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div key={item.title} className="rounded-3xl border border-line bg-bg p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Case</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
