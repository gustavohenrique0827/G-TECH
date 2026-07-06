"use client";

interface GlowOrbProps {
  size?: number;
  color?: "primary" | "accent" | "purple" | "amber";
  opacity?: number;
  blur?: number;
  className?: string;
  animate?: boolean;
}

const colorMap = {
  primary: "rgba(134,239,172,VAL)",
  accent: "rgba(94,234,212,VAL)",
  purple: "rgba(167,139,250,VAL)",
  amber: "rgba(253,230,138,VAL)",
};

export default function GlowOrb({
  size = 400,
  color = "primary",
  opacity = 0.12,
  blur = 100,
  className = "",
  animate = false,
}: GlowOrbProps) {
  const bg = colorMap[color].replace("VAL", String(opacity));

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${animate ? "animate-breathe" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        filter: `blur(${blur}px)`,
        transform: "translate(-50%, -50%)",
        // Fix: alguns navegadores podem colapsar o gradiente se o elemento estiver "vazio" visualmente.
        // Garantimos também uma opacidade mínima e composição estável.
        opacity: opacity < 0.03 ? 0.03 : opacity,
        willChange: animate ? "transform, opacity" : undefined,
      }}
    />
  );
}
