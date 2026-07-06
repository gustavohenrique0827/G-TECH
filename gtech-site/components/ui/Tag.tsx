"use client";

import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  color?: "primary" | "accent" | "purple" | "amber" | "default";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

const colorStyles = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  amber: "bg-accent-warm/10 text-accent-warm border-accent-amber/20",
  default: "bg-ink-ghost/50 text-ink-muted border-line",
};

const dotColors = {
  primary: "bg-primary",
  accent: "bg-accent",
  purple: "bg-accent-purple",
  amber: "bg-accent-amber",
  default: "bg-ink-faint",
};

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
};

export default function Tag({
  children,
  color = "primary",
  size = "md",
  dot = false,
  className = "",
}: TagProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full border font-mono uppercase tracking-widest
        ${colorStyles[color]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColors[color]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
