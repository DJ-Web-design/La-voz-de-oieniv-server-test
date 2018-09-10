<template>
	<div id="container">
		<div id="shadow">
			<div id="main">
				<div id="header">
					<button @click="$parent._data.viewModal = false">Cerrar</button>
				</div>
				<i class="icon-cross" v-if="mode === 'error'"></i>
				<i class="icon-checkmark" v-else-if="mode === 'ok'"></i>
				<template v-else-if="mode === 'info'">
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/></svg>
				</template>
				<h3 id="message">{{message}}</h3>
				<p id="content">{{content}}</p>
				<template v-if="mode === 'ok'">
					<div id="compartir">
                        <a :href="'https://www.facebook.com/sharer.php?text=Yo vote por: '+vote+'. Entra a www.lavozdeoieniv.com y tu tambien vota por tu canción favorita.'"
                            target=_blank>
                            <div id="iconFacebook">
                                <span class="icon-facebook">
                                    <span>Compartir</span>
                                </span>
                            </div>
                        </a>
                        <a :href="'https://twitter.com/intent/tweet?text=Yo vote por: '+vote+'. Entra a www.lavozdeoieniv.com y tu tambien vota por tu canción favorita.'"
                            target="_blank">
                            <div id="iconTwitter">
                                <span class="icon-twitter">
                                    <span>Twittear</span>
                                </span>
                            </div>
                        </a>
                    </div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			message:{
				type:String,
				required:true,
				default:"Mensaje"
			},
			content:{
				type:String,
				required:true,
				default:"Contenido"
			},
			mode:{
				type:String,
				required:true,
				default:"info"
			},
			vote:{
				type:String,
				required:true,
				default:"Una Cancion"
			}
		}
	}
</script>
<style scoped>
	#container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
	}
	#shadow {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);

	}
	#main {
		position: absolute;
		width: 80%;
		height: 80%;
		background: #f7f7f7;
		top: 15%;
		left: 10%;
		border-radius: 3px;
		text-align: center;
	}
	#header {
		background: #32559C;
    	border-radius: 3px 3px 0 0;
    	height: 35px;
	}
	#header button {
		background: #f1f1f1;
		border: none;
		height: 30px;
		margin: 2.5px 10px;
		padding: 0 20px;
		border-radius: 3px;
		float: right;
		-webkit-box-shadow: 1px 1px 1px;
		box-shadow: 1px 1px 1px;
		cursor: pointer;
	}
	#message {
		margin: 20px auto;
		display: block;
	}

	/*Clases*/
	.icon-cross {
		color: red;		
	}
	.icon-checkmark {
		color: green;
	}
</style>