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
				light: '#ffcccb',
				dark: '#8b0000'
			},
			secondary: {
				light: '#b5651d',
				dark: '#654321'
			}
			//...
		}
	},

	plugins: []
};

module.exports = config;
