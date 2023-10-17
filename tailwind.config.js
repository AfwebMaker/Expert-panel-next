/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
        },
        tertiary: {
          900: withOpacity("--color-tertiary-900"),
          800: withOpacity("--color-tertiary-800"),
          700: withOpacity("--color-tertiary-700"),
          600: withOpacity("--color-tertiary-600"),
          500: withOpacity("--color-tertiary-500"),
          400: withOpacity("--color-tertiary-400"),
          300: withOpacity("--color-tertiary-300"),
          200: withOpacity("--color-tertiary-200"),
          100: withOpacity("--color-tertiary-100"),
        },
        cf: {
          500: "#000000",
          400: "#404040",
          300: "#808080",
          200: "#BFBFBF",
          100: "#FFFFFF",
        },
        dark: withOpacity("--background-app-dark-rgb"),
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
        info: withOpacity("--color-info"),

      },
      fontFamily: {
        sans: ["var(--font-iranYekanFont)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
