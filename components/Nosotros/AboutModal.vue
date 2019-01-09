<template>
	<div id="modal">
		<div id="shadow">
			<div id="main">
				<div id="header">
					<button @click="closeModal">cerrar</button>
				</div>
				<h3 id="our-count">Nuestra Cuenta</h3>
				<h4 id="name">A Nombre de: Fundación Radial <span>La voz de Oieniv</span></h4>
				<ul id="lista">
					<li>N° Cuenta: 0116-0150-20-0028586719</li>
					<li>Tipo de cuenta: Corriente</li>
					<li>Banco: B.O.D.</li>
					<li>Rif: J-410931183</li>
				</ul>
				<h4 id="outside">Si No Eres de Venezuela</h4>
				<span>Puedes Apoyarnos con 1$</span>
				<div id="paypal-button"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			closeModal(){
				this.$parent._data.showModal = false;
			}
		},
		mounted() {
			setInterval(()=>waitToRender(), 1000);
			function waitToRender() {
				if (paypal) {
					render();
					clearInterval(()=>waitToRender(), 1000);
				}
			};
		}
	}
</script>
<style scoped>
	#modal {
		overflow: hidden;
	}
	#shadow {
		left: 0;
		top: 0;
		position: fixed;
		background: rgba(0,0,0,.7);
		width: 100%;
		height: 100%;
	}
	#main{
		background: #f7f7f7;
		width: 80%;
		height: 80%;
		margin: 18% 10% 5% 10%;
		text-align: center;
		border-radius: 3px;
	}
	@media screen and (min-width:480px){
		#main {
			margin: 15% 10% 5% 10%;
		}
	}	
	@media screen and (min-width:767px){
		#main {
			margin: 8% 20% 5% 20%;
			width: 60%;
		}
	}
	#header {
		background: #32559C;
		height: 35px;
	}
	#header button {
		background: #f1f1f1;
		border: none;
		height: 30px;
		margin: 2.5px 10px;
		padding: 0 20px;
		border-radius: 3px;
		float: right;
		-webkit-box-shadow: 1px 1px 1px;
		box-shadow: 1px 1px 1px;
		cursor: pointer;
	}
	@media screen and (min-width:767px){
		#our-count, #outside {
			margin: 2.5% auto;
			color: gray;
		}
	}
	#name {
		padding: 0 10%;
		color: gray;
	}
	#name span {
		font-family: Arapey;
		font-size: 22px;
		color:black;
	}
	#lista {
		overflow: hidden;
	}
	#lista li {
		list-style: none;
		margin: 2% auto;
		text-align: left;
		padding: 0 10%; 
	}
	@media screen and (min-width:480px){
		#lista li {
			padding: 0 20%; 
		}	
	}
	@media screen and (min-width:767px){
		#lista li {
			padding: 0 30%; 
		}
	}
</style>