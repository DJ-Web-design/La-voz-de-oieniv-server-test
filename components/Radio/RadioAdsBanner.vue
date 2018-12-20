<template>
	<div class="publicidad pull-left"></div>
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
    margin: 20px 0 10px 0;
    background: blue
}
@media screen and (min-width: 950px){
    .publicidad {
        width: 100%;
        margin: 20px 0 20px 0
    }
}
</style>