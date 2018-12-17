<template>
	
	<div class="content apoyanos">
		<h2>Apoyanos</h2>
		<h3>En Oracion</h3>
		<p>La Oración es la mejor defenza del cristiano, por eso pedimos que si esta en su dispocición pueda orar por nosotros, para poder crecer y llegar cada vez mas lejos y a mas personas, que estan necesitando escuchar la palabra de Dios, Muchas Gracias por sus oraciones.</p>
		<h3>Con Ofrendas</h3>
		<p>La Voz de OIENIV es una radio sin fines de lucro, Nuestra misón es llevar la Palabra de Dios cada día a mas personas, Nosotros no le cobramos nada a nadie por escuchar nuestra emisora, pero si esta en su corazón el deseo de apoyarnos, se lo agradeceriamos mucho.<br><button class="button" @click="showModal = true">Donar</button></p>
		<h3>Forma Parte</h3>
		<p>¿Tu tambien tienes ese deseo ferviente de llevar la palabra de Dios a cada persona que no conoce de sus caminos?, si eres de Venezuela o incluso mejor del estado Carabobo, puedes acudir a nuestros estudios hubicados en, Valencia, Parroquia Rafael Urdaneta, Barrio Bello Monte 2, calle Junín #77-40.<!--Si no eres de Venezuela, entra en <nuxt-link to="/equipo">www.lavozdeoieniv.tk/equipo.</nuxt-link> y mira como puedes ayudarnos.--></p>
	</div>
</template>
<script>
    export default {
        data(){
            return this.$parent._data
        }
    }
</script>
<style scoped>
button.button {
    background: #ff8f00;
    border: none;
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 50px;
    margin-top: 20px;
    cursor: pointer;
}
button.button:hover {
    box-shadow: gray 1px 1px 3px
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
.content h2,
.content h3 {
    text-align: center;
    margin: 10px 0 0 0;
}
.content p{
    text-align: center;
    padding: 10px 5%;
    color: rgb(80, 80, 80)
}
</style>