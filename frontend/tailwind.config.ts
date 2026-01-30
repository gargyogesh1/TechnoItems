
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	safelist: [
		
		"bg-pink-400",
		"bg-pink-950",
		"bg-pink-400/30",
		"bg-pink-950/30",
		"hover:bg-pink-700",
		"border-pink-900",
		"from-pink-600",
		"text-pink-900",
		"bg-indigo-400",
		"bg-indigo-950",
		"bg-indigo-950/30",
		"bg-indigo-400/30",
		"hover:bg-indigo-700",
		"border-indigo-900",
		"from-indigo-600",
		"text-indigo-900",
	    "bg-emerald-400",
		"bg-emerald-950",
		"bg-emerald-950/30",
	    "bg-emerald-400/30",
		"hover:bg-emerald-700",
		"border-emerald-900",
		"from-emerald-600",
		"text-emerald-900",
	    "bg-violet-400",
		"bg-violet-950",
		"bg-violet-950/30",
	    "bg-violet-400/30",
		"hover:bg-violet-700",
		"border-violet-900",
		"from-violet-600",
		"text-violet-900",
		],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				crypto: {
					blue: '#1A1F2C',
					purple: '#9b87f5',
					'light-purple': '#D6BCFA',
					'dark-purple': '#6E59A5',
					accent: '#F97316',
				}
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				'xs': '0.125rem',   // 2px
				'sm': '0.25rem',    // 4px
				'md': '0.375rem',   // 6px
				'lg': '0.5rem',     // 8px
				'xl': '0.75rem',    // 12px
				'2xl': '1rem',      // 16px
				'3xl': '1.5rem',    // 24px
				'circle': '50%',    // perfect circle
				'pill': '9999px'    // pill-shaped
			  },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite', 
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	// plugins: [require("tailwindcss-animate")],
} satisfies Config;
