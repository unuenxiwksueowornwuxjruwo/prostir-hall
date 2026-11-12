/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Кольори взяті з оригінального логотипа (купол і контур)
        lime: { DEFAULT: '#CBD13C', light: '#DCE15E', dark: '#A9AE2A' },
        graphite: { DEFAULT: '#51565A', 700: '#2E3236', 800: '#1E2124', 900: '#141618' },
        ink: '#0B0C0D',
      },
      fontFamily: {
        display: ['Unbounded', 'Manrope', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
