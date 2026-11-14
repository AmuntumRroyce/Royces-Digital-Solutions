/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: 'rgba(37, 99, 235, 0.1)',
        },
        secondary: {
          DEFAULT: '#0F172A',
          dark: '#020617',
          surface: '#1E293B',
        },
        accent: {
          DEFAULT: '#06B6D4',
          glow: '#22D3EE',
          dark: '#0891B2',
          subtle: 'rgba(6, 182, 212, 0.12)',
        },
        canvas: {
          light: '#FFFFFF',
          dark: '#020617',
        },
        surface: {
          light: '#F8FAFC',
          dark: '#0F172A',
          darkElevated: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(15, 23, 42, 0.06)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.55)',
        'glow-primary': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'glow-accent': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        heavy: '24px',
      }
    },
  },
  plugins: [],
}
