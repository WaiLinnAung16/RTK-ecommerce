/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232946",
        secondary: "#fffffe",
        danger: "#eebbc3",
        info: "#b8c1ec",
        accent: "#607AF8",
      },
    },
  },
  plugins: [],
};
