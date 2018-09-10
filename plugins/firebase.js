import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2RvmGHYtaqUa5lEXb3MLl_Mv4ECiLoBE",
  authDomain: "chat-lavozdeoieniv.firebaseapp.com",
  databaseURL: "https://chat-lavozdeoieniv.firebaseio.com",
  projectId: "chat-lavozdeoieniv",
  storageBucket: "chat-lavozdeoieniv.appspot.com",
  messagingSenderId: "24315564955"
};
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

//const storage = firebase.storage().ref();

const chatDatabase = firebase.database().ref("chat");

const imageDatabase = firebase.database().ref("imagenes");

const votesDatabase = firebase.database().ref("votos");

const donorsDatabase = firebase.database().ref("donaciones");

const sliderDatabase = firebase.database().ref("slider");

//const testStorage = storage.child("Pruebas");

export { chatDatabase,  imageDatabase, firebase, votesDatabase, donorsDatabase, sliderDatabase };