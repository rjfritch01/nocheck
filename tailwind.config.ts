import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "nc-black": "#141414",
        "nc-white": "#FFFFFF",

        // Accent — electric lime
        // TODO: Replace stand-in display font (Archivo Black) with "Agressive" once font files are licensed and available.
        "accent": "#C3E941",
        "accent-hover": "#D4F055",
        "accent-dark": "#9BBF2E",

        // Backgrounds
        "bg-alt": "#F7F7F5",

        // Text
        "text-secondary": "#5A5A5A",
        "text-muted": "#8A8A8A",
        "text-light-gray": "#C9C9C9",

        // Borders
        "nc-border": "#E5E5E3",
        "border-dark": "#2A2A2A",

        // Cards
        "card-dark": "#1E1E1E",
      },
      fontFamily: {
        // TODO: Replace "Archivo Black" with "Agressive" (licensed custom font) for hero/display use once font files are available.
        display: ["var(--font-archivo-black)", "Impact", "sans-serif"],
        body: ["var(--font-lato)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, rgba(195,233,65,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
