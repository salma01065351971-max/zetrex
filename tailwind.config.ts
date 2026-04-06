import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050807",
        foreground: "#eefcf4",
        card: "#0b1612",
        primary: "#10b981",
        muted: "#8ab9a4",
        border: "#1d3b31"
      },
      boxShadow: {
        glass: "0 20px 80px rgba(16, 185, 129, 0.16)"
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle at top, rgba(16,185,129,0.25), transparent 45%)"
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 25px rgba(16,185,129,0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(16,185,129,0.45)" }
        }
      },
      animation: {
        glow: "glow 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
