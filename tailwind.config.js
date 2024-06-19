/** @type {import('tailwindcss').Config} */
export default {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],

	theme: {
		fontFamily: {
			comfort: ['Comfortaa', 'sans-serif'],
			old: ['Old Standard TT', 'serif'],
		},
		extend: {},
	},
	plugins: [],
}
