import type { Config } from "tailwindcss";
const path = require("path");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalameh:"'Kalameh', 'sans-serif'",
        // Add other custom fonts here
      },
      boxShadow: {
        "main": "0px 4px 0px 0px rgba(0, 0, 0, 0.46)",
      },
      backgroundImage: {
        header: "url('/images/headerBg.svg')",
        roadMap: "url('/images/RoadBg.png')",
        lumber:"url('/images/lumber.svg')",
        nail:"url('/images/nail.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          black: "#1E1E1E",
          light_black:"#555555",
          bg: "#CC6D144F",
          orange:"#CC6D14",
          dark_Orange:"#B83A36"
        },
        cream: {
          light: "#FEF2E4",
          medium: "#BD5300",
          dark:"#CC6D14"

        },
      },
    },
  },
  plugins: [
    require("./plugins/tw-icomoon")({
      selectionPath: path.resolve(process.cwd(), "icomoon/selection.json"),
      fontFamily: "icomoon",
      cssFontPath: "/fonts", // where the font files are served (under /public)
      classPrefix: "icon", // results: .icon, .icon-home, etc.
    }),
  ],
};
export default config;
