"use client";

import { ReactNode, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  index?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  tag?: string;
  tagColor?: "primary" | "accent" | "purple" | "amber";
  accentColor?: string;
  featured?: boolean;
  className?: string;
  tilt?: boolean;
}

const tagColors: Record<string, string> = {
  primary: "text-primary bg-primary/10 border-primary/20",
  accent: "text-accent bg-accent/10 border-accent/20",
  purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  amber: "text-accent-warm bg-accent-warm/10 border-accent-amber/20",
};

export default function Card({
  index,
  icon: Icon,
  title,
  description,
  children,
  tag,
  tagColor = "primary",
  accentColor = "#86EFAC",
  featured = false,
  className = "",
  tilt = true,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? "transform 0.1s ease" : "transform 0.5s ease-spring",
      }}
      className={`
        relative overflow-hidden rounded-3xl border
        ${featured
          ? "border-primary/20 bg-bg-card shadow-card-hover"
          : "border-line bg-bg-card shadow-card hover:border-primary/15 hover:shadow-card-hover"
        }
        transition-[border-color,box-shadow] duration-400
        group cursor-default
        ${className}
      `}
    >
      {/* Glow spot on hover */}
      {tilt && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, ${accentColor}10, transparent)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Featured gradient top border */}
      {featured && (
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 p-7">
        {/* Top row: index + tag */}
        <div className="mb-5 flex items-center justify-between">
          {index && (
            <span className="font-mono text-xs text-ink-faint">
              {index}
            </span>
          )}
          {tag && (
            <span
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tagColors[tagColor]}`}
            >
              {tag}
            </span>
          )}
        </div>

        {/* Icon */}
        {Icon && (
          <div
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-line transition-all duration-400 group-hover:scale-110"
            style={{
              background: `${accentColor}12`,
              borderColor: `${accentColor}25`,
            }}
          >
            <Icon
              className="h-5 w-5 transition-colors duration-400"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Content */}
        <h3 className="font-display text-base font-semibold leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>

        {children && <div className="mt-5">{children}</div>}
      </div>
    </div>
  );
}
