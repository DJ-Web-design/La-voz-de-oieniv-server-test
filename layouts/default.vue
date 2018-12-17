<template>
  <div>
    <div id="fb-root"></div>
    <BaseMenu/>
    <nuxt/>
    <BaseFooter/>
  </div>
</template>
<script>
  import BaseMenu from "~/components/BaseMenu";
  import BaseFooter from "~/components/BaseFooter";

  export default {
    components:{
      BaseMenu,
      BaseFooter
    },
    mounted(){
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '126968564676905',
          xfbml      : true,
          version    : 'v3.0'
        });
        FB.AppEvents.logPageView();
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/es_LA/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
</script>
<style>
*{
  margin:0;
  padding: 0;
}
body {
  font-family:Roboto;
}
@font-face {
  font-family:Lobster;
  src:url(~/assets/fonts/Lobster.ttf);
}
@font-face{
  font-family:"Arapey";
  src:url(~/assets/fonts/Arapey.ttf)
}
@font-face {
  font-family:"Roboto";
  src:url(~/assets/fonts/Roboto.ttf)
}
@font-face {
 font-family:'icomoon';
 src:url('~/assets/fonts/icomoon.eot?ndzgob');
 src:url('~/assets/fonts/icomoon.eot?ndzgob#iefix') format('embedded-opentype'),url(~/assets/fonts/icomoon.ttf?ndzgob) format('truetype'),url(~/assets/fonts/icomoon.woff?ndzgob) format('woff'),url('~/assets/fonts/icomoon.svg?ndzgob#icomoon') format('svg');
 font-weight:400;
 font-style:normal
}
[class^="icon-"],[class*=" icon-"] {
 font-family:'icomoon'!important;
 speak:none;
 font-style:normal;
 font-weight:400;
 font-variant:normal;
 text-transform:none;
 line-height:1;
 -webkit-font-smoothing:antialiased;
 -moz-osx-font-smoothing:grayscale
}
.icon-headphones:before {
 content:"\e910"
}
.icon-music:before {
 content:"\e911"
}
.icon-podcast:before {
 content:"\e91c"
}
.icon-feed:before {
 content:"\e91d"
}
.icon-envelop:before {
 content:"\e945"
}
.icon-users:before {
 content:"\e972"
}
.icon-spinner9:before {
 content:"\e982"
}
.icon-menu:before {
 content:"\e9bd"
}
.icon-cross:before {
 content:"\ea0f"
}
.icon-checkmark:before {
 content:"\ea10"
}
.icon-play:before {
 content:"\ea1c"
}
.icon-pause:before {
 content:"\ea1d"
}
.icon-volume-high:before {
 content:"\ea26"
}
.icon-volume-medium:before {
 content:"\ea27"
}
.icon-volume-low:before {
 content:"\ea28"
}
.icon-volume-mute:before {
 content:"\ea2a"
}
.icon-circle-right:before {
 content:"\ea42"
}
.icon-circle-left:before {
 content:"\ea44"
}
.icon-facebook:before {
 content:"\ea90"
}
.icon-instagram:before {
 content:"\ea92"
}
.icon-whatsapp:before {
 content:"\ea93"
}
.icon-twitter:before {
 content:"\ea96"
}
.icon-youtube:before {
 content:"\ea9d"
}
</style>
