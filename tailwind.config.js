/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#1A0B2E",
          2: "#11071F",
          3: "#251C31",
        },
        text: {
          1: "#7127BA",
        },
      },
    },
  },
  plugins: [],
};
