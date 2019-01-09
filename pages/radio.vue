<template>
	<div>
		<RadioBanner/>
		<RadioStreaming/>
		<RadioChat/>
		<RadioProgramList/>
		<RadioAside/>
		<RadioAdsBanner/>
	</div>
</template>
<script>
	import RadioBanner from "@/components/Radio/RadioBanner";
	import RadioStreaming from "@/components/Radio/RadioStreaming";
	import RadioChat from "@/components/Radio/RadioChat";
	import RadioProgramList from "@/components/Radio/RadioProgramList";
	import RadioAside from "@/components/Radio/RadioAside";
	import RadioAdsBanner from "@/components/Radio/RadioAdsBanner";
	export default {
		components:{
			RadioBanner,
			RadioStreaming,
			RadioChat,
			RadioProgramList,
			RadioAside,
			RadioAdsBanner
		},
		mounted() {
			initializeFB();
		},
		head () {
			let description = "Streaming en vivo de nuestros programas, disfruta de ellos, comparte, pide tus temas favoritos. Aqui, en La Voz de OIENIV.";
			return {
				title:"Radio Online | La Voz de OIENIV",
				meta:[
					{hid:"keywords",name:"keywords", content:"radio cristiana online, radio evangelica online, emisora cristiana evangelica online de venezuela, Radio cristiana de venezuela, emisora cristiana evangelica en linea" },
    				{hid:"description", name:"description", content:description},
					// Facebook Open Graph
					{ property:"og:title", content:"Radio Online | La Voz de OIENIV" },
					{ property:"og:url", content:"https://www.lavozdeoieniv.tk/radio" },
					{ property:"og:description", content:description},
					//twitter cards
					{name:"twitter:description", content:description}
				]
			}
		}
	}
</script>