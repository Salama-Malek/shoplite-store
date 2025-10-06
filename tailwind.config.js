/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#1e293b',
        accent: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 20px rgba(56, 189, 248, 0.35)',
      },
    },
  },
  plugins: [],
};
