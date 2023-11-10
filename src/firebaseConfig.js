
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCFzZ5ihRSyrUy2UJDw0HXNBqWdhHd4CIw",
    authDomain: "reactjs-lozano.firebaseapp.com",
    projectId: "reactjs-lozano",
    storageBucket: "reactjs-lozano.appspot.com",
    messagingSenderId: "552436441490",
    appId: "1:552436441490:web:48479323f63af16082214b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)