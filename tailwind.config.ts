import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#02030A",
        surface: "#0A0F1A",
        foreground: "#E7FFF6",
        muted: "#90A7A2",
        border: "#17322B",
        emerald: {
          DEFAULT: "#10B981",
          dark: "#0A8A63",
          glow: "#34D399"
        }
      },
      boxShadow: {
        emerald: "0 0 0 1px rgba(16,185,129,0.35), 0 12px 32px rgba(16,185,129,0.22)"
      }
    }
  },
  plugins: []
};

export default config;
