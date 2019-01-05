<template>
	<div>
		<div id="title-count">Conteo de votos</div>
		<div class="nombre-voto">
		    <span>{{votouno}}</span>
		</div>
		<div class="nombre-voto">
		    <span>{{votodos}}</span>
		</div>
		<div class="nombre-voto">
		    <span>{{vototres}}</span>
		</div>
		<div class="cuenta-voto">
		    <template v-if="spin">
		        <img src="@/assets/spinner.svg" alt="" class="spinner" />
		    </template>
		    <span v-else>{{ votos.uno }}</span>
		</div>
		<div class="cuenta-voto">
		    <template v-if="spin">
		        <img src="@/assets/spinner.svg" alt="" class="spinner" />
		    </template>
		    <span v-else>{{ votos.dos }}</span>
		</div>
		<div class="cuenta-voto">
		    <template v-if="spin">
		        <img src="@/assets/spinner.svg" alt="" class="spinner" />
		    </template>
		    <span v-else>{{ votos.tres }}</span>
		</div>
        <VotesEditor/>
	</div>
</template>
<script>
    import { votesDatabase } from "@/plugins/firebase.js";
    import VotesEditor from "./AdminVotesEditor"
	export default {
        components:{
            VotesEditor
        },
		data(){
			return {
				spin: false,
                titleVotes:[],
                votos:{
                    uno:0,
                    dos:0,
                    tres:0
                },
                votouno:"",
                votodos:"",
                vototres:"",
			}
		},
        async mounted(){
            try {
                await votesDatabase.once("value", snap=>{
                    this.votouno = snap.val().uno.voto
                    this.votodos = snap.val().dos.voto
                    this.vototres = snap.val().tres.voto
                });
                votesDatabase.on("child_changed", snap=>{
                    this.votos.uno = snap.val().uno.votesCount;
                    this.votos.dos = snap.val().dos.votesCount;
                    this.votos.tres = snap.val().tres.votesCount;
                });
            } catch(err) {
                alert("Error al obtener los datos.\nPor favor recargue la pagina.")
            }
        }
	}
</script>
<style scoped>
	#title-count{
    text-align: center;
    font-family: Helvetica;
    height: 50px;
    font-size: 30px;
    font-weight: 600;
    color: gray;
    margin: 25px 0 50px 0;
}
.nombre-voto{
    margin: 0 6.5%;
    float: left;
    border: 2px solid rgba(75,127,232,.3);
    box-shadow: 1px 1px 4px gray;
    border-radius: 3px;
    text-align: center;
    width: 20%;
    height: 50px;
    background: #e7e5e5
    
}
.nombre-voto > span{
    display: block;
    margin-top:  14px;
}
.cuenta-voto{
    text-align: center;
    margin: 0 11.5%;
    font-size: 25px;
    float: left;
    border: 2px solid rgba(75,127,232,.3);
    box-shadow: 1px 1px 4px gray;
    border-radius: 3px;    
    width: 10%;
    height: 80px;
}
.cuenta-voto > span{
    display: block;
    margin-top: 20px;
}
#btn-container{
    text-align: center
}
.btn-lavoz{
    margin: 40px;
    margin-bottom: 0px;
    vertical-align: middle;
    cursor: pointer;
    width: auto;
    height: 40px;
    padding: 10px 25px;
    background: #E5931A;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    font-family: helvetica;
    box-shadow: 2px 2px 3px gray;
    color: rgb(49, 49, 49);
    transition: .2s ease;
}
#spinner{
    color: red;
}
#spinner img{
    width: 150px;
}
.btn-lavoz:hover{
    background: rgb(255, 162, 23);

}
.icon-spinner9::before{
  animation: rotar ease-in-out 2s infinite;
  
}
@keyframes rotar{
  from{
    transform: rotate(0)
  }
  to{
    transform: rotate(360)
  }
}
        .cajaexterna {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
}
.cajainterna {

    background: #fff;
    margin: 6em auto 0;
    position: relative;
        width: 60%;
    height: 50%;

}
.cajacentrada {
    margin:0 auto;
    display: block;
    text-align: center;
    padding:80px 0;
}
.cajacentrada h2 {
    background: none repeat scroll 0 0 black;
    box-sizing: border-box;
    color: white;
    font-size: 15px;
    left: 0;
    margin: 0;
    padding: 5px;
    position: absolute;
    text-align: left;
    top: 0;
    width: 100%;
}
.cajacentrada p {
    margin-top: 30px;
}
.cerrar {
    position: absolute;
    right: 16px;
    top: 13px;
}
</style>