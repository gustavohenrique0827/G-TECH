type SectionTitleProps = {
  eyebrow: string; // label estilo "comando de sistema", ex: "// 05 pilares"
  title: string;
  description?: string;
  align?: "left" | "center";
};

/**
 * Título de seção padronizado. O eyebrow usa fonte monoespaçada para reforçar
 * a identidade "de sistema" da marca — cada seção é tratada como um processo monitorado.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
