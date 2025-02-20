import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'wn-text-default-light': 'var(--wn-text-default-light)',
  			'wn-background-default-light': 'var(--wn-background-default-light)',
  			'wn-text-gray-light': 'var(--wn-text-gray-light)',
  			'wn-background-gray-light': 'var(--wn-background-gray-light)',
  			'wn-text-brown-light': 'var(--wn-text-brown-light)',
  			'wn-background-brown-light': 'var(--wn-background-brown-light)',
  			'wn-text-orange-light': 'var(--wn-text-orange-light)',
  			'wn-background-orange-light': 'var(--wn-background-orange-light)',
  			'wn-text-yellow-light': 'var(--wn-text-yellow-light)',
  			'wn-background-yellow-light': 'var(--wn-background-yellow-light)',
  			'wn-text-green-light': 'var(--wn-text-green-light)',
  			'wn-background-green-light': 'var(--wn-background-green-light)',
  			'wn-text-blue-light': 'var(--wn-text-blue-light)',
  			'wn-background-blue-light': 'var(--wn-background-blue-light)',
  			'wn-text-purple-light': 'var(--wn-text-purple-light)',
  			'wn-background-purple-light': 'var(--wn-background-purple-light)',
  			'wn-text-pink-light': 'var(--wn-text-pink-light)',
  			'wn-background-pink-light': 'var(--wn-background-pink-light)',
  			'wn-text-red-light': 'var(--wn-text-red-light)',
  			'wn-background-red-light': 'var(--wn-background-red-light)',
  			'wn-text-default-dark': 'var(--wn-text-default-dark)',
  			'wn-background-default-dark': 'var(--wn-background-default-dark)',
  			'wn-text-gray-dark': 'var(--wn-text-gray-dark)',
  			'wn-background-gray-dark': 'var(--wn-background-gray-dark)',
  			'wn-text-brown-dark': 'var(--wn-text-brown-dark)',
  			'wn-background-brown-dark': 'var(--wn-background-brown-dark)',
  			'wn-text-orange-dark': 'var(--wn-text-orange-dark)',
  			'wn-background-orange-dark': 'var(--wn-background-orange-dark)',
  			'wn-text-yellow-dark': 'var(--wn-text-yellow-dark)',
  			'wn-background-yellow-dark': 'var(--wn-background-yellow-dark)',
  			'wn-text-green-dark': 'var(--wn-text-green-dark)',
  			'wn-background-green-dark': 'var(--wn-background-green-dark)',
  			'wn-text-blue-dark': 'var(--wn-text-blue-dark)',
  			'wn-background-blue-dark': 'var(--wn-background-blue-dark)',
  			'wn-text-purple-dark': 'var(--wn-text-purple-dark)',
  			'wn-background-purple-dark': 'var(--wn-background-purple-dark)',
  			'wn-text-pink-dark': 'var(--wn-text-pink-dark)',
  			'wn-background-pink-dark': 'var(--wn-background-pink-dark)',
  			'wn-text-red-dark': 'var(--wn-text-red-dark)',
  			'wn-background-red-dark': 'var(--wn-background-red-dark)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
