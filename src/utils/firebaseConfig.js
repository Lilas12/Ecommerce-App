import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdA6Q3cW409q-N5oLwWe8Dxk35BAoXNgs",
  authDomain: "ecommerce-app-e81d9.firebaseapp.com",
  projectId: "ecommerce-app-e81d9",
  storageBucket: "ecommerce-app-e81d9.firebasestorage.app",
  messagingSenderId: "197699740561",
  appId: "1:197699740561:web:7174a9451a484ad12a3030",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
