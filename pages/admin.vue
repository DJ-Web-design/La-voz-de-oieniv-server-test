<template>
<div id="app">
    <AdminAuth v-if="bloqueo"/>
        <template v-else>
            <header>
                <nav id="menu">
                    <ul>
                        <li 
                        @click="page = 1" 
                        :class="{active: page === 1, noActive: page !== 1}"
                        >Conteo de votos</li>
                        <li 
                        @click="page = 2" 
                        :class="{active: page === 2, noActive: page !== 2}"
                        >Administrar Galeria</li>
                        <li 
                        @click="page = 3" 
                        :class="{active: page === 3, noActive: page !== 3}"
                        >Limpieza del Chat</li>
                        <li 
                        @click="page = 4" 
                        :class="{active: page === 4, noActive: page !== 4}"
                        >Administrar Slider</li>
                    </ul>
                </nav>
            </header>
            <AdminVotesCount v-if="page === 1"/>
            <AdminUpload v-else-if="page === 2"/>
            <AdminChat v-else-if="page === 3"/>
            <AdminSlider v-else-if="page === 4"/>
        </template>
    </div>
</template>
<script>
    import AdminAuth from "@/components/Admin/AdminAuth";
    import AdminVotesCount from "@/components/Admin/AdminVotesCount";
    import AdminUpload from "@/components/Admin/AdminUpload";
    import AdminChat from "@/components/Admin/AdminChat";
    import AdminSlider from "@/components/Admin/AdminSliderManagement"

	export default {
		layout:"admin",
        components:{
            AdminAuth,
            AdminVotesCount,
            AdminUpload,
            AdminChat,
            AdminSlider
        },
		data(){ 
			return {
    		    bloqueo: false,
    		    page: 1,
    		}
		},
        mounted(){
            if (localStorage.getItem("remember") || sessionStorage.getItem("remember")) {
                this.bloqueo = false
            }
        }
	}
</script>
<style scoped>
/*Menu*/
nav#menu{
   width: 100%;
   height: 80px;
   background: #4B7FE8;
}
nav#menu ul{
    float: right;
    overflow: hidden;
}
nav#menu ul li{
    color: #f7f7f7;
    cursor: pointer;
    display: inline-block;
    background: rgb(51, 95, 182);
    padding-top: 26px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: right;
}
.active{
    padding-bottom:26px;
    border-bottom: 4px solid #E5931A;
}
.noActive{
    padding-bottom: 30px;
}

</style>