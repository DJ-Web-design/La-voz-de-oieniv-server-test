<template>
	<div>
		<div>
			<input type="text" v-model="title"  placeholder="Titulo" />
			<input type="text" v-model="labels"  placeholder="Tags" />
			<input type="text" v-model="url" placeholder="URL"  />
			<button @click="publish()">Publicar</button>
			<button @click="$parent._data.edit = false">Cerrar</button>
		</div>
		<div id="editor" v-html="data.content">
		</div>
	</div>
</template>
<script>
	import {post} from "axios";
		var toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		['blockquote', 'code-block'],

		[{ 'header': 3 }, { 'header': 4 }],               // custom button values
		[{ 'list': 'ordered'}, { 'list': 'bullet' }],
		[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
		[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
		[{ 'direction': 'rtl' }],                         // text direction

		[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		[{ 'header': [3, 4, 5, 6, false] }],
		[ 'link', 'image', 'video', 'formula' ],          // add's image support
		[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		[{ 'font': [] }],
		[{ 'align': [] }],

		['clean']                                         // remove formatting button
	];

	export default {
		props:{
			data:{
				type:Object,
				default:()=>{}
			},
			type:{
				type:String,
				required:true,
				default:"new"
			}
		},
		data() {
			return {
				title:"",
				url:"",
				labels:""
			}
		},
		mounted() {
			this.title = this.data.title || "";
			this.url = this.data.url || "";
			this.labels = this.data.labels ? this.data.labels.join(", ") : "";

			let AlignStyle = Quill.import('attributors/style/align');
			let BackgroundStyle = Quill.import('attributors/style/background');
			let ColorStyle = Quill.import('attributors/style/color');
			let DirectionStyle = Quill.import('attributors/style/direction');
			let FontStyle = Quill.import('attributors/style/font');
			let SizeStyle = Quill.import('attributors/style/size');

			Quill.register(AlignStyle, true);
			Quill.register(BackgroundStyle, true);
			Quill.register(ColorStyle, true);
			Quill.register(DirectionStyle, true);
			Quill.register(FontStyle, true);
			Quill.register(SizeStyle, true);
	
			var quill = new Quill('#editor', {
				modules: {
					toolbar: toolbarOptions
				},
				theme: 'snow',
				debug:"info"
			});
			quill.on('text-change', function(delta, oldDelta, source) {
				let content = quill.root.innerHTML;
				console.log(content)
			});
		},
		methods:{
			publish() {
				if(this.type === "new") {

				}
				else if(this.type === "update") {

				}
			}
		}
	}
</script>
<style scoped>
	#editor {
		background: white;
		width: 652px;
		height: 100%;

	}
</style>