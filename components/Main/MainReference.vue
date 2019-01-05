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
				<nuxt-link to="/radio">Transmision en vivo</nuxt-link>
			</div>
		</div>
		<div class="child">
			<img src="@/assets/profile.svg">
			<div>
				<h3>Descubre</h3>
				<p>Enterate un poco mas acerca de nosotros, nuestra historia y porque estamos aquí.</p>
				<nuxt-link to="/nosotros">Acerca de nosotros</nuxt-link>
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
		height: 900px;
		position: relative;
		display: block;
	}
	.main-container .child-blue,
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
	.main-container .child-blue div,
	.main-container .child div {
		width: 100%;
		float: left;
	}
	.main-container .child-blue div h3,
	.main-container .child div h3 {
		margin: 10px 0;
		font-size: 30px;
	}
	.main-container .child-blue div p,
	.main-container .child div p {
		margin-bottom: 10px;
		padding: 5px 20px 5px 70px;
		text-align: left;
	}
	.main-container .child div a,
	.main-container .child div span {
		color: #fff;
		text-decoration: none;
	}
	.main-container .child-blue img,
	.main-container .child img {
		width: 95.5px;
		margin:10px auto 0;
		display: block;
	}
	.main-container .child-blue {
		background: #fff;
		color: #4682b4;
	}
	.main-container .child-blue div span,
	.main-container .child-blue div a {
		color: #4682b4;
		text-decoration: none;
	}
	@media screen and (min-width: 708px) {
		.main-container .child-blue img,
		.main-container .child img {
			float: left;
			width: 95.5px;
			margin:42px 0  0 5%;
		}
		.main-container {
			height: 600px;
			position: relative;
			display: block;
		}
	}
	@media screen and (min-width:950px){
		.main-container {
			height: 400px;
		}
		.main-container .child,
		.main-container .child-blue{
			text-align: center;
			display: inline-block;
			width: 30%;
			margin: 0 0 0 2.5%;
			height: 100%;
		}
		.main-container .child img,
		.main-container .child-blue img{
			margin: 40px auto;
			float: none;
			display: block;
		}
		.main-container .child div,
		.main-container .child-blue div {
			width: 100%;
		}
		.main-container .child div a,
		.main-container .child-blue div a,
		.main-container .child div span,
		.main-container .child-blue div span {
			position: absolute;
			bottom: 30px;
			display: block;
			width: 100%;
			left: 0;
		}
	}
</style>