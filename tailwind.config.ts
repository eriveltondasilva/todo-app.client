import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': 'url("./assets/images/bg-mobile-light.jpg")',
        'mobile-dark': 'url("./assets/images/bg-mobile-dark.jpg")',
        'desktop-dark': 'url("./assets/images/bg-desktop-dark.jpg")',
        'desktop-light': 'url("./assets/images/bg-desktop-light.jpg")',
      },
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        surface: {
          light: 'hsl(0, 0%, 98%)',
          dark: 'hsl(235, 24%, 19%)',
        },
        background: {
          light: 'hsl(236, 33%, 92%)',
          dark: 'hsl(235, 21%, 11%)',
        },
        gradient: {
          left: 'hsl(192, 100%, 67%)',
          right: 'hsl(280, 87%, 65%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
