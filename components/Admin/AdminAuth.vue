<template v-if="bloqueo">
    <div id="cuerpoBloqueo">
        <div>
            <div id="image-logo"><img src="@/assets/logo.png" alt=""></div>
            <div id="mensajeBloqueo">
                Esta Pagina es netamente administrativa.<br>
                Si no eres administrador de esta pagina. <br>
                Regrese a la <nuxt-link to="/">Pagina de Inicio</nuxt-link>
                
            </div>
        </div>
            <form id="bloqueo" @submit="adminAuth" method="get" action="/login-admin">
        <div id="autenticacion">
                <div><label for="user">Usuario:</label>
                <input style="margin-left:27px" type="text" name="user" id="user" placeholder="Usuario" v-model="inputUser" :disabled="dataIsSend === true"></div>
                
                <div><label for="pass">Contraseña:</label>
                <input type="password" name="pass" id="pass" v-model="inputPass" :disabled="dataIsSend === true"></div>
                
                <div><label for="remember">Recordar:</label>
                <input type="checkbox" id="" name="remember" v-model="remember" :disabled="dataIsSend === true"></div>
                
                <div id="enviar"><input type="submit" id="btn-enviar" value="Enviar" :disabled="dataIsSend === true"></div>
                <br>
            <div style="text-align:center;">
                <template v-if="dataIsSend"><img src="@/assets/spinner.svg" alt="" class="spinner"></template>
                <span v-else>{{ noUser }}</span>
            </div>
        </div>
            </form>
    </div>
</template>
<script>
    import {get} from "axios";

    export default {
        data() {
            return {
                inputUser:"",
                inputPass:"",
                remember:false,
                dataIsSend:false,
                noUser:"",
            }
        },
        methods:{
            async adminAuth(e) {
                e.preventDefault();
                var that = this;
                that.noUser = ""
                let datos = {
                    user: that.inputUser,
                    pass: that.inputPass
                };
                if (datos.user && datos.pass) {
                    that.dataIsSend = true;
                    try {
                        let res = await get(`https://lavozdeoieniv.herokuapp.com/login-admin?user=${datos.user}&pass=${datos.pass}`);
                        console.log(res);
                        if (res.data == "no-auth") {
                            that.noUser = "Usuario o contraseña incorrectos"
                        } else if (res.data == "auth") {
                            that.$parent._data.bloqueo = false;
                            if (that.remember) {
                                localStorage.setItem("remember", true);
                            } else {
                                sessionStorage.setItem("remember", true);
                            }
                        }
                        that.dataIsSend = false;
                    } catch(error) {
                        alert("Error al conectar con el servidor.\nIntentelo de nuevo.");
                        that.noUser = "";
                        that.dataIsSend = false;
                    }
                } else {
                    alert("Por favor ingrese Usuario y Contraseña");
                }
            },
        }
    }
</script>
<style scoped>
#mensajeBloqueo{
    color: gray;
    text-align: center;
    display: block;
    margin-top: 2.5%;
    font-size: 28px;
}
#mensajeBloqueo a{
    color: black;
    text-decoration: none;
    
}
#cuerpoBloqueo{
    overflow: hidden;
}
#autenticacion{
    border-radius: 4px;
    border: 2px solid rgba(75, 127, 232, 0.30);
    box-shadow: 1px 1px 4px gray;
    background: #e7e5e5;
    width: 30%;
    margin: auto;
    margin-top:50px;
}
#autenticacion div{
    display: block;
    margin: 20px 30px;
}
#enviar{
    text-align: center;
}
#btn-enviar{
    width: 60%;
}
#image-logo{
    text-align: center;
}
#image-logo img{
    margin-top: 20px;
    background: rgba(128, 128, 128, 0.459);
    border-radius: 4px;
}
.spinner{
    width: 80px;
    height: 80px;
    animation: rotate 1s infinite linear;
}
@keyframes rotate {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
</style>