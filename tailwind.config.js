/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
