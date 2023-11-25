
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqeHnmVj3rcqSSLzl-yn3Cp-ThYApmowU",
    authDomain: "tienda-pokemon.firebaseapp.com",
    projectId: "tienda-pokemon",
    storageBucket: "tienda-pokemon.appspot.com",
    messagingSenderId: "516184693357",
    appId: "1:516184693357:web:18de8913051cebcff0fd64"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app