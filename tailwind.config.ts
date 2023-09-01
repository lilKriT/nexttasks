import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(263.4, 69.3%, 42.2%)",
        secondary: "hsl(161.4, 93.5%, 30.4%)",
      },
    },
  },
  plugins: [],
};
export default config;
