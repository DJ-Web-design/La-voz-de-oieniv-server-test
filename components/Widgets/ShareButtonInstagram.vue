<template>
	<div class="instagram face f2">
            <a href="#">
                <div class="it-bar">
                    <span class="icon-instagram">
                        <span>Instagram</span>
                    </span>
                </div>
            </a>
        </div>
</template>
<script>
	export default {}
</script>
<style scoped>
		.instagram {
 margin-left:5%;
 margin-right:2%;
 border-radius:3px;
 width:42.5%;
 height:30px;
 font-size:20px
}
.instagram span {
 color:white;
 display:block;
 position:absolute;
 font-size:28px;
}
.instagram span span {
	font-family:Roboto;
 color:white;
 top:7px;
 left:45px;
 z-index:3;
 font-size:15px;
 padding-bottom:20px
}
.it-bar {
  position: relative;
 border-radius:3px;
 width:100%;
 height:100%;
  background:rgb(228,64,95);
}

@media screen and (min-width:480px) {
 .instagram {
  width:42.5%;
  height:40px
 }
 .instagram span {
  top:2px;
  font-size:36px;
  left:10px
 }
 .instagram span span {
  top:9px;
  left:60px;
  font-size:18px
 }
}
</style>