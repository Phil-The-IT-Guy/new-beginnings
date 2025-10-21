module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Hybrid palette: neutral base + deep blue and gold accent
        primary: {
          50: '#f5f7fb',
          100: '#e6eefc',
          500: '#0b3d91', // deep blue accent
        },
        accent: {
          500: '#c59a2e' // gold accent
        }
      },
      fontFamily: {
        // Use system stack for fast load; swap to Google Fonts if desired
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      }
    }
  },
  plugins: []
}
