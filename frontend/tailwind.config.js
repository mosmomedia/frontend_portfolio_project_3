module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '426px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},

		extend: {
			colors: {
				header: '#fff',
				body: '#fcfcfc',
				footer: '#000',
				st_bg1: '#212121',
				st_bg2: '#fceded7c',
				st_alt1: '#343540',
				mobile_text: '#fff',
				main_text: '#2f2f2f',
				keyColor: '#ff5263',
			},
			backgroundColor: {
				primary: '#ff5263',
				secondary: '#fff',
				basic: '#ffcc00',
				adv: '#4abb9b',
				debut: '#000',
				pd: '#6979f8',
			},
			textColor: {
				primary: '#fff',
				secondary: '#ff5263',
				basic: '#141414',
				adv: '#141414',
				debut: '#fff',
				pd: '#fff',
			},
		},
	},
	plugins: [],
};
