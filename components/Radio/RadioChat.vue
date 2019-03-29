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
                <div class="input-group">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="msj">
                        <textarea
                         @keydown="setHeight"
                         class="mdl-textfield__input" 
                         type="text" 
                         id="Mensaje"
                         placeholder="Ingresa tu mensaje" 
                         value="" 
                         name="Mensaje" 
                         v-model="chat.message"
                         @keyup="sendMessageWithEnter"
                        ></textarea>
                        <img src="@/assets/send.svg" id="send" @click="sendMessage">
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import RadioChatTemplate from "@/components/Radio/RadioChatTemplate";
    import RadioModal from "@/components/Radio/RadioModal";
    import { chatDatabase } from "@/plugins/firebase.js";
    
	export default {
        components:{
            RadioChatTemplate,
            RadioModal
        },
		data(){
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
                messageBarHeight:"16px"
            }
		},
        mounted(){
            const that = this;
            if (localStorage.getItem("Nombre") && localStorage.getItem("pic")){
                this.show = false;
                this.chat.user = localStorage.getItem("Nombre");
                this.chat.pic = localStorage.getItem("pic");
            }
            chatDatabase.on("value", val =>{
                val = Object.values(val.val());
                that.chatMessages = [];
                val.forEach(e=>{
                    let valor = e;
                    if ((valor.message != null) && (valor.user != null)) {
                        that.chatMessages.push(valor);
                    }
                })
            })
        },
        destroyed() {
            chatDatabase.off("value");
        },
		methods:{
            setHeight({target}) {
                target.style.height = "16px";
                const computed = window.getComputedStyle(target);

                var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                    + parseInt(computed.getPropertyValue('padding-top'), 10)
                    + target.scrollHeight
                    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

                target.style.height = height - 20 + "px";
            },
            sendMessageWithEnter(e) {
                this.setHeight(e);
                e.preventDefault();
                const {code} = e;

                if (code === "Enter") {
                    this.sendMessage(e);
                }
                return false;
            },
            sendMessage(e) {
                e.preventDefault(); 
                const formatofecha = new Date();
                const d = formatofecha.getUTCDate();
                const m = formatofecha.getMonth() + 1;
                const y = formatofecha.getFullYear();
                const h = formatofecha.getHours();
                const min = formatofecha.getMinutes();
                const date = `${d}/${m}/${y} ${h}:${min < 10 ? '0'+min : min}`;
                if (this.chat.message && this.chat.user) {
                    chatDatabase.push({
                        message: this.chat.message, 
                        user: this.chat.user, 
                        pic: this.chat.pic, 
                        date
                    });
                    this.chat.message = "";
                    documents.getElementById("Mensaje").style.width = "16px";
                } else {
                    alert("El Mensaje No Puede Estar Vacio.");
                }
            },
        },
	}
</script>
<style scoped>
#send {
    height: 30px;
    position: absolute;
    right: 25px;
    top: calc(50% - 15px);
}
#send:hover {
    cursor: pointer;
}
.boton{
    background:#ff8f00;
    border-radius: 50px;
    height:36px;
    border:none;
    width: 200px;
    margin: 10px auto;
    color:white;
    transition:ease .4s;
    cursor:pointer;
    display: block;
}
.boton:hover{
    background:rgba(75, 127, 232, .3);
}
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

    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 0 4px;
    border-radius: 30px;
    border: none;
    padding: 3.6% 25px 3.6% 50px;
    background: white;
}
#msj:hover {
    cursor: text;
}
#Mensaje {
    width: 80%;
    resize: none;
    height: 16px;
    padding: 5px 0;
    border:none;
}
#Mensaje:focus {
    outline: none;
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
    padding-top: 1%;
    text-align: center;
    width: 99.7%;
    height: 95%;
    background: rgb(53, 95, 179);
    z-index: 3
}

.ingresa .mdl-button {
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
    /*box-shadow: black 1px 1px 6px;*/
}
.panel-cabecera {
    position: relative;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 10%;
    background: #f7f7f7;
}
#demo-menu-lower-right {
    margin: 2.5px 5px;
    border:none;
    border-radius: 50%;
    background: white;
    float: right;
    width: 45px;
    height: 45px;
    cursor: pointer;
}
#demo-menu-lower-right:hover {
    box-shadow: 0px 0px 2px #f7f7f7;
}

button#demo-menu-lower-right span {
    font-size: 30px;
    color:#4682b4;
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
    height: 80%;
    background: white;
}

.mdl-textfield {
    width: 59%;
    z-index: 2;
}
.panel-pie {
    display: inline-block;
    width: 100%;
    height: 9.7%;
    background: white;
    position: relative;
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
@media screen and (min-width:950px){
    .online,
    .cuerpo {
        margin-top: 20px;
        float: left
    }

    .panel-cuerpo {
        overflow-y: scroll;
        width: 99.7%;
        height: 77%;
    }

    .cuerpo {
        border-radius: 8px 8px 0 0;
        width: 37.5%;
        height: 500px;
        margin-left: 0;
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
        height: 12.7%;
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