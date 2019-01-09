<template>
	<div>                
		<div>
			<div id="title-count" style="margin:20px 0 10px 0">Subir Foto</div>
			<div id="formulario">
				<div>
					<label for="title"></label>
					<input type="text" name="title" id="titulo" v-model="ImageTitle" placeholder="Titulo">
				</div>
				<div>
					<label for="des"></label>
					<input type="text" name="des" id="des" v-model="ImageDescription" placeholder="Descripcion">
				</div>
				<div>
					<label for="file"></label>
					<input type="file" name="archi" id="archi" @change="imageHandler($event.target.files)">
				</div>
				<select v-model="galeria" id="gal">
					<option selected value="">Seleciona una galeria</option>
					<option>Aniversario 2017</option>
					<option>Radio Maratón</option>
					<option>Navidades 2017</option>
					<option>Eventos especiales</option>
					<option>Otros</option>
				</select>
				<div id="boton">
					<button id="btn-enviar" class="btn-lavoz" @click="recogerDatos">Subir Foto</button>
				</div>
				<output id="output"></output>
			</div>
		</div>
		<div id="title-count" style="margin:30px 0 10px 0">Subir Video</div>
			<div>
				<label for="title">Titulo:</label>
				<input type="text" name="title" id="titulo" v-model="videoMeta.title">
			</div>
			
			<div>
				<label for="des">Descripción:</label>
				<input type="text" name="des" id="des" v-model="videoMeta.des">
			</div>
			
			<div>
				<label for="file">Video:</label>
				<input type="file" name="archi" id="video" @change="videoHandler($event.target.files)">
			</div>
			<div id="boton">
				<input type="submit" id="btn-enviar" class="btn-lavoz" value="Subir Video" @click="enviarVideo" />
			</div>
		<template v-if="showLoad">
			<div class="cajaexterna">
				<div class="cajainterna animated">
					<div class="cajacentrada">
						<template v-if="subida">
							<h2>Subiendo {{ imageLoad }}</h2>
							<div>{{ progress }}%/100%</div>
							<progress id="progreso" :max="100" :value="progress"></progress>
						</template>
						<template v-else>
							<h2>Creando Miniatura</h2>
							<img src="images/double-tail-spin.svg" alt="" class="spinner">
						</template>
						<div class="cierramodal">
							<button @click="cerrarModal" class="btn-lavoz cerrarmodal" style="margin-top: 30px; position:absolute; bottom:50px; left:40%">cerrar</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	import {imageDatabase, testStorage} from "@/plugins/firebase.js";
	import {post} from "axios";

	export default {
		mounted(){
			if (this.$route.query["@cc355_1D"] && this.$route.query["@cc355_1D"] === "@mn1r1s_@1l3th") {
				this.authorized = true;
				this.access_token = this.$route.query.access_token;
				this.refresh_token = this.$route.query.refresh_token;
			} else {
				this.authorized = false;
			}
		},
		data(){
			return {
				refresh_token:undefined,
				access_token:undefined,
				authorized:false,
				file: "",
				salida: "",
				showLoad: false,
				ImageTitle:"",
				ImageDescription:"",
				galeria: "",
				progress: 0,
				subida:false,
				imageLoad: "",
				videoMeta:{
					title:null,
					des:null
				},
				video:null
			}
		},
		methods:{
			imageHandler(file) {
				const invalidFormat = 
				file[0].type != "image/png" && 
				file[0].type != "image/jpeg" && 
				file[0].type != "image/gif";
				if (invalidFormat) {
					alert("Por favor seleccione una imagen");
					document.getElementById("archi").value = "";
				} else {
					this.file = file;
				}
			},
			recogerDatos() {
				this.subida = true;
				var fileTitle = this.ImageTitle;
				var fileDes = this.ImageDescription;
				var fileGal = this.galeria;
				var typeImg;
				switch (this.file[0].type) {
					case "image/png":
						typeImg = ".png";
						break;
					case "image/jpeg":
						typeImg = ".jpg";
						break;
					case "image/gif":
						typeImg = ".gif";
						break;
				}
				if (fileTitle && fileDes && fileGal && this.file) {
					let sendFile = this.file[0];                
					var upload = testStorage.child(sendFile.name).put(sendFile);
					this.imageLoad = sendFile.name;
					this.showLoad = true;
					upload.on("state_changed", snapshot => {
						this.progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
						switch (snapshot.state) {
							case firebase.storage.TaskState.PAUSED: // or 'paused'
								console.log('Upload is paused');
								break;
							case firebase.storage.TaskState.RUNNING: // or 'running'
								console.log('Upload is running');
								break;
						}
					}, error => {
						alert("Error al subir archivo");
						this.showLoad = false;
					}, () => {
						this.subida = false;

						let reader = new FileReader();
						reader.readAsDataURL(sendFile);

						reader.onload = ({target}) =>{
							let thumb = target.result;
							imageDatabase.child("prueba").push({
								title: fileTitle,
								description: fileDes,
								url: upload.snapshot.downloadURL,
								thumb,
							})                        
							alert("Archivo subido exitosamente")
							this.showLoad = false;
						}
					});
				}
			},
			cerrarModal(e) {
				e.preventDefault();
				this.showLoad = false;
			},
			videoHandler(archivo) {
				let invalidFormat = 
				archivo[0].type != "video/3gpp" &&
				archivo[0].type != "video/x-ms-wmv" && 
				archivo[0].type != "video/mp4" && 
				archivo[0].type != "video/x-msvideo";

				if (invalidFormat) {
					alert("Por favor seleccione un video");
					document.getElementById("video").value = "";
				} else {
					this.video = archivo[0];
				}
			},
			async enviarVideo() {
				const config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
				var params = new FormData();
				params.append("file", this.video);
				params.append("description", this.videoMeta.des);
				params.append("title", this.videoMeta.title);
				params.append("access_token", this.access_token);
				params.append("refresh_token", this.refresh_token);
				try {
					await post("https://lavozdeoieniv.herokuapp.com/upload-video", params, config)
					alert("Video Subido Con Exito");
				} catch(err) {
					alert("Error Al Subir Video");
				}
			}
		}
	}
</script>
<style scoped>
	#formulario{
		margin:auto;
		width:40%;
		border: solid black 1px;
	}
	#formulario div{
		width: 70%;
		margin: auto;
	}
	#formulario option{
		margin: auto;
	}
	#boton{
		width: 60%;
		margin: auto;
	}
	
	#progreso{
		border: none;
		width: 250px;
		height: 4px;
	}
		#title-count{
	text-align: center;
	font-family: Helvetica;
	height: 50px;
	font-size: 30px;
	font-weight: 600;
	color: gray;
	margin: 25px 0 50px 0;
}
.nombre-voto{
	margin: 0 6.5%;
	float: left;
	border: 2px solid rgba(75,127,232,.3);
	box-shadow: 1px 1px 4px gray;
	border-radius: 3px;
	text-align: center;
	width: 20%;
	height: 50px;
	background: #e7e5e5
	
}
.nombre-voto > span{
	display: block;
	margin-top:  14px;
}
.cuenta-voto{
	text-align: center;
	margin: 0 11.5%;
	font-size: 25px;
	float: left;
	border: 2px solid rgba(75,127,232,.3);
	box-shadow: 1px 1px 4px gray;
	border-radius: 3px;    
	width: 10%;
	height: 80px;
}
.cuenta-voto > span{
	display: block;
	margin-top: 20px;
}
#btn-container{
	text-align: center
}
.btn-lavoz{
	margin: 40px;
	margin-bottom: 0px;
	vertical-align: middle;
	cursor: pointer;
	width: auto;
	height: 40px;
	padding: 10px 25px;
	background: #E5931A;
	border: none;
	border-radius: 5px;
	font-weight: 500;
	font-size: 15px;
	font-family: helvetica;
	box-shadow: 2px 2px 3px gray;
	color: rgb(49, 49, 49);
	transition: .2s ease;
}
#spinner{
	color: red;
}
#spinner img{
	width: 150px;
}
.btn-lavoz:hover{
	background: rgb(255, 162, 23);

}
.icon-spinner9::before{
  animation: rotar ease-in-out 2s infinite;
  
}
@keyframes rotar{
  from{
	transform: rotate(0)
  }
  to{
	transform: rotate(360)
  }
}
		.cajaexterna {
	background-color: rgba(0, 0, 0, 0.5);
	bottom: 0;
	left: 0;
	overflow: auto;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1000;
}
.cajainterna {

	background: #fff;
	margin: 6em auto 0;
	position: relative;
		width: 60%;
	height: 50%;

}
.cajacentrada {
	margin:0 auto;
	display: block;
	text-align: center;
	padding:80px 0;
}
.cajacentrada h2 {
	background: none repeat scroll 0 0 black;
	box-sizing: border-box;
	color: white;
	font-size: 15px;
	left: 0;
	margin: 0;
	padding: 5px;
	position: absolute;
	text-align: left;
	top: 0;
	width: 100%;
}
.cajacentrada p {
	margin-top: 30px;
}
.cerrar {
	position: absolute;
	right: 16px;
	top: 13px;
}
</style>