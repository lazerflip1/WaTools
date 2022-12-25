/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 8px #00000029'
      },
      colors: {
        'whatsapp-green': '#446C51',
        dark: '#0B141A',
        light: '#efeae2'
      },
      backgroundImage: {
        default: "url('assets/images/bg-default.png')"
      }
    }
  },
  plugins: []
};
