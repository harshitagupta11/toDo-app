import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDA1bwOPpFu6F7tIkZpnA8X55GIDK73OG0",
    authDomain: "todo-app-2ab74.firebaseapp.com",
    projectId: "todo-app-2ab74",
    storageBucket: "todo-app-2ab74.appspot.com",
    messagingSenderId: "847481865764",
    appId: "1:847481865764:web:15679e01f4151e1a2e7ab1",
    measurementId: "G-V8N8P92R7T"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };