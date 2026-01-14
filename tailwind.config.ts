import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.ts',
    'nuxt.config.ts'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: []
} satisfies Config
