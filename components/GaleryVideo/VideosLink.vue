<template>
	<div class="container">
		<div @click="goTo(link)">
			<img :src="thumb" :alt="title"/>
		</div>
		<h2>
			<span @click="goTo(link)">{{title}}</span>
		</h2>
		<p>{{description}}</p>
		<a :href="link" target="_blank">Ver en Youtube</a>
	</div>
</template>
<script>
	export default {
		props:{
			thumb:String,
			title:String,
			description:String,
			link:String,
			linkTitle:String,
		}, 
		methods:{
			goTo(path){
				this.$parent._data.path = path;
			}
		}
	}
</script>
<style scoped>
	.container{
		text-align: center;
		border:1px black solid;
		width: 70%;
		height:400px;
		margin:50px 15%;
	}
	.container img {
		margin: 10px 0 0 0;
	}
	.container h2 {
		margin: 20px auto;

	}
	.container h2 a{
		text-decoration:none;
		color:black;
	}
	.container p {
		padding: 0 5%;
	}
</style>