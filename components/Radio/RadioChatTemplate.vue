<template>
	<li id="plantilla" class="left clearfix">
		<span class="chat-img pull-left">
			<img :src="pic" class="img-circle userpic" alt="user chat pic"/>
		</span>
		<div class="chat-body clearfix">
			<div class="header">
				<strong class="Nombre">{{ user }}</strong>
				<small class="pull-right">
					<span class="Tiempo">{{ date }}</span>
				</small>
			</div>
			<p class="Mensaje">{{ message }}</p>
		</div>
	</li>
</template>
<script>
	export default {
		props:{
			user:String,
			date:String,
			message:String,
			pic:String,

		}
	}
</script>
<style scoped>
.pull-right{
	float:right !important;
}
.pull-left{
	float:left !important;
}
.img-circle {
    border-radius: 50%;
    width:50px;
    vertical-align:middle;
}

li {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px dotted #B3A9A9;
    min-height:50px;
}

li.left .chat-body {
    margin-left: 60px
}

li.right .chat-body {
    margin-right: 60px
}

li .chat-body p {
    margin: 0;
    color: #777
}

</style>