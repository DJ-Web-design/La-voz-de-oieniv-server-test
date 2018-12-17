<template>
	<div>
	    <div id="contenedor">
	        <div class="hea"></div>
	        <div class="hea">Usuario</div>
	        <div class="hea">Mensaje</div>
	        <div class="hea">Fecha</div>
	        <div class="hea">
	        	<button @click="borrarTodoChat">Borrar Todo</button>
	        </div>
	        <template v-if="chatMessages.length > 0">
	            <template v-for="(messages, index) in chatMessages">
	                <div :key="'userpic'+index" class="borde" style="text-align:center">
	                	<img :src="messages.value.pic" alt="">
	                </div>
	                <div 
	                 :key="'username'+index" 
	                 class="borde" 
	                 style="text-align:center"
	                >
	                	{{ messages.value.user }}
	            	</div>
                    <div 
                     :key="'usermessage'+index" 
                     class="borde" 
                     style="padding:2px"
                    >
                 		{{ messages.value.message }}
                 	</div>
                    <div 
                     :key="'userdate'+index" 
                     class="borde" 
                     style="text-align:center"
                    >
                		{{ messages.value.date }}
                	</div>
	                <div :key="'deleteButton'+index">
	                	<button @click="borrarRegistros(messages.key)">Borrar</button>
	                </div>
	            </template>
	        </template>
	        <template v-else>
	        	<div class="solo">No Hay Registros</div>
	        </template>
	    </div>
	</div>
</template>
<script>
	import { chatDatabase, firebase } from "@/plugins/firebase.js";

	export default {
		data(){
			return {
				chatMessages: [],
			}
		},
		mounted(){
			chatDatabase.on('value', snapshot => {
        	    this.chatMessages = []
        	    snapshot.forEach(e => {
        	        this.chatMessages.push({value:e.val(), key:e.key});
        	    });
        	});
		},
		methods:{
			borrarRegistros(key) {
		        if (confirm("¿Seguro que deseas borrar esos registros?")) {
		            chatDatabase.child(key).remove();
		        }
		    },
		    borrarTodoChat(){
		        firebase.database().ref().child("chat").remove();
		    }
		}
	}
</script>
<style scoped>
	#contenedor{
	    display: grid;
	    grid-template-columns: 7% 12.5% 60% 15% 5.5%;
	    justify-items:stretch;
	    align-items:stretch;
	    
	    justify-content:center;
	    align-content:center;
	    padding:50px 30px;
	}
	.hea{
	text-align:center;
	 background:blue;
	 border:1px solid black;
	 height:70px;
	}
	.solo{
	    grid-column-start:1;
	    text-align:center;
	    grid-column-end:6;
	    padding:20px 0
	}
	
	.borde{
	    border:solid black 1px;
	}
</style>