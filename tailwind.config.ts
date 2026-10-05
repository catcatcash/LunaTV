import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** 樱花粉 — soft petal primary, deeper active, blush surfaces */
const sakura = {
  50: '#fff8f9',
  100: '#ffe8ed',
  200: '#ffd1dc',
  300: '#ffb7c5',
  400: '#f59aad',
  500: '#e87a93',
  600: '#d45d7a',
  700: '#b84764',
  800: '#8f3a51',
  900: '#6b2e40',
  950: '#3d1a24',
} as const;

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-landscape': {
          raw: '(orientation: landscape) and (max-height: 700px)',
        },
      },
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // 樱花粉: one source scale. Existing green/emerald/lime classes and
        // leftover LunaTV primary blues all resolve to this palette.
        sakura,
        'pastel-pink': sakura,
        green: sakura,
        emerald: sakura,
        lime: sakura,
        primary: sakura,
        dark: '#222222',
      },
      boxShadow: {
        sakura:
          '0 10px 24px -12px rgb(var(--sakura-rgb-600) / 0.38), 0 1px 0 rgb(var(--sakura-rgb-200) / 0.55)',
        'sakura-lg':
          '0 16px 32px -14px rgb(var(--sakura-rgb-600) / 0.42), 0 1px 0 rgb(var(--sakura-rgb-200) / 0.45)',
        'sakura-nav': '0 6px 14px -6px rgb(var(--sakura-rgb-600) / 0.55)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'slide-in-from-right': 'slideInFromRight 0.3s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;

export default config;
