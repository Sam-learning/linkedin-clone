//npm install firebase
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUEgwgJj0dcFah-1M7tLydoPqaZNcOKnU",
    authDomain: "linkedin-16b38.firebaseapp.com",
    projectId: "linkedin-16b38",
    storageBucket: "linkedin-16b38.appspot.com",
    messagingSenderId: "502833829251",
    appId: "1:502833829251:web:024c7470cecf8f04c1d2b6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const auth = firebase.auth()

export {db, auth};