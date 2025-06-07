// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#db2777',
        neonPinkLight: '#f9a8d4',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        bounceOnce: 'bounce 1s ease-in-out 1',
        glow: 'glow 2s ease-in-out infinite alternate',
        neonText: 'neonText 3s ease-in-out infinite',
        floatUpDown: 'floatUpDown 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #db2777, 0 0 10px #db2777' },
          '100%': { textShadow: '0 0 20px #f9a8d4, 0 0 30px #f9a8d4' },
        },
        neonText: {
          '0%, 100%': { color: '#db2777', textShadow: '0 0 5px #db2777, 0 0 10px #db2777' },
          '50%': { color: '#f9a8d4', textShadow: '0 0 20px #f9a8d4, 0 0 30px #f9a8d4' },
        },
        floatUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
