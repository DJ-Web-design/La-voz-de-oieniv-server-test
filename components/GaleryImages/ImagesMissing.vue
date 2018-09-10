<template>
	<div id="main">
	        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/></svg>
		<h3>Ups. Lo Sentimos</h3>
		<p>En este momento no tenemos imagenes disponibles<br/>Regrese mas tarde.</p>
	</div>
</template>
<style scoped>
	div#main {
		text-align: center;
		margin: 100px auto;
	}
	#main h3 {
		font-size: 30px;
		margin:20px auto;
		color: gray;
	}
	#main p {
		font-size: 20px;
		color: rgba(0,0,0,.8)
	}
	@media screen and (min-width:767px){
		#main h3 {
			font-size: 60px;
		}
		#main p {
			font-size: 25px;
		}
	}
</style>
