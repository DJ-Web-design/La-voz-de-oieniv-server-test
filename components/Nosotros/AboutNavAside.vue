<template>
	<div>
		<div id="nav-aside">
			<li v-for="(iten, index) in tabs" 
			:key="'li'+index" 
			@click="tab = index+1" 
			:class="{ 'active-tab': tab === index+1, 'default-tab': tab !== index+1 }">{{iten.name}}</li>
		</div>
		<div class="separador"></div>
		<div class="content content-aside">
			<transition name="fade" mode="out-in">
                <template v-for="(iten, index) in tabs">
				    <div 
				     v-if="tab === index+1" 
				     :key="'div'+index"
                    >
				    	<h2 :key="'h2'+index">{{iten.name}}</h2>
				    	<p :key="'p'+index" v-html="iten.des"></p>
				    </div>
                </template>
			</transition>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
        		tab:1,
        		activeTab:"active-tab",
        		tabs:[ 
        		    {
        		        name: "Historia",
        		        des:`La Voz de OIENIV nació con una emisora por internet, la cual se encargaba de predicar la palabra por medios digitales, pero un dia Dios nos permitió obtener un transmisor, !Ya eramos una radio FM!.<br/><br/>Con el tiempo y ayuda de varios hermanos fuimos mejorando, como radio y como personas, para poder llevar la Palabra de Dios a mas personas.`,
            		},{
                    	name:"Visión",
                		des:`<ul style="text-align:left">
								<li style="list-style:none">
									Hacer uso de nuevas herramientas tecnológicas y de los actuales medios de comunicación virtual para promulgar y promover la palabra de Dios.
								</li>
								<br/>
								<li style="list-style:none">
									Incorporar a pastores, líderes y colaboradores en la creación de programas online.
								</li>
								<br/>
								<li style="list-style:none">
									Conformar un equipo de trabajo que se encargue de darle continuidad a tiempo y fuera de tiempo a este planteamiento.
								</li>
							</ul>`,
            		},{
                    	name:"Misión",
                		des:`Crear la emisora de radio online que será la voz de nuestra organización que llamaremos:<br/><span style="text-align:center">\"La voz de OIENIV\".</span><br/>Donde participen los entes auxiliares de la organización, departamentos encargados y colaboradores para propagar el evangelio y promover las distintas actividades nacionales, zonales y de cada iglesia en particular.`,
					},{
                    	name:"Equipo",
                		des:`<ul>
                				<li style="list-style:none">
                					Direccion: Pastor Cruz Alejandro Sanchez
                				</li>
                				<li style="list-style:none">
                					Gerente General: Agustín Sanchez
                				</li>
                				<li style="list-style:none">
                					Tecnico y Desarrollador: David González
                				</li>

                		</ul>`,
            		}
        		]
    		}
		}
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0
}
.active-tab{
    background: #E5931A;
    list-style: none;
    width: 100%;
    color: #32559C;
    padding: 20px 0;
    border-bottom: 1px #f7f7f7 solid;
    cursor: pointer;
    font-weight: 550
}
@keyframes fade-out {
	from {
		opacity:1
	} 
	to {
		opacity: 0;
		display:none
	}
}
.view {
	display: block;
	opacity:1;
	transition: ease .6s

}
.noView {
	animation:fade-out ease .6s;
	opacity:0;
	transition: ease .6s
}
#nav-aside{
    text-align: center;
}
.default-tab{
    list-style: none;
    width: 100%;
    color: #f7f7f7;
    background: #4B7FE8;
    padding: 20px 0;
    border-bottom: 1px #f7f7f7 solid;
    cursor: pointer;
}
.default-tab:hover{
    background: #E5931A;
    color: #32559C;
    transition: .4s ease;
}
.content{
    background: white;
    border: 2px solid rgba(75,127,232,.3);
    margin:10px 4.5%;
    width: 90%;
    border-radius: 3px;
    position: relative;
    float: left;
}
.content h2{
    text-align: center;
    margin: 10px 0 0 0;
}
.content p{
    text-align: center;
    padding: 10px 5%;
    color: rgb(80, 80, 80)
}
@media screen and (min-width:767px){
    #nav-aside{
        width: 30%;
        margin: 0 20px;
        float: left;
    }
    .content-aside{
        width: 60%;
        height: 232px;
        float: right;
        margin:10px 20px 10px 10px;
    }
    .separador{
        display: block;
        float: left;
        border: .5px solid rgba(0, 0, 0, .2);
        width: 0px;
        height: 200px;
        margin: 15px 0 0 0;
    }
}
@media screen and (min-width:950px){
    #nav-aside{
        margin: 20px 0 0 4.5%;
        width: 30%;
    }
    .separador{
        display:none    
    }
    .content-aside{
        width: 60%;
        margin: 18px 4.5% 10px 0px;
    }
}
</style>