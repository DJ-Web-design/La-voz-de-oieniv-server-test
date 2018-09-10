<template>
		<div class="youtube twitter t2">
            <a href="#">
                <div class="yt-bar">
                    <span class="icon-youtube">
                        <span>Youtube</span>
                    </span>
                </div>
            </a>
        </div>
</template>
<script>
	export default {}
</script>
<style scoped>
	.yt-bar {
    position:relative;
 border-radius:3px;
 width:100%;
 height:100%;
  background:rgb(205,32,31);
}
.youtube {
  border-radius:3px;
  width:42.5%;
  margin-left:2.5%;
  margin-right:5%;
  height:30px;
  font-size:20px
}
.youtube span {
 color:white;
 display:block;
 position:absolute;
 font-size:28px;
}
.youtube span span {
    font-family:Roboto;
 color:white;
 top:7px;
 left:45px;
 z-index:3;
 font-size:15px;
 padding-bottom:20px
}
@media screen and (min-width:480px) {
  .youtube {
    margin-left:5%;
    margin-right:2.5%;
    width:42.5%;
    height:40px
  }
 .youtube span {
  top:2px;
  font-size:36px;
  left:10px
 }
 .youtube span span {
  top:9px;
  left:60px;
  font-size:18px;
 }
}
</style>