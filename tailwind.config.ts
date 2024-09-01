import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        platinum: "#D8E2DC",
        pink: {
          50: "#FFD3E8",
          100: "#FFE5D9",
          200: "#FFCAD4",
          300: "#F4ACB7"
        },
        nyanza: {
          100: "#F3FFE1",
          200: "#DFFFD6"
        },
        rose: {
          100: "#FFD3E8"
        },
        blue: {
          1: "#030637",
          2: "#03052f"
        },
        cream: {
          100: "#FFF8E8",
          200: "#E1D7C6",
          300: "#F2E8C6",
          400: "#DAC0A3"
        }

      },
      fontFamily: {
        pressStart: ['--font-PressStart2P'],
        roboto: ['--font-Roboto']
      }
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
