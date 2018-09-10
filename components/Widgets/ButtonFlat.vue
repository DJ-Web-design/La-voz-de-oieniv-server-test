<template>
	<button class="boton">{{text}}</button>
</template>
<script>
	export default {
		props:{
			text:String,
		}
	}
</script>
<style scoped>
.boton{
	background:#ff8f00;
	border-radius: 50px;
	padding: 0 20px;
	height:36px;
	border:none;
	color:white;
	font-size:14px;
	transition:ease .4s;
	cursor:pointer;
}
.boton:hover{
	background:rgba(75, 127, 232, .3);
}
</style>