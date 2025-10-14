/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sankofa: {
          900: "#141414",
          800: "#1e1e1e",
          accent: "#ff9900",
          muted: "#f4f4f4",
        },
      },
    },
  },
  plugins: [],
};
