/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'whatsapp-green': '#446C51'
      },
      backgroundImage: {
        default: "url('assets/images/bg-light.jpg')",
        dark: "url('assets/images/bg-dark.jpg')"
      }
    }
  },
  plugins: []
};
