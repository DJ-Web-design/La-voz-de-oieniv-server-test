<template>
	<div>
		<h3>{{ helpUsForm }}</h3>
		<p>{{ content }}</p>
	</div>
</template>
<script>
	export default {
		props:{
			helpUsForm:{
				type:String,
				required:true,
				default:"Forma de ayudarnos",
			},
			content:{
				type:String,
				required:true,
				default:"Contenido",
			}
		}
	}
</script>
<style scoped>
	
</style>