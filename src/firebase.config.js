import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBXoS7XUB-b1kx8oh4hk2TfiBvcbUR9sxc",
    authDomain: "todo-app-30d8f.firebaseapp.com",
    projectId: "todo-app-30d8f",
    storageBucket: "todo-app-30d8f.appspot.com",
    messagingSenderId: "87870649246",
    appId: "1:87870649246:web:b18dd0d00dad17d00f5c8f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()