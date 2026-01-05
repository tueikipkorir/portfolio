import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0a0f",
          light: "#12121a",
          card: "#1a1a24",
        },
        accent: {
          cyan: "#00d4ff",
          magenta: "#ff00aa",
          purple: "#7b61ff",
        },
        text: {
          primary: "#f0f0f5",
          secondary: "#8888a0",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "signal-pulse": "signal-pulse 3s ease-out infinite",
        wave: "wave 8s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease forwards",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 0, 170, 0.3)" },
        },
        "signal-pulse": {
          "0%": { opacity: "0.5", transform: "translate(-50%, -50%) scale(0.8)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(1.2)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(-25%) scaleY(1)" },
          "50%": { transform: "translateX(0%) scaleY(3)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
