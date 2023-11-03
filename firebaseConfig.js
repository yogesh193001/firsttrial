// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-83NVFrKGZ2BzrMzghISJkFP0624xZoQ",
  authDomain: "todo-d8d0f.firebaseapp.com",
  projectId: "todo-d8d0f",
  storageBucket: "todo-d8d0f.appspot.com",
  messagingSenderId: "256073280045",
  appId: "1:256073280045:web:586636539ac486418f26a4",
  measurementId: "G-CX3QKKCK84",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
