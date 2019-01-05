<template>
	<div class="publicidad pull-left">
        <img src="@/assets/logo.png" alt="La Voz de OIENIV" />   
    </div>
</template>
<script>
	export default {}
</script>
<style scoped>
.pull-left{
	float:left !important;
}
.publicidad {
    width: 100%;
    height: 150px;
    margin: 20px 0 10px 0;
    background-image: url(~/assets/banner-radio-en-linea.jpg);
    background-size: cover;
    background-position-y: -100px;
}
.publicidad img {
    top: 50%;
    left: 50%;
    display: block;
    position: absolute;
    margin-top: -50px;
    margin-left: -96.5px;
}
@media screen and (min-width: 950px){
    .publicidad {
        width: 100%;
        height: 200px;
        margin: 20px 0 20px 0;
    }
}
</style>