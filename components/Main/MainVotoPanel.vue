<template>
	<div class="vota">
		<a name="vota"></a>
		<h2>Vota por tu Favorita</h2>
		<form>
			<input 
			 v-if="!votesLoad"
			 v-model="checked"
			 class="radio"
			 type="radio"
			 name="vota"
			 id="1"
			 value="uno"
			 checked
			>
			<label class="label1" for="1">
				<article class="vota1">
					<template v-if="!votesLoad">
						<img :src="votos.uno.image" alt="votos.uno.voto">
						<p class="padding-top">Artista: {{votos.uno.artista}}</p>
						<p>{{votos.uno.cancion}}</p>
					</template>
					<template v-else>
						<img class="load" src="~/assets/spinner.svg" style="margin:auto; width: 50px">
					</template>
				</article>
			</label>
			<input
			 v-if="!votesLoad"
			 checked="checked"
			 v-model="checked"
			 class="radio"
			 type="radio"
			 name="vota"
			 id="2"
			 value="dos"
			>
			<label class="label2" for="2">
				<article class="vota2">
					<template v-if="!votesLoad">
						<img :src="votos.dos.image" alt="votos.dos.voto">
						<p class="padding-top">Artista: {{votos.dos.artista}}</p>
						<p>{{votos.dos.cancion}}</p>
					</template>
					<template v-else>
						<img class="load" src="~/assets/spinner.svg" style="margin:auto; width: 50px">
					</template>
				</article>
			</label>
			<input
			 v-if="!votesLoad"
			 v-model="checked"
			 class="radio"
			 type="radio"
			 name="vota"
			 id="3"
			 value="tres"
			>
			<label class="label3" for="3">
				<article class="vota3">
					<template v-if="!votesLoad">
						<img :src="votos.tres.image" alt="votos.tres.voto">
						<p class="padding-top">Artista: {{votos.tres.artista}}</p>
						<p>{{votos.tres.cancion}}</p>
					</template>
					<template v-else>
						<img class="load" src="~/assets/spinner.svg" style="margin:auto; width: 50px">
					</template>
				</article>
			</label>
			<button
			 :disable="votesLoad"
			 @click="votar"
			 class="buttonPlain"
			 :style="sending === true ? '' : 'cursor:pointer'"
			>
				<span v-if="sending === false">Enviar</span>
				<img
				 v-else src="@/assets/loading-music-vote.svg"
				 alt="Carga del envio de votos"
				 style="width:40px"
				 class="load"
				/>
			</button>
		</form>
	</div>
</template>
<script>
	import {votesDatabase} from "@/plugins/firebase";
	export default {
		props:{
			votesLoad:{
				type:Boolean,
				required:true,
				default:()=>{return true}
			},
			votos:{
				type:Object
			}
		},
		async mounted(){
			try {
				await votesDatabase.once("value",snap=>{
					this.votesCounter.uno = snap.val().uno.votesCount;
					this.votesCounter.dos = snap.val().dos.votesCount;
					this.votesCounter.tres = snap.val().tres.votesCount;
				});
			} catch(err) {
				alert("Error al obtener datos, ¡Recargue la pagina!");
			}
			votesDatabase.on("child_changed",snap=>{
				this.votesCounter.uno = snap.val().uno.votesCount;
				this.votesCounter.dos = snap.val().dos.votesCount;
				this.votesCounter.tres = snap.val().tres.votesCount;
			});
		},
		destroyed() {
			votesDatabase.off("child_changed");
		},
		data(){
			return {
				votesCounter:{},
				checked:"",
				successVote:false,
				errorVote:false,
				againVote:false,
				sending:false
			}
		},
		methods:{
			async votar(e) {
				e.preventDefault();
				if (localStorage.getItem('voto')) {
					this.$parent._data.modalMessage = "Ya emitiste tu voto";
					this.$parent._data.modalContent = "Por favor intentalo la semana que viene";
					this.$parent._data.modalMode = "info";
					this.$parent._data.viewModal = true;
				} else {
					try {
						await votesDatabase
							.child(this.checked)
							.child("votesCount")
							.set(this.votesCounter[this.checked] + 1);

						localStorage.setItem("voto", this.votos[this.checked].voto);
						this.$parent._data.modalMode = "ok";
						this.$parent._data.modalMessage = "Enviado Correctamente!!!";
						this.$parent._data.modalContent = "¿Quieres Compartir tu voto?";
						this.$parent._data.viewModal = true;
						this.$parent._data.vote = this.votos[this.checked].voto;
						FB.AppEvents.logEvent("Votos");
					} catch(err){
						this.$parent._data.modalMode = "error";
						this.$parent._data.modalMessage = "Hubo un error inesperado!!!";
						this.$parent._data.modalContent = "Por favor intentalo de nuevo";
						this.$parent._data.viewModal = true;
					}
				}
			}
		}
	}
</script>
<style scoped>
.vota h2,.articulo {
 margin-bottom:10px;
 text-align:center;
 color:black;
 text-shadow:2px 2px 5px #616161;
 font-family:'Lobster',cursive;
 margin-top:10px;
 font-size:40px
}
@media screen and (min-width:767px){
 .vota h2,.articulo .divisor1 h2 {
	font-size:50px
 }
 .vota .vota2,.vota .vota3 {
	margin-top:10px
 }
}
.vota article {
 background:#e0e0e0;
 border:2px solid rgba(75,127,232,.3);
 box-shadow:1px 1px 4px gray;
 border-radius:3px;
 text-align:left;
 margin:10px 0 0 10px;
 width:95%;
 height:90px;
 transition:.2s ease;
 -moz-transition:.2s ease;
 -webkit-transition:.2s ease
}
.vota input[type="radio"] {
 display:none
}
.vota article img {
 position:relative;
 margin:5px 0 0 0;
 height:80px;
 float:left
}
.vota article p {
 color:#4F4F4F;
 display:block;
 font-size:15px;
 padding-top:10px;
 margin:0
}
.vota {
 text-align:center;
overflow: hidden;
 width:90%;
 margin-left:auto;
 margin-right:auto;
 position:relative
}
.vota h2 {
 margin-bottom:10px;
 text-align:center;
 color:black;
 text-shadow:2px 2px 5px #616161;
 font-family:'Lobster',cursive;
 margin-top:10px;
 font-size:40px
}
.vota label {
 height:140%;
 display:block;
 cursor:pointer;
 position:relative
}
.vota button {
 margin-top:20px;
 margin-bottom: 20px;
 width:60%;
 font-size:18px;
 background:#4B7FE8;
 color:#f7f7f7;
 border-radius:50px;
 border:none;
 height: 40px;
 transition:ease .3s;
}
.vota button:hover {
 box-shadow:2px 2px 3px gray;
 color:#4B7FE8;
 background:#f7f7f7
}
.vota label::before {
 content:"";
 width:20px;
 height:20px;
 border-radius:50%;
 display:inline-block;
 position:absolute;
 right:8%;
 top:32px;
 z-index:2;
 border:3px solid #4A7EE8;
 transition:ease 0.3s;
 -moz-transition:ease 0.3s;
 -webkit-transition:ease 0.3s
}
.vota label:hover>article {
 box-shadow:3px 3px 4px gray;
 background:#c7c7c7
}
.vota input[type="radio"]:checked+label::before {
 background:rgb(235,159,47)
}
@media screen and (min-width:480px) {
 .vota article img {
	float:none;
	margin:5px auto 0 auto;
	display:block;
	height:120px;
	width:120px
 }
 .vota h2 {
	font-size:25px;
 }
 .vota article {
	text-align:center;
	height:260px;
	position:relative;
	float:left;
	width:30%;
	margin-left:2%
 }
 .vota article p {
	padding-top:0
 }
 .vota {
	width:98%;
 }
 .vota button {
	margin-top:10px;
 }
 .vota label::before {
	top:210px;
	left:15%
 }
 .vota label.label2::before {
	left:47.5%
 }
 .vota label.label3::before {
	left:80%
 }
}
@media screen and (min-width:767px) {
 .vota {
	width:100%;
	margin-left:0
 }
 .vota article {
	float:left;
	width:30%
 }
 .vota article img {
	margin:5px auto 0 auto
 }
 .vota h2 {
	font-size:50px;
	margin-bottom:30px
 }
 .vota label::before {
	width:25px;
	height:25px;
	border:5px solid #4B7FE8
 }
}
@media screen and (min-width:950px) {
 .vota {
	width:100%;
	overflow:hidden
 }
 .vota article p {
	top:70px;
	position:absolute;
	left:140px;
	width:50%;
	color:#4F4F4F;
	display:block;
	font-size:18px
 }
 .vota article p.padding-top {
	top:20px
 }
 .vota article img {
	margin:10px 0 0 0
 }
 .vota article {
	text-align:left;
	float:left;
	height:140px;
	margin-left:5%;
	margin-right:5%;
	display:block;
	width:90%
 }
 .vota h2 {
	margin:15px 0 20px 0;
	font-size:60px
 }
 .vota button {
	margin-top:15px;
	width:30%;
 }
 .vota label::before {
	border:5px solid #4B7FE8;
	top:57px;
	left:88%
 }
 .vota label.label2::before {
	top:211px;
	left:88%
 }
 .vota label.label3::before {
	top:365px;
	left:88%
 }
}
@media screen and (min-width:950px) {
 .separador {
	width:100%;
	height:10px;
	background:black
 }
 .vota article {
	background:#e7e5e5
 }
}
.load{
	animation:rotate infinite linear .6s;
}
@keyframes rotate {
	from {
		transform:rotate(0deg)
	} to {
		transform:rotate(360deg)
	}
}
</style>