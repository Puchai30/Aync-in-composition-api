import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxO9jNHYhkXUvQaaQyDrCIJ-QNOHWfo_I",
  authDomain: "vue-blog-9429e.firebaseapp.com",
  projectId: "vue-blog-9429e",
  storageBucket: "vue-blog-9429e.appspot.com",
  messagingSenderId: "717678734684",
  appId: "1:717678734684:web:d7362a31e79da53229e599",
};

//init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//database setup
const db = firebaseApp.firestore();

export { db };
