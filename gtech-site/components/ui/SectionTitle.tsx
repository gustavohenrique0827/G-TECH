"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  large?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  large = false,
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-mono mb-4 inline-flex items-center gap-2"
        >
          <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`
          font-display font-semibold leading-[1.1] tracking-tight text-ink text-balance
          ${large ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl md:text-5xl"}
          ${isCenter ? "mx-auto max-w-3xl" : "max-w-2xl"}
        `}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`
            mt-5 text-base leading-relaxed text-ink-muted text-balance
            ${isCenter ? "mx-auto max-w-2xl" : "max-w-xl"}
          `}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
