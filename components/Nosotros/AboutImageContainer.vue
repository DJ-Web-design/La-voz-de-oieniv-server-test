<template>
	<div class="img-container">
		<img src="~/assets/banner-radio-en-linea.jpg" alt="Radio la voz de OIENIV Acerca de nosotros">
		<div id="text-container">
			<h1>Acerca de Nosotros</h1>
			<img src="~/assets/logo.png">
			<p>En esta sección podras leer acerca de lo que trata este proyecto, nuesta historia, misión, visión, nuestro equipo de trabajo, asi conoceras mas acerca de esta radio, La Voz de OIENIV, La Radio donde La Protagonista es La Palabra de Dios.</p>
		</div>
	</div>
</template>
<style scoped>
.img-container {
	position: relative;
}
div.img-container img:first-child{
    width: 100%;
    background-size:cover;
    filter: brightness(.7);
}
#text-container {
	position: absolute;
	top: 20px;
	color: white;
	text-align: center;
}
#text-container h1{
	font-family: Arapey;
	font-size: 30px;
}
#text-container img{
	display: none;
	width: auto;
	margin: 50px 0;
}
#text-container p {
	width: 80%;
	margin: 10px auto;
	font-size: 16px;
}
@media screen and (min-width: 950px){

div.img-container img:first-child{
    width: 100%;
    filter: blur(3px) brightness(.7);
}
#text-container {
	top: 100px;
}
#text-container h1{
	font-size: 50px;
}
#text-container img{
	display: block;
	margin: 50px auto 100px auto;
}
#text-container p {
	width: 80%;
	margin: auto;
	font-size: 18px;
}
}
</style>