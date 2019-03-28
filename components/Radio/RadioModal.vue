<template>
	<div id="modal">
        <div id="modal-shadow"></div>
            <div class="modal mdl-dialog">
                <div class="dialog-header">
                    <button 
                    type="button" 
                    class="boton close" 
                    @click="showModal = false">Cerrar</button>
                </div>
                <div class="mdl-dialog__content">
                    <h4 class="mdl-dialog__title">Ingresa tu nombre</h4>
                    <div 
                     id="ingresa-nombre" 
                     class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input 
                         v-model="chat.user" 
                         class="mdl-textfield__input" 
                         type="text" 
                         id="ingresaNombre" 
                         name="ingresaNombre"
                         placeholder="Nombre"
                        >
                        <button 
                         type="button" 
                         class="close" 
                         @click="ingresaNombre" 
                         id="btnNombre"
                         >Enviar
                        </button>
                    </div>
                    <h4 class="o">Ó</h4>
                    <div id="spinner" style="background: #4267b2;border-radius: 5px;color: white;height: 40px;width: 250px;">
                        <img 
                         id="spinner-svg" 
                         src="@/assets/spinner.svg" 
                         alt="FB Login Button Loading" 
                        />
                        <div 
                         id="fb-login-button"
                         class="fb-login-button" 
                         data-max-rows="1" 
                         data-size="large" 
                         data-button-type="continue_with" 
                         data-show-faces="false"
                         data-auto-logout-link="false" 
                         data-use-continue-as="true"
                         onlogin="FBLogin()">
                        </div>                    
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    import colors from "@/assets/json/colors.json";

	export default {
		data(){
			return this.$parent._data
		},
		methods:{
			ingresaNombre() {
                const colorIndex = Math.round(Math.random() * colors.length);
                const letter = this.chat.user[0].toUpperCase();

                if (this.chat.user) {
                    this.chat.pic = `http://placehold.it/50/${colors[colorIndex]}/fff&text=${letter}`
                    this.show = false;
                    this.showModal = false;
                    localStorage.setItem("Nombre", this.chat.user);
                    localStorage.setItem("pic", this.chat.pic);
                    FB.AppEvent.logEvent("Name Login");
                }
            }
		}
	}
</script>
<style scoped>
    #spinner-svg {
        animation: rotate infinite linear 1s; 
        height: 35px; 
        margin-top: 2.5px
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        } 100% {
            transform: rotate(360deg);
        }
    }
	#modal-shadow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);
		z-index: 6;
	}
	.modal {
		z-index: 7;
		position: fixed;
		top: 15%;
		left: 5%;
		width: 90%;
		height: 80%;
		background: #f7f7f7;
		border-radius: 5px;
        text-align: center;
	}
    @media screen and (min-width:480px){
        .modal {
            left: 15%;
            width: 70%;
        }
    }
    @media screen and (min-width:480px){
        .modal {
            left: 20%;
            width: 60%;
        }
    }
    @media screen and (min-width:480px){
        .modal {
            left: 25%;
            width: 50%;
        }
    }
	.dialog-header {
		background: #32559C;
        border-radius: 3px 3px 0 0;
        height: 35px;
	}
    button.close {
        background: #f1f1f1;
        border: none;
        height: 30px;
        margin: 2.5px 10px;
        padding: 0 20px;
        border-radius: 3px;
        float: right;
        box-shadow: 1px 1px 1px;
        cursor: pointer;
    }
    .mdl-dialog__title {
        margin: 20px auto;
        font-size: 22px;
    }
    input.mdl-textfield__input{
        display: block;
        margin: auto;
    }
    #ingresa-nombre{
        position: absolute;
        bottom: 55%;
        left: 50%;
        margin-left: -90px;
    }
    #btnNombre{
        float: none;
        width: 160px;
        background: #ff8f00;
        color: white;
    }
    .o {
        font-size: 22px;
        position: absolute;
        bottom: 35%;
        left:50%;
        margin-left:-8px;
    }
    #spinner {
        position: absolute;
        bottom: 15%;
        left:50%;
        margin-left:-125px;
    }
</style>