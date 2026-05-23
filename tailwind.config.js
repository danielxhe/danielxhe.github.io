
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fffbf5',
          100: '#fff3e0',
          200: '#ffe0b2',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fff7ed',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
