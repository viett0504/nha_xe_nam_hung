/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2647',
          dark: '#051729',
          light: '#144272',
        },
        accent: {
          red: '#E63946',
          orange: '#F77F00',
        },
        maroon: {
          DEFAULT: '#6B051A',
          dark: '#520312',
          light: '#851c2f',
        },
        gold: {
          DEFAULT: '#B89047',
          light: '#E6D3B6',
          bg: '#F9F6F0',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
