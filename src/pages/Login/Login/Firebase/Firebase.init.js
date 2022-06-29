import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializFirebase =()=>{
    initializeApp(firebaseConfig);
}

export default initializFirebase;