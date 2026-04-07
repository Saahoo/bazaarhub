import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... 
          600: '#0284c7', // Main brand color
          700: '#0369a1',
        },
        // Trust-focused palette
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        // Use system fonts + web fonts for Pashto/Dari
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pashto: ['Noto Naskh Arabic', 'serif'],
        dari: ['Vazirmatn', 'Noto Naskh Arabic', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // RTL plugin for directional utilities
    require('tailwindcss-rtl'),
  ],
  // Enable RTL variant
  experimental: {
    optimizeUniversalDefaults: true,
  },
} satisfies Config;

export default config;