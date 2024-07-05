import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        brown: "#292826",
        black: {
          soft: "#2B2A28",
          original: "#000000",
        },
        blue: {
          soft: "#7DB0DE",
          normal: "#1D5C96",
          dark: "#12395D",
        },
        red: "#C94A4A",
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#efefef",
      },
      backgroundImage: {
        // hero: 'url("/bg-hero.svg")',
        // red1: 'url("/red-1.svg")',
        // red2: 'url("/red-2.svg")',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
