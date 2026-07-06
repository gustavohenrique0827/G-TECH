import SectionTitle from "./ui/SectionTitle";

const posts = [
  {
    title: "Como a automação reduz o tempo do ciclo comercial",
    summary: "Use bots e workflows inteligentes para diminuir o ciclo de vendas e aumentar o volume de propostas qualificadas.",
  },
  {
    title: "TI terceirizada: mais resultado com menos risco",
    summary: "Conheça por que terceirizar TI pode reduzir custos, aumentar governança e liberar sua equipe para focar no negócio.",
  },
  {
    title: "Quando vale a pena usar IA no atendimento",
    summary: "Saiba quais processos de atendimento geram retorno imediato com IA e onde você deve manter o toque humano.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="// blog"
          title="Conteúdo estratégico para quem quer crescer com tecnologia"
          description="Insights, cases e orientações práticaderes que desejam usar TI como vantagem competitiva."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-line bg-bg-elevated p-6">
              <h3 className="text-xl font-semibold text-ink">{post.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
