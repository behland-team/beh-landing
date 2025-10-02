import type { Config } from "tailwindcss";
const path = require("path");
const config: Config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		screens: {
    			xxs: '440px',
    			'3xl': '1920px'
    		},
    		fontFamily: {
    			kalameh: "'Kalameh', 'sans-serif '",
    			yekan: 'YekanBakh'
    		},
    		boxShadow: {
    			main: '0px 4px 0px 0px rgba(0, 0, 0, 0.46)',
    			roadMap: '0 4px 0 0 #BD5300;',
    			news: '2px 4px 0px 0px #CC6D14',
    			icon: '0px 4px 0px 0px #CC6D14',
				Attributes_boxes: '2px 4px 0px 0px #CC6D14'
    		},
    		backgroundImage: {
    			header: "url('/images/headerBg.svg')",
    			headerMobile: "url('/images/headerMobileBg.svg')",
    			roadMap: "url('/images/roadBG.svg')",
    			lumber: "url('/images/lumber.svg')",
    			bannerBg: "url('/images/bannerBg.png')",
    			branch: "url('/images/borde.png')",
    			CharBg: "url('/images/CharBg.png')",
    			card: "url('/images/card.svg')",
    			WhyBehBg: "url('/images/WhyBeh.png')",
    			teamBg: "url('/images/TeamBg.svg')",
    			teamInfoBg: "url('/images/TeamInfoBg.png')",
    			cardBg: "url('/images/cardBg.png')",
    			cardMiniBg: "url('/images/cardMiniBg.png')",
    			crown: "url('/images/crown.svg')",
    			newsMini: "url('/images/news/miniNews.png')",
    			island: "url('/images/island.svg')",
    			boardFaq: "url('/images/Faq/boardFaq.svg')",
    			tree: "url('/images/Faq/tree.svg')",
    			boardFaq2: "url('/images/Faq/board.png')",
    			mobileMenuBg: "url('/images/mobileMenuBg.svg')",
    			storyBg: "url('/images/StoryBg.svg')"
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))',
    				ranking: '#A6BD00',
    				people: '#FF7B00',
    				security: '#019F6F',
    				crown: '#8700FF',
    				award: '#FFBA00',
    				smile: '#00A6DE',
    				idCard: '#CF1D00'
    			},
    			text: {
    				black: '#1E1E1E',
    				gray: '#4D4D4D',
    				light_black: '#555555',
    				bg: '#CC6D144F',
    				orange: '#CC6D14',
    				dark_Orange: '#B83A36',
    				dark_brown: '#893D1B',
					dark_gray:'#222222',
					Bt_Orange: "#BD5300"
    			},
    			cream: {
    				light: '#FEF2E4',
    				dark_light: '#FFD9B1',
    				medium: '#BD5300',
    				dark: '#CC6D14'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
  plugins: [
    require("./plugins/tw-icomoon")({
      selectionPath: path.resolve(process.cwd(), "icomoon/selection.json"),
      fontFamily: "icomoon",
      cssFontPath: "/fonts", // where the font files are served (under /public)
      classPrefix: "icon", // results: .icon, .icon-home, etc.
    }),
      require("tailwindcss-animate")
],
};
export default config;
