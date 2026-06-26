/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E14',
          panel: '#0F1620',
          border: '#1C2530',
        },
        light: {
          DEFAULT: '#F7F8FA',
          panel: '#FFFFFF',
          border: '#E3E7ED',
        },
        signal: {
          DEFAULT: '#39FF88',
          dim: '#1FA85C',
          glow: 'rgba(57, 255, 136, 0.35)',
        },
        ink: {
          DEFAULT: '#E8ECF1',
          dim: '#6B7785',
          deep: '#0F1620',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(57,255,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,136,0.06) 1px, transparent 1px)',
      },
      animation: {
        'scan-x': 'scanX 3s linear infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        scanX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
