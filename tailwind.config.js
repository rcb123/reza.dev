/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cloudGray: 'oklch(var(--color-cloudGray) / <alpha-value>)'
			}
		}
	},
	plugins: []
};
