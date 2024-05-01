import { nextui } from "@nextui-org/react";
import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-black": "#121212",
        "primary-red": "#ed1b2f",
        "dark-red": "#C82222",
        "light-red": "#FFDFDF",
        "white-red": "#FFF5F5",
        hyperlink: "#0E2EED",
        "rich-grey": "#414042",
        "dark-grey": "#A6A6A6",
        "silver-grey": "#DEDEDE",
        "light-grey": "#F7F7F7",
        "available-green": "#0ab305",
        "blur-form": "rgba(18, 18, 18, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
