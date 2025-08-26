/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Helvetica',
					'Arial',
					'Apple Color Emoji',
					'Segoe UI Emoji',
				],
			},
			colors: {
				brand: {
					500: '#6366f1',
					600: '#4f46e5',
				},
			},
		},
	},
	plugins: [],
}
