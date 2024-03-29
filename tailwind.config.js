/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: "#2E3238",
        electricViolet: "#7D2CF2",
        scorpion: "#575757",
        silverChalice: "#A3A3A3",
        gallery: "#EBEBEB",
        mineShaft: "#212121",
        alizarinCrimson: "#DC1E1E",
      },
      fontFamily: {
        serif: ["lora"],
        sans: ["inter"],
        mono: ["inconsolata"],
      },
    },
  },
  plugins: [],
};
