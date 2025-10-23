/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.3s ease-out',
        'slide-up-mobile': 'slideUpMobile 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpMobile: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
        },
      },
      backdropBlur: {
        'ios': '20px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      fontSize: {
        'mobile-display': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
        'mobile-h1': ['1.5rem', { lineHeight: '2rem' }], // 24px
        'mobile-h2': ['1.375rem', { lineHeight: '1.75rem' }], // 22px
        'mobile-h3': ['1.25rem', { lineHeight: '1.5rem' }], // 20px
        'mobile-h4': ['1.125rem', { lineHeight: '1.5rem' }], // 18px
        'mobile-body': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'mobile-sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'mobile-xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
