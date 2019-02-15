module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'La Voz de OIENIV Radio | Emisora Cristiana En Venezuela',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			
			{ property:"og:type", content:"website" },
			{ property:"og:image", content:"https://www.lavozdeoieniv.tk/images/image.jpg" },
			{ property:"og:image:width", content:"851px" },
			{ property:"og:image:height", content:"315px" },
			{ property:"fb:app_id", content:"126968564676905" },
			{ property:"og:image:alt", content:"Emisora Cristiana La Voz de OIENIV" },
			{name:"twitter:card", content:"summary"},
			{name:"twitter:site", content:"@lavozdeoieniv"},
		],
		script:[
    		{ src:"https://www.paypalobjects.com/api/checkout.js" },
			{src:"/js/FB.js"}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel:"canonical", href:"https://www.lavozdeoieniv.tk" },
			{ rel:"stylesheet", href:"/css/page.css" }

		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#ff8f00' },
	/*
	** Build configuration
	*/
	build: {
		publicPath:"/",
		extractCSS:true,
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
