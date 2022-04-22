const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px'
		},
		colors: {
			primary: {
				light: '#FFFFFF',
				dark: '#99003E'
			},
			secondary: {
				light: '#b5651d',
				dark: '#654321'
			},
			neutral: {
				light: '#b5651d',
				dark: '#654321'
			},
			light: '#FFFFFF',
			dark: '#99003E'
		}
	},

	plugins: []
};

module.exports = config;
