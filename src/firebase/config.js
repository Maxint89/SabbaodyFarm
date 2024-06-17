import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASVd2yclozH7yUEHAbYhvbk3WNSzI1bIc",
    authDomain: "tienda-sabbaody.firebaseapp.com",
    projectId: "tienda-sabbaody",
    storageBucket: "tienda-sabbaody.appspot.com",
    messagingSenderId: "272147831538",
    appId: "1:272147831538:web:a209afb1e901eced5ace6b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);