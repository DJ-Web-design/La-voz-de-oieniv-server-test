<template>
	<div>
		<label>Titulo</label>
		<input type="text" placeholder="Titulo" v-model="title">
		<label>Descripción</label>
		<input type="text" placeholder="Descripcion" v-model="description">
		<label>Texto de Invitacion</label>
		<textarea type="text" placeholder="Texto de invitacion" v-model="invitation"></textarea>
		<label>Texto del Boton</label>
		<select v-model="buttonText">
			<option selected value="no-button">Sin Boton</option>
			<option>Ingresa</option>
			<option>Lée Mas</option>
			<option>Entérate</option>
		</select>
		<template v-if="buttonText !== 'no-button'">
			<label>Enlace del Boton</label>
			<input type="text" placeholder="Enlace del boton" v-model="buttonLink">
		</template>
		<button @click="submit">Enviar</button>
	</div>
</template>
<script>
	import {sliderDatabase} from "@/plugins/firebase"
	export default {
		data(){
			return {
				title:"",
				description:"",
				buttonLink:"",
				invitation:"",
				buttonText:"",
			}
		},
		methods:{
			async submit(){
				let data = {
      				title:this.title, 
      				description:this.description, 
    			  	buttonText:this.buttonText,
    			  	buttonLink:this.buttonLink,
    			  	span:this.invitation,
    			  	img:'/assets/images/logo.png',
    			}
    			try {
					await sliderDatabase.push(data)
					alert("Añadida Entrada del Slider")
				} catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>
<style scoped>
	label, 
	input,
	textarea,
	button, 
	select{
		display:block;
		margin:20px auto;
	}
	label{
		text-align: center;
	}
</style>