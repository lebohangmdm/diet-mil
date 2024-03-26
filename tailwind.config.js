/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greenish-1": "#00843c",
        "greenish-2": "#28a745",
        "greyish-1": "#696d75",
        "greyish-2": "#637790",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["winter", "dracula"],
  },
};
