<template>
    <aside class="lateral"></aside>
</template>
<script>
	export default{}
</script>
<style scoped>
	
.lateral {
    display: none
}
@media screen and (min-width:950px){
    .lateral {
        display: block;
        margin: 20px 1% 0 .5%;
        width: 25%;
        height: 1020px;
        background: yellow
    }
    .bloque-der,
    .lateral {
        float: left
    }
}
</style>