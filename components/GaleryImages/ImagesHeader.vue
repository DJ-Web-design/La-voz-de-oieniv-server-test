<template>
	<div id="vista">
        <div>
            <div id="sb">
                <div id="social-gal">
                    <h1>Galeria de Fotos<br/>La Voz de OIENIV</h1>
					<img src="@/assets/logo.png" alt="La voz de OIENIV logo"/>
                    <p>¿No pudisde acompañarnos en nuestras actividades? ¡No te preocupes! Sientete parte de ellas. Mira, disfruta y comparte nuestros programas y actividades especiales.</p>
                    <p>
                    <span @click="openFace" class="icon-facebook fb" style="color: #f7f7f7"></span>
                    <span @click="openTwit" class="icon-twitter tw" style="color: rgb(29, 161, 242)"></span>
                    <span @click="openInst" class="icon-instagram it" style="color: rgb(228, 64, 95)"></span>
                    <span @click="openYt" class="icon-youtube yt" style="color: rgb(205, 32, 31)"></span>
                </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
        methods:{
            openFace: function() {
                window.open("https://www.facebook.com/lavozdeoieniv", "_blank")
            },
            openTwit: function() {
                window.open("https://www.twitter.com/lavozdeoieniv", "_blank")
            },
            openInst: function() {
                window.open("https://www.instagram.com/lavozdeoieniv", "_blank")
            },
            openYt: function() {
                window.open("https://www.youtube.com/channel/UCjqEhezX3BmaWfp6UXgQxvg", "_blank")
            }
        }
    }
</script>
<style scoped></style>
