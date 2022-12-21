/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('assets/images/bg-light.jpg')",
        dark: "url('assets/images/bg-dark.jpg')"
      }
    }
  },
  plugins: []
};
