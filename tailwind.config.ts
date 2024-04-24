import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { lime } from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          background: lime[100],
          foreground: lime[900],
          ...lime,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
