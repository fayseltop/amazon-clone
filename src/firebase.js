
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
	apiKey: "AIzaSyCRRMG3nA3SZpuLCcHhcYGTujog9pUcduY",
	authDomain: "clone-996da.firebaseapp.com",
	projectId: "clone-996da",
	storageBucket: "clone-996da.appspot.com",
	messagingSenderId: "1009177201037",
	appId: "1:1009177201037:web:6fd2c186778a56f78d55c4",
	measurementId: "G-K518BPKGGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth };
