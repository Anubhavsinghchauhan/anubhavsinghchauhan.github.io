import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        panel: "#101E32",
        accent: "#3B82F6",
        cyan: "#67E8F9",
        muted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 0 60px rgba(59, 130, 246, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
