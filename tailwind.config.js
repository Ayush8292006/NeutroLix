/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C5D', // Corporate Deep Blue
          dark: '#06253B',
          light: '#135482',
          surface: '#0B3C5D',
        },
        accent: {
          DEFAULT: '#8CC63F', // Lime Green accent (used sparingly)
          hover: '#7cb433',
          light: '#a1d856',
          muted: '#eef7e2',
        },
        sky: {
          DEFAULT: '#29A9E0',
          hover: '#1b90c2',
          muted: '#e8f5fc',
        },
        offwhite: '#F6F7F2', // Warm architectural off-white
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'btn': '4px',
        'card': '8px',
      },
      maxWidth: {
        'container': '1240px',
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'eyebrow': '0.12em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 60, 93, 0.05), 0 1px 2px -1px rgba(11, 60, 93, 0.05)',
        'card': '0 4px 20px -2px rgba(11, 60, 93, 0.06)',
        'elevated': '0 12px 32px -4px rgba(11, 60, 93, 0.1)',
      },
      transitionTimingFunction: {
        'corporate': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
