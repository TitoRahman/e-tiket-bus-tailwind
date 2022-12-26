/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        hero: "url('/src/assets/images/n01.jpg')",
        voc: "url('/src/assets/images/bg-voc.jpg')",
      },
    },
  },
  plugins: [],
};
