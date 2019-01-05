<template>
	<header>
		<div class="menu-cel" @click="openMenu()">
			<img src="@/assets/logo.png" alt="">
			<span class="icon-menu"></span>
		</div>
		<div class="sombra" :style="width < 950 ? styleSombra: 'display:none'" @click="openMenu()"></div>
		<nav class="menu" :style="width < 950 ? styleMenu: 'left:0'">
			<figure> 
				<nuxt-link to="/">
					<img src="@/assets/logo.png" alt="">
				</nuxt-link>
			</figure>
				<ul>
				<li>
					<nuxt-link to="/" class="ocultar-escritorio">Inicio</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/radio" class="borderanim">
						<span>Radio Online</span>
					</nuxt-link>
				</li>
				<li class="submenu">
					<a href="#" class="borderanim">
						<span>Galeria</span>
					</a>
					<ul class="children">
						<li>
							<nuxt-link to="/Galeria/fotos" class="borderanim">Fotos
								<span class="icon-dot"></span>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/Galeria/videos" class="borderanim">Videos
								<span class="icon-dot "></span>
							</nuxt-link>
						</li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/nosotros" class="borderanim">
						<span>Nosotros</span>
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
	export default {
		data(){
			return {
				styleMenu:{
					left:""
				},
				styleSombra:{
						opacity:0,
						display:"none"
				},
				open:false,
				width:0
			}
		},
		methods:{
			openMenu(){
					if (this.open === false){
						this.styleMenu.left = 0;
						this.styleSombra.display = "block";
						setTimeout(()=>{
							this.styleSombra.opacity = 1;
						}, 20);
						this.open = true;
					} else {
					this.styleMenu.left = "-100%";
					this.styleSombra.opacity = 0;
					setTimeout(()=>{
							this.styleSombra.display = "none";
					}, 600)
					this.open = false;
				}
			},
		},
		beforeMount(){
			let clientLeft
			if (window.screen.width <= 950) {
				clientLeft = "-100%"
			} else {
				clientLeft = "0"
			}
			this.styleMenu.left = clientLeft
		},
		mounted() {
			this.width = document.body.clientWidth
		},
	}
</script>
<style scoped>
header {
	height:50px
}
header,header a div,header .menu-cel,.pie {
 width:100%
}
header a div {
 color:black;
 box-shadow:0 2px 5px;
 position:fixed;
 z-index:100
}
header .menu-cel {
 left:0;
 cursor:pointer;
 height:50px;
 position:fixed;
 z-index:1000;
 background:#90ADE8;
 box-shadow:0 0 10px
}
header .menu-cel span {
 margin-top:5px;
 font-size:40px;
 color:rgb(225,225,225);
 float:right
}
header .menu-cel img {
 height:50px
}
header nav {
 margin-top:50px;
 left:-100%;
 background:#90ADE8;
 width:60%;
 height:100%;
 position:fixed;
 z-index:1001;
 transition: .6s ease
}
header .sombra {
 position:fixed;
 margin-top:50px;
 right:0;
 width:100%;
 height:100%;
 z-index:1001;
 background:rgba(0,0,0,.5);
		transition: .6s;
}
.menu ul {
 padding:0
}
.menu ul li {
 border-bottom:2px solid rgba(255,255,255,.3);
 list-style:none
}
.menu ul li a {
 font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
 color:#f7f7f7;
 position:relative;
 display:inline-block;
 padding:20px 10%;
 width:80%;
 text-decoration:none
}
.menu img {
 display:none
}
header nav ul li:hover .children {
 display:none
}
header nav ul li .children {
 display:none;
 width:100%;
 position:relative
}
header nav ul li .children li a {
 margin-left:20px
}
header nav ul li .caret {
 float:right
}
@media screen and (min-width:950px) {
 header {
	height:70px
 }
 .menu {
	box-shadow:0 0 10px;
	height:70px;
	margin:0;
	left:0;
	width:100%;
	position:fixed;
	z-index:5
 }
 .menu ul {
	float:right
 }
 .menu ul li {
	text-align:right;
	display:inline-block;
	border:none
 }
 .menu ul li a.borderanim:hover {
	transition-delay:1s;
	-webkit-transition-delay:1s;
	-moz-transition-delay:1s;
	-o-transition-delay:1s
 }
 a.borderanim:before,a.borderanim:after,a.borderanim span:before,a.borderanim span:after {
	content:'';
	position:absolute;
	background-color:rgba(229,147,26,.8);
	transition:.25s all ease-out;
	-webkit-transition:.25s all ease-out;
	-moz-transition:.25s all ease-out;
	-o-transition:.25s all ease-out
 }
 a.borderanim:before,a.borderanim:after {
	height:3px
 }
 a.borderanim:after {
	bottom:0;
	left:0;
	right:100%
 }
 a.borderanim:hover:after {
	right:0
 }
 .menu ul li a {
	color:#f7f7f7;
	font-size:14px;
	height:auto;
	width:auto;
	text-align:left;
	padding:27px 20px 25px 20px
 }
 .menu ul li a span {
	font-family:"Helvetica Neue",Helvetica,Arial,sans-serif
 }
 .menu-cel {
	display:none
 }
 .menu img {
	height:70px;
	padding-left:10px;
	display:block
 }
 .menu figure img,.menu figure {
	margin:0;
	float:left;
	z-index:100
 }
 .menu ul li .ocultar-escritorio {
	display:none
 }
 header nav ul li:hover .children {
	display:block
 }
 header nav ul li .children {
	width:85.141px;
	background:#90ADE8;
	position:absolute;
	z-index:1000
 }
 header nav ul li .children li {
	margin:0;
	display:block;
	overflow:hidden;
	border-bottom:1px solid rgba(255,255,255,.5)
 }
 header nav ul li .children li a {
	display:block;
	width:45.141px;
	margin:0
 }
 header nav ul li .children li a span {
	float:right;
	position:relative;
	top:3px;
	margin-right:0;
	margin-left:0
 }
 header nav ul li .caret {
	position:relative;
	top:3px;
	margin-left:10px;
	margin-right:0
 }
}
</style>
