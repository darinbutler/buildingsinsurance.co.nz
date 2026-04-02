import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399',
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          muted: '#475569',
        },
      },
    },
  },
  plugins: [],
};

export default config;
