import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQO1Qq4Id-ZjA1CfV6ii63Wqoj-HhlhhY",
  authDomain: "pruebareact-f9bf5.firebaseapp.com",
  projectId: "pruebareact-f9bf5",
  storageBucket: "pruebareact-f9bf5.appspot.com",
  messagingSenderId: "205573113594",
  appId: "1:205573113594:web:2f8b4e0bf0d71055516b43",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
export const db = getFirestore();
