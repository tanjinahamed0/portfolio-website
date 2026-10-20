/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#080c14',
          light: '#f8fafc',
        },
        surface: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        'surface-card': {
          dark: '#0d1322',
          light: '#ffffff',
        },
        accent: {
          cyan: '#00f2fe',
          teal: '#0ea5e9',
          purple: '#7928ca',
          violet: '#8b5cf6',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(90deg, #00f2fe 0%, #4facfe 30%, #7928ca 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00f2fe 0%, #8b5cf6 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(121, 40, 202, 0.4)',
        'light-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
