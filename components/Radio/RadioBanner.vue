<template>
	<div class="bannerRadio">
        <img src="@/assets/logo.png" alt="Musica cristiana en vivo la voz de oieniv">
        <h1>Radio Online La Voz de OIENIV</h1>
        <p>Gracias por decidir escuchar La Voz de OIENIV, No se pierda nuestros programas en vivo, Comparta, Escuche su musica favorita, Pida Oración por sus peticiones, Y no olvide: <span>"Si Dios esta con nosotros, ¿Quien contra nosotros?".</span></p>
    </div>
</template>
<style scoped>
.bannerRadio{
	background-image: url(~/assets/banner-radio-en-linea.jpg);
	background-size: cover;
	width: 100%;
	height: 500px;
	text-align: center;
	padding: 100px 0;
}
.bannerRadio h1{
	color: white;
	display: block;
	margin-top: 50px;
}
.bannerRadio p{
	color: white;
	display: block;
	width: 60%;
	font-size: 20px;
	margin: 40px auto;
}
.bannerRadio p span {
	color: #f7f7f7;
	font-weight: 600;
}
@media screen and (min-width:480px){
	.bannerRadio p{
		margin: 100px auto;
	}
}
</style>