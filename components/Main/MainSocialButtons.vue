<template>
	<div>
		<div class="social-media">
			<ShareButtonFacebook href="http://www.facebook.com/sharer.php?u=https://www.lavozdeoieniv.tk" />
			<ShareButtonTwitter href="https://twitter.com/intent/user?screen_name=@lavozdeoieniv" follow/>
		</div>
		<div class="social-media social2">
			<ShareButtonInstagram/>
			<ShareButtonYoutube/>
		</div>
    </div>
</template>
<script>
	import ShareButtonTwitter from "@/components/Widgets/ShareButtonTwitter"
	import ShareButtonFacebook from "@/components/Widgets/ShareButtonFacebook"
	import ShareButtonInstagram from "@/components/Widgets/ShareButtonInstagram.vue"
	import ShareButtonYoutube from "@/components/Widgets/ShareButtonYoutube.vue"
	export default {
		components:{
			ShareButtonFacebook,
			ShareButtonTwitter,
			ShareButtonInstagram,
			ShareButtonYoutube
		}
	}
</script>
<style scoped>
.social-media div{
	float:left;
	margin-top:10px;
	margin-bottom:10px;
}
@media screen and (min-width:767px){
	.social-media div{
		display:none;
	}
}
</style>