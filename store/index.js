import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
	//Estado de la aplicacion
	state:{
		firebaseApp:""
	},
	// Metodos o acciones que cambian el estado 
	mutations: {
		setFirebaseApp:function(app) {
			this.state.firebaseApp = app;
		}
	}
})
//export default store;