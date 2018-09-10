<template>
	<div>
		<AboutImageContainer/>
		<AboutNavAside/>
		<AboutContactanos/>
		<AboutApoyanos/>
		<transition name="fade" mode="out-in">
			<AboutModal v-show="showModal"/>
		</transition>
	</div>
</template>
<script>
	import AboutImageContainer from "@/components/Nosotros/AboutImageContainer"
	import AboutNavAside from "@/components/Nosotros/AboutNavAside"
	import AboutContactanos from "@/components/Nosotros/AboutContactanos"
	import AboutApoyanos from "@/components/Nosotros/AboutApoyanos"
	import AboutModal from "@/components/Nosotros/AboutModal"

	export default {
		data(){
			return {
				showModal: false
			}
		},
		head(){
			let description = "Lee acerca de lo que trata este proyecto, nuesta historia, misión, visión, nuestro equipo de trabajo, asi conoceras mas acerca de esta radio, La Voz de OIENIV, La Radio donde La Protagonista es: La Palabra de Dios.";
			return { 
				title:"Nosotros | La Voz de OIENIV",
				meta:[
					{hid:"description", name:"description", content:description},
					{hid:"keywords", name:"keywords", content:""},
					// Facebook Open Graph
					{ property:"og:title", content:"Nosotros | La Voz de OIENIV" },
					{ property:"og:url", content:"https://www.lavozdeoieniv.tk/nosotros" },
					{ property:"og:description", content:description},
					//twitter cards
					{name:"twitter:description", content:description}
				],
				script: [
    				{ src:"https://www.paypalobjects.com/api/checkout.js" }
    			],
			}
		},
		components: {
			AboutImageContainer,
			AboutNavAside,
			AboutContactanos,
			AboutApoyanos,
			AboutModal
		}
	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to, .fade-leave-active {
	  opacity: 0
	}
</style>