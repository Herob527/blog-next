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
        aquamarine: {
          DEFAULT: "#23f0c7",
          100: "#04332a",
          200: "#076754",
          300: "#0b9a7e",
          400: "#0ecea8",
          500: "#23f0c7",
          600: "#50f3d2",
          700: "#7bf6dd",
          800: "#a7f9e9",
          900: "#d3fcf4",
        },
        light_coral: {
          DEFAULT: "#ef767a",
          100: "#400709",
          200: "#800f13",
          300: "#c0161c",
          400: "#e7363c",
          500: "#ef767a",
          600: "#f29195",
          700: "#f5adaf",
          800: "#f9c8ca",
          900: "#fce4e4",
        },
        tropical_indigo: {
          DEFAULT: "#7d7abc",
          100: "#161529",
          200: "#2c2a53",
          300: "#423f7c",
          400: "#5753a6",
          500: "#7d7abc",
          600: "#9895ca",
          700: "#b2b0d7",
          800: "#cbcae4",
          900: "#e5e5f2",
        },
        ultra_violet: {
          DEFAULT: "#6457a6",
          100: "#141221",
          200: "#282343",
          300: "#3d3564",
          400: "#514686",
          500: "#6457a6",
          600: "#8479b9",
          700: "#a39bca",
          800: "#c1bcdc",
          900: "#e0deed",
        },
        mustard: {
          DEFAULT: "#ffe347",
          100: "#413700",
          200: "#836f00",
          300: "#c4a600",
          400: "#ffda06",
          500: "#ffe347",
          600: "#ffe96c",
          700: "#ffee91",
          800: "#fff4b6",
          900: "#fff9da",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
