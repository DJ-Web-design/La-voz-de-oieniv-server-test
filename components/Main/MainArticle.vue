<template>
	<div class="articulo">
				<div class="divisor1">
						<h1>La Voz de OIENIV</h1>
						<div class="fb-like" data-href="http://lavozdeoieniv.com" data-layout="box_count" data-action="like"
								data-size="large" data-show-faces="true" data-share="true"></div>
						<a href="https://twitter.com/intent/user?screen_name=@lavozdeoieniv" target="_blank">
								<div class="follow-twitter">
										<span class="icon-twitter">
												<span>Seguir</span>
										</span>
								</div>
						</a>
				</div>
				<div class="divisor2">
						<h2>La Radio Donde La Protagonista Es La Palabra de Dios</h2>
						<p>Porque nos tomamos en serio Mateo 28:19-20, creemos que nuestro Dios puso en nuestras manos esta poderosa herramienta,
								como son los medios de comunicacion, que, como caballos de fuerza se encargan de llevar el mensaje de salvacion
								por los 5 continentes, asi que seguiremos dependiendo de Él, y del apoyo de su pueblo, en oracion y ofrendas
								para sostener y extender este ministerio, por su respaldo, Muchas Gracias y que mi Dios te continue Bendiciendo,
								Rica Y Poderosamente.</p>
				</div>
		</div>
</template>
<style scoped>
.pedido-titulo h1,.vota h1,.articulo .divisor1 h1 {
 margin-bottom:10px;
 text-align:center;
 color:black;
 text-shadow:2px 2px 5px #616161;
 font-family:'Lobster',cursive;
 margin-top:10px;
 font-size:40px
}
.articulo .divisor2 p {
 margin:10px 5% 15px 5%
}
.articulo .divisor2 h2 {
 text-align:center;
 margin:15px 5px 5px 10px;
 font-size:20px
}
.articulo .divisor1 div.fb-like,.articulo .divisor1 a div.follow-twitter {
 display:none
}

@media screen and (min-width:480px){
 .articulo .divisor2 p {
	margin:10px 10px 20px 10px;
 }
}
@media screen and (min-width:767px) {
 .vota h1,.articulo .divisor1 h1 {
	font-size:50px
 }
 .articulo .divisor2 p {
	margin:20px 3% 30px 3%
 }
}
@media screen and (min-width:950px) {
 .articulo {
	width:100%;
	margin:10px auto;
	overflow: hidden;
 }
 .articulo .divisor1 h1 {
	color:black;
	text-shadow:2px 2px 5px #616161;
	font-size:60px;
	font-family:'Lobster',cursive
 }
 .articulo h2,.articulo h1 {
	text-align:center
 }
 .articulo .divisor1,.articulo .divisor2 {
	height:300px;
	width:50%;
	background:rgba(255,255,255,.5)
 }
 .articulo div {
	float:left
 }
 .articulo .divisor1 div.fb-like,.articulo .divisor1 a div.follow-twitter {
	display:block;
	border-radius:5px;
	margin:20px 5% 0 15%;
	height:120px;
	width:120px;
 }
 .articulo .divisor1 div.fb-like {
 	width: auto;
 	height: auto;
 	padding: 14px;
 	min-width: 90px
 }
 .articulo .divisor1 div span {
	display:block;
	text-align:center;
	margin:20px auto;
	color:white;
	font-size:40px
 }
 .articulo .divisor1 div span span {
	font-size:18px;
	margin:20px
 }
 .articulo .divisor1 div.fb-like {
	cursor:pointer;
	background:rgb(59,89,152)
 }
 .articulo .divisor1 a div.follow-twitter {
	background:rgb(29,161,242)
 }
}
</style>