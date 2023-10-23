/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      colors: {
        primary: {
          100: "#ccedff",
          200: "#99daff",
          300: "#66c8ff",
          400: "#33b5ff",
          500: "#00a3ff",
          600: "#0082cc",
          700: "#006299",
          800: "#004166",
          900: "#002133",
        },
        secondaryMain: {
          100: "#fdf4cd",
          200: "#fbe99b",
          300: "#fadd69",
          400: "#f8d237",
          500: "#f6c705",
          600: "#c59f04",
          700: "#947703",
          800: "#625002",
          900: "#312801",
        },
        secondaryAlt: {
          100: "#e5dfff",
          200: "#cac0ff",
          300: "#b0a0ff",
          400: "#9581ff",
          500: "#7b61ff",
          600: "#624ecc",
          700: "#4a3a99",
          800: "#312766",
          900: "#191333",
        },

        accent: {
          100: "#fbdddd",
          200: "#f7bcbc",
          300: "#f39a9a",
          400: "#ef7979",
          500: "#eb5757",
          600: "#bc4646",
          700: "#8d3434",
          800: "#5e2323",
          900: "#2f1111",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
