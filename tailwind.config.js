/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/edition/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: {
          DEFAULT: 'var(--color-card)',
          hover: 'var(--color-card-hover)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        overlay: 'var(--color-overlay)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          foreground: 'var(--color-accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        heading: 'var(--color-heading)',
        border: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
          subtle: 'var(--color-border-subtle)',
        },
        'ghost-hover': 'var(--color-ghost-hover)',
        'nav-active': 'var(--color-nav-active)',
        'nav-active-text': 'var(--color-nav-active-text)',
        'nav-text': 'var(--color-nav-text)',
        'nav-hover-text': 'var(--color-nav-hover-text)',
        'badge-default': 'var(--color-badge-default)',
        'badge-default-text': 'var(--color-badge-default-text)',
        'badge-new': 'var(--color-badge-new)',
        'badge-new-text': 'var(--color-badge-new-text)',
        ring: 'var(--color-ring)',
        'ring-offset': 'var(--color-ring-offset)',
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-fast': 'float-fast 12s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-40px, 30px) rotate(-8deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -20px)' },
          '50%': { transform: 'translate(-15px, -30px)' },
          '75%': { transform: 'translate(25px, 15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
