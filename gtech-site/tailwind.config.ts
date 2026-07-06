import type { Config } from "tailwindcss";

// G-TECH Technology — Premium Design System v2.0
// Paleta: void black + emerald mint + electric teal + amber accent
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
          elevated: "#080D1A",
          surface: "#0C1225",
          card: "#0A0F1E",
        },
        primary: {
          DEFAULT: "#86EFAC",
          dark: "#22C55E",
          light: "#DCFCE7",
          glow: "rgba(134,239,172,0.15)",
        },
        accent: {
          DEFAULT: "#5EEAD4",
          soft: "#99F6E4",
          warm: "#FDE68A",
          amber: "#F59E0B",
          purple: "#A78BFA",
        },
        ink: {
          DEFAULT: "#F1F5F9",
          muted: "#94A3B8",
          faint: "#475569",
          ghost: "#1E293B",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.06)",
          bright: "rgba(255,255,255,0.12)",
          glow: "rgba(134,239,172,0.2)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "grid-coarse":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-primary":
          "radial-gradient(ellipse at 50% 0%, rgba(134,239,172,0.18) 0%, transparent 60%)",
        "radial-accent":
          "radial-gradient(ellipse at 80% 20%, rgba(94,234,212,0.12) 0%, transparent 50%)",
        "radial-dark":
          "radial-gradient(ellipse at 20% 80%, rgba(167,139,250,0.08) 0%, transparent 50%)",
        "conic-glow":
          "conic-gradient(from 180deg at 50% 50%, #86EFAC22 0deg, #5EEAD422 90deg, #A78BFA22 180deg, #86EFAC22 360deg)",
        "shimmer-line":
          "linear-gradient(90deg, transparent 0%, rgba(134,239,172,0.4) 50%, transparent 100%)",
        "aurora":
          "linear-gradient(135deg, rgba(134,239,172,0.12) 0%, rgba(94,234,212,0.08) 25%, rgba(167,139,250,0.06) 50%, rgba(94,234,212,0.08) 75%, rgba(134,239,172,0.12) 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(134,239,172,0.06) 0%, rgba(94,234,212,0.03) 50%, transparent 100%)",
        "hero-mesh":
          "radial-gradient(at 27% 37%, rgba(94,234,212,0.12) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(134,239,172,0.10) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(167,139,250,0.08) 0px, transparent 50%), radial-gradient(at 10% 29%, rgba(94,234,212,0.06) 0px, transparent 50%)",
      },
      backgroundSize: {
        "grid-fine": "32px 32px",
        "grid-coarse": "80px 80px",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(134,239,172,0.15)",
        "glow-md": "0 0 40px rgba(134,239,172,0.2)",
        "glow-lg": "0 0 80px rgba(134,239,172,0.15)",
        "glow-accent": "0 0 40px rgba(94,234,212,0.2)",
        "card": "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset",
        "card-hover": "0 8px 48px rgba(0,0,0,0.5), 0 0 32px rgba(134,239,172,0.1), 0 1px 0 rgba(255,255,255,0.08) inset",
        "button-primary": "0 0 20px rgba(134,239,172,0.3), 0 4px 16px rgba(0,0,0,0.3)",
        "button-primary-hover": "0 0 32px rgba(134,239,172,0.5), 0 8px 24px rgba(0,0,0,0.4)",
        "orb": "0 0 120px 60px rgba(134,239,172,0.08)",
      },
      animation: {
        "blink": "blink 1.1s step-end infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 9s ease-in-out 1s infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "aurora": "aurora 12s ease-in-out infinite alternate",
        "scan": "scan 4s linear infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "orbit": "orbit 8s linear infinite",
        "orbit-reverse": "orbit 12s linear infinite reverse",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "typing": "typing 3s steps(30) infinite",
        "cursor-blink": "cursor-blink 0.8s step-end infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "draw": "draw 1.5s ease-in-out forwards",
        "reveal": "reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(134,239,172,0.4)" },
          "70%": { boxShadow: "0 0 0 16px rgba(134,239,172,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(134,239,172,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(134,239,172,0.2)" },
          "50%": { boxShadow: "0 0 48px rgba(134,239,172,0.4), 0 0 80px rgba(134,239,172,0.1)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        "cursor-blink": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "90%": { width: "100%" },
          "100%": { width: "0" },
        },
        counter: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth-out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "104": "26rem",
        "128": "32rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
