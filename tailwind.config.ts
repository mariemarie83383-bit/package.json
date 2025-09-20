import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-pink": "#FF2DAA",
        "electric-orange": "#FF6A00",
        "vivid-teal": "#00E5D1",
        "cosmic-purple": "#7A3FF3",
        "ink-black": "#0B0B0F",
        "mist-white": "#F6F7FB",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #FF2DAA 0%, #FF6A00 50%, #00E5D1 100%)",
      },
      boxShadow: {
        "neon-glow": "0 0 10px #FF2DAA, 0 0 20px #FF6A00",
      },
    },
    fontFamily: {
      display: ["Sora", "Space Grotesk", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
