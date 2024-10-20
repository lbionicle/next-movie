import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "576px",
        l: "1440px",
      },
      container: {
        center: true,
        screens: {
          "3xl": "1712px",
          "2xl": "1536px",
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "576px",
          DEFAULT: "100%",
        },
        padding: {
          DEFAULT: "15px",
        },
      },
      backgroundColor: {
        background: "var(--background-primary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        unbounded: ['"Unbounded"', "sans-serif"],
      },
      borderColor: {
        primary: "rgba(255, 255, 255, 0.30)",
      },
      fontSize: {
        fz74: "74px",
        fz40: "40px",
        fz32: "32px",
        fz22: "22px",
        fz18: "18px",
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
