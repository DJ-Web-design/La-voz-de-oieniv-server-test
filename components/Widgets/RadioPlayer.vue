<template>
	<div id="main" :style="viewPlayer ? {bottom: 0} : {bottom:'-170px'}" style="transition: ease .6s">
		<div id="player-container">
			<span class="icon-menu" @click="viewPlayer = !viewPlayer"></span>
			<div id="status" :style="{background:status.color}">
				<span>{{status.text}}</span>
			</div>
			<div>
			<input
			 @mouseover="viewVolume = true"
			 :style="viewVolume ? {display:'block'} : {display:'none'}"
			 v-model="volume"
			 type="range"
			 min="0"
			 max="1"
			 value="0.5"
			 step="0.1"
			 id="mislider"
			>
				<img
				 @mouseover="viewVolume = true"
				 @mouseout="viewVolume = false"
				 class="volume"
				 @click="mute"
				 v-if="volume >= 0.8 && !muted"
				 src="@/assets/volume-high.svg"
				>
				<img
				 @mouseover="viewVolume = true"
				 @mouseout="viewVolume = false"
				 class="volume"
				 @click="mute"
				 v-else-if="!muted && volume >= 0.4 && volume <= 0.7"
				 src="@/assets/volume-medium.svg"
				>
				<img
				 @mouseover="viewVolume = true"
				 @mouseout="viewVolume = false"
				 class="volume"
				 @click="mute"
				 v-else-if="!muted && volume >= 0.1 && volume < 0.4"
				 src="@/assets/volume-low.svg"
				>
				<img
				 @mouseover="viewVolume = true"
				 @mouseout="viewVolume = false"
				 class="volume"
				 @click="unmute"
				 v-else-if="volume < 0.1 || muted"
				 src="@/assets/volume-mute2.svg"
				>
				<img
				 class="play-pause"
				 @click="play"
				 v-if="!playing"
				 src="@/assets/play3.svg"
				>
				<img
				 class="play-pause"
				 @click="pause"
				 v-else
				 src="@/assets/pause2.svg"
				>
			</div>
		</div>
		<div id="audio-container"></div>
	</div>
</template>
<script>
	var temp;
	export default {
		data(){
			return {
				player:undefined,
				view:false,
				playing:false,
				volume:1,
				muted:false,
				status:{
					text:"Cargando",
					color:"#47475a"
				},
				viewVolume:false,
				interval:undefined,
				viewPlayer: false
			}
		},
		mounted() {
			this.initPlayer();
		},
		methods: {
			initPlayer() {
				const audio = new Audio("http://78.129.187.57:31885/stream.mp3");
				const audioContainer = document.getElementById("audio-container");
				this.player = audio;

				audioContainer.appendChild(audio);

				const resetPlayer = () => {
					audioContainer.removeChild(audio);
					this.status = {
						text:"Sin Conexion",
						color:"red"
					}
					this.initPlayer();
				};
				audio.onplay = () => {
					this.playing = true;
					this.status = {
						text:"En Vivo",
						color:"green"
					}
				};
				
				audio.oncanplaythrough = () => this.play(resetPlayer);
				audio.onerror = () => resetPlayer();
				audio.onended = () => resetPlayer();
			},
			mute() {
				this.muted = true;
				this.player.muted = true;
				temp = this.volume;
				this.volume = 0;
			},
			unmute() {
				this.volume = temp;
				temp = undefined;
				this.muted = false;
				this.player.muted = false;
			},
			async play(callback) {
				try {
					await this.player.play();
					this.playing = true;
				} catch(err) {
					alert("Error al cargar Streaming");
					this.status = {
						text: "Error",
						color:"red"
					}
					callback();
				}
			},
			pause() {
				this.playing = false;
				this.player.pause();
			}
		},
		watch: {
			volume(e) {
				this.player.volume = e;
			}
		}
	}
</script>
<style scoped>
	#main {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 3;
	}
	#player-container {
		background: #47475a;
		width: 200px;
		height: 220px;
		border-radius: 50px 50px  0 0;
	}
	#bar {
		width: 150px;
		height: 5px;
		background: red;
	}
	.play-pause {
		cursor: pointer;
    	position: absolute;
    	display: block;
    	margin-left: -16px;
    	bottom: 5px;
    	left: 50%;

    	transition: ease .2s;
	}
	.play-pause:hover {
		transform: scale(1.1);
	}
	.volume {
		cursor: pointer;
		position: absolute;
		right: 10px;
		bottom: 5px;
	}
	#status {
		position: absolute;
		padding: 10px 0;
		width: 100%;
		top: 50px;
		text-align: center;
		color: white;
	}

input[type="range"]{
	position: absolute;
	bottom: 65px;
	right: -25px;
	transform: rotate(-90deg);
  	-webkit-appearance: none;
  	width:100px;
  	height:20px;
  	background: linear-gradient(to right, #9A2720 0%, #9A2720 100%);
  	background-size:80px 6px;
  	background-position:center;
  	background-repeat:no-repeat;
  	overflow:hidden;
  	outline: none;
}

input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  border-radius: 50%;
  width:15px;
  height:15px;
  background:#F26B5E;
  position:relative;
  z-index:3;
  box-shadow:0 0 5px 0 rgba(0,0,0,0.3);
}

input[type="range"]::-webkit-slider-thumb:after{
  content:" ";
  width:160px;
  height:20px;
  position:absolute;
  z-index:1;
  right:20px;
  top:5px;
  background: #ff5b32;
  background: linear-gradient(to right, #f088fc 1%, #AC6CFF 70%);
}
.icon-menu {
    color: white;
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 32px;
    cursor: pointer;
}
</style>