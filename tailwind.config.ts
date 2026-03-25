import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4F46E5',
          violet: '#6366F1',
          gold: '#F59E0B'
        }
      },
      boxShadow: {
        glow: '0 12px 45px rgba(79, 70, 229, 0.28)',
        panel: '0 12px 30px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        lattice:
          'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.13) 1px, transparent 0)'
      },
      animation: {
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        floatFast: 'floatFast 5s ease-in-out infinite',
        drift: 'drift 11s linear infinite'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' }
        },
        drift: {
          '0%': { transform: 'translateX(-8px)' },
          '50%': { transform: 'translateX(8px)' },
          '100%': { transform: 'translateX(-8px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
