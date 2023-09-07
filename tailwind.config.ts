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
        'primary-range':  'hsl(31, 77%, 52%)',
        'primary-cyan':  'hsl(184, 100%, 22%)',
        'primary-dark':  'hsl(179, 100%, 13%)',
        'neutral-white': 'hsla(0, 0%, 100%, 0.75)',
        'neutral-gray': 'hsl(0, 0%, 95%)',
      }
    },
  },
  plugins: [],
}
export default config
