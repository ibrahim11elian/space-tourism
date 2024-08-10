/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)", "serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      colors: {
        blue: {
          900: "#0B0D17",
        },
      },
    },
  },
  plugins: [],
};
