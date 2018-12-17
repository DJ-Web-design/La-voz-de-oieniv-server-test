<template>
	<div style="position: relative; width:80%; float:right">
		<!-- Aqui va el iframe de youtube -->
		<div style="width: 80%; margin: auto; background: black; height: 400px;"></div>
		<!---->

		<div id="metabox">
			<button>Share</button>
			<h2 id="title">{{data.title}}</h2>
			<div>
				<p id="description">{{viewDescription}}</p>
				<span v-if="viewMoreDescription" @click="viewMoreDescription = undefined">Ver Mas</span>
				<span v-if="!viewMoreDescription" @click="viewMoreDescription = 100">Ver Menos</span>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		props:{
			data:{
				required:true,
				type:Object,
				default:()=>{return{}}
			}
		},
		data(){
			return {
				viewMoreDescription:100,
			}
		},
		computed:{
			viewDescription(){
				let des = this.data.description
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