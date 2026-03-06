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
        ocean: {
          deep: "#0a1628",
          mid: "#0f3460",
          light: "#16a3c7",
          surface: "#53d8fb",
        },
        coral: "#ff6b6b",
        sand: "#ffe66d",
        seaweed: "#2ecc71",
        "fish-pink": "#ff9ff3",
      },
      fontFamily: {
        fun: ['"Comic Sans MS"', '"Chalkboard SE"', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
