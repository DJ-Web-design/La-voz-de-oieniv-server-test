<template>
	<div>
		<template v-if="!edit">
			<div v-if="loading">
				Loading...
			</div>
			<template v-else>
				<aside>
					<button @click="view('all')">Todos ({{postCount("all")}})</button>
					<button @click="view('published')">Publicados ({{postCount("published")}})</button>
					<button @click="view('saved')">Guardados ({{postCount("saved")}})</button>
				</aside>
				<button @click="createPost()">Crear Posts</button>
				<template v-if="posts.length > 0">
					<div v-for="post in posts" :key="post.id">
						<h2>{{post.title}}</h2>
						<div v-for="label in post.labels" :key="label">
							<span>{{label}}</span>
						</div>
						<button @click="editPost(post.id)">Editar</button>
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
				fetchedPosts:[],
				postData:{},
				type:""
			}
		},
		async mounted() {
			try {
				this.loading = true;

				let {data} = await get("https://lavozdeoieniv.herokuapp.com/posts/all");

				this.posts, this.fetchedPosts = data || [];
				this.loading = false;
			} catch(err) {
				console.log(err);
				alert("Error Al Obtener Los Posts");
				this.loading = true;
			}
		},
		methods: {
<<<<<<< HEAD
			async editPost(id) {
				try {
					let {data} = await get("https://lavozdeoieniv.herokuapp.com/posts/"+id);
=======
			async editPost(postLink) {
				let {data} = await get(`${postLink}?key=<KEY>&fields=content,url,title,updated,labels`);
>>>>>>> fb369397914a598f6a873670409c3d5e952978ac

					this.postData = data;
					this.edit = true;
					this.type = "update";
				} catch(err) {
					alert("Error al obtener contenido del post");
				}
			},
			createPost() {
				this.edit = true;
				this.type = "new";
			},
			view(type) {
				switch(type) {
					case "all":
						this.posts = this.fetchedPosts
						break;
					case "saved":
						this.posts = this.fetchedPosts.filter(e => e.type === "saved");
						break;
					case "published":
						this.posts = this.fetchedPosts.filter(e => e.type === "published");
						break;
					default: break;
				}
			},
			postCount(type) {
				switch(type) {
					case "all":
						return this.fetchedPosts.length;
					case "saved":
						return this.fetchedPosts.filter(e => e.type === "saved").length;
					case "published":
						return this.fetchedPosts.filter(e => e.type === "published").length;
					default: return;
				}
			}
		}
	}
</script>
