<template>
	<div>
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		<MainSlider :slider="slider" :sliderData="sliderData"/>
		<div class="social-media">
			<ShareButtonFacebook href="http://www.facebook.com/sharer.php?u=https://www.lavozdeoieniv.tk" />
			<ShareButtonTwitter href="https://twitter.com/intent/user?screen_name=@lavozdeoieniv" follow/>
		</div>
		<MainArticle/>
		<MainReference/>
		<MainVotoPanel :votos="votos" :votesLoad="votesLoad"/>
		<MainSonadoPanel/>
		<MainSocialMedia/>
		<MainSocialButtons/>
		<MainModal 
		 v-show="viewModal" 
		 :message="modalMessage" 
		 :content="modalContent" 
		 :mode="modalMode"
		 :vote="vote"
		/>
	</div>
</template>
<script>
import ShareButtonFacebook from "~/components/Widgets/ShareButtonFacebook"
import ShareButtonTwitter from "~/components/Widgets/ShareButtonTwitter"
import MainSlider from "~/components/Main/MainSlider"
import MainArticle from "~/components/Main/MainArticle"
import MainVotoPanel from "~/components/Main/MainVotoPanel"
import MainSonadoPanel from "~/components/Main/MainSonadoPanel"
import MainSocialMedia from "~/components/Main/MainSocialMedia"
import MainSocialButtons from "~/components/Main/MainSocialButtons"
import MainModal from "@/components/Main/MainModal"
import MainReference from "@/components/Main/MainReference"
import {sliderDatabase, votesDatabase} from "@/plugins/firebase"

export default {
	components:{
		ShareButtonFacebook,
		ShareButtonTwitter,
		MainSlider,
		MainModal,
		MainReference,
		MainSocialButtons,
		MainSocialMedia,
		MainSonadoPanel,
		MainArticle,
		MainVotoPanel
	},
	async mounted(){
		var that = this;
		var slider = [];
		try {
			await sliderDatabase.once("value", snap =>{
				snap.forEach(e=>{
					let data = e.val();
					slider.push(data);
				})
			});
			that.sliderData = "slider";
			this.slider = slider;
		}catch(err) {
			that.sliderData = "server-error";
		}
		var votos;

		await votesDatabase.once("value", snap=>{
			votos = snap.val();
		});

		this.votesLoad = false;
		this.votos = votos;
	},
	data(){
		return {
			votesLoad:true,
			sliderData:"load",
			votos:undefined,
			slider:undefined,
			viewModal: false,
			modalMessage:undefined,
			modalContent:undefined,
			modalMode:undefined,
			vote:undefined,
			urlShareFace:undefined,
			urlShareTwit:undefined
		}
	},
	meta(){
		let description = "Disfruta de: musica, reflexiones, predicas, y transmisiones en vivo de nuestros programas. Solo por La Voz de OIENIV";
		return {
			meta:[
				{ name:"keywords",  hid:"keywords", content:"musica cristiana online, musica evangelica online, musica cristiana evangelica online de venezuela, radio cristiana de venezuela, emisora cristiana evangelica en linea" },
				{ name:"description", hid:"description", content:description },
				// Facebook Open Graph
				{ property:"og:title", content:"La Voz de OIENIV Radio | Emisora Cristiana En Venezuela" },
				{ property:"og:url", content:"https://www.lavozdeoieniv.tk" },
				{ property:"og:description", content:description},
				//twitter cards
				{name:"twitter:description", content:description},
			],
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-media div {
	float:left;
	margin-top:10px;
	margin-bottom:10px;
}
@media screen and (min-width:767px){
	.social-media {
		display: none;
	}
}
</style>
