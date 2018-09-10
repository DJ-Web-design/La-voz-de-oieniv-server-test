<template>
	<a :href="link" target="_blank">
		<div class="social-button" :style="facebook === true ? colorFacebookButton : colorTwitterButton">
			<span :class="twitter === true? 'icon-twitter' : 'icon-facebook'" style="text-decoration:none">
				<span v-if="facebook === true" key="compartir">Compartir</span>
				<span v-else key="twittear">Twittear</span>
			</span>
		</div>
	</a>
</template>
<script>
	export default {
		props:{
			twitter:Boolean,
			facebook:Boolean,
			link:String,
		},
		data:()=>{
			return {
				colorFacebookButton:{
					background:"rgb(59,89,152)"
				},
				colorTwitterButton:{
					background:"rgb(29,161,242)"
				}
			}
		}
	}
</script>
<style scoped>
a{
	position: relative;
	grid-row: 1 / 2;
	text-decoration:none;
}
a div {
	text-decoration:none;
	width:30px;
	height:30px;
	border-radius:3px;
}
a div span {
	color:white;
	display: block;
	margin: 2px 2px;
	font-size:26px
}
a div span span {
	display: none;
	font-family:Roboto
}
@media screen and (min-width:767px) {
	a{
		position: relative;
	}
	a div {
		width:110px;
		height:30px;
		border-radius:5px
	}
	a div span {
		color:white;
		font-size:28px
	}
	a div span span {
		display: inline-block;
		font-size:12px;
		vertical-align:.65em
	}
}
</style>