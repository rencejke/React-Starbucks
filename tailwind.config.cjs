/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "0 4rem",
    },
    extend: {
      colors: {
        accent: "#00754a",
      },
    },
  },
  plugins: [],
};
