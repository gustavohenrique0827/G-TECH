import type { Config } from "tailwindcss";

// Sistema de tokens da GTech Technology
// Paleta: fundo azul-quase-preto, verde claro como cor primária,
// verde suave como acento de "sinal ativo" para reforçar o posicionamento moderno.
const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05070C",
          elevated: "#0B0F1A",
          surface: "#101625",
        },
        primary: {
          DEFAULT: "#86EFAC",
          dark: "#22C55E",
          light: "#DCFCE7",
        },
        accent: {
          DEFAULT: "#BBF7D0",
          soft: "#ECFCCB",
        },
        ink: {
          DEFAULT: "#F5F7FA", // texto principal
          muted: "#8B95A7", // texto secundário
          faint: "#565F72", // texto terciário / labels
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(134,239,172,0.14), transparent 55%)",
        "radial-green":
          "radial-gradient(circle at 20% 10%, rgba(134,239,172,0.22), transparent 40%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(34,211,238,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(34,211,238,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34,211,238,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
