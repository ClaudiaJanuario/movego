import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'guzzi-red': '#C41E3A',
        'guzzi-red-dark': '#8B0000',
        'guzzi-black': '#1A1A1A',
        'guzzi-silver': '#C0C0C0',
        'guzzi-chrome': '#E8E8E8',
        'lake-blue': '#2E5A88',
        'lake-light': '#87CEEB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'engine-rumble': 'rumble 0.1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rumble: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(0.5px, 0.5px)' },
          '50%': { transform: 'translate(-0.5px, -0.5px)' },
          '75%': { transform: 'translate(0.5px, -0.5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
