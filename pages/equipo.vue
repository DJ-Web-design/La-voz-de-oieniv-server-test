<template>
	<div>
		<TeamHeader/>
		<TeamContent 
		 helpUsForm="Ayudanos a crecer" 
		 content="Compartiendono en las redes sociales"
		/>
	</div>
</template>
<script>
	import TeamHeader from "@/components/Equipo/TeamHeader";
	import TeamContent from "@/components/Equipo/TeamContent"
	export default {
		components:{
			TeamHeader,
			TeamContent
		}
	}
</script>
<style scoped>
	
</style>