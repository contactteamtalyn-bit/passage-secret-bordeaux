import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: { DEFAULT: '#0D0C09', profond: '#0A0907', card: '#1A1710' },
        or: { DEFAULT: '#C4A017', clair: '#D4B017' },
        creme: '#F5F2EC',
        pierre: '#8B7D5E',
        mystere: '#2A2820',
      },
      fontFamily: {
        libre: ['var(--font-libre)', 'Georgia', 'serif'],
        nunito: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s cubic-bezier(0.16,1,0.3,1) both',
        glow: 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
