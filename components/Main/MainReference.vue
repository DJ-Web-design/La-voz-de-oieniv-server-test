<template>
	<div class="main-container">
		<div class="child">
			<img src="@/assets/heart.svg">
			<div>
				<h3>Vota</h3>
				<p>Participa y escoge tu canción favorita todas las semana.</p>
				<span>Vota por tu canción</span>
			</div>
		</div>
		<div class="child-blue">
			<img src="@/assets/bubbles.svg">
			<div>
				<h3>Interactua</h3>
				<p>Mira nuestra transmision en vivo, comparte con nosotros y danos tu opinión.</p>
				<span>Transmision en vivo</span>
			</div>
		</div>
		<div class="child">
			<img src="@/assets/profile.svg">
			<div>
				<h3>Descubre</h3>
				<p>Enterate un poco mas acerca de nosotros, nuestra historia y porque estamos aquí.</p>
				<span>Acerca de nosotros</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			goTo(link){
				this.$router.push(link)
			}
		}
	}
</script>
<style scoped>
			.main-container {
			height: 600px;
		}
		.main-container .child {
			background: #4682b4;
			display: block;
			width: 90%;
			height: 30%;
			margin: 10px auto;
			color: #fff;
			text-align: center;
			position: relative;
			border-radius: 5px;
		}
		.main-container .child div {
			width: 80%;
			float: left;
		}
		.main-container .child div h3 {
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 30px;
		}
		.main-container .child div p {
			margin-bottom: 10px;
			padding: 5px 20px 5px 70px;
			text-align: left
		}
		.main-container .child div span {
			color: #fff;
			text-decoration: none;
		}
		.main-container .child img {
			float: left;
			width: 15%;
			margin:50px 0 50px 5%;
		}
		.main-container .child-blue {
			background: #fff;
			display: block;
			width: 90%;
			height: 30%;
			margin: 10px auto;
			color: #4682b4;
			text-align: center;
			position: relative;
			border-radius: 5px;
		}

		.main-container .child-blue div {
			width: 80%;
			float: left;
		}
		.main-container .child-blue div h3 {
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 30px;
		}
		.main-container .child-blue div p {
			margin-bottom: 10px;
			padding: 5px 20px 5px 70px;
			text-align: left
		}
		.main-container .child-blue div span {
			color: #4682b4;
			text-decoration: none;
		}
		.main-container .child-blue img {
			float: left;
			width: 15%;
			margin:50px 0 50px 5%;
		}
</style>