/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury dark palette — глубокий графит + латунный акцент
        ink: '#0B0C0E',
        'ink-soft': '#101216',
        surface: '#15181D',
        'surface-2': '#1B1F25',
        line: 'rgba(255,255,255,0.09)',
        bone: '#ECEAE4',
        mist: '#9A9DA3',
        'mist-dim': '#6E7177',
        brass: '#C2A36B',
        'brass-soft': '#D9C49A',
        'brass-deep': '#9C8049',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(194,163,107,0.35)',
        card: '0 24px 60px -30px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'soft-pulse': 'soft-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
