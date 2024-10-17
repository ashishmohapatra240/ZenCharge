module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: "#4CAF50",  // Electric Green
        midnight: "#2C3E50", // Midnight Blue
        solar: "#FBC02D",    // Solar Yellow
        slate: "#7F8C8D",    // Slate Gray
        white: "#FFFFFF",    // White
      },
      keyframes: {
        flip: {
          'from': { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ', },
          'to': { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ', }
        }
      }
    },
    plugins: [],
  }

}