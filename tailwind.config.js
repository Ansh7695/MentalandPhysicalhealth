/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#4B9B94',
          'teal-dark': '#387872',
          'teal-light': '#6CB6AE',
          sage: '#7BA88C',
          'sage-dark': '#5C856C',
          tint: '#EEF5F2',
          'tint-light': '#F4F9F7',
        },
        warm: {
          base: '#FAF8F5',
          card: '#FFFFFF',
          charcoal: '#2E2A26',
          muted: '#666059',
          border: '#E8E3DD',
        },
        coral: {
          accent: '#E86A45',
          hover: '#D55934',
          light: '#FDF1ED',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        display: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(46, 42, 38, 0.06), 0 2px 6px -1px rgba(46, 42, 38, 0.04)',
        'lift': '0 12px 30px -4px rgba(75, 155, 148, 0.12), 0 4px 10px -2px rgba(46, 42, 38, 0.06)',
        'modal': '0 24px 48px -12px rgba(46, 42, 38, 0.25)',
      },
    },
  },
  plugins: [],
}
