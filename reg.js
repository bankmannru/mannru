// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyACCpu-7XS4yYmbU5iSbN290e_BKh-mMkM",

  authDomain: "bfdi-2763.firebaseapp.com",

  projectId: "bfdi-2763",

  storageBucket: "bfdi-2763.firebasestorage.app",

  messagingSenderId: "235483296145",

  appId: "1:235483296145:web:fc5214efea353853156a30"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const phoneForm = document.getElementById('phoneForm').value;

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault();
    alert(5)
})
