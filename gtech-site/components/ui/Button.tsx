"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: boolean;
  pulse?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  id?: string;
}

const variants = {
  solid: `
    bg-primary text-bg font-semibold
    shadow-button-primary hover:shadow-button-primary-hover
    hover:bg-primary-light hover:scale-[1.02]
    active:scale-[0.98]
  `,
  outline: `
    border border-line-bright text-ink bg-transparent
    hover:border-primary/40 hover:text-primary hover:bg-primary/5
    hover:scale-[1.02] active:scale-[0.98]
  `,
  ghost: `
    text-ink-muted bg-transparent
    hover:text-ink hover:bg-ink-ghost/30
    active:scale-[0.98]
  `,
  glow: `
    bg-primary text-bg font-semibold
    shadow-button-primary
    animate-glow-pulse
    hover:shadow-button-primary-hover hover:scale-[1.02]
    active:scale-[0.98]
  `,
};

const sizes = {
  sm: "h-8 px-4 text-xs rounded-xl gap-1.5",
  md: "h-10 px-5 text-sm rounded-xl gap-2",
  lg: "h-12 px-7 text-sm rounded-2xl gap-2.5",
  xl: "h-14 px-9 text-base rounded-2xl gap-3",
};

export default function Button({
  children,
  href,
  variant = "solid",
  size = "md",
  icon = false,
  pulse = false,
  disabled = false,
  type = "button",
  className = "",
  onClick,
  id,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center font-sans
    transition-all duration-300 ease-spring
    cursor-pointer select-none
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
    ${variants[variant]}
    ${sizes[size]}
    ${pulse && variant === "solid" ? "animate-pulse-ring" : ""}
    ${disabled ? "opacity-40 pointer-events-none" : ""}
    ${className}
  `;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${base}`} id={id}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${base}`}
      id={id}
    >
      {content}
    </button>
  );
}
