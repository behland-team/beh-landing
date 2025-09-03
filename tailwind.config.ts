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
        yekan:"'YekanBakh'",
        // Add other custom fonts here
      },
      boxShadow: {
        "main": "0px 4px 0px 0px rgba(0, 0, 0, 0.46)",
        "roadMap":"0 4px 0 0 #BD5300;"
      },
      backgroundImage: {
        header: "url('/images/headerBg.svg')",
        roadMap: "url('/images/roadBG.svg')",
        lumber: "url('/images/lumber.svg')",
        bannerBg:"url('/images/bannerBg.png')",
        branch:"url('/images/borde.png')",
        CharBg:"url('/images/CharBg.png')",
        card:"url('/images/card.svg')",
        WhyBehBg: "url('/images/WhyBeh.png')",
        teamBg: "url('/images/TeamBg.png')",
        teamInfoBg: "url('/images/TeamInfoBg.png')",
 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chart: {
          ranking: "#A6BD00",
          people: "#FF7B00",
          security: "#019F6F",
          crown: "#8700FF",
          award:"#FFBA00",
          smile: "#00A6DE",
          idCard:"#CF1D00"
          
        },
        text: {
          black: "#1E1E1E",
          gray:"#4D4D4D",
          light_black:"#555555",
          bg: "#CC6D144F",
          orange:"#CC6D14",
          dark_Orange: "#B83A36",
          dark_brown:"#893D1B"
        },
        cream: {
          light: "#FEF2E4",
          dark_light:"#FFD9B1",
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
