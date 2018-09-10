<template>
	<div class="img-container">
		<img src="~/assets/banner-radio-en-linea.jpg" alt="Radio la voz de OIENIV Acerca de nosotros">
		<div id="text-container">
			<h1>Equipo La Voz de OIENIV</h1>
			<img src="~/assets/logo.png">
			<p>¿Te gustaria formar parte de nuestro equipo?. Hay muchas maneras, que no seas locutor no significa que no puedas. Si te gustaria apoyarnos sigue leyendo para enterarte las maneras en que puedes hacerlo.</p>
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