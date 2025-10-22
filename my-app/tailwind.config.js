/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a3a6d",
        "navy-hover": "#2f5a9d",
      },
    },
  },
  plugins: [],
};
