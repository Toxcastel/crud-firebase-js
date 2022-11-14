// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// Import firestore for database
import { collection, getFirestore, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoaJ1jESh-QM0itWUJoNCBbnZzvkDyyB0",
    authDomain: "crud-firebase-js-e813f.firebaseapp.com",
    projectId: "crud-firebase-js-e813f",
    storageBucket: "crud-firebase-js-e813f.appspot.com",
    messagingSenderId: "655588852855",
    appId: "1:655588852855:web:71cb56be5aab58fc1d7272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

// create functions to interact with database
export const saveTask = (title, description) => addDoc(collection(db, "tasks"), { title, description });
