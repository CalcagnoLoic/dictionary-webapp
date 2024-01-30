/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: "#2E3238",
        electricViolet: "#7D2CF2",
        scorpion: "#575757",
        nobel: "#B3B3B3",
        gallery: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
