/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// "Nunito Sans", sans-serif
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},

			colors: {
				primary: {
					DEFAULT: "#aecc53",
					light: "#BFE05B",
					lightest: "#f4f6f8",
					lightest2: "#fbfcf6",
				},
				secondary: {
					DEFAULT: "#006d68",
					lightest: "#fbfcf6",
					lightest2: "#fbfcf6",
				},
				gray: {
					dark: "#181818",
					darkest: "#1e1e1e",
				}
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-headings': "#006d68"
					}
				}
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
