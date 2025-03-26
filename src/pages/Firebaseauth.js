 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD0EAJYu3KvAnXEN0LZR6XH5NxkaVGd_ng",
   authDomain: "login-form-421e8.firebaseapp.com",
   projectId: "login-form-421e8",
   storageBucket: "login-form-421e8.firebasestorage.app",
   messagingSenderId: "260391234254",
   appId: "1:260391234254:web:4686e8cdedf73b34927e9f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);