import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type BaseProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  pulse?: boolean; // animação de pulso para CTAs de destaque
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  solid:
    "bg-primary text-white hover:bg-primary-dark shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
  outline:
    "border border-primary/20 text-primary hover:border-primary/50 hover:text-primary bg-transparent",
  ghost: "text-ink-muted hover:text-primary bg-transparent",
};

/**
 * Botão reutilizável da GTech.
 * Uso: <Button variant="solid" size="lg" pulse icon>Falar com Especialista</Button>
 */
export default function Button({
  children,
  variant = "solid",
  size = "md",
  icon = false,
  pulse = false,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${
    pulse ? "animate-pulse-ring" : ""
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
