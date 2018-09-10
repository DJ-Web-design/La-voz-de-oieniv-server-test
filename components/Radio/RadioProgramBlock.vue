<template>
    <div :class="vista ? 'bloque-programa open':'bloque-programa close'">
        <div class="bloque">
            <img 
             :class="vista ? 'pull-left img img-open': 'pull-left img img-close'" 
             :src="image" 
             :alt="'La Voz de OIENIV Radio '+nombre"
            >
            <div class="">
                <h6>{{ nombre }}</h6>
                {{ dias }}
                <br>De {{ inicio }} a {{ fin }}
                <br>con {{ locutor }}
                <br>
                <transition name="fade" mode="out-in">
                    <span v-show="vista" class="des">{{ descripcion }}</span>
                </transition>
                <transition name="fade">
                    <button v-if="!vista" @click="vista = true; view()" class="botonMas boton">Ver Mas</button>
                   <button v-else @click="vista = false; noView()" class="botonMenos boton">Ver Menos</button>
                </transition>
                <br>
            </div>
        </div>
    </div> 
</template>
<script>
    export default {
    props: { 
        nombre:{
            type:String
        },
        dias:{
            type:String
        },
        inicio:{
            type:String
        },
        fin:{
            type:String
        },
        locutor:{
            type:String
        },
        descripcion:{
            type:String
        },
        image:{
            type:String
        },
        index:{
            type:Number
        }
    },
    data: function () {
        return {
            number:null, 
            vista:false
        }
    },
    mounted:function(){
        this.windowWidth = document.body.clientWidth;
    },
    methods:{
        view(){
            this.$parent._data.programOpen = this._props.index;
        },
        noView(){
            this.$parent._data.programOpen = null;
        }
    },
    watch:{
        number(e){
            if (e != this._props.index) {
                this.vista = false;
            }
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
  transition-delay: .6s;
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
.open {
    transition: ease .6s;
    height:340px;
}
.close {
    transition: ease .6s;
    height: 16.6%;
}

.img-open{
    transition: ease .6s;
    margin-top: 40%;
}
.img-close {
    transition: ease .6s;
    margin-top: 12%
}
@media screen and (min-width:480px){
    .open {
        height:270px;
    }
    .img-open{
        margin-top: 15%;
    }
    .img-close {
        margin-top: 6%
    }
}
@media screen and (min-width:767px){
    .open {
        height:240px;
    }
    .img-open{
        margin-top: 8%;
    }
    .img-close {
        margin-top: 3.5%
    }
}
@media screen and (min-width:767px){
    .open {
        height:200px;
    }
    .img-open{
        margin-top: 3.5%;
    }
    .img-close {
        margin-top: 1.5%
    }
}
.boton{
    background:#ff8f00;
    border-radius: 50px;
    height:36px;
    border:none;
    color:white;
    transition:ease .4s;
    cursor:pointer;
    display: block;
}
.boton:hover{
    background:rgba(75, 127, 232, .3);
}
</style>