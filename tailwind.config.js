module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        algo1: "#99e4ff",
        algo2: "#C4C6FF",
        algo3: "#8EEDED",
        algo4: "#88CDF0",
        naimur: "#29ADBC",
        primary:"#ff6363",
        secondary: {
          100: "#ee23fe",
          200: "#ee2fff"
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
       },
       zIndex: {
        '-10': '-10',
       },
       backgroundImage: {
        'hero-pattern': "url('/assets/images/banner2')",
        'footer-texture': "url('/img/footer-texture.png')",
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
