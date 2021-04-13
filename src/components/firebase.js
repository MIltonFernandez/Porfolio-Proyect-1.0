import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
    apiKey: "AIzaSyAyhaKTvU71Cw3uhTqh-9grzL6yqkzYP8E",
    authDomain: "portfolio-proyect.firebaseapp.com",
    projectId: "portfolio-proyect",
    storageBucket: "portfolio-proyect.appspot.com",
    messagingSenderId: "711391327843",
    appId: "1:711391327843:web:2430193eaa3423dcd5aa56",
});

var db = firebaseApp.firestore();

export { db };