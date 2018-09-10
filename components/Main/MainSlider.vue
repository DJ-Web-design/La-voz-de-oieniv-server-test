<template>
	<div class="main">
		<div class="bg">
			<div class="left-arrow arrow">
				<span @click="sliderNo--; clear()">
					&lt;</span>
			</div>
			<template v-if="sliderData === 'slider'">
				<transition-group name="fade">
				<template v-for="(iten, index) in slider">
					<div :key="'slide ' + index" :id="index" v-show="sliderNo === index">
						<div class="content-left" :class="sliderNo === index? 'fade-left-enter': 'fade-left-leave'">
							<h2 class="titleSlider">{{iten.title}}</h2>
							<p>{{iten.description}}</p>
							<button id="button" @click="goTo(iten.buttonLink)" v-if="iten.buttonText">
								{{iten.buttonText}}
							</button>
							<span>{{iten.span}}</span>
						</div>
						<div class="content-right" :class="sliderNo === index? 'fade-right-enter': 'fade-right-leave'">
							<img :src="iten.img" alt="radio cristiana la voz de oieniv">
							<button v-if="iten.buttonText !== 'no-button'" id="continue" @click="goTo(iten.buttonLink)">{{iten.buttonText}}</button>
						</div>
					</div>
				</template>
				</transition-group>
			</template>
			<template v-else-if="sliderData === 'server-error'">
				<p>Error al obtener los datos, por favor recargue la pagina</p>
			</template>
			<template v-else-if="sliderData === 'load'">
				<img src="../../assets/spinner.svg" id="sliderSpinner">
			</template>

			<div class="right-arrow arrow">
				<span @click="sliderNo++; clear()">&gt;</span>
			</div>
			<ul class="contenedorinputs" :style="maxSlide">
				<li v-for="(val, index) in slider" :style="fraction" :key="'li'+ index">
					<div :class="sliderNo === index ? 'bulletActive' : 'bullet'" @click="sliderNo = index+1"></div>
				</li>
			</ul>
		</div>
		<!-- para hacerlo con un radiobutton <input class="inputradio" type="radio"> -->
	</div>
</template>
<script>
	export default {
		props:{
			slider:{ 
				type:Array,
				default:()=>{
					return [
    					{
    					  title:'La Voz de OIENIV', 
    					  description:`Disfruta de lo mejor que te ofrecemos, musicas, enseñanzas, los mejores programas en vivo, concursos y lo mas importante: La Palabra de Dios.`, 
    					  buttonText:'Ingresa',
    					  buttonLink:"/radio",
    					  span:"No te pierdas esto y muchas cosas mas.\nPor aqui, tu radio, La Voz de OIENIV",
    					  img:'/assets/images/logo.png',
    					}
					]
				}
			},
			sliderData:{
				type:String,
				default:()=>{
					return "slider"
				}
			}
		},
		data() {
			return {
				sliderNo: 0,
				maxSlide: {
					"grid-template-rows": `auto 1fr;`
				},
				scroll:null,
				fraction: {
					"grid-row": "1 / auto"
				},
				interval:null
			}
		},
		destroyed(){
			clearInterval(this.interval);
		},
		methods:{
			clear:function(){
				clearInterval(this.interval)
			},
			goTo: function(link){
				console.log(link)
				this.$router.push({path:link})
			}
		},
		watch:{
			slider(e){
				if (e.length>1){
					var that = this;
					this.interval = setInterval(()=>{
						that.sliderNo++;
					}, 6000)
				}
			},
			sliderNo(next, prev){
				if (next === this._props.slider.length) {
					this.sliderNo = 0;
				} else if (prev <= 0){
					this.fadeNo = this._props.slider.length-1;
				}
			}
		}
	}
</script>
<style>
#sliderSpinner {
	width: 100px;
	display: block;
	margin: auto;
	margin-top: 150px;
	animation: load-rotation linear 1s infinite;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0
}
.main{
	width:100%;
	height: 400px;
	background:#4682b4;
	position: relative;
}
.main .titleSlider, .main div{
	font-family: Helvetica;
	color: #fff;
}
.main .bg {
	overflow: hidden;   
	padding: 30px 30px 30px 30px;
	height:100%;
}
.main .bg .content-left {
	float: left;
	width: 100%;
	text-align:center;
	overflow: hidden;
}
.main .bg .content-left .titleSlider{          
	font-stretch: condensed;   
	font-size: 38px;
	font-family:Arapey;
}
.main .bg .content-left p{
	margin: 10px 0 0 0;         
	padding: 0 20px 0 20px;          
	font-size: 18px;      
}
.main .bg .content-left span{
	display: none;          
	margin: 20px 0 20px 0;      
}      
.main .bg .content-right{          
  float: right;          
  width: 40%;          
  text-align: center;
	display:none;
    
}      
.main .bg .content-right img{          
	margin: 20px 0 0 0;      
}
.main .bg .content-left #button,
.main .bg .content-right button{
	background: #fff;
	color: #4682b4;
	border: none;
	width: 200px;
	height: 50px;
	border-radius: 100px;
	font-size: 15px; 
	display: block;
	margin: 20px auto 5px auto;
	cursor: pointer;
	transition: .2s
}
.main .bg .content-left #button:hover,
.main .bg .content-right button:hover{
	box-shadow: rgb(50, 50, 50) 1px 1px 5px
}
@media screen and (min-width:500px){
	.main .bg .content-left #button,
	.main .bg .content-right button{
		margin: 50px auto 5px auto;
	}

}
.main .bg .arrow{
	width: 35px;
	height: 35px;
	background: #fff;
	text-align: center;
	border-radius: 50%;
	top:45%;
	position: absolute;
	cursor: pointer;
}
.main .bg .arrow span {
	position: relative;
	color: #4682b4;
	font-size: 20px;
	display: block;
	margin-top: 5px;
}
.main .bg .left-arrow{
	left: 10px;
}
.main .bg .right-arrow{
	right: 10px;
}
ul.contenedorinputs {
	width: 60%;
	height: 20px;
	display: grid;
	justify-items: center;
	margin: 300px auto 0 auto;
}
ul.contenedorinputs li{
		display: inline-block;
}
ul.contenedorinputs li div.bullet{
	border-radius: 50%;
	height: 15px;
	background: #fff;
	width: 15px;
	z-index: 20;
	transition: .6s
}
ul.contenedorinputs li div.bulletActive{
	border: 2px solid #fff;
	border-radius: 50%;
	height: 11px;
	background: #4682b4;
	width: 11px;
	z-index: 20;
	transition: .6s

}

@media screen and (min-width:767px) {
	.main{
		height: 500px;
	}
	.main .bg{
		padding:50px 20px 50px 70px;

	}
	.main .bg .content-left{
		width: 60%;
	}	.main .bg .content-left #button{
		display: none
	}
	.main .bg .content-left .titleSlider{
		font-stretch: condensed;
		font-size: 50px;
		margin-top:0;
	}
	.main .bg .content-left p{
		margin: 50px 0;
		font-size: 20px;
	}
	.main .bg .content-left span{
		display: block;
		margin-top:50px;
	}
	.main .bg .content-right{
		float: right;
		width: 40%;
		display:block;
		text-align: center;
	}

	.main .bg .content-right img{
		margin: 20px 0 0 0;
	}
	.main .bg .content-right button{
		background: #fff;
		color: #4682b4;
		border: none;
		width: 200px;
		height: 50px;border-radius: 100px;
		font-size: 15px; 
		display: block;
		margin: 100px auto 5px auto;
		cursor: pointer;
		transition: .2s
	}
	.main .bg .content-right button:hover{
		box-shadow: rgb(50, 50, 50) 1px 1px 5px
	}
	.main .bg .arrow{
		width: 35px;
		height: 35px;
		background: #fff;
		text-align: center;
		border-radius: 50%;
		top:45%;
		position: absolute;
		cursor: pointer;
	}
	.main .bg .arrow span {
		position: relative;
		color: #4682b4;
		font-size: 20px;
		display: block;
		margin-top: 5px;
	}
	.main .bg .left-arrow{
		left: 10px;
	}
	.main .bg .right-arrow{
		right: 10px;
	}
	ul.contenedorinputs {
		width: 60%;
		height: 20px;
		display: grid;
		justify-items: center;
		margin: 350px auto 0 auto;
	}
	ul.contenedorinputs li{
			display: inline-block;
			maring-top: 30px;
	}
	ul.contenedorinputs li div.bullet{
		border-radius: 50%;
		height: 15px;
		background: #fff;
		width: 15px;
		z-index: 20;
		transition: .6s
	}
	ul.contenedorinputs li div.bulletActive{
		border: 2px solid #fff;
		border-radius: 50%;
		height: 11px;
		background: #4682b4;
		width: 11px;
		z-index: 20;
		transition: .6s
	}
}
@media screen and (min-width:980px){
	.main .bg .content-left .titleSlider{
		font-stretch: condensed;
		font-size: 56px;
		margin-top:50px
	}
}
.fade-left-leave{
	animation: fade-to-left ease-in-out 1.5s

}
.fade-left-enter{
	animation: fade-from-left ease-in-out 1.5s
}
.fade-right-leave{
	animation: fade-to-right ease-in-out 1.5s
}
.fade-right-enter{
	animation: fade-from-right ease-in-out 1.5s
}
@keyframes load-rotation {
	0%{
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes fade-to-left{
	0%{
		transform: translateX(0);
		opacity:1
	}
	100%{
		transform: translateX(-710px);
		opacity: 0
	}
}@keyframes fade-from-left{
	0%{
		transform: translateX(-710px);
		opacity: 0
	}
	100%{
		transform: translateX(0);
		opacity:1
	}
}@keyframes fade-to-right{
	0%{
		transform: translateX(0);
		opacity:1
	}
	100%{
		transform: translateX(360px);
		opacity: 0
	}
}@keyframes fade-from-right{
	0%{
		transform: translateX(360px);
		opacity: 0
	}
	100%{
		transform: translateX(0);
		opacity:1
	}
}
</style>