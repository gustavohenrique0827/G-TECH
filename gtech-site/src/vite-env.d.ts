/// <reference types="vite/client" />

// Fix TS error: Cannot find module or type declarations for side-effect import of CSS.
// Vite (via vite/client) usually handles this, but some TS setups may still complain.

declare module "*.css" {
  const css: string;
  export default css;
}

