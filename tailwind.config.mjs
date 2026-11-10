/** @type {import('tailwindcss').Config} */
/*
 * Sistema de diseño — BP Asesorías Contables
 * Paleta: neutros cálidos + verde de marca + lima de acento (solo decorativo).
 * Contrastes AA verificados sobre #FFFFFF y #FAFAF6:
 *   ink #141C0D ≈ 17:1 · ink-soft #3A4433 ≈ 10:1 · muted #59624F ≈ 6.2:1
 *   brand-700 #3D6E1A ≈ 6.1:1 (texto, botón primario con texto blanco)
 *   brand-600 #4C8327 ≈ 4.6:1 (solo texto ≥ 14px semibold / iconos)
 *   accent #8CC63F ≈ 2:1 → NUNCA como color de texto sobre claro; sí como relleno
 *   decorativo o como fondo con texto brand-950.
 */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#FAFAF6',
				surface: '#FFFFFF',
				sunken: '#F3F4EE',
				border: { DEFAULT: '#E6E8DF', strong: '#D2D6C8' },
				ink: { DEFAULT: '#141C0D', soft: '#3A4433' },
				muted: '#59624F',
				accent: { DEFAULT: '#8CC63F', soft: '#EEF6E2' },
				brand: {
					50: '#F3F8EC',
					100: '#E4F0D3',
					200: '#C9E2A7',
					300: '#A8D072',
					400: '#8CC63F',
					500: '#6AA52E',
					600: '#4C8327',
					700: '#3D6E1A',
					800: '#2F5615',
					900: '#223F10',
					950: '#14270A',
				},
			},
			fontFamily: {
				serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
				sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
			},
			/* Escala tipográfica: leading y tracking ajustados por tamaño (grande = más apretado). */
			fontSize: {
				'2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
				xs: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.005em' }],
				sm: ['0.875rem', { lineHeight: '1.375rem', letterSpacing: '0' }],
				base: ['1rem', { lineHeight: '1.65', letterSpacing: '-0.003em' }],
				lead: ['clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)', { lineHeight: '1.6', letterSpacing: '-0.008em' }],
				h4: ['1.125rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
				h3: ['clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
				h2: ['clamp(1.875rem, 1.35rem + 2.1vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
				h1: ['clamp(2.125rem, 1.45rem + 2.9vw, 3.75rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
				display: ['clamp(2.5rem, 1.5rem + 4.4vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
			},
			boxShadow: {
				/* Sombras por capas: contacto + ambiente. */
				xs: '0 1px 2px rgba(20,28,13,.05)',
				card: '0 1px 2px rgba(20,28,13,.04), 0 2px 6px -1px rgba(20,28,13,.05), 0 0 0 1px rgba(20,28,13,.02)',
				lift: '0 1px 2px rgba(20,28,13,.04), 0 8px 16px -6px rgba(20,28,13,.08), 0 24px 40px -16px rgba(20,28,13,.14)',
				float: '0 2px 4px rgba(20,28,13,.04), 0 16px 32px -8px rgba(20,28,13,.14), 0 40px 80px -24px rgba(20,28,13,.18)',
				'inset-hairline': 'inset 0 1px 0 rgba(255,255,255,.6)',
			},
			borderRadius: {
				card: '1.25rem',
				panel: '1.75rem',
				hero: '2rem',
			},
			maxWidth: {
				content: '75rem',
				prose: '65ch',
			},
			transitionTimingFunction: {
				/* Aproximación CSS de un spring críticamente amortiguado (sin rebote). */
				spring: 'cubic-bezier(.2,.8,.2,1)',
				'spring-in': 'cubic-bezier(.8,.2,.8,.2)',
			},
			transitionDuration: {
				250: '250ms',
				400: '400ms',
				600: '600ms',
			},
			backgroundImage: {
				'brand-dark': 'linear-gradient(160deg,#2F5615 0%,#14270A 100%)',
			},
		},
	},
	plugins: [],
};
