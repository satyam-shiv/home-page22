import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        euclidCircularBLight: ['"euclid-circular-b-light"', 'sans serif'],
        euclidCircularBRegular: ['"euclid-circular-b-regular"', 'sans serif'],
        glorify: ['"glorify"', 'sans serif'],
        exoBold: ['"exo-bold"', 'sans serif'],
      },
      colors: {
        'custom-teal': '#0196E7',
        'custom-pink': '#FF00A4',
        'tm-primary': '#14192d',
        'tm-primary-bg': '#0A1A37',
        'tm-primary-100': '#0B2B47',
      },
      backgroundImage: {
        'home-banner': 'url("/src/assets/images/banner-bg.webp")',
      },
    },
  },
  plugins: [],
};
export default config;
