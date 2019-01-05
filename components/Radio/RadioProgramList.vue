<template>
	<div class="bloque-der">
        <div class="programas">
            <RadioProgramBlock 
             v-for="(program, index) in programas"
             :index="index"
             :nombre="program.nombre"
             :inicio="program.inicio"
             :fin="program.fin"
             :locutor="program.locutor"
             :dias="program.dias"
             :image="program.image"
             :descripcion="program.descripcion"
             :key="'Programa '+program.nombre" 
            />
        </div>
    </div>
</template>
<script>
    import RadioProgramBlock from "@/components/Radio/RadioProgramBlock";
    import programs from "@/assets/json/programs.json";
	export default {
		components:{
			RadioProgramBlock
		},
        data(){
            return { 
                programas: programs.programas,
                programOpen:null
            }
        },
        watch:{
            programOpen(e){
                for (var i = this.$children.length - 1; i >= 0; i--) {
                    this.$children[i]._data.number = e;
                }
            }
        }
	}
</script>
<style>
.programas {
    margin: 0 auto 0 auto;
    width: 100%;
    height: 100%;
}

.programas .bloque-programa {
    float: left;
    margin: 10px 2%;
    width: 96%;
    height: 16.6%
}

.programas .bloque-programa .bloque {
    background: #c7c7c7;
    border: 2px solid rgba(75, 127, 232, .3);
    border-radius: 3px;
    width: 100%;
    overflow: hidden;
    transition: ease .6s;
}

.programas .bloque-programa div img {
    vertical-align: middle;
    max-width: 100px;
    width: 30%
}

.programas .bloque-programa div div {
    margin: 0;
    width: 70%;
    height: 100%
}

.programas .bloque-programa div img,
.programas .bloque-programa div div {
    float: left;
}

.botonMas,
.botonMenos {
    margin-top: 30px;
    width: 100%;
}
.bloque-der {
    margin: 20px 2.5% 0 2.5%;
    width: 95%;
    padding-bottom: 20px;
}


.bloque-programa h6 {
    margin: 0
}
@media screen and (min-width:480px) {
    .botonMas,
    .botonMenos {
        width: 70%
    }
    .programas .bloque-programa div img {
        vertical-align: middle;
        max-width: 120px
    }
}

@media screen and (min-width:767px) {
    .botonMas,
    .botonMenos {
        width: 120px
    }
}
@media screen and (min-width:950px){
    .programas {
        margin-top: 0;
        width: 100%;
    }
    .programas .bloque-programa {
        float: left;
        margin: 10px 2%;
        width: 96%;
        height: 150px
    }
    .programas .bloque-programa div {
        width: 100%;
        height: 100%
    }
    .programas .bloque-programa div img {
        width: 140px;
        max-width: 500px;
    }
    .programas .bloque-programa div div {
        width: 65%;
        height: 100%
    }
    .programas .bloque-programa div img,
    .programas .bloque-programa div div {
        margin-left: 5%;
        display: inline-block;
    }
    .bloque-der {
        margin: 20px .5% 0 1%;
        width: 72%;
    }
    .lateral {
        display: block;
        margin: 20px 1% 0 .5%;
        width: 25%;
        height: 1020px;
    }
    .bloque-der,
    .lateral {
        float: left
    }
    .bloque-programa h6 {
        margin: 0
    }
}

</style>