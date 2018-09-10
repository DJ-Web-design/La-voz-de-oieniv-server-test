<template>
	<div class="twitter">
            <a :href="href" target="_blank">
                <div class="twitter-boton">
                    <span class="icon-twitter">
                        <span v-if="follow" key="follow">Seguir</span>
                        <span v-else-if="twit" key="twit">Twittear</span>
                    </span>
                </div>
            </a>
        </div>
</template>
<script>
	export default {
		props:{
			href:String,
			mini:Boolean,
			twit:Boolean,
			follow:Boolean
		}
	}
</script>
<style scoped>
.twitter-boton { 
  position:relative;
  border-radius:3px;
  width:100%;
  height:100%;
  background:rgb(29,161,242)
}
.twitter {
  position:relative;
  margin-left:2.5%;
  margin-right:5%;
  border-radius:3px;
  width:42.5%;
  height:30px;
  font-size:20px
}
.twitter span {
 color:white;
 display:block;
 position:absolute;
 font-size:28px;
}
.twitter span span {
  font-family:Roboto;
  color:white;
  top:7px;
  left:60px;
  z-index:3;
  font-size:15px;
  padding-bottom:20px
}
@media screen and (min-width:480px) {
  .twitter {
    margin-left:5%;
    margin-right:2.5%;
    width:42.5%;
    height:40px
  }
 .twitter span {
    top:2px;
    font-size:36px;
    left:10px
  }
  .twitter span span {
    top:9px;
    left:60px;
    font-size:18px;
  }
}
</style>