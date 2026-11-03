/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graph: {
          bg: '#F4EEDB',
          line: 'rgba(88, 106, 76, 0.14)',
        },
        olive: {
          50: '#F5F7F2',
          100: '#E8ECE2',
          200: '#D2DCC7',
          300: '#B0C2A2',
          400: '#869777',
          500: '#6A7B5A',
          600: '#546647',
          700: '#425137',
          800: '#333F2B',
          900: '#222B1E',
        },
        copper: {
          light: '#E88950',
          DEFAULT: '#D97236',
          dark: '#B8551E',
        },
        peach: {
          light: '#F8B68E',
          DEFAULT: '#EFA072',
          dark: '#D98252',
        },
        window: {
          bg: '#FBF8F1',
          border: '#36432C',
          titlebar: '#546647',
          close: '#E56B6F',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(54, 67, 44, 0.95)',
        'retro-sm': '2.5px 2.5px 0px 0px rgba(54, 67, 44, 0.95)',
        'retro-lg': '6px 6px 0px 0px rgba(54, 67, 44, 0.95)',
        'retro-dock': '0 6px 16px -2px rgba(34, 43, 30, 0.25)',
      },
    },
  },
  plugins: [],
}
