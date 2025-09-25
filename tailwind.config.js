/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryHover: '#c44700',
        primary: '#e55300',     // Naranja ViBA
        dark: '#1c1c1c',         // Texto principal
        light: '#ffffff',        // Fondo claro
        heroBg: '#f5f5f5',       // Fondo del hero
        sectionBg: '#a9a9a9c8',    // Fondo de otras secciones
      },
      boxShadow: {
        custom: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '420px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1200px',
        '3xl': '1440px',
     },
    },
  },
  plugins: [],
}
