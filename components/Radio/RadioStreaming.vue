<template>
	<div v-if="clientWidth > 950" class="online">
        <h2>Streaming en vivo. Pronto...</h2>
    </div>
</template>
<script>
	export default {
		data:function(){
			return {
                clientWidth:40
            }
		},
        mounted() {
            this.clientWidth = document.body.clientWidth;
        }
	}
</script>
<style scoped>
    .online {
        margin-left: 5%;
        width: 55%;
        height: 500px;
        background: black
    }
    .online,
    .cuerpo {
        margin-top: 20px;
        float: left
    }
    .online h2 {
        color:white;
        text-align:center;
        margin-top:32%;
    }
</style>
