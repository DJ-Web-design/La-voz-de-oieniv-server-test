<template>
	<footer class="mdl-mini-footer">
		<div class= "mdl-mini-footer__left-section">
			<div class="mdl-logo">
				<nuxt-link to="/">
					<img class="mdl-logo" src="@/assets/logo.png" alt="La Voz de OIENIV musica cristiana en linea">
				</nuxt-link>
				<span id="title">La Voz de OIENIV</span>
			</div>
			<ul class="mdl-mini-footer__link-list" style="display:block">
				<li>
					<nuxt-link to="/about">Contactanos</nuxt-link>
				</li>
				<!--<li>
					<nuxt-link to="/equipo">Apoyanos</nuxt-link>
				</li>-->
				<li>
					<nuxt-link to="/">Vota</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="mdl-mini-footer__right-section">
			<button @click="goToFacebook" class="mdl-mini-footer__social-btn" id="icon-face">
				<span class="icon-facebook" style="color: rgb(59, 89, 152)"></span>
			</button>
			<button @click="goToTwitter" class="mdl-mini-footer__social-btn" id="icon-twit">
				<span class="icon-twitter" style="color: rgb(29, 161, 242)"></span>
			</button>
			<button @click="goToInstagram" class="mdl-mini-footer__social-btn" id="icon-inst">
				<span class="icon-instagram" style="color: rgb(228, 64, 95)"></span>
			</button>
			<button @click="goToYoutube" class="mdl-mini-footer__social-btn" id="icon-yt">
				<span class="icon-youtube" style="color: rgb(205, 32, 31)"></span>
			</button>
		</div>
	</footer>
</template>
<script>
	export default {
		methods: { 
			goToFacebook: function () { 
				window.open("https://www.facebook.com/lavozdeoieniv", "_blank") 
			}, 
			goToTwitter: function () { 
				window.open("https://www.twitter.com/lavozdeoieniv", "_blank") 
			}, 
			goToInstagram: function () { 
				window.open("https://www.instagram.com/lavozdeoieniv", "_blank") 
			}, 
			goToYoutube: function () { 
				window.open("https://www.youtube.com/channel/UCjqEhezX3BmaWfp6UXgQxvg", "_blank") 
			} 
		}
	}
</script>
<style scoped>
.mdl-mini-footer {
 display:-webkit-flex;
 display:-ms-flexbox;
 display:flex;
 -webkit-flex-flow:row wrap;
 -ms-flex-flow:row wrap;
 flex-flow:row wrap;
 -webkit-justify-content:space-between;
 -ms-flex-pack:justify;
 justify-content:space-between;
 padding:32px 5%;
 color:rgb(158,158,158);
 background-color:rgb(66,66,66);
 width:90%;
}
.mdl-mini-footer:after {
 content:'';
 display:block
}
.mdl-mini-footer .mdl-logo {
 line-height:36px
}
.mdl-mini-footer--link-list,.mdl-mini-footer__link-list {
 display:-webkit-flex;
 display:-ms-flexbox;
 display:flex;
 -webkit-flex-flow:row nowrap;
 -ms-flex-flow:row nowrap;
 flex-flow:row nowrap;
 list-style:none;
 margin:0;
 padding:0
}
.mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li {
 margin-bottom:10px;
 margin-right:16px;
 display:inline-block;
}
@media screen and (min-width:760px) {
 .mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li {
  line-height:36px
 }
}
.mdl-mini-footer--link-list a,.mdl-mini-footer__link-list a {
 color:inherit;
 text-decoration:none;
 white-space:nowrap
}
.mdl-mini-footer--left-section,.mdl-mini-footer__left-section {
 display:inline-block;
 -webkit-order:0;
 -ms-flex-order:0;
 order:0
}
.mdl-mini-footer--right-section,.mdl-mini-footer__right-section {
 display:inline-block;
 -webkit-order:1;
 -ms-flex-order:1;
 order:1
}
.mdl-mini-footer--right-section,.mdl-mini-footer__right-section button {
	cursor: pointer;
}
.mdl-mini-footer--social-btn,.mdl-mini-footer__social-btn {
 width:36px;
 height:36px;
 padding:0;
 margin:0;
 background-color:rgb(158,158,158);
 border:none
}

.mdl-mini-footer {
 color:#f7f7f7;
 background-color:#32559C
}
.mdl-mini-footer span {
 display:block
}
.mdl-logo a .mdl-logo {
 height:60px
}
@media screen and (min-width:767px) {
 .mdl-logo a .mdl-logo {
  height:80px
 }
}

</style>