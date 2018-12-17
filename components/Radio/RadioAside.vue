<template>
    <aside class="lateral" style="overflow: hidden; position: relative;">
        <div :style="style">
            <div id="voto">
                <h3>¿Ya votaste?</h3>
                <p><span>¿Todavia no lo has hecho?.</span><br>No olvides compartir con nosotros tu opinion.</p>
                <img src="../../assets/heart.svg">
                <nuxt-link to="/#vota">Vota Ahora</nuxt-link>
            </div>
        </div>
    </aside>
</template>
<script>
	export default{
        data(){
            return {
                scroll:0,
                style:{}
            }
        },
        mounted(){
            document.onscroll = () => {
                this.scroll = window.scrollY;
            }
        },
        watch:{
            scroll(e){
                if (e > 1225 && e < 1876) {
                    this.style = {
                        position:'fixed',
                        top:'80px',
                        right:'15px',
                        width:'25%'
                    }
                } else if ( e > 1876){
                    this.style = {
                        position:'absolute',
                        bottom:0
                    }
                } else {
                    this.style = {};
                }
            }
        }
    }
</script>
<style scoped>
	
.lateral {
    display: none
}
@media screen and (min-width:950px){
    .lateral {
        display: block;
        margin: 20px 1% 0 .5%;
        width: 25%;
        height: 1065px;
    }
    .bloque-der,
    .lateral {
        float: left
    }
    #voto {
        padding-top: 20px; 
        text-align: center;
        width: 100%;
        height: 400px;
        background: #4682b4;
        color: #f7f7f7;
        border-radius: 5px;
    }
    #voto h3 {
        display: block;
        margin: 20px auto;
        font-size: 28px;
        z-index:11
    }
    #voto span {
        margin:20px auto;
        display: block;
        z-index:11;
    }
    #voto img {
        margin: 50px auto 0 auto;
        z-index:11;
    }
    #voto a {
        color: #f7f7f7;
        text-decoration: none;
        font-size: 28px;
        display: block;
        margin: 20px auto;
        width: 200px;
        height: 40px;
        border-radius: 50px;
        z-index:11;

        transition: ease .7s;
    }
    #voto a:hover {
        color: #4682b4;
        background: #f7f7f7;
    }
}
</style>