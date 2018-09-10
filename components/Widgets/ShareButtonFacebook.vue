<template>
	<div class="boton-fb">
		<a :href="href" target="_blank">
			<div class="fb-boton">
				<span class="icon-facebook">
					<span>Compartir</span>
				</span>
			</div>
		</a>
	</div>
</template>
<script>
	export default {
		props:{
			href:String,
			mini:Boolean
		}
	}
</script>
<style scoped>
	.boton-fb {
 margin-left:5%;
 margin-right:2.5%;
 border-radius:3px;
 width:42.5%;
 height:30px;
 font-size:20px;
 position:relative;
}
.boton-fb span {
 color:white;
 display:block;
 position:absolute;
 font-size:28px;
}
.boton-fb span span {
	font-family:Roboto;
 color:white;
 top:7px;
 left:45px;
 z-index:3;
 font-size:15px;
 padding-bottom:20px
}
.fb-boton {
 border-radius:3px;
 width:100%;
 height:100%;
 background:rgb(59,89,152);
}

@media screen and (min-width:480px) {
 .boton-fb {
  width:42.5%;
  height:40px
 }
 .boton-fb span {
  top:2px;
  font-size:36px;
  left:10px
 }
 .boton-fb span span {
  top:9px;
  left:60px;
  font-size:18px
 }
}
</style>