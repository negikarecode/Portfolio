/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          ruled: 'rgba(24, 24, 27, 0.04)',
        },
        ink: {
          950: '#111113',
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
          600: '#52525B',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#E4E4E7',
          100: '#F4F4F5',
        },
        brand: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          yellow: '#FEF08A',
          'yellow-border': '#FACC15',
          mint: '#BBF7D0',
          'mint-border': '#4ADE80',
          pink: '#FECDD3',
          'pink-border': '#F472B6',
          sky: '#BAE6FD',
          'sky-border': '#38BDF8',
          lavender: '#E9D5FF',
          'lavender-border': '#C084FC',
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', '"Silkscreen"', 'monospace'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal': '3px 3px 0px 0px rgba(17, 17, 19, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(17, 17, 19, 1)',
        'brutal-lg': '5px 5px 0px 0px rgba(17, 17, 19, 1)',
        'polaroid': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'lined-paper': 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(24, 24, 27, 0.04) 31px, rgba(24, 24, 27, 0.04) 32px)',
      },
    },
  },
  plugins: [],
}
