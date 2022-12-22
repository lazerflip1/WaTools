/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 8px #00000029'
      },
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
