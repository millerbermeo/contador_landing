/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#FAFBF9',
				surface: '#FFFFFF',
				border: '#E8EBE4',
				ink: '#1A2410',
				muted: '#5B6650',
				accent: { DEFAULT: '#8CC63F', soft: '#EAF4DA' },
				brand: {
					50: '#F2F7EB',
					100: '#E1EED0',
					200: '#C6DDA6',
					300: '#A5C978',
					400: '#83B24C',
					500: '#5A9E2F',
					600: '#4C8527',
					700: '#3E5C1E',
					800: '#314A18',
					900: '#24380F',
				},
			},
			fontFamily: {
				serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
				sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				soft: '0 4px 20px -4px rgba(36,56,15,.08)',
				lift: '0 12px 32px -8px rgba(36,56,15,.14)',
				glow: '0 0 60px -12px rgba(140,198,63,.35)',
			},
			borderRadius: { card: '1.25rem' },
			backgroundImage: {
				'brand-dark': 'linear-gradient(135deg,#3E5C1E 0%,#24380F 100%)',
				'hero-glow': 'radial-gradient(60% 50% at 70% 30%,rgba(140,198,63,.14),transparent 70%)',
			},
			maxWidth: { content: '1200px' },
			keyframes: {
				'pulse-soft': {
					'0%,100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '.85', transform: 'scale(1.04)' },
				},
			},
			animation: {
				'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
