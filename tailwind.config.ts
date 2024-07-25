import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        syne: ['var(--font-syne)'],
      },

      boxShadow: {
        orb: '0 0 0 10px var(--fallback-p,oklch(var(--p)/.4))',
      },

      animation: {
        orb: 'animate 15s linear infinite',
      },

      keyframes: {
        animate: {
          '0%': { transform: 'translateY(100vh) scale(0)' },
          '100%': { transform: 'translateY(-10vh) scale(1)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4263f8',
          'primary-content': '#ffffff',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#262A2C',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#ECECEC',
        },
      },
      {
        dark: {
          primary: '#4263f8',
          'primary-content': '#ffffff',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#ECECEC',
          'neutral-content': '#696969',
          'base-100': '#ffffff',
          'base-200': '#262A2C',
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
export default config;
