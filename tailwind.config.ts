import type { Config } from "tailwindcss";
const path = require('path');
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'header': "url('/images/headerBg.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          black:"#1E1E1E"
        },
        cream: {
         light:"#FEF2E4" 
        }
      },
    },
  },
  plugins: [
    require('./plugins/tw-icomoon')({
      selectionPath: path.resolve(process.cwd(), 'icomoon/selection.json'),
      fontFamily: 'icomoon',
      cssFontPath: '/fonts',   // where the font files are served (under /public)
      classPrefix: 'icon',     // results: .icon, .icon-home, etc.
    }),
  ],
};
export default config;
