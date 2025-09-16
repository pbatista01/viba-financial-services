/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#e55300',     // Naranja ViBA
        dark: '#1c1c1c',         // Texto principal
        light: '#ffffff',        // Fondo claro
        heroBg: '#f5f5f5',       // Fondo del hero
        sectionBg: '#a9a9a9',    // Fondo de otras secciones
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
