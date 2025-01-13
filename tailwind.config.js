/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      InstrumentSans: ["Instrument Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

