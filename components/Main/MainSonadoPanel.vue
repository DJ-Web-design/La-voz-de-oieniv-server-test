<template>
	<div class="imagen-4">
		<div class="pedido-titulo">
			<h2>Lo Mas Sonado De La Semana</h2>
		</div>
		<div class="lomaspedido">
			<figure>
				<img src="@/assets/Impulso.jpg" alt="">
				<span>
					<h3>
						<span class="cantante-top" style="margin-top:20px">Cantante: Evan Craft</span>
					</h3>
					<h3 id="song-name">Impulso</h3>
				</span>
				<div id="socialContainer">
					<SocialButton :link="'http://twitter.com/share?text='+link" twitter/>
					<SocialButton :link="'http://www.facebook.com/sharer.php?text='+link" facebook/>
				</div>
			</figure>
		</div>
	</div>
</template>
<script>
import SocialButton from "@/components/Widgets/PedidoSocialButton"
	export default {
		components:{
			SocialButton
		},
		data(){
			return {
				link: "Lo mas sonado de esta semana en La Voz de OIENIV es \"Impulso de Evan Craft\". Entra y vota por tu canción favorita"
			}
		}
	}
</script>
<style scoped>
.pedido-titulo h2 {
 margin-bottom:10px;
 text-align:center;
 color:black;
 text-shadow:2px 2px 5px #616161;
 font-family:'Lobster',cursive;
 margin-top:10px;
 font-size:40px
}
.lomaspedido {
 margin-top:10px;
 width:90%;
 height:150px;
background:#e7e5e5;
border:2px solid rgba(75,127,232,.3);
border-radius:3px;
box-shadow:1px 1px 4px grey;
z-index:1000;
 margin-left:auto;
 margin-right:auto
}
.lomaspedido span h3{
		width: 100%;
}
.lomaspedido figure span{
				text-align: left;
}
.cantante-top, 
.cantante-name,
#song-name{
		display: block;
		width: 55%;
		margin-left:45%;
}
.two-points{
		display: none
}
.lomaspedido figure{
		overflow: hidden;
	position: relative;
	height: 100%
}
.lomaspedido figure img {
 height:120px;
 margin: 15px -5px 15px -5px;
 position:absolute;
 left:5%
}
.lomaspedido figure img,.lomaspedido .pedido-letras {
 color:wheat;
 display:inline-block;
 position:absolute;
}
.lomaspedido h2 {
				color: #4F4F4F;
		text-align: left;
		font-size:20px;
		margin: 0 0 0 55%;
		width: 45%;
		position: relative;
}
#song-name{
		width: auto;
}

 @media screen and (min-width:480px) {
		.lomaspedido figure img{
				margin-left: 20px 
		}
}
@media screen and (min-width:767px) {

.lomaspedido {
	margin:10px auto;
	width:90%;
	height:250px
 }
 .lomaspedido span h3 {
	padding-top:50px;
	font-size:20px;
	color:#4f4f4f;
	font-weight:500
 }
 .lomaspedido {
	height:300px;
	background:#e7e5e5;
	border:2px solid rgba(75,127,232,.3);
	border-radius:3px;
	box-shadow:1px 1px 4px grey;
	z-index:1000
 }
	.lomaspedido figure{
	overflow: hidden;
	position: relative;
	height: 100%
 }
 .lomaspedido figure img {
	height:250px;
	margin-top:25px;
	margin-left: -15px;
 }
 .cantante-top, .cantante-name, .two-points{
		display: inline-block;
		overflow: hidden;
		width:auto
}
 .pedido-titulo h2 {
	margin-bottom:10px;
	text-align:center;
	color:black;
	text-shadow:2px 2px 5px #616161;
	font-family:'Lobster',cursive;
	margin-top:10px;
	font-size:60px
 }
}
#socialContainer{
	display:grid; 
	justify-items: center; 
	width:50%;
	float:right;
	margin-top: 10px;
	position:relative;
}
@media screen and (min-width:480px){
	#socialContainer{
		margin-top: 30px;
	}
}
@media screen and (min-width:767px){
	.cantante-top, 
	.cantante-name,
	#song-name{
		display: block;
		width: 55%;
		margin-left:45%;
	}
	#socialContainer{
		margin-top: 50px;
	}
}
</style>