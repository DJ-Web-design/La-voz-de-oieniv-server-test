<template>
	<div>
		<form @submit="submit">
			<label>Artista</label>
			<input type="text" v-model="artist" placeholder="Artista">
			<label>Canción</label>
			<input type="text" v-model="song" placeholder="Cancion">
			<label>Imagen</label>
			<input type="file" @change="getFile($event.target.files)">
			<label>Numero de voto</label>
			<select v-model="voteId">
				<option selected>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<button>Cambiar</button>
		</form>
		<output v-html="innerHTML"></output>
	</div>
</template>
<script>
	import {post} from "axios";
	import {votesDatabase} from "@/plugins/firebase"
	export default{
		data(){
			return{
				artist:"",
				song:"",
				voteId:"1",
				file:undefined,
				innerHTML:""
			}
		},
		methods:{
			async getFile(file){
				const invalidFormat = 
				file[0].type != "image/png" && 
				file[0].type != "image/jpeg" && 
				file[0].type != "image/gif";
		    	if (invalidFormat) {
		    	    alert("Por favor seleccione una imagen");
		    	    document.getElementById("archi").value = ""
		    	} else {
		    	    this.file = file[0];
		    	    const img = await this.readFile(file[0]);
		    	    this.innerHTML = `<img src="${img}"/>`;
		    	}
			},
			readFile(file) {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = ({target}) => resolve(target.result);
					reader.onerror = () => reject("Error al abrir imagen");
				});
			},
			async submit(e){
				e.preventDefault();
				if (confirm("¿Esta seguro de su eleccion?.\nRevise que todos los datos esten correctos.")) {
					
					const image = await this.readFile(this.file);
					let voteId;
					switch(this.voteId){
						case "1":
							voteId = "uno"
							break;
						case "2":
							voteId = "dos"
							break;
						case "3":
							voteId = "tres"
							break;
						default:
							voteId = "uno"
							break;
					}
					const data = {
						artista:this.artist,
						cancion:this.song,
						voto:`${this.song} de ${this.artist}`,
						image,
						votesCount:0
					}
					await votesDatabase.child(voteId).set(data);
					
					alert("El voto ha sito cambiado");
				}
			}
		}
	}
</script>
<style scoped>
	form {
		margin-top: 50px;
	}
	form label, 
	form input, 
	form button, 
	form select{
		display:block;
		margin:20px auto;
	}
	form label{
		text-align: center;
	}
</style>