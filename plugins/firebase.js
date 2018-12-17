import firebase from "firebase/app";
import "firebase/database"
import "firebase/storage"
import config from "@/config/firebase-config.json";

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
const storage = firebase.storage().ref();
const chatDatabase = firebase.database().ref("chat");
const imageDatabase = firebase.database().ref("imagenes");
const votesDatabase = firebase.database().ref("votos");
const donorsDatabase = firebase.database().ref("donaciones");
const sliderDatabase = firebase.database().ref("slider");
const videoDatabase = firebase.database().ref("videos");
const testStorage = storage.child("Pruebas");

export { 
	chatDatabase,
	imageDatabase,
	videoDatabase,
	firebase,
	votesDatabase,
	donorsDatabase,
	sliderDatabase,
	testStorage
};