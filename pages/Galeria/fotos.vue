<template>
		<div> 
				<ImagesHeader/>
				<ImagesMissing/>
		</div>
</template>
<script>
	import ImagesHeader from "@/components/GaleryImages/ImagesHeader"
	import ImagesMissing from "@/components/GaleryImages/ImagesMissing"
	export default {
		components:{
			ImagesHeader,
			ImagesMissing
		},
		mounted() {
			initializeFB();
		},
		head(){
			let description = "Galeria de fotos, si no participaste en nuestros eventos, mira las fotos y sientete parte de ellas. Aqui, en La Voz de OIENIV.";
			return { 
				title:"Fotos | Galeria La Voz de OIENIV",
				meta:[
					{ name:"keywords",  hid:"keywords", content:"galeria fotos radio cristiana online, fotos de radio cristiana, galeria radio cristiana" },
					{ name:"description", hid:"description", content:description },
					// Facebook Open Graph
					{ property:"og:title", content:"Fotos | La Voz de OIENIV" },
					{ property:"og:url", content:"https://www.lavozdeoieniv.tk/Galeria/fotos" },
					{ property:"og:description", content:description},

					//twitter cards
					{name:"twitter:description", content:description}
				]
			}
		},
	}
</script>
<style>
* {
	font-family: "Roboto", arial;
	margin: 0;
	padding: 0;
}
header,
section,
footer,
aside,
nav,
article,
figure,
figcaption,
hgroup {
	display: block;
}

.pull-left {
	float: left !important;
}

.pull-right {
	float: right !important;
}

.img-circle {
	border-radius: 50%;
}

#vista {
	background: url(/Black-earphone-wallpaper-music.jpg);
	background-size: cover;
	margin-top: 10px;
	position: relative;
	width: 100%;
	height: 400px;
}

#vista div {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
}
#vista div div {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(80, 80, 80, 0.5);
	z-index: 2;
	text-align: center;
}

#vista div div h1 {
	width: 100%;
	position: relative;
	font-size: 30px;
	margin-top: 2.5%;
	font-weight: 500;
	font-family: Arapey;
	color: #fff;
}
#vista div div img {
	margin-top: 30px;
}
#social-gal span {
	font-size: 25px;
	display: inline-block;
	margin: 15px 15px 0 15px;
	cursor: pointer;
}
#social-gal p {
	color: white;
	display: block;
	margin-top: 20px;
}

.fb {
	background: rgb(59, 89, 152);
	padding: 2px;
	border-radius: 2px;
}

#gal {
	box-shadow: black 3px 3px 8px;
	border-radius: 5px;
	position: relative;
	float: left;
	width: 90%;
	margin: 20px 2.5%;
	padding: 5%;
	border: 2px solid rgba(75, 127, 232, 0.3);
	border-radius: 3px;
	background: #e7e5e5;
}

#gal img {
	border-radius: 5px;
	width: 100%;
	height: 100%;
}

#gal div {
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.2);
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
}

#gal div > #t {
	display: block;
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 30px;
	color: #f7f7f7;
	text-shadow: black 3px 3px 3px;
	z-index: 2;
}

#gal div span > #txt {
	position: absolute;
	width: 100%;
	top: 45%;
	left: 0;
}

#galerias {
	width: 92%;
}

#galerias,
#lateral {
	float: left;
}

#lateral {
	display: none;
}

#pie {
	float: left;
	width: 100%;
}
#icon-face:hover,
#icon-twit:hover,
#icon-inst:hover,
#icon-yt:hover {
	cursor: pointer;
}
@media screen and (min-width: 767px) {
	#vista div div div h1 {
		font-size:50px;
	}
}

@media screen and (min-width: 950px) {
	#vista {
		margin-top: 10px;
		position: relative;
		height: 600px;
		background-size: cover;
		background-attachment: fixed;
		width: 100%;
	}
	#vista > div {
		height: 100%;
		width: 100%;
	}
	#vista div > #sb {
		position: relative;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		z-index: 2;
		text-align: center;
	}
	#social-gal span {
		margin: 50px 40px 0 40px;
	}
	#vista div > div > div > h1 {
		margin-top: 5%;
		font-size: 60px;
	}
	#vista div > div > div > p {
		margin-top: 50px;
		font-size: 22px;
	}
	#gal {
		width: 40.4%;
		padding: 2%;
	}
	#gal:hover {
		background: #c7c7c7;
		transition: 0.2s ease;
	}
	#galerias {
		width: 70%;
	}
	#galerias,
	#lateral {
		float: left;
	}
	#lateral {
		display: block;
		margin: 25px 0 0 0;
		width: 30%;
		height: 900px;
		background: red;
	}
}
</style>