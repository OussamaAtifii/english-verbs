import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jellybean: {
          "50": "#eefbfd",
          "100": "#d4f4f9",
          "200": "#aee7f3",
          "300": "#76d4ea",
          "400": "#38b8d8",
          "500": "#1c9cbe",
          "600": "#1a7da0",
          "700": "#1c6582",
          "800": "#1f546b",
          "900": "#1e465b",
          "950": "#0e2d3e",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
