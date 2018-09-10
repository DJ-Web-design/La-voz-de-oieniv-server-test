<template>
	<div class="lineaRedes">
        <a href="http://www.facebook.com/sharer.php?u=https://www.lavozdeoieniv.tk" target="_blank">
            <div class="boton-face">
                <span class="icon-facebook">
                    <span>Compartir</span>
                </span>
            </div>
        </a>
        <a href="http://twitter.com/share?text=Visita www.lavozdeoieniv.tk Y no te pierdas lo nuevo que te trae @lavozdeoieniv 107.7FM"
            target="_blank">
            <div class="boton-twitter">
                <span class="icon-twitter">
                    <span>Twittear</span>
                </span>
            </div>
        </a>
        <a href="https://www.instagram.com/lavozdeoieniv/" target="_blank">
            <div class="boton-instagram">
                <span class="icon-instagram">
                    <span>Seguir</span>
                </span>
            </div>
        </a>
        <a href="">
            <div class="boton-youtube">
                <span class="icon-youtube">
                    <span>Subscribirse</span>
                </span>
            </div>
        </a>
        <template v-if="bodyWidth > 767">
          <div class="lineaFace linea">
              <div 
                class="fb-page" 
                data-href="https://www.facebook.com/lavozdeoieniv" 
                data-tabs="timeline" 
                data-width="248" 
                data-height="450" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/lavozdeoieniv/" class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/lavozdeoieniv/">
                    La Voz de Oieniv
                  </a>
                </blockquote>
              </div>
          </div>
          <div class="lineaTwitter linea">
              <a 
                class="twitter-timeline" 
                data-lang="es" 
                data-width="248" 
                data-height="450" 
                data-link-color="#2B7BB9" 
                href="https://twitter.com/lavozdeoieniv">
              Tweets by lavozdeoieniv</a>
          </div>
        </template>
    </div>
</template>
<script>
	export default {
    data:function(){
      return {
        bodyWidth:0
      }
    },
    mounted:function(){
      this.bodyWidth = document.body.clientWidth
    }
	}
</script>
<style scoped>

.lineaRedes a div {
 display:none
}

 .boton-face {
  background:rgb(59,89,152);
 }

.fb-page,.lineaFace,.lineaTwitter,.twitter-timeline {
 display:none
}

@media screen and (min-width:767px) {
 .lineaRedes {
  height:500px
 }
 .lineaRedes div {
  float:left;
  display: block
 }
  .lineaRedes a div:hover {
  box-shadow:2px 2px 3px gray
 }
 .lineaRedes a .boton-twitter {
  background:rgb(29,161,242);
  margin-top:155px
 }
 .lineaRedes a .boton-instagram {
  background:rgb(228,64,95);
  margin-top:280px
 }
 .lineaRedes a .boton-youtube {
  background:rgb(205,32,31);
  margin-top:405px
 }
 .lineaRedes a div span {
  color:white;
  margin-left:5px;
  font-size:40px
 }
 .lineaRedes a div span span {
  font-weight:500;
  margin-left:5%;
  vertical-align:.5em;
  font-size:20px;
  font-family: Roboto
 }
  .lineaRedes {
  height:500px
 }
 .lineaRedes div {
  float:left;
  display: block
 }
 .linea {
  position:absolute;
  width:248px;
  margin-top:30px;
  margin-left:5%;
  height:450px
 }
 .lineaTwitter {
  left:33.5%
 }
 .fb-page,.lineaface,.lineaTwitter,.twitter-timeline {
  display:block
 }
 .lineaRedes a div {
  background:rgb(59,89,152);
  border-radius:3px;
  margin-top:30px;
  position:absolute;
  right:5%;
  display:block;
  float:left;
  width:23%;
  height:40px;
  transition:.1s ease-in-out
 }
 .lineaRedes a div:hover {
  box-shadow:2px 2px 3px gray
 }
 .lineaRedes a .boton-twitter {
  background:rgb(29,161,242);
  margin-top:155px
 }
 .lineaRedes a .boton-instagram {
  background:rgb(228,64,95);
  margin-top:280px
 }
 .lineaRedes a .boton-youtube {
  background:rgb(205,32,31);
  margin-top:405px
 }
 .lineaRedes a div span {
  color:white;
  margin-left:5px;
  font-size:40px
 }
 .lineaRedes a div span span {
  font-weight:500;
  margin-left:5%;
  vertical-align:.5em;
  font-size:20px
 }
}
</style>