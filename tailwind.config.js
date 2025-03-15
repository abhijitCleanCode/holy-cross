/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				'100': '#EA6365',
  				DEFAULT: '#FA7275'
  			},
  			primary: {
  				'100': '#0061FF',
  				'200': '#0061FF1A',
  				'300': '#0061FF0D',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			accent: {
  				'100': '#FAF9F6',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			black: {
  				'100': '#8C8E98',
  				'200': '#6B7280',
  				'300': '#33373E',
  				DEFAULT: '#20232A'
  			},
  			success: {
  				'100': '#F0FFF4',
  				'200': '#C6F6D5',
  				'300': '#9AE6B4',
  				'400': '#68D391',
  				'500': '#38A169',
  				'600': '#2F855A',
  				'700': '#276749',
  				'800': '#22543D',
  				'900': '#1C4532'
  			},
  			primaryBlue: {
  				'100': '#F5F8FF',
  				'200': '#EBF4FF',
  				'300': '#C3D9FF',
  				'400': '#9BBFFF',
  				'600': '#6A85E6',
  				'700': '#475A99',
  				'800': '#364573',
  				'900': '#242B4D',
  				DEFAULT: '#0286FF'
  			},
  			lamaSky: '#C3EBFA',
  			lamaSkyLight: '#EDF9FD',
  			purpleColor: '#8B5DFF',
  			lamaPurple: '#CFCEFF',
  			lamaPurpleLight: '#F1F0FF',
  			lamaYellowLight: '#FEFCE8',
  			lamaYellow: '#FAE27C',
  			danger: '#F75555',
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
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
};
