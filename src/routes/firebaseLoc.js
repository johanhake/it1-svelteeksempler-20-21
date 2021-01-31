import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAtpUJezYhlA6kcTuKvILski4FuVOLiRMo",
    authDomain: "it1-database-test.firebaseapp.com",
    projectId: "it1-database-test",
    storageBucket: "it1-database-test.appspot.com",
    messagingSenderId: "542916213908",
    appId: "1:542916213908:web:0951c5e75f3bdc26738881"
  };

  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()
