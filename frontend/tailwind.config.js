/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:   { DEFAULT: '#365327', 50: '#F1F4ED', 100: '#DCE3D2', 600: '#365327', 700: '#2A4220' },
        leaf:     { DEFAULT: '#388843', 100: '#D8EDDB', 600: '#388843', 700: '#2C6C35' },
        sage:     { DEFAULT: '#A2B69A' },
        cream:    { DEFAULT: '#F4F1E8' },
        charcoal: { DEFAULT: '#2A2A2A' },
        muted:    { DEFAULT: '#6B7060' },
        rule:     { DEFAULT: '#D8DCC9' },
      },
      fontFamily: {
        display:    ['"Playfair Display"', 'Georgia', 'serif'],
        body:       ['Inter', 'system-ui', 'sans-serif'],
        arDisplay:  ['"El Messiri"', '"Segoe UI"', 'sans-serif'],
        arBody:     ['Tajawal', '"Segoe UI"', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
