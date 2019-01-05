<template>
	<div>
		<template v-if="!edit">
			<div v-if="loading">
				Loading...
			</div>
			<template v-else>
				<button @click="createPost()">Crear Posts</button>
				<template v-if="posts.length > 0">
					<div v-for="post in posts" :key="post.id">
						<h2>{{post.title}}</h2>
						<div v-for="label in post.labels" :key="label">
							<span>{{label}}</span>
						</div>
						<button @click="editPost(post.selfLink)">Editar</button>
						<a :href="post.url">Ver</a>
					</div>
				</template>
				<template v-else>
					<span>No Hay Entradas</span>
				</template>
			</template>
		</template>
		<AdminEditBlog v-else :type="type" :data="postData"/>
	</div>
</template>
<script>
	import {get} from "axios";
	import AdminEditBlog from "@/components/Admin/AdminEditBlog"

	export default {
		components:{
			AdminEditBlog
		},
		data() {
			return {
				loading:true,
				edit:false,
				posts:[],
				postData:{},
				type:""
			}
		},
		async mounted() {
			try {
				this.loading = true;

				let {data} = await get("https://www.googleapis.com/blogger/v3/blogs/7044473803573631794/posts?key=AIzaSyC-d2WibcbOrgNRxxDHDppv1aexhYskvLc&fields=items(id,url,title,selfLink,labels)");

				this.posts = data.items;
				this.loading = false;
			} catch(err) {
				console.log(err);
				alert("Error Al Obtener Los Posts");
				this.loading = true;
			}
		},
		methods: {
			async editPost(postLink) {
				let {data} = await get(`${postLink}?key=AIzaSyC-d2WibcbOrgNRxxDHDppv1aexhYskvLc&fields=content,url,title,updated,labels`);

				this.postData = data;
				this.edit = true;
				this.type = "update";
			},
			createPost() {
				this.edit = true;
				this.type = "new";
			}
		}
	}
</script>