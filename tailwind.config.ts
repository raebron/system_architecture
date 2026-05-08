import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF6EC7',
          cyan: '#00FFFF',
          yellow: '#FFFF00',
          green: '#39FF14',
          purple: '#BF00FF',
          orange: '#FF6600',
        },
        vapor: {
          dark: '#1a0a2e',
          mid: '#2d1b69',
          light: '#7b2d8e',
        },
        jessica: { DEFAULT: '#FF6EC7', light: '#FFB3E6', dark: '#CC3399' },
        jake: { DEFAULT: '#00BFFF', light: '#80DFFF', dark: '#0080AA' },
        zane: { DEFAULT: '#39FF14', light: '#80FF66', dark: '#1A8A0A' },
        preston: { DEFAULT: '#BF00FF', light: '#D966FF', dark: '#7A00A3' },
        moxie: { DEFAULT: '#FFD700', light: '#FFE766', dark: '#B39700' },
      },
      fontFamily: {
        retro: ['var(--font-press-start)', 'monospace'],
        body: ['var(--font-vt323)', 'monospace'],
        mono: ['ui-monospace', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
