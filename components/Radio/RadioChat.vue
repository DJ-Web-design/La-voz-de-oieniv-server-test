<template>
	<div class="cuerpo">
        <transition name="fade" mode="out-in">
            <RadioModal v-show="showModal" key="modal"/>
        </transition>
        <div class="panel-cabecera">
            <button
             @click="dropped = !dropped"
             id="demo-menu-lower-right" 
             class="mdl-color--amber-800 pull-right mdl-button mdl-js-button mdl-button--icon"
            >
                <span class="icon-menu"></span>
            </button>
            <ul :class="dropped ? 'dropdown-menu dropped':'dropdown-menu undropped'" for="demo-menu-lower-right">
                <li class="mdl-menu__item">Reportar Mensaje</li>
                <li class="mdl-menu__item">Reportar Mensaje 2</li>
            </ul>
        </div>
        <div class="panel-cuerpo" id="chat">
            <ul class="chat">
                <RadioChatTemplate v-for="iten in chatMessages"
                 :user="iten.user"
                 :pic="iten.pic"
                 :message="iten.message"
                 :date="iten.date"
                 :key="iten.id"
                />
            </ul>
        </div>
        <div class="panel-pie" id="panel">
            <template v-if="show">
                <div class="ingresa">
                    <button
                     id="boton-nombre" 
                     class="boton mdl-button mdl-js-button mdl-color--amber-800" 
                     @click="showModal = true"
                    >
                        Ingresar Nombre
                    </button>
                </div>
            </template>
            <template v-else>
                <form @submit="sendMessage">
                    <div class="input-group">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="msj">
                            <input 
                             class="mdl-textfield__input" 
                             type="text" 
                             id="Mensaje"
                             placeholder="Ingresa tu mensaje" 
                             value="" 
                             name="Mensaje" 
                             v-model="chat.message"
                            />
                        </div>
                        <ButtonFlat 
                        class="mdl-button mdl-js-button mdl-color--amber-800" 
                        id="btnEnviar" 
                        type="submit" 
                        style="height: 36px;"
                        text="Enviar"
                        />
                    </div>
                </form>
            </template>
        </div>
    </div>
</template>
<script>
    import ButtonFlat from "@/components/Widgets/ButtonFlat"
    import RadioChatTemplate from "@/components/Radio/RadioChatTemplate";
    import RadioModal from "@/components/Radio/RadioModal"
    import { chatDatabase } from "@/plugins/firebase.js"
    
	export default {
        components:{
            RadioChatTemplate,
            ButtonFlat,
            RadioModal
        },
		data:()=>{
			return {
                dropped:false,
                show: true,
                showModal: false,
                isVisible: false,
                display:"none", 
                opacity:0,
                animation:"",
                chat: {
                    message: "",
                    user: "",
                    pic: "",
                },
                chatMessages: [],
            }
		},
        mounted(){
            if (localStorage.getItem("Nombre") && localStorage.getItem("pic")){
                this.show = false;
                this.chat.user = localStorage.getItem("Nombre");
                this.chat.pic = localStorage.getItem("pic");
            }
            var chat = this.chatMessages;
            chatDatabase.on("value", val =>{
                chat = [];
                val.forEach(e=>{
                    let valor = e.val();
                    if ((valor.message != null) && (valor.user != null)) {
                        chat.push(valor);
                    }
                })

            })
        },
		methods:{
            sendMessage: function (e) {
                e.preventDefault(); 
                let formatofecha = new Date();
                let d = formatofecha.getUTCDate();
                let m = formatofecha.getMonth() + 1;
                let y = formatofecha.getFullYear();
                let h = formatofecha.getHours();
                let min = formatofecha.getMinutes();
                let Fecha = `${d}/${m}/${y} ${h}:${min < 10 ? '0'+min : min}`;
                if (this.chat.message && this.chat.user) {
                    this.chatMessages.push({
                        message: this.chat.message, 
                        user: this.chat.user, 
                        pic: this.chat.pic, 
                        date: Fecha
                    })
                    /*chatDatabase.push({
                        message: this.chat.message, 
                        user: this.chat.user, 
                        pic: this.chat.pic, 
                        date: Fecha
                    });*/
                    this.chat.message = "";
                } else {
                    alert("El Mensaje No Puede Estar Vacio.");
                }
            },
        },
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0
}
.dropped {
    animation: drop ease .4s;
    top: 50px;
    display: grid;
}
@keyframes drop {
    0% {
        width: 150px;
        opacity: 0
    }
    100% {
        opacity: 1;
        width: 300px;
    }
}
.undropped {
    animation: undrop ease .4s;
    top: 50px;
    display: none;
}
#btnNombre {
    position: relative;
    top: 30%;
    width: 100%
}
#msj {
    margin:20px auto;
}
#Mensaje {
    width: 95%;
}
#modal-shadow {
    margin-top: 0;
    padding: 0;
    position: fixed;
    z-index: 1999999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3)
}

.ingresa {
    text-align: center;
    width: 99.6%;
    height: 100%;
    background: rgb(53, 95, 179);
    z-index: 3
}

.ingresa .mdl-button {
    margin-top: 35px;
    z-index: 2
}

#ingresa-nombre,
.input-group button {
    position: relative;
    width: 70%;
    left: 15%;
    height:120px;
    display: block
}

.cuerpo {
    margin-top: 20px;
    border-radius: 8px 8px 0 0;
    width: 95%;
    margin-left: 2.5%;
    height: 600px;
    box-shadow: black 1px 1px 6px
}

#btnEnviar {
    position: relative;
    width: 70%
}

.panel-cabecera {
    position: relative;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 10%;
    background: #32559C;
    box-shadow: 0 0 5px black
}
#demo-menu-lower-right {
    margin: 2.5px 5px;
    border:none;
    border-radius: 50%;
    background: skyblue;
    float: right;
    width: 45px;
    height: 45px;
    cursor: pointer;
}
#demo-menu-lower-right:hover {
    box-shadow: 1px 1px 2px;
}

button#demo-menu-lower-right span {
    font-size: 30px;
    font-weight: 200;
    color:orange;
}
ul.dropdown-menu {
    position: absolute;
    right: 0;
    background: #f7f7f7;
    width:300px;
    border-radius: 5px;
}
ul.dropdown-menu li{
    padding:12.5px 0;
    text-align: center;
    list-style: none;
    cursor: pointer;
    background: #f7f7f7;
    font-size: 15px;
    border-radius: inherit;
}
ul.dropdown-menu li:hover{
    background: #f1f1f1;
}
.panel-cuerpo {
    overflow-y: scroll;
    width: 99.5%;
    height: 70%;
    border-left: 1px solid gray;
    border-right: 1px solid gray
}

.mdl-textfield {
    width: 59%;
    z-index: 2
}

.panel-pie {
    display: inline-block;
    width: 99.6%;
    height: 19.7%;
    background: #beb3b3;
    border: 1px solid gray
}

.chat {
    list-style: none;
    margin: 0;
    padding: 0
}

.chat li {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px dotted #B3A9A9
}

.chat li.left .chat-body {
    margin-left: 60px
}

.chat li.right .chat-body {
    margin-right: 60px
}

.chat li .chat-body p {
    margin: 0;
    color: #777
}

@media screen and (min-width:480px){
    #msj {
        width: 40%;
    }
    #btnEnviar{
        width: 40%;
        left: 30%;
    }
}
@media screen and (min-width:767px){
    .input-group #msj,
    .input-group button {
        display: inline-block;
    }
    .input-group #msj{
        margin: 45px 10%;
    }
    .input-group #btnEnviar {
        width: 30%;
        left: 0%;
    }
}
@media screen and (min-width:950px){
    .online,
    .cuerpo {
        margin-top: 20px;
        float: left
    }

    .panel-cuerpo {
        overflow-y: scroll;
        width: 99.7%;
        height: 70%;
        border-left: 1px solid gray;
        border-right: 1px solid gray
    }

    .cuerpo {
        border-radius: 8px 8px 0 0;
        width: 37.5%;
        height: 500px;
        margin-left: 0
    }
    .panel-cabecera {
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 10%
    }
        .mdl-textfield {
        width: 59%;
        z-index: 2
    }
    .panel-pie {
        display: inline-block;
        width: 99.7%;
        height: 19.7%;
        background: #beb3b3;
        border: 1px solid gray
    }
    #btnEnviar {
        width: 100px;
        margin: 0;
        left: 0
    }
    .input-group #msj {
        margin: 38px 10%;
    }
    .chat {
        list-style: none;
        margin: 0;
        padding: 0
    }
    .chat li {
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px dotted #B3A9A9
    }
    .chat li.left .chat-body {
        margin-left: 60px
    }
    .chat li.right .chat-body {
        margin-right: 60px
    }
    .chat li .chat-body p {
        margin: 0;
        color: #777
    }
}
</style>