import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(35px)'},
          '100%': { opacity: '1', transform: 'translateY(0px)'},
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)'},
          '100%': { opacity: '0', transform: 'translateY(0px)'},
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease-out',
        fadeUpLong: 'fadeUp 0.6s ease-out',
        fadeUpVeryLong: 'fadeUp 0.9s ease-out',
        fadeUpLast: 'fadeUp 1.2s ease-out',
        fadeUpVeryLast: 'fadeUp 1.6s ease-out',

        fadeDown: 'fadeDown 0.3s ease-out',
        fadeDownLong: 'fadeDown 0.6s ease-out',
        fadeDownVeryLong: 'fadeDown 0.9s ease-out',
        fadeDownLast: 'fadeDown 1.2s ease-out',

        pulseOne: 'pulse 0.7s',
      },
    },
  },
  plugins: [],
} satisfies Config;


