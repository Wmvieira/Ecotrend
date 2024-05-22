import { type Config } from "tailwindcss";
import { emerald, green, teal } from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: green["700"],
            background: green["50"],
            foreground: green["950"],
            primary: {
              DEFAULT: green[700],
              foreground: green[950],
              ...green,
            },
            secondary: {
              DEFAULT: emerald[200],
              foreground: emerald[950],
              ...emerald,
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
