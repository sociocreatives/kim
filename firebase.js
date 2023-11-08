// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCQEQdiVNUjcXSC8Vfh_ExI05jS6CYWKB4",
  authDomain: "mrkim-dca3e.firebaseapp.com",
  databaseURL: "https://mrkim-dca3e-default-rtdb.firebaseio.com",
  projectId: "mrkim-dca3e",
  storageBucket: "mrkim-dca3e.appspot.com",
  messagingSenderId: "133099702140",
  appId: "1:133099702140:web:2a1775203bec214290c6f9",
  measurementId: "G-WQG0E9EM7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// use features
const db = getFirestore();
const auth = getAuth();
export {app, db, auth}