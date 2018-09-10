<template>
	<div style="position: relative; width:80%; float:right">
		<!-- Aqui va el iframe de youtube -->
		<div style="width: 80%; margin: auto; background: black; height: 400px;"></div>
		<!---->

		<div id="metabox">
			<button>Share</button>
			<h2 id="title">{{setTitle}}</h2>
			<div>
				<p id="description">{{viewDescription}}</p>
				<span v-if="viewMoreDescription" @click="viewMoreDescription = undefined">Ver Mas</span>
				<span v-if="!viewMoreDescription" @click="viewMoreDescription = 100">Ver Menos</span>
			</div>
		</div>

	</div>
</template>
<script>
	import data from "@/assets/json/videos.json";
	export default {
		mounted(){
			console.log(this)
		},
		data(){
			return {
				viewMoreDescription:100,
				//description:data.data[this.$route.params.youtube].description,
				description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				link:data.data[this.$route.params.youtube].link
			}
		},
		computed:{
			setTitle(){
				let title = this.$route.params.youtube;
				let split = title.split("-");
				let newTitle = [];
				split.forEach(e=>{
					newTitle.push(e.charAt(0).toUpperCase() + e.slice(1));
				})
				return newTitle.join(" ")
			},
			viewDescription(){
				let des = this.description
				let newDes;
				if (des.length > this.viewMoreDescription) {
					let str = des.substr(0, 100).split();
					str.push("...")
					return str.join("");
				} else {
					return des;
				}
			}
		},
		head(){
			return {
				title:`${this.setTitle} - Videos | La Voz de OIENIV`,
				meta: [
      				{ hid: 'description', name: 'description', content: this.description },
      				{ name:"keywords", content:"musica cristiana online, musica evangelica online, musica cristiana evangelica online de venezuela, radio cristiana de venezuela, emisora cristiana evangelica en linea"},
      				// Facebook Open Graph
      				{ property:"og:title", content:`${this.setTitle} - Videos | La Voz de OIENIV` },
      				{ property:"og:type", content:"website" },
      				{ property:"og:image", content:"https://www.lavozdeoieniv.tk/images/image.jpg" },
      				{ property:"og:image:width", content:"851px" },
      				{ property:"og:image:height", content:"315px" },
      				{ property:"og:url", content:`https://www.lavozdeoieniv.tk/Galeria/videos/${this.$route.params.youtube}` },
      				{ property:"og:description", content:this.description},
					{ property:"fb:app_id", content:"126968564676905" },
					{ property:"og:image:alt", content:`${this.setTitle} videos La Voz De OIENIV` },
					//twitter cards
					{name:"twitter:card", content:"summary"},
					{name:"twitter:site", content:"@lavozdeoieniv"},
					{name:"twitter:description", content:this.description},
    			],
    		}	
		}
	}
</script>
<style scoped>
	#title {
		text-align: center;
		margin: 20px;
	}
	#metabox {
		border: black 1px solid;
		width: 80%;
		margin: auto;
	}
	#description {
		padding: 50px;
	}
</style>