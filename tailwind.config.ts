import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'serif'],
      },
      colors: {
        museum: {
          // Rich, sophisticated dark navy palette inspired by historical naval documents
          parchment: '#f8f9fa',
          'parchment-dark': '#e9ecef',
          navy: '#0f172a',
          'navy-light': '#1e293b',
          'navy-dark': '#020617',
          ink: '#020617',
          'ink-light': '#0f172a',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          'gold-dark': '#d97706',
          silver: '#94a3b8',
          'silver-light': '#cbd5e1',
          'silver-dark': '#64748b',
          cream: '#fefce8',
          'cream-dark': '#fef3c7',
          sepia: '#451a03',
          'sepia-light': '#78716c',
        },
        // Enhanced grays with warm undertones
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      borderRadius: {
        'museum-lg': '15px',
        'museum-md': '10px',
      },
      boxShadow: {
        'museum': '0 8px 32px rgba(2, 6, 23, 0.08)',
        'museum-hover': '0 12px 40px rgba(2, 6, 23, 0.12)',
        'museum-deep': '0 20px 60px rgba(2, 6, 23, 0.15)',
        'museum-glow': '0 0 30px rgba(15, 23, 42, 0.4)',
        'museum-inner': 'inset 0 2px 4px rgba(2, 6, 23, 0.05)',
        'layered': '0 4px 6px rgba(2, 6, 23, 0.05), 0 10px 15px rgba(2, 6, 23, 0.1), 0 20px 25px rgba(2, 6, 23, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s linear infinite',
        'pulse-custom': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-468px 0',
          },
          '100%': {
            backgroundPosition: '468px 0',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
